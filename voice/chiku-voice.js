// Chiku's voice: Piper neural TTS running fully in the browser (module worker).
// English voice: "Jenny (Dioco)" (en_GB, jenny_dioco medium). Hindi voice: Priyamvada (hi_IN, medium).
import createPhonemize from "./phonemize.mjs";
import * as ort from "./ort.wasm.min.mjs";

const base = new URL("./", import.meta.url).href;
ort.env.wasm.wasmPaths = base;
ort.env.wasm.numThreads = 1;
ort.env.wasm.proxy = false;

const VOICES = {
  en: { parts: ["jenny-0.wasm", "jenny-1.wasm"], cfg: "jenny.json", espeak: "en-gb-x-rp" },
  hi: { parts: ["priya-0.wasm", "priya-1.wasm"], cfg: "priya.json", espeak: "hi" },
};
const sessions = {};
const configs = {};
let phonMod = null, phonBusy = Promise.resolve(), printCb = null;

async function getPhon() {
  if (phonMod) return phonMod;
  phonMod = await createPhonemize({
    print: (line) => { if (printCb) { const cb = printCb; printCb = null; try { cb(JSON.parse(line)); } catch (e) { cb(null); } } },
    printErr: () => {},
    locateFile: (f) => f.endsWith(".wasm") ? base + "piper_phonemize.wasm" : f.endsWith(".data") ? base + "espeak-min.wasm" : f,
  });
  return phonMod;
}
function phonemize(text, voice) {
  const job = phonBusy.then(async () => {
    const m = await getPhon();
    return await new Promise((res) => {
      printCb = res;
      try { m.callMain(["-l", voice, "--input", JSON.stringify([{ text }]), "--espeak_data", "/espeak-ng-data"]); }
      catch (e) { printCb = null; res(null); }
      setTimeout(() => { if (printCb === res) { printCb = null; res(null); } }, 4000);
    });
  });
  phonBusy = job.catch(() => {});
  return job;
}
async function load(lang) {
  if (sessions[lang]) return sessions[lang];
  const v = VOICES[lang];
  sessions[lang] = (async () => {
    const [cfg, ...bufs] = await Promise.all([
      fetch(base + v.cfg).then((r) => r.json()),
      ...v.parts.map((p) => fetch(base + p).then((r) => { if (!r.ok) throw new Error("voice file " + p); return r.arrayBuffer(); })),
    ]);
    configs[lang] = cfg;
    const total = bufs.reduce((n, b) => n + b.byteLength, 0), all = new Uint8Array(total);
    let o = 0; for (const b of bufs) { all.set(new Uint8Array(b), o); o += b.byteLength; }
    return await ort.InferenceSession.create(all, { executionProviders: ["wasm"], graphOptimizationLevel: "all" });
  })();
  sessions[lang].catch(() => { delete sessions[lang]; });
  return sessions[lang];
}
async function synth(text, lang, lengthScale, noise) {
  const session = await load(lang);
  const out = await phonemize(text, VOICES[lang].espeak);
  if (!out || !out.phoneme_ids || !out.phoneme_ids.length) return null;
  const ids = out.phoneme_ids;
  const cfg = configs[lang].inference || {};
  const r = await session.run({
    input: new ort.Tensor("int64", BigInt64Array.from(ids.map(BigInt)), [1, ids.length]),
    input_lengths: new ort.Tensor("int64", BigInt64Array.from([BigInt(ids.length)]), [1]),
    scales: new ort.Tensor("float32", Float32Array.from([(noise && noise[0]) ?? cfg.noise_scale ?? 0.667, lengthScale, (noise && noise[1]) ?? cfg.noise_w ?? 0.8]), [3]),
  });
  return new Float32Array(r.output.data);
}
self.onmessage = async ({ data }) => {
  const { id, type } = data;
  try {
    if (type === "load") { await load(data.lang); await getPhon(); self.postMessage({ id, ok: true }); return; }
    if (type === "speak") {
      const audio = await synth(data.text, data.lang, data.lengthScale || 1, data.noise);
      if (!audio) { self.postMessage({ id, ok: false }); return; }
      self.postMessage({ id, ok: true, audio, sr: 22050 }, [audio.buffer]);
    }
  } catch (e) { self.postMessage({ id, ok: false, error: String(e && e.message || e) }); }
};
