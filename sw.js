/* Vidya Tree offline service worker */
const VER="vt-fb8a4d6aed",CORE=["./", "index.html", "manifest.webmanifest", "icons/icon-180.png", "icons/icon-192.png", "photos/astronaut.jpg", "photos/brick-wall.jpg", "photos/cat.jpg", "photos/earth-from-space.jpg", "photos/full-moon.jpg", "photos/galaxies-hubble.jpg", "photos/grass.jpg", "photos/gravel-stones.jpg", "photos/moon-bootprint.jpg", "photos/moon-crater.jpg", "photos/moon-craters-far-side.jpg", "photos/old-coins.jpg", "photos/rocket-launch.jpg", "tex/earth.jpg", "tex/io.jpg", "tex/jupiter.jpg", "tex/mars.jpg", "tex/neptune.jpg", "tex/pluto.jpg", "tex/saturn.jpg", "tex/titan.jpg", "tex/venus.jpg"],VOICE=["voice/chiku-voice.js", "voice/espeak-min.wasm", "voice/jenny-0.wasm", "voice/jenny-1.wasm", "voice/jenny.json", "voice/ort-wasm-simd-threaded.mjs", "voice/ort-wasm-simd-threaded.wasm", "voice/ort.wasm.min.mjs", "voice/phonemize.mjs", "voice/piper_phonemize.wasm", "voice/priya-0.wasm", "voice/priya-1.wasm", "voice/priya.json"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(VER).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil((async()=>{for(const k of await caches.keys())if(k!==VER)await caches.delete(k);await self.clients.claim();
  const c=await caches.open(VER);for(const u of VOICE){try{if(!(await c.match(u)))await c.add(u)}catch(err){}}})())});
function blobFromIDB(id){return new Promise(res=>{const r=indexedDB.open("vidya-blobs",1);r.onupgradeneeded=()=>r.result.createObjectStore("b");
  r.onsuccess=()=>{const q=r.result.transaction("b").objectStore("b").get(id);q.onsuccess=()=>res(q.result||null);q.onerror=()=>res(null)};r.onerror=()=>res(null)})}
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(e.request.method!=="GET")return;
  if(/^fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)){e.respondWith(caches.open(VER).then(async c=>{const hit=await c.match(e.request);if(hit)return hit;const r=await fetch(e.request);if(r.ok||r.type==="opaque")c.put(e.request,r.clone());return r}));return}
  if(u.origin!==location.origin)return;
  const m=u.pathname.match(/\/_blob\/([A-Za-z0-9]+)$/);
  if(m){e.respondWith(blobFromIDB(m[1]).then(v=>v?new Response(v.blob,{headers:{"Content-Type":v.type||"image/png"}}):new Response("",{status:404})));return}
  const isPage=e.request.mode==="navigate";
  e.respondWith((async()=>{const c=await caches.open(VER);
    if(isPage){try{const r=await fetch(e.request);if(r.ok)c.put("index.html",r.clone());return r}catch(err){return (await c.match("index.html"))||Response.error()}}
    const hit=await c.match(e.request,{ignoreSearch:true});if(hit)return hit;
    const r=await fetch(e.request);if(r.ok)c.put(e.request,r.clone());return r})())});
