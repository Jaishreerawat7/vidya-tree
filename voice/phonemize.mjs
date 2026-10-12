var ut = (x, y) => () => (y || x((y = { exports: {} }).exports, y), y.exports);
var wt = ut((je, B) => {
  var ke = {}, Me = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    default: ke
  }), B = { exports: {} }, je = B.exports, Te = (() => {
    var x = typeof document < "u" ? document.currentScript?.src : void 0;
    return typeof __filename < "u" && (x = x || __filename), function(y = {}) {
      var T, l = y, q, O, he = new Promise((e, a) => {
        q = e, O = a;
      }), _e = typeof window == "object", re = typeof WorkerGlobalScope < "u", se = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string" && process.type != "renderer";
      l.expectedDataFileDownloads ??= 0, l.expectedDataFileDownloads++, (() => {
        var e = typeof ENVIRONMENT_IS_PTHREAD < "u" && ENVIRONMENT_IS_PTHREAD, a = typeof ENVIRONMENT_IS_WASM_WORKER < "u" && ENVIRONMENT_IS_WASM_WORKER;
        if (e || a) return;
        var t = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
        function r(s) {
          typeof window == "object" ? window.encodeURIComponent(window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/")) + "/") : typeof process > "u" && typeof location < "u" && encodeURIComponent(location.pathname.substring(0, location.pathname.lastIndexOf("/")) + "/");
          var i = "piper_phonemize.data", o = "piper_phonemize.data", d = l.locateFile ? l.locateFile(o, "") : o, m = s.remote_package_size;
          function g(f, S, N, A) {
            if (t) {
              (ke || Me).readFile(f, (w, M) => {
                w ? A(w) : N(M.buffer);
              });
              return;
            }
            l.dataFileDownloads ??= {}, fetch(f).catch((w) => Promise.reject(new Error(`Network Error: ${f}`, { cause: w }))).then((w) => {
              if (!w.ok)
                return Promise.reject(new Error(`${w.status}: ${w.url}`));
              if (!w.body && w.arrayBuffer)
                return w.arrayBuffer().then(N);
              const M = w.body.getReader(), R = () => M.read().then(gt).catch((ve) => Promise.reject(new Error(`Unexpected error while handling : ${w.url} ${ve}`, { cause: ve }))), F = [], C = w.headers, D = Number(C.get("Content-Length") ?? S);
              let ra = 0;
              const gt = ({ done: ve, value: sa }) => {
                if (ve) {
                  const te = new Uint8Array(F.map((U) => U.length).reduce((U, vt) => U + vt, 0));
                  let ne = 0;
                  for (const U of F)
                    te.set(U, ne), ne += U.length;
                  N(te.buffer);
                } else {
                  F.push(sa), ra += sa.length, l.dataFileDownloads[f] = { loaded: ra, total: D };
                  let te = 0, ne = 0;
                  for (const U of Object.values(l.dataFileDownloads))
                    te += U.loaded, ne += U.total;
                  return l.setStatus?.(`Downloading data... (${te}/${ne})`), R();
                }
              };
              return l.setStatus?.("Downloading data..."), R();
            });
          }
          function h(f) {
            console.error("package error:", f);
          }
          var _ = null, u = l.getPreloadedPackage ? l.getPreloadedPackage(d, m) : null;
          u || g(d, m, (f) => {
            _ ? (_(f), _ = null) : u = f;
          }, h);
          function p(f) {
            function S(R, F) {
              if (!R) throw F + new Error().stack;
            }
            f.FS_createPath("/", "espeak-ng-data", !0, !0), f.FS_createPath("/espeak-ng-data", "lang", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "aav", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "art", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "azc", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "bat", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "bnt", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "ccs", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "cel", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "cus", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "dra", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "esx", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "gmq", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "gmw", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "grk", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "inc", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "ine", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "ira", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "iro", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "itc", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "jpx", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "map", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "miz", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "myn", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "poz", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "roa", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "sai", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "sem", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "sit", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "tai", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "trk", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "urj", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "zle", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "zls", !0, !0), f.FS_createPath("/espeak-ng-data/lang", "zlw", !0, !0), f.FS_createPath("/espeak-ng-data", "mbrola_ph", !0, !0), f.FS_createPath("/espeak-ng-data", "voices", !0, !0), f.FS_createPath("/espeak-ng-data/voices", "!v", !0, !0), f.FS_createPath("/espeak-ng-data/voices", "mb", !0, !0);
            function N(R, F, C) {
              this.start = R, this.end = F, this.audio = C;
            }
            N.prototype = { requests: {}, open: function(R, F) {
              this.name = F, this.requests[F] = this, f.addRunDependency(`fp ${this.name}`);
            }, send: function() {
            }, onload: function() {
              var R = this.byteArray.subarray(this.start, this.end);
              this.finish(R);
            }, finish: function(R) {
              var F = this;
              f.FS_createDataFile(this.name, null, R, !0, !0, !0), f.removeRunDependency(`fp ${F.name}`), this.requests[this.name] = null;
            } };
            for (var A = s.files, w = 0; w < A.length; ++w)
              new N(A[w].start, A[w].end, A[w].audio || 0).open("GET", A[w].filename);
            function M(R) {
              S(R, "Loading data file failed."), S(R.constructor.name === ArrayBuffer.name, "bad input to processPackageData");
              var F = new Uint8Array(R);
              N.prototype.byteArray = F;
              for (var C = s.files, D = 0; D < C.length; ++D)
                N.prototype.requests[C[D].filename].onload();
              f.removeRunDependency("datafile_piper_phonemize.data");
            }
            f.addRunDependency("datafile_piper_phonemize.data"), f.preloadResults ??= {}, f.preloadResults[i] = { fromCache: !1 }, u ? (M(u), u = null) : _ = M;
          }
          l.calledRun ? p(l) : (l.preRun ??= []).push(p);
        }
        r({ files: [{ filename: "/espeak-ng-data/en_dict", start: 0, end: 166944 }, { filename: "/espeak-ng-data/hi_dict", start: 166944, end: 259087 }, { filename: "/espeak-ng-data/intonations", start: 259087, end: 261127 }, { filename: "/espeak-ng-data/lang/aav/vi", start: 261127, end: 261238 }, { filename: "/espeak-ng-data/lang/aav/vi-VN-x-central", start: 261238, end: 261381 }, { filename: "/espeak-ng-data/lang/aav/vi-VN-x-south", start: 261381, end: 261523 }, { filename: "/espeak-ng-data/lang/art/eo", start: 261523, end: 261564 }, { filename: "/espeak-ng-data/lang/art/ia", start: 261564, end: 261593 }, { filename: "/espeak-ng-data/lang/art/io", start: 261593, end: 261643 }, { filename: "/espeak-ng-data/lang/art/jbo", start: 261643, end: 261712 }, { filename: "/espeak-ng-data/lang/art/lfn", start: 261712, end: 261847 }, { filename: "/espeak-ng-data/lang/art/piqd", start: 261847, end: 261903 }, { filename: "/espeak-ng-data/lang/art/py", start: 261903, end: 262043 }, { filename: "/espeak-ng-data/lang/art/qdb", start: 262043, end: 262100 }, { filename: "/espeak-ng-data/lang/art/qya", start: 262100, end: 262273 }, { filename: "/espeak-ng-data/lang/art/sjn", start: 262273, end: 262448 }, { filename: "/espeak-ng-data/lang/azc/nci", start: 262448, end: 262562 }, { filename: "/espeak-ng-data/lang/bat/lt", start: 262562, end: 262590 }, { filename: "/espeak-ng-data/lang/bat/ltg", start: 262590, end: 262902 }, { filename: "/espeak-ng-data/lang/bat/lv", start: 262902, end: 263131 }, { filename: "/espeak-ng-data/lang/bnt/sw", start: 263131, end: 263172 }, { filename: "/espeak-ng-data/lang/bnt/tn", start: 263172, end: 263214 }, { filename: "/espeak-ng-data/lang/ccs/ka", start: 263214, end: 263338 }, { filename: "/espeak-ng-data/lang/cel/cy", start: 263338, end: 263375 }, { filename: "/espeak-ng-data/lang/cel/ga", start: 263375, end: 263441 }, { filename: "/espeak-ng-data/lang/cel/gd", start: 263441, end: 263492 }, { filename: "/espeak-ng-data/lang/cus/om", start: 263492, end: 263531 }, { filename: "/espeak-ng-data/lang/dra/kn", start: 263531, end: 263586 }, { filename: "/espeak-ng-data/lang/dra/ml", start: 263586, end: 263643 }, { filename: "/espeak-ng-data/lang/dra/ta", start: 263643, end: 263694 }, { filename: "/espeak-ng-data/lang/dra/te", start: 263694, end: 263764 }, { filename: "/espeak-ng-data/lang/esx/kl", start: 263764, end: 263794 }, { filename: "/espeak-ng-data/lang/eu", start: 263794, end: 263848 }, { filename: "/espeak-ng-data/lang/gmq/da", start: 263848, end: 263891 }, { filename: "/espeak-ng-data/lang/gmq/is", start: 263891, end: 263918 }, { filename: "/espeak-ng-data/lang/gmq/nb", start: 263918, end: 264005 }, { filename: "/espeak-ng-data/lang/gmq/sv", start: 264005, end: 264030 }, { filename: "/espeak-ng-data/lang/gmw/af", start: 264030, end: 264153 }, { filename: "/espeak-ng-data/lang/gmw/de", start: 264153, end: 264195 }, { filename: "/espeak-ng-data/lang/gmw/en", start: 264195, end: 264335 }, { filename: "/espeak-ng-data/lang/gmw/en-029", start: 264335, end: 264670 }, { filename: "/espeak-ng-data/lang/gmw/en-GB-scotland", start: 264670, end: 264965 }, { filename: "/espeak-ng-data/lang/gmw/en-GB-x-gbclan", start: 264965, end: 265203 }, { filename: "/espeak-ng-data/lang/gmw/en-GB-x-gbcwmd", start: 265203, end: 265391 }, { filename: "/espeak-ng-data/lang/gmw/en-GB-x-rp", start: 265391, end: 265640 }, { filename: "/espeak-ng-data/lang/gmw/en-US", start: 265640, end: 265897 }, { filename: "/espeak-ng-data/lang/gmw/en-US-nyc", start: 265897, end: 266168 }, { filename: "/espeak-ng-data/lang/gmw/lb", start: 266168, end: 266199 }, { filename: "/espeak-ng-data/lang/gmw/nl", start: 266199, end: 266222 }, { filename: "/espeak-ng-data/lang/grk/el", start: 266222, end: 266245 }, { filename: "/espeak-ng-data/lang/grk/grc", start: 266245, end: 266344 }, { filename: "/espeak-ng-data/lang/inc/as", start: 266344, end: 266386 }, { filename: "/espeak-ng-data/lang/inc/bn", start: 266386, end: 266411 }, { filename: "/espeak-ng-data/lang/inc/bpy", start: 266411, end: 266450 }, { filename: "/espeak-ng-data/lang/inc/gu", start: 266450, end: 266492 }, { filename: "/espeak-ng-data/lang/inc/hi", start: 266492, end: 266515 }, { filename: "/espeak-ng-data/lang/inc/kok", start: 266515, end: 266541 }, { filename: "/espeak-ng-data/lang/inc/mr", start: 266541, end: 266582 }, { filename: "/espeak-ng-data/lang/inc/ne", start: 266582, end: 266619 }, { filename: "/espeak-ng-data/lang/inc/or", start: 266619, end: 266658 }, { filename: "/espeak-ng-data/lang/inc/pa", start: 266658, end: 266683 }, { filename: "/espeak-ng-data/lang/inc/sd", start: 266683, end: 266749 }, { filename: "/espeak-ng-data/lang/inc/si", start: 266749, end: 266804 }, { filename: "/espeak-ng-data/lang/inc/ur", start: 266804, end: 266898 }, { filename: "/espeak-ng-data/lang/ine/hy", start: 266898, end: 266959 }, { filename: "/espeak-ng-data/lang/ine/hyw", start: 266959, end: 267324 }, { filename: "/espeak-ng-data/lang/ine/sq", start: 267324, end: 267427 }, { filename: "/espeak-ng-data/lang/ira/fa", start: 267427, end: 267517 }, { filename: "/espeak-ng-data/lang/ira/fa-Latn", start: 267517, end: 267786 }, { filename: "/espeak-ng-data/lang/ira/ku", start: 267786, end: 267826 }, { filename: "/espeak-ng-data/lang/iro/chr", start: 267826, end: 268395 }, { filename: "/espeak-ng-data/lang/itc/la", start: 268395, end: 268692 }, { filename: "/espeak-ng-data/lang/jpx/ja", start: 268692, end: 268744 }, { filename: "/espeak-ng-data/lang/ko", start: 268744, end: 268795 }, { filename: "/espeak-ng-data/lang/map/haw", start: 268795, end: 268837 }, { filename: "/espeak-ng-data/lang/miz/mto", start: 268837, end: 269020 }, { filename: "/espeak-ng-data/lang/myn/quc", start: 269020, end: 269230 }, { filename: "/espeak-ng-data/lang/poz/id", start: 269230, end: 269364 }, { filename: "/espeak-ng-data/lang/poz/mi", start: 269364, end: 269731 }, { filename: "/espeak-ng-data/lang/poz/ms", start: 269731, end: 270161 }, { filename: "/espeak-ng-data/lang/qu", start: 270161, end: 270249 }, { filename: "/espeak-ng-data/lang/roa/an", start: 270249, end: 270276 }, { filename: "/espeak-ng-data/lang/roa/ca", start: 270276, end: 270301 }, { filename: "/espeak-ng-data/lang/roa/es", start: 270301, end: 270364 }, { filename: "/espeak-ng-data/lang/roa/es-419", start: 270364, end: 270531 }, { filename: "/espeak-ng-data/lang/roa/fr", start: 270531, end: 270610 }, { filename: "/espeak-ng-data/lang/roa/fr-BE", start: 270610, end: 270694 }, { filename: "/espeak-ng-data/lang/roa/fr-CH", start: 270694, end: 270780 }, { filename: "/espeak-ng-data/lang/roa/ht", start: 270780, end: 270920 }, { filename: "/espeak-ng-data/lang/roa/it", start: 270920, end: 271029 }, { filename: "/espeak-ng-data/lang/roa/pap", start: 271029, end: 271091 }, { filename: "/espeak-ng-data/lang/roa/pt", start: 271091, end: 271186 }, { filename: "/espeak-ng-data/lang/roa/pt-BR", start: 271186, end: 271295 }, { filename: "/espeak-ng-data/lang/roa/ro", start: 271295, end: 271321 }, { filename: "/espeak-ng-data/lang/sai/gn", start: 271321, end: 271368 }, { filename: "/espeak-ng-data/lang/sem/am", start: 271368, end: 271409 }, { filename: "/espeak-ng-data/lang/sem/ar", start: 271409, end: 271459 }, { filename: "/espeak-ng-data/lang/sem/he", start: 271459, end: 271499 }, { filename: "/espeak-ng-data/lang/sem/mt", start: 271499, end: 271540 }, { filename: "/espeak-ng-data/lang/sit/cmn", start: 271540, end: 272226 }, { filename: "/espeak-ng-data/lang/sit/cmn-Latn-pinyin", start: 272226, end: 272387 }, { filename: "/espeak-ng-data/lang/sit/hak", start: 272387, end: 272515 }, { filename: "/espeak-ng-data/lang/sit/my", start: 272515, end: 272571 }, { filename: "/espeak-ng-data/lang/sit/yue", start: 272571, end: 272765 }, { filename: "/espeak-ng-data/lang/sit/yue-Latn-jyutping", start: 272765, end: 272978 }, { filename: "/espeak-ng-data/lang/tai/shn", start: 272978, end: 273070 }, { filename: "/espeak-ng-data/lang/tai/th", start: 273070, end: 273107 }, { filename: "/espeak-ng-data/lang/trk/az", start: 273107, end: 273152 }, { filename: "/espeak-ng-data/lang/trk/ba", start: 273152, end: 273177 }, { filename: "/espeak-ng-data/lang/trk/cv", start: 273177, end: 273217 }, { filename: "/espeak-ng-data/lang/trk/kk", start: 273217, end: 273257 }, { filename: "/espeak-ng-data/lang/trk/ky", start: 273257, end: 273300 }, { filename: "/espeak-ng-data/lang/trk/nog", start: 273300, end: 273339 }, { filename: "/espeak-ng-data/lang/trk/tk", start: 273339, end: 273364 }, { filename: "/espeak-ng-data/lang/trk/tr", start: 273364, end: 273389 }, { filename: "/espeak-ng-data/lang/trk/tt", start: 273389, end: 273412 }, { filename: "/espeak-ng-data/lang/trk/ug", start: 273412, end: 273436 }, { filename: "/espeak-ng-data/lang/trk/uz", start: 273436, end: 273475 }, { filename: "/espeak-ng-data/lang/urj/et", start: 273475, end: 273712 }, { filename: "/espeak-ng-data/lang/urj/fi", start: 273712, end: 273949 }, { filename: "/espeak-ng-data/lang/urj/hu", start: 273949, end: 274022 }, { filename: "/espeak-ng-data/lang/urj/smj", start: 274022, end: 274067 }, { filename: "/espeak-ng-data/lang/zle/be", start: 274067, end: 274119 }, { filename: "/espeak-ng-data/lang/zle/ru", start: 274119, end: 274176 }, { filename: "/espeak-ng-data/lang/zle/ru-LV", start: 274176, end: 274456 }, { filename: "/espeak-ng-data/lang/zle/ru-cl", start: 274456, end: 274547 }, { filename: "/espeak-ng-data/lang/zle/uk", start: 274547, end: 274644 }, { filename: "/espeak-ng-data/lang/zls/bg", start: 274644, end: 274755 }, { filename: "/espeak-ng-data/lang/zls/bs", start: 274755, end: 274985 }, { filename: "/espeak-ng-data/lang/zls/hr", start: 274985, end: 275247 }, { filename: "/espeak-ng-data/lang/zls/mk", start: 275247, end: 275275 }, { filename: "/espeak-ng-data/lang/zls/sl", start: 275275, end: 275318 }, { filename: "/espeak-ng-data/lang/zls/sr", start: 275318, end: 275568 }, { filename: "/espeak-ng-data/lang/zlw/cs", start: 275568, end: 275591 }, { filename: "/espeak-ng-data/lang/zlw/pl", start: 275591, end: 275629 }, { filename: "/espeak-ng-data/lang/zlw/sk", start: 275629, end: 275653 }, { filename: "/espeak-ng-data/mbrola_ph/af1_phtrans", start: 275653, end: 277289 }, { filename: "/espeak-ng-data/mbrola_ph/ar1_phtrans", start: 277289, end: 278901 }, { filename: "/espeak-ng-data/mbrola_ph/ar2_phtrans", start: 278901, end: 280513 }, { filename: "/espeak-ng-data/mbrola_ph/ca_phtrans", start: 280513, end: 282509 }, { filename: "/espeak-ng-data/mbrola_ph/cmn_phtrans", start: 282509, end: 284001 }, { filename: "/espeak-ng-data/mbrola_ph/cr1_phtrans", start: 284001, end: 286165 }, { filename: "/espeak-ng-data/mbrola_ph/cs_phtrans", start: 286165, end: 286745 }, { filename: "/espeak-ng-data/mbrola_ph/de2_phtrans", start: 286745, end: 288477 }, { filename: "/espeak-ng-data/mbrola_ph/de4_phtrans", start: 288477, end: 290281 }, { filename: "/espeak-ng-data/mbrola_ph/de6_phtrans", start: 290281, end: 291677 }, { filename: "/espeak-ng-data/mbrola_ph/de8_phtrans", start: 291677, end: 292833 }, { filename: "/espeak-ng-data/mbrola_ph/ee1_phtrans", start: 292833, end: 294277 }, { filename: "/espeak-ng-data/mbrola_ph/en1_phtrans", start: 294277, end: 295073 }, { filename: "/espeak-ng-data/mbrola_ph/es3_phtrans", start: 295073, end: 296133 }, { filename: "/espeak-ng-data/mbrola_ph/es4_phtrans", start: 296133, end: 297241 }, { filename: "/espeak-ng-data/mbrola_ph/es_phtrans", start: 297241, end: 298973 }, { filename: "/espeak-ng-data/mbrola_ph/fr_phtrans", start: 298973, end: 300945 }, { filename: "/espeak-ng-data/mbrola_ph/gr1_phtrans", start: 300945, end: 303157 }, { filename: "/espeak-ng-data/mbrola_ph/gr2_phtrans", start: 303157, end: 305369 }, { filename: "/espeak-ng-data/mbrola_ph/grc-de6_phtrans", start: 305369, end: 305853 }, { filename: "/espeak-ng-data/mbrola_ph/he_phtrans", start: 305853, end: 306601 }, { filename: "/espeak-ng-data/mbrola_ph/hn1_phtrans", start: 306601, end: 307133 }, { filename: "/espeak-ng-data/mbrola_ph/hu1_phtrans", start: 307133, end: 308577 }, { filename: "/espeak-ng-data/mbrola_ph/ic1_phtrans", start: 308577, end: 309709 }, { filename: "/espeak-ng-data/mbrola_ph/id1_phtrans", start: 309709, end: 311417 }, { filename: "/espeak-ng-data/mbrola_ph/in_phtrans", start: 311417, end: 312861 }, { filename: "/espeak-ng-data/mbrola_ph/ir1_phtrans", start: 312861, end: 318673 }, { filename: "/espeak-ng-data/mbrola_ph/it1_phtrans", start: 318673, end: 319997 }, { filename: "/espeak-ng-data/mbrola_ph/it3_phtrans", start: 319997, end: 320889 }, { filename: "/espeak-ng-data/mbrola_ph/jp_phtrans", start: 320889, end: 321925 }, { filename: "/espeak-ng-data/mbrola_ph/la1_phtrans", start: 321925, end: 322673 }, { filename: "/espeak-ng-data/mbrola_ph/lt_phtrans", start: 322673, end: 323733 }, { filename: "/espeak-ng-data/mbrola_ph/ma1_phtrans", start: 323733, end: 324673 }, { filename: "/espeak-ng-data/mbrola_ph/mx1_phtrans", start: 324673, end: 326477 }, { filename: "/espeak-ng-data/mbrola_ph/mx2_phtrans", start: 326477, end: 328305 }, { filename: "/espeak-ng-data/mbrola_ph/nl_phtrans", start: 328305, end: 329989 }, { filename: "/espeak-ng-data/mbrola_ph/nz1_phtrans", start: 329989, end: 330713 }, { filename: "/espeak-ng-data/mbrola_ph/pl1_phtrans", start: 330713, end: 332301 }, { filename: "/espeak-ng-data/mbrola_ph/pt1_phtrans", start: 332301, end: 334393 }, { filename: "/espeak-ng-data/mbrola_ph/ptbr4_phtrans", start: 334393, end: 336749 }, { filename: "/espeak-ng-data/mbrola_ph/ptbr_phtrans", start: 336749, end: 339273 }, { filename: "/espeak-ng-data/mbrola_ph/ro1_phtrans", start: 339273, end: 341437 }, { filename: "/espeak-ng-data/mbrola_ph/sv2_phtrans", start: 341437, end: 343025 }, { filename: "/espeak-ng-data/mbrola_ph/sv_phtrans", start: 343025, end: 344613 }, { filename: "/espeak-ng-data/mbrola_ph/tl1_phtrans", start: 344613, end: 345385 }, { filename: "/espeak-ng-data/mbrola_ph/tr1_phtrans", start: 345385, end: 345749 }, { filename: "/espeak-ng-data/mbrola_ph/us3_phtrans", start: 345749, end: 346905 }, { filename: "/espeak-ng-data/mbrola_ph/us_phtrans", start: 346905, end: 348133 }, { filename: "/espeak-ng-data/mbrola_ph/vz_phtrans", start: 348133, end: 350417 }, { filename: "/espeak-ng-data/phondata", start: 350417, end: 900841 }, { filename: "/espeak-ng-data/phondata-manifest", start: 900841, end: 922662 }, { filename: "/espeak-ng-data/phonindex", start: 922662, end: 961736 }, { filename: "/espeak-ng-data/phontab", start: 961736, end: 1017532 }, { filename: "/espeak-ng-data/voices/!v/Alex", start: 1017532, end: 1017660 }, { filename: "/espeak-ng-data/voices/!v/Alicia", start: 1017660, end: 1018134 }, { filename: "/espeak-ng-data/voices/!v/Andrea", start: 1018134, end: 1018491 }, { filename: "/espeak-ng-data/voices/!v/Andy", start: 1018491, end: 1018811 }, { filename: "/espeak-ng-data/voices/!v/Annie", start: 1018811, end: 1019126 }, { filename: "/espeak-ng-data/voices/!v/AnxiousAndy", start: 1019126, end: 1019487 }, { filename: "/espeak-ng-data/voices/!v/Demonic", start: 1019487, end: 1023345 }, { filename: "/espeak-ng-data/voices/!v/Denis", start: 1023345, end: 1023650 }, { filename: "/espeak-ng-data/voices/!v/Diogo", start: 1023650, end: 1024029 }, { filename: "/espeak-ng-data/voices/!v/Gene", start: 1024029, end: 1024310 }, { filename: "/espeak-ng-data/voices/!v/Gene2", start: 1024310, end: 1024593 }, { filename: "/espeak-ng-data/voices/!v/Henrique", start: 1024593, end: 1024974 }, { filename: "/espeak-ng-data/voices/!v/Hugo", start: 1024974, end: 1025352 }, { filename: "/espeak-ng-data/voices/!v/Jacky", start: 1025352, end: 1025619 }, { filename: "/espeak-ng-data/voices/!v/Lee", start: 1025619, end: 1025957 }, { filename: "/espeak-ng-data/voices/!v/Marco", start: 1025957, end: 1026424 }, { filename: "/espeak-ng-data/voices/!v/Mario", start: 1026424, end: 1026694 }, { filename: "/espeak-ng-data/voices/!v/Michael", start: 1026694, end: 1026964 }, { filename: "/espeak-ng-data/voices/!v/Mike", start: 1026964, end: 1027076 }, { filename: "/espeak-ng-data/voices/!v/Mr serious", start: 1027076, end: 1030269 }, { filename: "/espeak-ng-data/voices/!v/Nguyen", start: 1030269, end: 1030549 }, { filename: "/espeak-ng-data/voices/!v/Reed", start: 1030549, end: 1030751 }, { filename: "/espeak-ng-data/voices/!v/RicishayMax", start: 1030751, end: 1030984 }, { filename: "/espeak-ng-data/voices/!v/RicishayMax2", start: 1030984, end: 1031419 }, { filename: "/espeak-ng-data/voices/!v/RicishayMax3", start: 1031419, end: 1031854 }, { filename: "/espeak-ng-data/voices/!v/Storm", start: 1031854, end: 1032274 }, { filename: "/espeak-ng-data/voices/!v/Tweaky", start: 1032274, end: 1035463 }, { filename: "/espeak-ng-data/voices/!v/UniRobot", start: 1035463, end: 1035880 }, { filename: "/espeak-ng-data/voices/!v/adam", start: 1035880, end: 1035955 }, { filename: "/espeak-ng-data/voices/!v/anika", start: 1035955, end: 1036448 }, { filename: "/espeak-ng-data/voices/!v/anikaRobot", start: 1036448, end: 1036960 }, { filename: "/espeak-ng-data/voices/!v/announcer", start: 1036960, end: 1037260 }, { filename: "/espeak-ng-data/voices/!v/antonio", start: 1037260, end: 1037641 }, { filename: "/espeak-ng-data/voices/!v/aunty", start: 1037641, end: 1037999 }, { filename: "/espeak-ng-data/voices/!v/belinda", start: 1037999, end: 1038339 }, { filename: "/espeak-ng-data/voices/!v/benjamin", start: 1038339, end: 1038540 }, { filename: "/espeak-ng-data/voices/!v/boris", start: 1038540, end: 1038764 }, { filename: "/espeak-ng-data/voices/!v/caleb", start: 1038764, end: 1038821 }, { filename: "/espeak-ng-data/voices/!v/croak", start: 1038821, end: 1038914 }, { filename: "/espeak-ng-data/voices/!v/david", start: 1038914, end: 1039026 }, { filename: "/espeak-ng-data/voices/!v/ed", start: 1039026, end: 1039313 }, { filename: "/espeak-ng-data/voices/!v/edward", start: 1039313, end: 1039464 }, { filename: "/espeak-ng-data/voices/!v/edward2", start: 1039464, end: 1039616 }, { filename: "/espeak-ng-data/voices/!v/f1", start: 1039616, end: 1039940 }, { filename: "/espeak-ng-data/voices/!v/f2", start: 1039940, end: 1040297 }, { filename: "/espeak-ng-data/voices/!v/f3", start: 1040297, end: 1040672 }, { filename: "/espeak-ng-data/voices/!v/f4", start: 1040672, end: 1041022 }, { filename: "/espeak-ng-data/voices/!v/f5", start: 1041022, end: 1041454 }, { filename: "/espeak-ng-data/voices/!v/fast", start: 1041454, end: 1041603 }, { filename: "/espeak-ng-data/voices/!v/grandma", start: 1041603, end: 1041866 }, { filename: "/espeak-ng-data/voices/!v/grandpa", start: 1041866, end: 1042122 }, { filename: "/espeak-ng-data/voices/!v/gustave", start: 1042122, end: 1042375 }, { filename: "/espeak-ng-data/voices/!v/ian", start: 1042375, end: 1045543 }, { filename: "/espeak-ng-data/voices/!v/iven", start: 1045543, end: 1045804 }, { filename: "/espeak-ng-data/voices/!v/iven2", start: 1045804, end: 1046083 }, { filename: "/espeak-ng-data/voices/!v/iven3", start: 1046083, end: 1046345 }, { filename: "/espeak-ng-data/voices/!v/iven4", start: 1046345, end: 1046606 }, { filename: "/espeak-ng-data/voices/!v/john", start: 1046606, end: 1049792 }, { filename: "/espeak-ng-data/voices/!v/kaukovalta", start: 1049792, end: 1050153 }, { filename: "/espeak-ng-data/voices/!v/klatt", start: 1050153, end: 1050191 }, { filename: "/espeak-ng-data/voices/!v/klatt2", start: 1050191, end: 1050229 }, { filename: "/espeak-ng-data/voices/!v/klatt3", start: 1050229, end: 1050268 }, { filename: "/espeak-ng-data/voices/!v/klatt4", start: 1050268, end: 1050307 }, { filename: "/espeak-ng-data/voices/!v/klatt5", start: 1050307, end: 1050346 }, { filename: "/espeak-ng-data/voices/!v/klatt6", start: 1050346, end: 1050385 }, { filename: "/espeak-ng-data/voices/!v/linda", start: 1050385, end: 1050735 }, { filename: "/espeak-ng-data/voices/!v/m1", start: 1050735, end: 1051070 }, { filename: "/espeak-ng-data/voices/!v/m2", start: 1051070, end: 1051334 }, { filename: "/espeak-ng-data/voices/!v/m3", start: 1051334, end: 1051634 }, { filename: "/espeak-ng-data/voices/!v/m4", start: 1051634, end: 1051924 }, { filename: "/espeak-ng-data/voices/!v/m5", start: 1051924, end: 1052186 }, { filename: "/espeak-ng-data/voices/!v/m6", start: 1052186, end: 1052374 }, { filename: "/espeak-ng-data/voices/!v/m7", start: 1052374, end: 1052628 }, { filename: "/espeak-ng-data/voices/!v/m8", start: 1052628, end: 1052912 }, { filename: "/espeak-ng-data/voices/!v/marcelo", start: 1052912, end: 1053163 }, { filename: "/espeak-ng-data/voices/!v/max", start: 1053163, end: 1053388 }, { filename: "/espeak-ng-data/voices/!v/michel", start: 1053388, end: 1053792 }, { filename: "/espeak-ng-data/voices/!v/miguel", start: 1053792, end: 1054174 }, { filename: "/espeak-ng-data/voices/!v/mike2", start: 1054174, end: 1054362 }, { filename: "/espeak-ng-data/voices/!v/norbert", start: 1054362, end: 1057551 }, { filename: "/espeak-ng-data/voices/!v/pablo", start: 1057551, end: 1060693 }, { filename: "/espeak-ng-data/voices/!v/paul", start: 1060693, end: 1060977 }, { filename: "/espeak-ng-data/voices/!v/pedro", start: 1060977, end: 1061329 }, { filename: "/espeak-ng-data/voices/!v/quincy", start: 1061329, end: 1061683 }, { filename: "/espeak-ng-data/voices/!v/rob", start: 1061683, end: 1061948 }, { filename: "/espeak-ng-data/voices/!v/robert", start: 1061948, end: 1062222 }, { filename: "/espeak-ng-data/voices/!v/robosoft", start: 1062222, end: 1062673 }, { filename: "/espeak-ng-data/voices/!v/robosoft2", start: 1062673, end: 1063127 }, { filename: "/espeak-ng-data/voices/!v/robosoft3", start: 1063127, end: 1063582 }, { filename: "/espeak-ng-data/voices/!v/robosoft4", start: 1063582, end: 1064029 }, { filename: "/espeak-ng-data/voices/!v/robosoft5", start: 1064029, end: 1064474 }, { filename: "/espeak-ng-data/voices/!v/robosoft6", start: 1064474, end: 1064761 }, { filename: "/espeak-ng-data/voices/!v/robosoft7", start: 1064761, end: 1065171 }, { filename: "/espeak-ng-data/voices/!v/robosoft8", start: 1065171, end: 1065414 }, { filename: "/espeak-ng-data/voices/!v/sandro", start: 1065414, end: 1065944 }, { filename: "/espeak-ng-data/voices/!v/shelby", start: 1065944, end: 1066224 }, { filename: "/espeak-ng-data/voices/!v/steph", start: 1066224, end: 1066588 }, { filename: "/espeak-ng-data/voices/!v/steph2", start: 1066588, end: 1066955 }, { filename: "/espeak-ng-data/voices/!v/steph3", start: 1066955, end: 1067332 }, { filename: "/espeak-ng-data/voices/!v/travis", start: 1067332, end: 1067715 }, { filename: "/espeak-ng-data/voices/!v/victor", start: 1067715, end: 1067968 }, { filename: "/espeak-ng-data/voices/!v/whisper", start: 1067968, end: 1068154 }, { filename: "/espeak-ng-data/voices/!v/whisperf", start: 1068154, end: 1068546 }, { filename: "/espeak-ng-data/voices/!v/zac", start: 1068546, end: 1068821 }], remote_package_size: 1068821 });
      })();
      var Ce = Object.assign({}, l), we = [], ie = "./this.program", be = (e, a) => {
        throw a;
      }, L = "";
      function ia(e) {
        return l.locateFile ? l.locateFile(e, L) : L + e;
      }
      var oe, Z;
      if (se) {
        var ye = ke || Me;
        L = __dirname + "/", Z = (e) => {
          e = fe(e) ? new URL(e) : e;
          var a = ye.readFileSync(e);
          return a;
        }, oe = async (e, a = !0) => {
          e = fe(e) ? new URL(e) : e;
          var t = ye.readFileSync(e, a ? void 0 : "utf8");
          return t;
        }, !l.thisProgram && process.argv.length > 1 && (ie = process.argv[1].replace(/\\/g, "/")), we = process.argv.slice(2), be = (e, a) => {
          throw process.exitCode = e, a;
        };
      } else (_e || re) && (re ? L = self.location.href : typeof document < "u" && document.currentScript && (L = document.currentScript.src), x && (L = x), L.startsWith("blob:") ? L = "" : L = L.substr(0, L.replace(/[?#].*/, "").lastIndexOf("/") + 1), re && (Z = (e) => {
        var a = new XMLHttpRequest();
        return a.open("GET", e, !1), a.responseType = "arraybuffer", a.send(null), new Uint8Array(a.response);
      }), oe = async (e) => {
        if (fe(e))
          return new Promise((t, r) => {
            var s = new XMLHttpRequest();
            s.open("GET", e, !0), s.responseType = "arraybuffer", s.onload = () => {
              if (s.status == 200 || s.status == 0 && s.response) {
                t(s.response);
                return;
              }
              r(s.status);
            }, s.onerror = r, s.send(null);
          });
        var a = await fetch(e, { credentials: "same-origin" });
        if (a.ok)
          return a.arrayBuffer();
        throw new Error(a.status + " : " + a.url);
      });
      var Ee = l.print || console.log.bind(console), I = l.printErr || console.error.bind(console);
      Object.assign(l, Ce), Ce = null, l.arguments && (we = l.arguments), l.thisProgram && (ie = l.thisProgram);
      var de = l.wasmBinary, xe, Oe = !1, Se, j, G, Q, k, P;
      function oa() {
        var e = xe.buffer;
        l.HEAP8 = j = new Int8Array(e), l.HEAP16 = Q = new Int16Array(e), l.HEAPU8 = G = new Uint8Array(e), l.HEAPU16 = new Uint16Array(e), l.HEAP32 = k = new Int32Array(e), l.HEAPU32 = P = new Uint32Array(e), l.HEAPF32 = new Float32Array(e), l.HEAPF64 = new Float64Array(e);
      }
      var Le = [], Ue = [], da = [], Be = [];
      function la() {
        if (l.preRun)
          for (typeof l.preRun == "function" && (l.preRun = [l.preRun]); l.preRun.length; )
            pa(l.preRun.shift());
        me(Le);
      }
      function fa() {
        !l.noFSInit && !n.initialized && n.init(), n.ignorePermissions = !1, me(Ue);
      }
      function ma() {
        me(da);
      }
      function ca() {
        if (l.postRun)
          for (typeof l.postRun == "function" && (l.postRun = [l.postRun]); l.postRun.length; )
            va(l.postRun.shift());
        me(Be);
      }
      function pa(e) {
        Le.unshift(e);
      }
      function ga(e) {
        Ue.unshift(e);
      }
      function va(e) {
        Be.unshift(e);
      }
      var H = 0, ee = null;
      function Fe(e) {
        H++, l.monitorRunDependencies?.(H);
      }
      function le(e) {
        if (H--, l.monitorRunDependencies?.(H), H == 0 && ee) {
          var a = ee;
          ee = null, a();
        }
      }
      function W(e) {
        l.onAbort?.(e), e = "Aborted(" + e + ")", I(e), Oe = !0, e += ". Build with -sASSERTIONS for more info.";
        var a = new WebAssembly.RuntimeError(e);
        throw O(a), a;
      }
      var ua = "data:application/octet-stream;base64,", Ie = (e) => e.startsWith(ua), fe = (e) => e.startsWith("file://");
      function ka() {
        var e = "piper_phonemize.wasm";
        return Ie(e) ? e : ia(e);
      }
      var Pe;
      function ha(e) {
        if (e == Pe && de)
          return new Uint8Array(de);
        if (Z)
          return Z(e);
        throw "both async and sync fetching of the wasm failed";
      }
      async function _a(e) {
        if (!de)
          try {
            var a = await oe(e);
            return new Uint8Array(a);
          } catch {
          }
        return ha(e);
      }
      async function wa(e, a) {
        try {
          var t = await _a(e), r = await WebAssembly.instantiate(t, a);
          return r;
        } catch (s) {
          I(`failed to asynchronously prepare wasm: ${s}`), W(s);
        }
      }
      async function ba(e, a, t) {
        if (!e && typeof WebAssembly.instantiateStreaming == "function" && !Ie(a) && !fe(a) && !se && typeof fetch == "function")
          try {
            var r = fetch(a, { credentials: "same-origin" }), s = await WebAssembly.instantiateStreaming(r, t);
            return s;
          } catch (i) {
            I(`wasm streaming compile failed: ${i}`), I("falling back to ArrayBuffer instantiation");
          }
        return wa(a, t);
      }
      function ya() {
        return { a: pt };
      }
      async function Ea() {
        function e(s, i) {
          return Y = s.exports, xe = Y.w, oa(), ga(Y.x), le(), Y;
        }
        Fe();
        function a(s) {
          e(s.instance);
        }
        var t = ya();
        if (l.instantiateWasm)
          try {
            return l.instantiateWasm(t, e);
          } catch (s) {
            I(`Module.instantiateWasm callback failed with error: ${s}`), O(s);
          }
        Pe ??= ka();
        try {
          var r = await ba(de, Pe, t);
          return a(r), r;
        } catch (s) {
          O(s);
          return;
        }
      }
      var c, E;
      class qe {
        name = "ExitStatus";
        constructor(a) {
          this.message = `Program terminated with exit(${a})`, this.status = a;
        }
      }
      var me = (e) => {
        for (; e.length > 0; )
          e.shift()(l);
      };
      l.noExitRuntime;
      var He = typeof TextDecoder < "u" ? new TextDecoder() : void 0, V = (e, a = 0, t = NaN) => {
        for (var r = a + t, s = a; e[s] && !(s >= r); ) ++s;
        if (s - a > 16 && e.buffer && He)
          return He.decode(e.subarray(a, s));
        for (var i = ""; a < s; ) {
          var o = e[a++];
          if (!(o & 128)) {
            i += String.fromCharCode(o);
            continue;
          }
          var d = e[a++] & 63;
          if ((o & 224) == 192) {
            i += String.fromCharCode((o & 31) << 6 | d);
            continue;
          }
          var m = e[a++] & 63;
          if ((o & 240) == 224 ? o = (o & 15) << 12 | d << 6 | m : o = (o & 7) << 18 | d << 12 | m << 6 | e[a++] & 63, o < 65536)
            i += String.fromCharCode(o);
          else {
            var g = o - 65536;
            i += String.fromCharCode(55296 | g >> 10, 56320 | g & 1023);
          }
        }
        return i;
      }, ce = (e, a) => e ? V(G, e, a) : "", Sa = (e, a, t, r) => W(`Assertion failed: ${ce(e)}, at: ` + [a ? ce(a) : "unknown filename", t, r ? ce(r) : "unknown function"]);
      class Fa {
        constructor(a) {
          this.excPtr = a, this.ptr = a - 24;
        }
        set_type(a) {
          P[this.ptr + 4 >> 2] = a;
        }
        get_type() {
          return P[this.ptr + 4 >> 2];
        }
        set_destructor(a) {
          P[this.ptr + 8 >> 2] = a;
        }
        get_destructor() {
          return P[this.ptr + 8 >> 2];
        }
        set_caught(a) {
          a = a ? 1 : 0, j[this.ptr + 12] = a;
        }
        get_caught() {
          return j[this.ptr + 12] != 0;
        }
        set_rethrown(a) {
          a = a ? 1 : 0, j[this.ptr + 13] = a;
        }
        get_rethrown() {
          return j[this.ptr + 13] != 0;
        }
        init(a, t) {
          this.set_adjusted_ptr(0), this.set_type(a), this.set_destructor(t);
        }
        set_adjusted_ptr(a) {
          P[this.ptr + 16 >> 2] = a;
        }
        get_adjusted_ptr() {
          return P[this.ptr + 16 >> 2];
        }
      }
      var We = 0, Pa = (e, a, t) => {
        var r = new Fa(e);
        throw r.init(a, t), We = e, We;
      }, pe = () => {
        var e = k[+z.varargs >> 2];
        return z.varargs += 4, e;
      }, X = pe, b = { isAbs: (e) => e.charAt(0) === "/", splitPath: (e) => {
        var a = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return a.exec(e).slice(1);
      }, normalizeArray: (e, a) => {
        for (var t = 0, r = e.length - 1; r >= 0; r--) {
          var s = e[r];
          s === "." ? e.splice(r, 1) : s === ".." ? (e.splice(r, 1), t++) : t && (e.splice(r, 1), t--);
        }
        if (a)
          for (; t; t--)
            e.unshift("..");
        return e;
      }, normalize: (e) => {
        var a = b.isAbs(e), t = e.substr(-1) === "/";
        return e = b.normalizeArray(e.split("/").filter((r) => !!r), !a).join("/"), !e && !a && (e = "."), e && t && (e += "/"), (a ? "/" : "") + e;
      }, dirname: (e) => {
        var a = b.splitPath(e), t = a[0], r = a[1];
        return !t && !r ? "." : (r && (r = r.substr(0, r.length - 1)), t + r);
      }, basename: (e) => {
        if (e === "/") return "/";
        e = b.normalize(e), e = e.replace(/\/$/, "");
        var a = e.lastIndexOf("/");
        return a === -1 ? e : e.substr(a + 1);
      }, join: (...e) => b.normalize(e.join("/")), join2: (e, a) => b.normalize(e + "/" + a) }, Da = () => {
        if (typeof crypto == "object" && typeof crypto.getRandomValues == "function")
          return (r) => crypto.getRandomValues(r);
        if (se)
          try {
            var e = ke || Me, a = e.randomFillSync;
            if (a)
              return (r) => e.randomFillSync(r);
            var t = e.randomBytes;
            return (r) => (r.set(t(r.byteLength)), r);
          } catch {
          }
        W("initRandomDevice");
      }, $e = (e) => ($e = Da())(e), K = { resolve: (...e) => {
        for (var a = "", t = !1, r = e.length - 1; r >= -1 && !t; r--) {
          var s = r >= 0 ? e[r] : n.cwd();
          if (typeof s != "string")
            throw new TypeError("Arguments to path.resolve must be strings");
          if (!s)
            return "";
          a = s + "/" + a, t = b.isAbs(s);
        }
        return a = b.normalizeArray(a.split("/").filter((i) => !!i), !t).join("/"), (t ? "/" : "") + a || ".";
      }, relative: (e, a) => {
        e = K.resolve(e).substr(1), a = K.resolve(a).substr(1);
        function t(g) {
          for (var h = 0; h < g.length && g[h] === ""; h++)
            ;
          for (var _ = g.length - 1; _ >= 0 && g[_] === ""; _--)
            ;
          return h > _ ? [] : g.slice(h, _ - h + 1);
        }
        for (var r = t(e.split("/")), s = t(a.split("/")), i = Math.min(r.length, s.length), o = i, d = 0; d < i; d++)
          if (r[d] !== s[d]) {
            o = d;
            break;
          }
        for (var m = [], d = o; d < r.length; d++)
          m.push("..");
        return m = m.concat(s.slice(o)), m.join("/");
      } }, De = [], Ae = (e) => {
        for (var a = 0, t = 0; t < e.length; ++t) {
          var r = e.charCodeAt(t);
          r <= 127 ? a++ : r <= 2047 ? a += 2 : r >= 55296 && r <= 57343 ? (a += 4, ++t) : a += 3;
        }
        return a;
      }, Re = (e, a, t, r) => {
        if (!(r > 0)) return 0;
        for (var s = t, i = t + r - 1, o = 0; o < e.length; ++o) {
          var d = e.charCodeAt(o);
          if (d >= 55296 && d <= 57343) {
            var m = e.charCodeAt(++o);
            d = 65536 + ((d & 1023) << 10) | m & 1023;
          }
          if (d <= 127) {
            if (t >= i) break;
            a[t++] = d;
          } else if (d <= 2047) {
            if (t + 1 >= i) break;
            a[t++] = 192 | d >> 6, a[t++] = 128 | d & 63;
          } else if (d <= 65535) {
            if (t + 2 >= i) break;
            a[t++] = 224 | d >> 12, a[t++] = 128 | d >> 6 & 63, a[t++] = 128 | d & 63;
          } else {
            if (t + 3 >= i) break;
            a[t++] = 240 | d >> 18, a[t++] = 128 | d >> 12 & 63, a[t++] = 128 | d >> 6 & 63, a[t++] = 128 | d & 63;
          }
        }
        return a[t] = 0, t - s;
      };
      function Ge(e, a, t) {
        var r = Ae(e) + 1, s = new Array(r), i = Re(e, s, 0, s.length);
        return s.length = i, s;
      }
      var Aa = () => {
        if (!De.length) {
          var e = null;
          if (se) {
            var a = 256, t = Buffer.alloc(a), r = 0, s = process.stdin.fd;
            try {
              r = ye.readSync(s, t, 0, a);
            } catch (i) {
              if (i.toString().includes("EOF")) r = 0;
              else throw i;
            }
            r > 0 && (e = t.slice(0, r).toString("utf-8"));
          } else typeof window < "u" && typeof window.prompt == "function" && (e = window.prompt("Input: "), e !== null && (e += `
`));
          if (!e)
            return null;
          De = Ge(e);
        }
        return De.shift();
      }, $ = { ttys: [], init() {
      }, shutdown() {
      }, register(e, a) {
        $.ttys[e] = { input: [], output: [], ops: a }, n.registerDevice(e, $.stream_ops);
      }, stream_ops: { open(e) {
        var a = $.ttys[e.node.rdev];
        if (!a)
          throw new n.ErrnoError(43);
        e.tty = a, e.seekable = !1;
      }, close(e) {
        e.tty.ops.fsync(e.tty);
      }, fsync(e) {
        e.tty.ops.fsync(e.tty);
      }, read(e, a, t, r, s) {
        if (!e.tty || !e.tty.ops.get_char)
          throw new n.ErrnoError(60);
        for (var i = 0, o = 0; o < r; o++) {
          var d;
          try {
            d = e.tty.ops.get_char(e.tty);
          } catch {
            throw new n.ErrnoError(29);
          }
          if (d === void 0 && i === 0)
            throw new n.ErrnoError(6);
          if (d == null) break;
          i++, a[t + o] = d;
        }
        return i && (e.node.atime = Date.now()), i;
      }, write(e, a, t, r, s) {
        if (!e.tty || !e.tty.ops.put_char)
          throw new n.ErrnoError(60);
        try {
          for (var i = 0; i < r; i++)
            e.tty.ops.put_char(e.tty, a[t + i]);
        } catch {
          throw new n.ErrnoError(29);
        }
        return r && (e.node.mtime = e.node.ctime = Date.now()), i;
      } }, default_tty_ops: { get_char(e) {
        return Aa();
      }, put_char(e, a) {
        a === null || a === 10 ? (Ee(V(e.output)), e.output = []) : a != 0 && e.output.push(a);
      }, fsync(e) {
        e.output && e.output.length > 0 && (Ee(V(e.output)), e.output = []);
      }, ioctl_tcgets(e) {
        return { c_iflag: 25856, c_oflag: 5, c_cflag: 191, c_lflag: 35387, c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
      }, ioctl_tcsets(e, a, t) {
        return 0;
      }, ioctl_tiocgwinsz(e) {
        return [24, 80];
      } }, default_tty1_ops: { put_char(e, a) {
        a === null || a === 10 ? (I(V(e.output)), e.output = []) : a != 0 && e.output.push(a);
      }, fsync(e) {
        e.output && e.output.length > 0 && (I(V(e.output)), e.output = []);
      } } }, Ve = (e) => {
        W();
      }, v = { ops_table: null, mount(e) {
        return v.createNode(null, "/", 16895, 0);
      }, createNode(e, a, t, r) {
        if (n.isBlkdev(t) || n.isFIFO(t))
          throw new n.ErrnoError(63);
        v.ops_table ||= { dir: { node: { getattr: v.node_ops.getattr, setattr: v.node_ops.setattr, lookup: v.node_ops.lookup, mknod: v.node_ops.mknod, rename: v.node_ops.rename, unlink: v.node_ops.unlink, rmdir: v.node_ops.rmdir, readdir: v.node_ops.readdir, symlink: v.node_ops.symlink }, stream: { llseek: v.stream_ops.llseek } }, file: { node: { getattr: v.node_ops.getattr, setattr: v.node_ops.setattr }, stream: { llseek: v.stream_ops.llseek, read: v.stream_ops.read, write: v.stream_ops.write, allocate: v.stream_ops.allocate, mmap: v.stream_ops.mmap, msync: v.stream_ops.msync } }, link: { node: { getattr: v.node_ops.getattr, setattr: v.node_ops.setattr, readlink: v.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: v.node_ops.getattr, setattr: v.node_ops.setattr }, stream: n.chrdev_stream_ops } };
        var s = n.createNode(e, a, t, r);
        return n.isDir(s.mode) ? (s.node_ops = v.ops_table.dir.node, s.stream_ops = v.ops_table.dir.stream, s.contents = {}) : n.isFile(s.mode) ? (s.node_ops = v.ops_table.file.node, s.stream_ops = v.ops_table.file.stream, s.usedBytes = 0, s.contents = null) : n.isLink(s.mode) ? (s.node_ops = v.ops_table.link.node, s.stream_ops = v.ops_table.link.stream) : n.isChrdev(s.mode) && (s.node_ops = v.ops_table.chrdev.node, s.stream_ops = v.ops_table.chrdev.stream), s.atime = s.mtime = s.ctime = Date.now(), e && (e.contents[a] = s, e.atime = e.mtime = e.ctime = s.atime), s;
      }, getFileDataAsTypedArray(e) {
        return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0);
      }, expandFileStorage(e, a) {
        var t = e.contents ? e.contents.length : 0;
        if (!(t >= a)) {
          var r = 1024 * 1024;
          a = Math.max(a, t * (t < r ? 2 : 1.125) >>> 0), t != 0 && (a = Math.max(a, 256));
          var s = e.contents;
          e.contents = new Uint8Array(a), e.usedBytes > 0 && e.contents.set(s.subarray(0, e.usedBytes), 0);
        }
      }, resizeFileStorage(e, a) {
        if (e.usedBytes != a)
          if (a == 0)
            e.contents = null, e.usedBytes = 0;
          else {
            var t = e.contents;
            e.contents = new Uint8Array(a), t && e.contents.set(t.subarray(0, Math.min(a, e.usedBytes))), e.usedBytes = a;
          }
      }, node_ops: { getattr(e) {
        var a = {};
        return a.dev = n.isChrdev(e.mode) ? e.id : 1, a.ino = e.id, a.mode = e.mode, a.nlink = 1, a.uid = 0, a.gid = 0, a.rdev = e.rdev, n.isDir(e.mode) ? a.size = 4096 : n.isFile(e.mode) ? a.size = e.usedBytes : n.isLink(e.mode) ? a.size = e.link.length : a.size = 0, a.atime = new Date(e.atime), a.mtime = new Date(e.mtime), a.ctime = new Date(e.ctime), a.blksize = 4096, a.blocks = Math.ceil(a.size / a.blksize), a;
      }, setattr(e, a) {
        for (const t of ["mode", "atime", "mtime", "ctime"])
          a[t] && (e[t] = a[t]);
        a.size !== void 0 && v.resizeFileStorage(e, a.size);
      }, lookup(e, a) {
        throw v.doesNotExistError;
      }, mknod(e, a, t, r) {
        return v.createNode(e, a, t, r);
      }, rename(e, a, t) {
        var r;
        try {
          r = n.lookupNode(a, t);
        } catch {
        }
        if (r) {
          if (n.isDir(e.mode))
            for (var s in r.contents)
              throw new n.ErrnoError(55);
          n.hashRemoveNode(r);
        }
        delete e.parent.contents[e.name], a.contents[t] = e, e.name = t, a.ctime = a.mtime = e.parent.ctime = e.parent.mtime = Date.now();
      }, unlink(e, a) {
        delete e.contents[a], e.ctime = e.mtime = Date.now();
      }, rmdir(e, a) {
        var t = n.lookupNode(e, a);
        for (var r in t.contents)
          throw new n.ErrnoError(55);
        delete e.contents[a], e.ctime = e.mtime = Date.now();
      }, readdir(e) {
        return [".", "..", ...Object.keys(e.contents)];
      }, symlink(e, a, t) {
        var r = v.createNode(e, a, 41471, 0);
        return r.link = t, r;
      }, readlink(e) {
        if (!n.isLink(e.mode))
          throw new n.ErrnoError(28);
        return e.link;
      } }, stream_ops: { read(e, a, t, r, s) {
        var i = e.node.contents;
        if (s >= e.node.usedBytes) return 0;
        var o = Math.min(e.node.usedBytes - s, r);
        if (o > 8 && i.subarray)
          a.set(i.subarray(s, s + o), t);
        else
          for (var d = 0; d < o; d++) a[t + d] = i[s + d];
        return o;
      }, write(e, a, t, r, s, i) {
        if (!r) return 0;
        var o = e.node;
        if (o.mtime = o.ctime = Date.now(), a.subarray && (!o.contents || o.contents.subarray)) {
          if (i)
            return o.contents = a.subarray(t, t + r), o.usedBytes = r, r;
          if (o.usedBytes === 0 && s === 0)
            return o.contents = a.slice(t, t + r), o.usedBytes = r, r;
          if (s + r <= o.usedBytes)
            return o.contents.set(a.subarray(t, t + r), s), r;
        }
        if (v.expandFileStorage(o, s + r), o.contents.subarray && a.subarray)
          o.contents.set(a.subarray(t, t + r), s);
        else
          for (var d = 0; d < r; d++)
            o.contents[s + d] = a[t + d];
        return o.usedBytes = Math.max(o.usedBytes, s + r), r;
      }, llseek(e, a, t) {
        var r = a;
        if (t === 1 ? r += e.position : t === 2 && n.isFile(e.node.mode) && (r += e.node.usedBytes), r < 0)
          throw new n.ErrnoError(28);
        return r;
      }, allocate(e, a, t) {
        v.expandFileStorage(e.node, a + t), e.node.usedBytes = Math.max(e.node.usedBytes, a + t);
      }, mmap(e, a, t, r, s) {
        if (!n.isFile(e.node.mode))
          throw new n.ErrnoError(43);
        var i, o, d = e.node.contents;
        if (!(s & 2) && d && d.buffer === j.buffer)
          o = !1, i = d.byteOffset;
        else {
          if (o = !0, i = Ve(), !i)
            throw new n.ErrnoError(48);
          d && ((t > 0 || t + a < d.length) && (d.subarray ? d = d.subarray(t, t + a) : d = Array.prototype.slice.call(d, t, t + a)), j.set(d, i));
        }
        return { ptr: i, allocated: o };
      }, msync(e, a, t, r, s) {
        return v.stream_ops.write(e, a, 0, r, t, !1), 0;
      } } }, Ra = async (e) => {
        var a = await oe(e);
        return new Uint8Array(a);
      }, Xe = (e, a, t, r, s, i) => {
        n.createDataFile(e, a, t, r, s, i);
      }, za = l.preloadPlugins || [], Na = (e, a, t, r) => {
        typeof Browser < "u" && Browser.init();
        var s = !1;
        return za.forEach((i) => {
          s || i.canHandle(a) && (i.handle(e, a, t, r), s = !0);
        }), s;
      }, Ke = (e, a, t, r, s, i, o, d, m, g) => {
        var h = a ? K.resolve(b.join2(e, a)) : e;
        function _(u) {
          function p(f) {
            g?.(), d || Xe(e, a, f, r, s, m), i?.(), le();
          }
          Na(u, h, p, () => {
            o?.(), le();
          }) || p(u);
        }
        Fe(), typeof t == "string" ? Ra(t).then(_, o) : _(t);
      }, Ma = (e) => {
        var a = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }, t = a[e];
        if (typeof t > "u")
          throw new Error(`Unknown file open mode: ${e}`);
        return t;
      }, ze = (e, a) => {
        var t = 0;
        return e && (t |= 365), a && (t |= 146), t;
      }, n = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: !1, ignorePermissions: !0, ErrnoError: class {
        name = "ErrnoError";
        constructor(e) {
          this.errno = e;
        }
      }, filesystems: null, syncFSRequests: 0, readFiles: {}, FSStream: class {
        shared = {};
        get object() {
          return this.node;
        }
        set object(e) {
          this.node = e;
        }
        get isRead() {
          return (this.flags & 2097155) !== 1;
        }
        get isWrite() {
          return (this.flags & 2097155) !== 0;
        }
        get isAppend() {
          return this.flags & 1024;
        }
        get flags() {
          return this.shared.flags;
        }
        set flags(e) {
          this.shared.flags = e;
        }
        get position() {
          return this.shared.position;
        }
        set position(e) {
          this.shared.position = e;
        }
      }, FSNode: class {
        node_ops = {};
        stream_ops = {};
        readMode = 365;
        writeMode = 146;
        mounted = null;
        constructor(e, a, t, r) {
          e || (e = this), this.parent = e, this.mount = e.mount, this.id = n.nextInode++, this.name = a, this.mode = t, this.rdev = r, this.atime = this.mtime = this.ctime = Date.now();
        }
        get read() {
          return (this.mode & this.readMode) === this.readMode;
        }
        set read(e) {
          e ? this.mode |= this.readMode : this.mode &= ~this.readMode;
        }
        get write() {
          return (this.mode & this.writeMode) === this.writeMode;
        }
        set write(e) {
          e ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
        }
        get isFolder() {
          return n.isDir(this.mode);
        }
        get isDevice() {
          return n.isChrdev(this.mode);
        }
      }, lookupPath(e, a = {}) {
        if (!e) return { path: "", node: null };
        a.follow_mount ??= !0, b.isAbs(e) || (e = n.cwd() + "/" + e);
        e: for (var t = 0; t < 40; t++) {
          for (var r = e.split("/").filter((g) => !!g && g !== "."), s = n.root, i = "/", o = 0; o < r.length; o++) {
            var d = o === r.length - 1;
            if (d && a.parent)
              break;
            if (r[o] === "..") {
              i = b.dirname(i), s = s.parent;
              continue;
            }
            i = b.join2(i, r[o]);
            try {
              s = n.lookupNode(s, r[o]);
            } catch (g) {
              if (g?.errno === 44 && d && a.noent_okay)
                return { path: i };
              throw g;
            }
            if (n.isMountpoint(s) && (!d || a.follow_mount) && (s = s.mounted.root), n.isLink(s.mode) && (!d || a.follow)) {
              if (!s.node_ops.readlink)
                throw new n.ErrnoError(52);
              var m = s.node_ops.readlink(s);
              b.isAbs(m) || (m = b.dirname(i) + "/" + m), e = m + "/" + r.slice(o + 1).join("/");
              continue e;
            }
          }
          return { path: i, node: s };
        }
        throw new n.ErrnoError(32);
      }, getPath(e) {
        for (var a; ; ) {
          if (n.isRoot(e)) {
            var t = e.mount.mountpoint;
            return a ? t[t.length - 1] !== "/" ? `${t}/${a}` : t + a : t;
          }
          a = a ? `${e.name}/${a}` : e.name, e = e.parent;
        }
      }, hashName(e, a) {
        for (var t = 0, r = 0; r < a.length; r++)
          t = (t << 5) - t + a.charCodeAt(r) | 0;
        return (e + t >>> 0) % n.nameTable.length;
      }, hashAddNode(e) {
        var a = n.hashName(e.parent.id, e.name);
        e.name_next = n.nameTable[a], n.nameTable[a] = e;
      }, hashRemoveNode(e) {
        var a = n.hashName(e.parent.id, e.name);
        if (n.nameTable[a] === e)
          n.nameTable[a] = e.name_next;
        else
          for (var t = n.nameTable[a]; t; ) {
            if (t.name_next === e) {
              t.name_next = e.name_next;
              break;
            }
            t = t.name_next;
          }
      }, lookupNode(e, a) {
        var t = n.mayLookup(e);
        if (t)
          throw new n.ErrnoError(t);
        for (var r = n.hashName(e.id, a), s = n.nameTable[r]; s; s = s.name_next) {
          var i = s.name;
          if (s.parent.id === e.id && i === a)
            return s;
        }
        return n.lookup(e, a);
      }, createNode(e, a, t, r) {
        var s = new n.FSNode(e, a, t, r);
        return n.hashAddNode(s), s;
      }, destroyNode(e) {
        n.hashRemoveNode(e);
      }, isRoot(e) {
        return e === e.parent;
      }, isMountpoint(e) {
        return !!e.mounted;
      }, isFile(e) {
        return (e & 61440) === 32768;
      }, isDir(e) {
        return (e & 61440) === 16384;
      }, isLink(e) {
        return (e & 61440) === 40960;
      }, isChrdev(e) {
        return (e & 61440) === 8192;
      }, isBlkdev(e) {
        return (e & 61440) === 24576;
      }, isFIFO(e) {
        return (e & 61440) === 4096;
      }, isSocket(e) {
        return (e & 49152) === 49152;
      }, flagsToPermissionString(e) {
        var a = ["r", "w", "rw"][e & 3];
        return e & 512 && (a += "w"), a;
      }, nodePermissions(e, a) {
        return n.ignorePermissions ? 0 : a.includes("r") && !(e.mode & 292) || a.includes("w") && !(e.mode & 146) || a.includes("x") && !(e.mode & 73) ? 2 : 0;
      }, mayLookup(e) {
        if (!n.isDir(e.mode)) return 54;
        var a = n.nodePermissions(e, "x");
        return a || (e.node_ops.lookup ? 0 : 2);
      }, mayCreate(e, a) {
        if (!n.isDir(e.mode))
          return 54;
        try {
          var t = n.lookupNode(e, a);
          return 20;
        } catch {
        }
        return n.nodePermissions(e, "wx");
      }, mayDelete(e, a, t) {
        var r;
        try {
          r = n.lookupNode(e, a);
        } catch (i) {
          return i.errno;
        }
        var s = n.nodePermissions(e, "wx");
        if (s)
          return s;
        if (t) {
          if (!n.isDir(r.mode))
            return 54;
          if (n.isRoot(r) || n.getPath(r) === n.cwd())
            return 10;
        } else if (n.isDir(r.mode))
          return 31;
        return 0;
      }, mayOpen(e, a) {
        return e ? n.isLink(e.mode) ? 32 : n.isDir(e.mode) && (n.flagsToPermissionString(a) !== "r" || a & 512) ? 31 : n.nodePermissions(e, n.flagsToPermissionString(a)) : 44;
      }, MAX_OPEN_FDS: 4096, nextfd() {
        for (var e = 0; e <= n.MAX_OPEN_FDS; e++)
          if (!n.streams[e])
            return e;
        throw new n.ErrnoError(33);
      }, getStreamChecked(e) {
        var a = n.getStream(e);
        if (!a)
          throw new n.ErrnoError(8);
        return a;
      }, getStream: (e) => n.streams[e], createStream(e, a = -1) {
        return e = Object.assign(new n.FSStream(), e), a == -1 && (a = n.nextfd()), e.fd = a, n.streams[a] = e, e;
      }, closeStream(e) {
        n.streams[e] = null;
      }, dupStream(e, a = -1) {
        var t = n.createStream(e, a);
        return t.stream_ops?.dup?.(t), t;
      }, chrdev_stream_ops: { open(e) {
        var a = n.getDevice(e.node.rdev);
        e.stream_ops = a.stream_ops, e.stream_ops.open?.(e);
      }, llseek() {
        throw new n.ErrnoError(70);
      } }, major: (e) => e >> 8, minor: (e) => e & 255, makedev: (e, a) => e << 8 | a, registerDevice(e, a) {
        n.devices[e] = { stream_ops: a };
      }, getDevice: (e) => n.devices[e], getMounts(e) {
        for (var a = [], t = [e]; t.length; ) {
          var r = t.pop();
          a.push(r), t.push(...r.mounts);
        }
        return a;
      }, syncfs(e, a) {
        typeof e == "function" && (a = e, e = !1), n.syncFSRequests++, n.syncFSRequests > 1 && I(`warning: ${n.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
        var t = n.getMounts(n.root.mount), r = 0;
        function s(o) {
          return n.syncFSRequests--, a(o);
        }
        function i(o) {
          if (o)
            return i.errored ? void 0 : (i.errored = !0, s(o));
          ++r >= t.length && s(null);
        }
        t.forEach((o) => {
          if (!o.type.syncfs)
            return i(null);
          o.type.syncfs(o, e, i);
        });
      }, mount(e, a, t) {
        var r = t === "/", s = !t, i;
        if (r && n.root)
          throw new n.ErrnoError(10);
        if (!r && !s) {
          var o = n.lookupPath(t, { follow_mount: !1 });
          if (t = o.path, i = o.node, n.isMountpoint(i))
            throw new n.ErrnoError(10);
          if (!n.isDir(i.mode))
            throw new n.ErrnoError(54);
        }
        var d = { type: e, opts: a, mountpoint: t, mounts: [] }, m = e.mount(d);
        return m.mount = d, d.root = m, r ? n.root = m : i && (i.mounted = d, i.mount && i.mount.mounts.push(d)), m;
      }, unmount(e) {
        var a = n.lookupPath(e, { follow_mount: !1 });
        if (!n.isMountpoint(a.node))
          throw new n.ErrnoError(28);
        var t = a.node, r = t.mounted, s = n.getMounts(r);
        Object.keys(n.nameTable).forEach((o) => {
          for (var d = n.nameTable[o]; d; ) {
            var m = d.name_next;
            s.includes(d.mount) && n.destroyNode(d), d = m;
          }
        }), t.mounted = null;
        var i = t.mount.mounts.indexOf(r);
        t.mount.mounts.splice(i, 1);
      }, lookup(e, a) {
        return e.node_ops.lookup(e, a);
      }, mknod(e, a, t) {
        var r = n.lookupPath(e, { parent: !0 }), s = r.node, i = b.basename(e);
        if (!i || i === "." || i === "..")
          throw new n.ErrnoError(28);
        var o = n.mayCreate(s, i);
        if (o)
          throw new n.ErrnoError(o);
        if (!s.node_ops.mknod)
          throw new n.ErrnoError(63);
        return s.node_ops.mknod(s, i, a, t);
      }, statfs(e) {
        var a = { bsize: 4096, frsize: 4096, blocks: 1e6, bfree: 5e5, bavail: 5e5, files: n.nextInode, ffree: n.nextInode - 1, fsid: 42, flags: 2, namelen: 255 }, t = n.lookupPath(e, { follow: !0 }).node;
        return t?.node_ops.statfs && Object.assign(a, t.node_ops.statfs(t.mount.opts.root)), a;
      }, create(e, a = 438) {
        return a &= 4095, a |= 32768, n.mknod(e, a, 0);
      }, mkdir(e, a = 511) {
        return a &= 1023, a |= 16384, n.mknod(e, a, 0);
      }, mkdirTree(e, a) {
        for (var t = e.split("/"), r = "", s = 0; s < t.length; ++s)
          if (t[s]) {
            r += "/" + t[s];
            try {
              n.mkdir(r, a);
            } catch (i) {
              if (i.errno != 20) throw i;
            }
          }
      }, mkdev(e, a, t) {
        return typeof t > "u" && (t = a, a = 438), a |= 8192, n.mknod(e, a, t);
      }, symlink(e, a) {
        if (!K.resolve(e))
          throw new n.ErrnoError(44);
        var t = n.lookupPath(a, { parent: !0 }), r = t.node;
        if (!r)
          throw new n.ErrnoError(44);
        var s = b.basename(a), i = n.mayCreate(r, s);
        if (i)
          throw new n.ErrnoError(i);
        if (!r.node_ops.symlink)
          throw new n.ErrnoError(63);
        return r.node_ops.symlink(r, s, e);
      }, rename(e, a) {
        var t = b.dirname(e), r = b.dirname(a), s = b.basename(e), i = b.basename(a), o, d, m;
        if (o = n.lookupPath(e, { parent: !0 }), d = o.node, o = n.lookupPath(a, { parent: !0 }), m = o.node, !d || !m) throw new n.ErrnoError(44);
        if (d.mount !== m.mount)
          throw new n.ErrnoError(75);
        var g = n.lookupNode(d, s), h = K.relative(e, r);
        if (h.charAt(0) !== ".")
          throw new n.ErrnoError(28);
        if (h = K.relative(a, t), h.charAt(0) !== ".")
          throw new n.ErrnoError(55);
        var _;
        try {
          _ = n.lookupNode(m, i);
        } catch {
        }
        if (g !== _) {
          var u = n.isDir(g.mode), p = n.mayDelete(d, s, u);
          if (p)
            throw new n.ErrnoError(p);
          if (p = _ ? n.mayDelete(m, i, u) : n.mayCreate(m, i), p)
            throw new n.ErrnoError(p);
          if (!d.node_ops.rename)
            throw new n.ErrnoError(63);
          if (n.isMountpoint(g) || _ && n.isMountpoint(_))
            throw new n.ErrnoError(10);
          if (m !== d && (p = n.nodePermissions(d, "w"), p))
            throw new n.ErrnoError(p);
          n.hashRemoveNode(g);
          try {
            d.node_ops.rename(g, m, i), g.parent = m;
          } catch (f) {
            throw f;
          } finally {
            n.hashAddNode(g);
          }
        }
      }, rmdir(e) {
        var a = n.lookupPath(e, { parent: !0 }), t = a.node, r = b.basename(e), s = n.lookupNode(t, r), i = n.mayDelete(t, r, !0);
        if (i)
          throw new n.ErrnoError(i);
        if (!t.node_ops.rmdir)
          throw new n.ErrnoError(63);
        if (n.isMountpoint(s))
          throw new n.ErrnoError(10);
        t.node_ops.rmdir(t, r), n.destroyNode(s);
      }, readdir(e) {
        var a = n.lookupPath(e, { follow: !0 }), t = a.node;
        if (!t.node_ops.readdir)
          throw new n.ErrnoError(54);
        return t.node_ops.readdir(t);
      }, unlink(e) {
        var a = n.lookupPath(e, { parent: !0 }), t = a.node;
        if (!t)
          throw new n.ErrnoError(44);
        var r = b.basename(e), s = n.lookupNode(t, r), i = n.mayDelete(t, r, !1);
        if (i)
          throw new n.ErrnoError(i);
        if (!t.node_ops.unlink)
          throw new n.ErrnoError(63);
        if (n.isMountpoint(s))
          throw new n.ErrnoError(10);
        t.node_ops.unlink(t, r), n.destroyNode(s);
      }, readlink(e) {
        var a = n.lookupPath(e), t = a.node;
        if (!t)
          throw new n.ErrnoError(44);
        if (!t.node_ops.readlink)
          throw new n.ErrnoError(28);
        return t.node_ops.readlink(t);
      }, stat(e, a) {
        var t = n.lookupPath(e, { follow: !a }), r = t.node;
        if (!r)
          throw new n.ErrnoError(44);
        if (!r.node_ops.getattr)
          throw new n.ErrnoError(63);
        return r.node_ops.getattr(r);
      }, lstat(e) {
        return n.stat(e, !0);
      }, chmod(e, a, t) {
        var r;
        if (typeof e == "string") {
          var s = n.lookupPath(e, { follow: !t });
          r = s.node;
        } else
          r = e;
        if (!r.node_ops.setattr)
          throw new n.ErrnoError(63);
        r.node_ops.setattr(r, { mode: a & 4095 | r.mode & -4096, ctime: Date.now() });
      }, lchmod(e, a) {
        n.chmod(e, a, !0);
      }, fchmod(e, a) {
        var t = n.getStreamChecked(e);
        n.chmod(t.node, a);
      }, chown(e, a, t, r) {
        var s;
        if (typeof e == "string") {
          var i = n.lookupPath(e, { follow: !r });
          s = i.node;
        } else
          s = e;
        if (!s.node_ops.setattr)
          throw new n.ErrnoError(63);
        s.node_ops.setattr(s, { timestamp: Date.now() });
      }, lchown(e, a, t) {
        n.chown(e, a, t, !0);
      }, fchown(e, a, t) {
        var r = n.getStreamChecked(e);
        n.chown(r.node, a, t);
      }, truncate(e, a) {
        if (a < 0)
          throw new n.ErrnoError(28);
        var t;
        if (typeof e == "string") {
          var r = n.lookupPath(e, { follow: !0 });
          t = r.node;
        } else
          t = e;
        if (!t.node_ops.setattr)
          throw new n.ErrnoError(63);
        if (n.isDir(t.mode))
          throw new n.ErrnoError(31);
        if (!n.isFile(t.mode))
          throw new n.ErrnoError(28);
        var s = n.nodePermissions(t, "w");
        if (s)
          throw new n.ErrnoError(s);
        t.node_ops.setattr(t, { size: a, timestamp: Date.now() });
      }, ftruncate(e, a) {
        var t = n.getStreamChecked(e);
        if ((t.flags & 2097155) === 0)
          throw new n.ErrnoError(28);
        n.truncate(t.node, a);
      }, utime(e, a, t) {
        var r = n.lookupPath(e, { follow: !0 }), s = r.node;
        s.node_ops.setattr(s, { atime: a, mtime: t });
      }, open(e, a, t = 438) {
        if (e === "")
          throw new n.ErrnoError(44);
        a = typeof a == "string" ? Ma(a) : a, a & 64 ? t = t & 4095 | 32768 : t = 0;
        var r;
        if (typeof e == "object")
          r = e;
        else {
          var s = n.lookupPath(e, { follow: !(a & 131072), noent_okay: !0 });
          r = s.node, e = s.path;
        }
        var i = !1;
        if (a & 64)
          if (r) {
            if (a & 128)
              throw new n.ErrnoError(20);
          } else
            r = n.mknod(e, t, 0), i = !0;
        if (!r)
          throw new n.ErrnoError(44);
        if (n.isChrdev(r.mode) && (a &= -513), a & 65536 && !n.isDir(r.mode))
          throw new n.ErrnoError(54);
        if (!i) {
          var o = n.mayOpen(r, a);
          if (o)
            throw new n.ErrnoError(o);
        }
        a & 512 && !i && n.truncate(r, 0), a &= -131713;
        var d = n.createStream({ node: r, path: n.getPath(r), flags: a, seekable: !0, position: 0, stream_ops: r.stream_ops, ungotten: [], error: !1 });
        return d.stream_ops.open && d.stream_ops.open(d), l.logReadFiles && !(a & 1) && (e in n.readFiles || (n.readFiles[e] = 1)), d;
      }, close(e) {
        if (n.isClosed(e))
          throw new n.ErrnoError(8);
        e.getdents && (e.getdents = null);
        try {
          e.stream_ops.close && e.stream_ops.close(e);
        } catch (a) {
          throw a;
        } finally {
          n.closeStream(e.fd);
        }
        e.fd = null;
      }, isClosed(e) {
        return e.fd === null;
      }, llseek(e, a, t) {
        if (n.isClosed(e))
          throw new n.ErrnoError(8);
        if (!e.seekable || !e.stream_ops.llseek)
          throw new n.ErrnoError(70);
        if (t != 0 && t != 1 && t != 2)
          throw new n.ErrnoError(28);
        return e.position = e.stream_ops.llseek(e, a, t), e.ungotten = [], e.position;
      }, read(e, a, t, r, s) {
        if (r < 0 || s < 0)
          throw new n.ErrnoError(28);
        if (n.isClosed(e))
          throw new n.ErrnoError(8);
        if ((e.flags & 2097155) === 1)
          throw new n.ErrnoError(8);
        if (n.isDir(e.node.mode))
          throw new n.ErrnoError(31);
        if (!e.stream_ops.read)
          throw new n.ErrnoError(28);
        var i = typeof s < "u";
        if (!i)
          s = e.position;
        else if (!e.seekable)
          throw new n.ErrnoError(70);
        var o = e.stream_ops.read(e, a, t, r, s);
        return i || (e.position += o), o;
      }, write(e, a, t, r, s, i) {
        if (r < 0 || s < 0)
          throw new n.ErrnoError(28);
        if (n.isClosed(e))
          throw new n.ErrnoError(8);
        if ((e.flags & 2097155) === 0)
          throw new n.ErrnoError(8);
        if (n.isDir(e.node.mode))
          throw new n.ErrnoError(31);
        if (!e.stream_ops.write)
          throw new n.ErrnoError(28);
        e.seekable && e.flags & 1024 && n.llseek(e, 0, 2);
        var o = typeof s < "u";
        if (!o)
          s = e.position;
        else if (!e.seekable)
          throw new n.ErrnoError(70);
        var d = e.stream_ops.write(e, a, t, r, s, i);
        return o || (e.position += d), d;
      }, allocate(e, a, t) {
        if (n.isClosed(e))
          throw new n.ErrnoError(8);
        if (a < 0 || t <= 0)
          throw new n.ErrnoError(28);
        if ((e.flags & 2097155) === 0)
          throw new n.ErrnoError(8);
        if (!n.isFile(e.node.mode) && !n.isDir(e.node.mode))
          throw new n.ErrnoError(43);
        if (!e.stream_ops.allocate)
          throw new n.ErrnoError(138);
        e.stream_ops.allocate(e, a, t);
      }, mmap(e, a, t, r, s) {
        if ((r & 2) !== 0 && (s & 2) === 0 && (e.flags & 2097155) !== 2)
          throw new n.ErrnoError(2);
        if ((e.flags & 2097155) === 1)
          throw new n.ErrnoError(2);
        if (!e.stream_ops.mmap)
          throw new n.ErrnoError(43);
        if (!a)
          throw new n.ErrnoError(28);
        return e.stream_ops.mmap(e, a, t, r, s);
      }, msync(e, a, t, r, s) {
        return e.stream_ops.msync ? e.stream_ops.msync(e, a, t, r, s) : 0;
      }, ioctl(e, a, t) {
        if (!e.stream_ops.ioctl)
          throw new n.ErrnoError(59);
        return e.stream_ops.ioctl(e, a, t);
      }, readFile(e, a = {}) {
        if (a.flags = a.flags || 0, a.encoding = a.encoding || "binary", a.encoding !== "utf8" && a.encoding !== "binary")
          throw new Error(`Invalid encoding type "${a.encoding}"`);
        var t, r = n.open(e, a.flags), s = n.stat(e), i = s.size, o = new Uint8Array(i);
        return n.read(r, o, 0, i, 0), a.encoding === "utf8" ? t = V(o) : a.encoding === "binary" && (t = o), n.close(r), t;
      }, writeFile(e, a, t = {}) {
        t.flags = t.flags || 577;
        var r = n.open(e, t.flags, t.mode);
        if (typeof a == "string") {
          var s = new Uint8Array(Ae(a) + 1), i = Re(a, s, 0, s.length);
          n.write(r, s, 0, i, void 0, t.canOwn);
        } else if (ArrayBuffer.isView(a))
          n.write(r, a, 0, a.byteLength, void 0, t.canOwn);
        else
          throw new Error("Unsupported data type");
        n.close(r);
      }, cwd: () => n.currentPath, chdir(e) {
        var a = n.lookupPath(e, { follow: !0 });
        if (a.node === null)
          throw new n.ErrnoError(44);
        if (!n.isDir(a.node.mode))
          throw new n.ErrnoError(54);
        var t = n.nodePermissions(a.node, "x");
        if (t)
          throw new n.ErrnoError(t);
        n.currentPath = a.path;
      }, createDefaultDirectories() {
        n.mkdir("/tmp"), n.mkdir("/home"), n.mkdir("/home/web_user");
      }, createDefaultDevices() {
        n.mkdir("/dev"), n.registerDevice(n.makedev(1, 3), { read: () => 0, write: (r, s, i, o, d) => o, llseek: () => 0 }), n.mkdev("/dev/null", n.makedev(1, 3)), $.register(n.makedev(5, 0), $.default_tty_ops), $.register(n.makedev(6, 0), $.default_tty1_ops), n.mkdev("/dev/tty", n.makedev(5, 0)), n.mkdev("/dev/tty1", n.makedev(6, 0));
        var e = new Uint8Array(1024), a = 0, t = () => (a === 0 && (a = $e(e).byteLength), e[--a]);
        n.createDevice("/dev", "random", t), n.createDevice("/dev", "urandom", t), n.mkdir("/dev/shm"), n.mkdir("/dev/shm/tmp");
      }, createSpecialDirectories() {
        n.mkdir("/proc");
        var e = n.mkdir("/proc/self");
        n.mkdir("/proc/self/fd"), n.mount({ mount() {
          var a = n.createNode(e, "fd", 16895, 73);
          return a.stream_ops = { llseek: v.stream_ops.llseek }, a.node_ops = { lookup(t, r) {
            var s = +r, i = n.getStreamChecked(s), o = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: () => i.path }, id: s + 1 };
            return o.parent = o, o;
          }, readdir() {
            return Array.from(n.streams.entries()).filter(([t, r]) => r).map(([t, r]) => t.toString());
          } }, a;
        } }, {}, "/proc/self/fd");
      }, createStandardStreams(e, a, t) {
        e ? n.createDevice("/dev", "stdin", e) : n.symlink("/dev/tty", "/dev/stdin"), a ? n.createDevice("/dev", "stdout", null, a) : n.symlink("/dev/tty", "/dev/stdout"), t ? n.createDevice("/dev", "stderr", null, t) : n.symlink("/dev/tty1", "/dev/stderr"), n.open("/dev/stdin", 0), n.open("/dev/stdout", 1), n.open("/dev/stderr", 1);
      }, staticInit() {
        n.nameTable = new Array(4096), n.mount(v, {}, "/"), n.createDefaultDirectories(), n.createDefaultDevices(), n.createSpecialDirectories(), n.filesystems = { MEMFS: v };
      }, init(e, a, t) {
        n.initialized = !0, e ??= l.stdin, a ??= l.stdout, t ??= l.stderr, n.createStandardStreams(e, a, t);
      }, quit() {
        n.initialized = !1;
        for (var e = 0; e < n.streams.length; e++) {
          var a = n.streams[e];
          a && n.close(a);
        }
      }, findObject(e, a) {
        var t = n.analyzePath(e, a);
        return t.exists ? t.object : null;
      }, analyzePath(e, a) {
        try {
          var t = n.lookupPath(e, { follow: !a });
          e = t.path;
        } catch {
        }
        var r = { isRoot: !1, exists: !1, error: 0, name: null, path: null, object: null, parentExists: !1, parentPath: null, parentObject: null };
        try {
          var t = n.lookupPath(e, { parent: !0 });
          r.parentExists = !0, r.parentPath = t.path, r.parentObject = t.node, r.name = b.basename(e), t = n.lookupPath(e, { follow: !a }), r.exists = !0, r.path = t.path, r.object = t.node, r.name = t.node.name, r.isRoot = t.path === "/";
        } catch (s) {
          r.error = s.errno;
        }
        return r;
      }, createPath(e, a, t, r) {
        e = typeof e == "string" ? e : n.getPath(e);
        for (var s = a.split("/").reverse(); s.length; ) {
          var i = s.pop();
          if (i) {
            var o = b.join2(e, i);
            try {
              n.mkdir(o);
            } catch {
            }
            e = o;
          }
        }
        return o;
      }, createFile(e, a, t, r, s) {
        var i = b.join2(typeof e == "string" ? e : n.getPath(e), a), o = ze(r, s);
        return n.create(i, o);
      }, createDataFile(e, a, t, r, s, i) {
        var o = a;
        e && (e = typeof e == "string" ? e : n.getPath(e), o = a ? b.join2(e, a) : e);
        var d = ze(r, s), m = n.create(o, d);
        if (t) {
          if (typeof t == "string") {
            for (var g = new Array(t.length), h = 0, _ = t.length; h < _; ++h) g[h] = t.charCodeAt(h);
            t = g;
          }
          n.chmod(m, d | 146);
          var u = n.open(m, 577);
          n.write(u, t, 0, t.length, 0, i), n.close(u), n.chmod(m, d);
        }
      }, createDevice(e, a, t, r) {
        var s = b.join2(typeof e == "string" ? e : n.getPath(e), a), i = ze(!!t, !!r);
        n.createDevice.major ??= 64;
        var o = n.makedev(n.createDevice.major++, 0);
        return n.registerDevice(o, { open(d) {
          d.seekable = !1;
        }, close(d) {
          r?.buffer?.length && r(10);
        }, read(d, m, g, h, _) {
          for (var u = 0, p = 0; p < h; p++) {
            var f;
            try {
              f = t();
            } catch {
              throw new n.ErrnoError(29);
            }
            if (f === void 0 && u === 0)
              throw new n.ErrnoError(6);
            if (f == null) break;
            u++, m[g + p] = f;
          }
          return u && (d.node.atime = Date.now()), u;
        }, write(d, m, g, h, _) {
          for (var u = 0; u < h; u++)
            try {
              r(m[g + u]);
            } catch {
              throw new n.ErrnoError(29);
            }
          return h && (d.node.mtime = d.node.ctime = Date.now()), u;
        } }), n.mkdev(s, i, o);
      }, forceLoadFile(e) {
        if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
        if (typeof XMLHttpRequest < "u")
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        try {
          e.contents = Z(e.url), e.usedBytes = e.contents.length;
        } catch {
          throw new n.ErrnoError(29);
        }
      }, createLazyFile(e, a, t, r, s) {
        class i {
          lengthKnown = !1;
          chunks = [];
          get(p) {
            if (!(p > this.length - 1 || p < 0)) {
              var f = p % this.chunkSize, S = p / this.chunkSize | 0;
              return this.getter(S)[f];
            }
          }
          setDataGetter(p) {
            this.getter = p;
          }
          cacheLength() {
            var p = new XMLHttpRequest();
            if (p.open("HEAD", t, !1), p.send(null), !(p.status >= 200 && p.status < 300 || p.status === 304)) throw new Error("Couldn't load " + t + ". Status: " + p.status);
            var f = Number(p.getResponseHeader("Content-length")), S, N = (S = p.getResponseHeader("Accept-Ranges")) && S === "bytes", A = (S = p.getResponseHeader("Content-Encoding")) && S === "gzip", w = 1024 * 1024;
            N || (w = f);
            var M = (F, C) => {
              if (F > C) throw new Error("invalid range (" + F + ", " + C + ") or no bytes requested!");
              if (C > f - 1) throw new Error("only " + f + " bytes available! programmer error!");
              var D = new XMLHttpRequest();
              if (D.open("GET", t, !1), f !== w && D.setRequestHeader("Range", "bytes=" + F + "-" + C), D.responseType = "arraybuffer", D.overrideMimeType && D.overrideMimeType("text/plain; charset=x-user-defined"), D.send(null), !(D.status >= 200 && D.status < 300 || D.status === 304)) throw new Error("Couldn't load " + t + ". Status: " + D.status);
              return D.response !== void 0 ? new Uint8Array(D.response || []) : Ge(D.responseText || "");
            }, R = this;
            R.setDataGetter((F) => {
              var C = F * w, D = (F + 1) * w - 1;
              if (D = Math.min(D, f - 1), typeof R.chunks[F] > "u" && (R.chunks[F] = M(C, D)), typeof R.chunks[F] > "u") throw new Error("doXHR failed!");
              return R.chunks[F];
            }), (A || !f) && (w = f = 1, f = this.getter(0).length, w = f, Ee("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = f, this._chunkSize = w, this.lengthKnown = !0;
          }
          get length() {
            return this.lengthKnown || this.cacheLength(), this._length;
          }
          get chunkSize() {
            return this.lengthKnown || this.cacheLength(), this._chunkSize;
          }
        }
        if (typeof XMLHttpRequest < "u") {
          if (!re) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
          var o = new i(), d = { isDevice: !1, contents: o };
        } else
          var d = { isDevice: !1, url: t };
        var m = n.createFile(e, a, d, r, s);
        d.contents ? m.contents = d.contents : d.url && (m.contents = null, m.url = d.url), Object.defineProperties(m, { usedBytes: { get: function() {
          return this.contents.length;
        } } });
        var g = {}, h = Object.keys(m.stream_ops);
        h.forEach((u) => {
          var p = m.stream_ops[u];
          g[u] = (...f) => (n.forceLoadFile(m), p(...f));
        });
        function _(u, p, f, S, N) {
          var A = u.node.contents;
          if (N >= A.length) return 0;
          var w = Math.min(A.length - N, S);
          if (A.slice)
            for (var M = 0; M < w; M++)
              p[f + M] = A[N + M];
          else
            for (var M = 0; M < w; M++)
              p[f + M] = A.get(N + M);
          return w;
        }
        return g.read = (u, p, f, S, N) => (n.forceLoadFile(m), _(u, p, f, S, N)), g.mmap = (u, p, f, S, N) => {
          n.forceLoadFile(m);
          var A = Ve();
          if (!A)
            throw new n.ErrnoError(48);
          return _(u, j, A, p, f), { ptr: A, allocated: !0 };
        }, m.stream_ops = g, m;
      } }, z = { DEFAULT_POLLMASK: 5, calculateAt(e, a, t) {
        if (b.isAbs(a))
          return a;
        var r;
        if (e === -100)
          r = n.cwd();
        else {
          var s = z.getStreamFromFD(e);
          r = s.path;
        }
        if (a.length == 0) {
          if (!t)
            throw new n.ErrnoError(44);
          return r;
        }
        return r + "/" + a;
      }, doStat(e, a, t) {
        var r = e(a);
        k[t >> 2] = r.dev, k[t + 4 >> 2] = r.mode, P[t + 8 >> 2] = r.nlink, k[t + 12 >> 2] = r.uid, k[t + 16 >> 2] = r.gid, k[t + 20 >> 2] = r.rdev, E = [r.size >>> 0, (c = r.size, +Math.abs(c) >= 1 ? c > 0 ? +Math.floor(c / 4294967296) >>> 0 : ~~+Math.ceil((c - +(~~c >>> 0)) / 4294967296) >>> 0 : 0)], k[t + 24 >> 2] = E[0], k[t + 28 >> 2] = E[1], k[t + 32 >> 2] = 4096, k[t + 36 >> 2] = r.blocks;
        var s = r.atime.getTime(), i = r.mtime.getTime(), o = r.ctime.getTime();
        return E = [Math.floor(s / 1e3) >>> 0, (c = Math.floor(s / 1e3), +Math.abs(c) >= 1 ? c > 0 ? +Math.floor(c / 4294967296) >>> 0 : ~~+Math.ceil((c - +(~~c >>> 0)) / 4294967296) >>> 0 : 0)], k[t + 40 >> 2] = E[0], k[t + 44 >> 2] = E[1], P[t + 48 >> 2] = s % 1e3 * 1e3 * 1e3, E = [Math.floor(i / 1e3) >>> 0, (c = Math.floor(i / 1e3), +Math.abs(c) >= 1 ? c > 0 ? +Math.floor(c / 4294967296) >>> 0 : ~~+Math.ceil((c - +(~~c >>> 0)) / 4294967296) >>> 0 : 0)], k[t + 56 >> 2] = E[0], k[t + 60 >> 2] = E[1], P[t + 64 >> 2] = i % 1e3 * 1e3 * 1e3, E = [Math.floor(o / 1e3) >>> 0, (c = Math.floor(o / 1e3), +Math.abs(c) >= 1 ? c > 0 ? +Math.floor(c / 4294967296) >>> 0 : ~~+Math.ceil((c - +(~~c >>> 0)) / 4294967296) >>> 0 : 0)], k[t + 72 >> 2] = E[0], k[t + 76 >> 2] = E[1], P[t + 80 >> 2] = o % 1e3 * 1e3 * 1e3, E = [r.ino >>> 0, (c = r.ino, +Math.abs(c) >= 1 ? c > 0 ? +Math.floor(c / 4294967296) >>> 0 : ~~+Math.ceil((c - +(~~c >>> 0)) / 4294967296) >>> 0 : 0)], k[t + 88 >> 2] = E[0], k[t + 92 >> 2] = E[1], 0;
      }, doMsync(e, a, t, r, s) {
        if (!n.isFile(a.node.mode))
          throw new n.ErrnoError(43);
        if (r & 2)
          return 0;
        var i = G.slice(e, e + t);
        n.msync(a, i, s, t, r);
      }, getStreamFromFD(e) {
        var a = n.getStreamChecked(e);
        return a;
      }, varargs: void 0, getStr(e) {
        var a = ce(e);
        return a;
      } };
      function Ta(e, a, t) {
        z.varargs = t;
        try {
          var r = z.getStreamFromFD(e);
          switch (a) {
            case 0: {
              var s = pe();
              if (s < 0)
                return -28;
              for (; n.streams[s]; )
                s++;
              var i;
              return i = n.dupStream(r, s), i.fd;
            }
            case 1:
            case 2:
              return 0;
            case 3:
              return r.flags;
            case 4: {
              var s = pe();
              return r.flags |= s, 0;
            }
            case 12: {
              var s = X(), o = 0;
              return Q[s + o >> 1] = 2, 0;
            }
            case 13:
            case 14:
              return 0;
          }
          return -28;
        } catch (d) {
          if (typeof n > "u" || d.name !== "ErrnoError") throw d;
          return -d.errno;
        }
      }
      var J = (e, a, t) => Re(e, G, a, t);
      function ja(e, a, t) {
        try {
          var r = z.getStreamFromFD(e);
          r.getdents ||= n.readdir(r.path);
          for (var s = 280, i = 0, o = n.llseek(r, 0, 1), d = Math.floor(o / s), m = Math.min(r.getdents.length, d + Math.floor(t / s)), g = d; g < m; g++) {
            var h, _, u = r.getdents[g];
            if (u === ".")
              h = r.node.id, _ = 4;
            else if (u === "..") {
              var p = n.lookupPath(r.path, { parent: !0 });
              h = p.node.id, _ = 4;
            } else {
              var f;
              try {
                f = n.lookupNode(r.node, u);
              } catch (S) {
                if (S?.errno === 28)
                  continue;
                throw S;
              }
              h = f.id, _ = n.isChrdev(f.mode) ? 2 : n.isDir(f.mode) ? 4 : n.isLink(f.mode) ? 10 : 8;
            }
            E = [h >>> 0, (c = h, +Math.abs(c) >= 1 ? c > 0 ? +Math.floor(c / 4294967296) >>> 0 : ~~+Math.ceil((c - +(~~c >>> 0)) / 4294967296) >>> 0 : 0)], k[a + i >> 2] = E[0], k[a + i + 4 >> 2] = E[1], E = [(g + 1) * s >>> 0, (c = (g + 1) * s, +Math.abs(c) >= 1 ? c > 0 ? +Math.floor(c / 4294967296) >>> 0 : ~~+Math.ceil((c - +(~~c >>> 0)) / 4294967296) >>> 0 : 0)], k[a + i + 8 >> 2] = E[0], k[a + i + 12 >> 2] = E[1], Q[a + i + 16 >> 1] = 280, j[a + i + 18] = _, J(u, a + i + 19, 256), i += s;
          }
          return n.llseek(r, g * s, 0), i;
        } catch (S) {
          if (typeof n > "u" || S.name !== "ErrnoError") throw S;
          return -S.errno;
        }
      }
      function Ca(e, a, t) {
        z.varargs = t;
        try {
          var r = z.getStreamFromFD(e);
          switch (a) {
            case 21509:
              return r.tty ? 0 : -59;
            case 21505: {
              if (!r.tty) return -59;
              if (r.tty.ops.ioctl_tcgets) {
                var s = r.tty.ops.ioctl_tcgets(r), i = X();
                k[i >> 2] = s.c_iflag || 0, k[i + 4 >> 2] = s.c_oflag || 0, k[i + 8 >> 2] = s.c_cflag || 0, k[i + 12 >> 2] = s.c_lflag || 0;
                for (var o = 0; o < 32; o++)
                  j[i + o + 17] = s.c_cc[o] || 0;
                return 0;
              }
              return 0;
            }
            case 21510:
            case 21511:
            case 21512:
              return r.tty ? 0 : -59;
            case 21506:
            case 21507:
            case 21508: {
              if (!r.tty) return -59;
              if (r.tty.ops.ioctl_tcsets) {
                for (var i = X(), d = k[i >> 2], m = k[i + 4 >> 2], g = k[i + 8 >> 2], h = k[i + 12 >> 2], _ = [], o = 0; o < 32; o++)
                  _.push(j[i + o + 17]);
                return r.tty.ops.ioctl_tcsets(r.tty, a, { c_iflag: d, c_oflag: m, c_cflag: g, c_lflag: h, c_cc: _ });
              }
              return 0;
            }
            case 21519: {
              if (!r.tty) return -59;
              var i = X();
              return k[i >> 2] = 0, 0;
            }
            case 21520:
              return r.tty ? -28 : -59;
            case 21531: {
              var i = X();
              return n.ioctl(r, a, i);
            }
            case 21523: {
              if (!r.tty) return -59;
              if (r.tty.ops.ioctl_tiocgwinsz) {
                var u = r.tty.ops.ioctl_tiocgwinsz(r.tty), i = X();
                Q[i >> 1] = u[0], Q[i + 2 >> 1] = u[1];
              }
              return 0;
            }
            case 21524:
              return r.tty ? 0 : -59;
            case 21515:
              return r.tty ? 0 : -59;
            default:
              return -28;
          }
        } catch (p) {
          if (typeof n > "u" || p.name !== "ErrnoError") throw p;
          return -p.errno;
        }
      }
      function xa(e, a, t, r) {
        z.varargs = r;
        try {
          a = z.getStr(a), a = z.calculateAt(e, a);
          var s = r ? pe() : 0;
          return n.open(a, t, s).fd;
        } catch (i) {
          if (typeof n > "u" || i.name !== "ErrnoError") throw i;
          return -i.errno;
        }
      }
      function Oa(e) {
        try {
          return e = z.getStr(e), n.rmdir(e), 0;
        } catch (a) {
          if (typeof n > "u" || a.name !== "ErrnoError") throw a;
          return -a.errno;
        }
      }
      function La(e, a) {
        try {
          return e = z.getStr(e), z.doStat(n.stat, e, a);
        } catch (t) {
          if (typeof n > "u" || t.name !== "ErrnoError") throw t;
          return -t.errno;
        }
      }
      function Ua(e, a, t) {
        try {
          return a = z.getStr(a), a = z.calculateAt(e, a), t === 0 ? n.unlink(a) : t === 512 ? n.rmdir(a) : W("Invalid flags passed to unlinkat"), 0;
        } catch (r) {
          if (typeof n > "u" || r.name !== "ErrnoError") throw r;
          return -r.errno;
        }
      }
      var Ba = () => W(""), Ia = (e, a, t) => G.copyWithin(e, a, a + t), qa = (e, a, t, r) => {
        var s = (/* @__PURE__ */ new Date()).getFullYear(), i = new Date(s, 0, 1), o = new Date(s, 6, 1), d = i.getTimezoneOffset(), m = o.getTimezoneOffset(), g = Math.max(d, m);
        P[e >> 2] = g * 60, k[a >> 2] = +(d != m);
        var h = (p) => {
          var f = p >= 0 ? "-" : "+", S = Math.abs(p), N = String(Math.floor(S / 60)).padStart(2, "0"), A = String(S % 60).padStart(2, "0");
          return `UTC${f}${N}${A}`;
        }, _ = h(d), u = h(m);
        m < d ? (J(_, t, 17), J(u, r, 17)) : (J(_, r, 17), J(u, t, 17));
      }, Ha = () => performance.now(), Je = () => Date.now(), Wa = (e) => e >= 0 && e <= 3, $a = (e, a) => a + 2097152 >>> 0 < 4194305 - !!e ? (e >>> 0) + a * 4294967296 : NaN;
      function Ga(e, a, t, r) {
        if (!Wa(e))
          return 28;
        var s;
        e === 0 ? s = Je() : s = Ha();
        var i = Math.round(s * 1e3 * 1e3);
        return E = [i >>> 0, (c = i, +Math.abs(c) >= 1 ? c > 0 ? +Math.floor(c / 4294967296) >>> 0 : ~~+Math.ceil((c - +(~~c >>> 0)) / 4294967296) >>> 0 : 0)], k[r >> 2] = E[0], k[r + 4 >> 2] = E[1], 0;
      }
      var Va = (e) => {
        W("OOM");
      }, Xa = (e) => {
        G.length, Va();
      }, Ne = {}, Ka = () => ie || "./this.program", ae = () => {
        if (!ae.strings) {
          var e = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", a = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: e, _: Ka() };
          for (var t in Ne)
            Ne[t] === void 0 ? delete a[t] : a[t] = Ne[t];
          var r = [];
          for (var t in a)
            r.push(`${t}=${a[t]}`);
          ae.strings = r;
        }
        return ae.strings;
      }, Ja = (e, a) => {
        for (var t = 0; t < e.length; ++t)
          j[a++] = e.charCodeAt(t);
        j[a] = 0;
      }, Ya = (e, a) => {
        var t = 0;
        return ae().forEach((r, s) => {
          var i = a + t;
          P[e + s * 4 >> 2] = i, Ja(r, i), t += r.length + 1;
        }), 0;
      }, Za = (e, a) => {
        var t = ae();
        P[e >> 2] = t.length;
        var r = 0;
        return t.forEach((s) => r += s.length + 1), P[a >> 2] = r, 0;
      }, Qa = (e) => {
        Se = e, be(e, new qe(e));
      }, Ye = (e, a) => {
        Se = e, Qa(e);
      }, et = Ye;
      function at(e) {
        try {
          var a = z.getStreamFromFD(e);
          return n.close(a), 0;
        } catch (t) {
          if (typeof n > "u" || t.name !== "ErrnoError") throw t;
          return t.errno;
        }
      }
      var tt = (e, a, t, r) => {
        for (var s = 0, i = 0; i < t; i++) {
          var o = P[a >> 2], d = P[a + 4 >> 2];
          a += 8;
          var m = n.read(e, j, o, d, r);
          if (m < 0) return -1;
          if (s += m, m < d) break;
        }
        return s;
      };
      function nt(e, a, t, r) {
        try {
          var s = z.getStreamFromFD(e), i = tt(s, a, t);
          return P[r >> 2] = i, 0;
        } catch (o) {
          if (typeof n > "u" || o.name !== "ErrnoError") throw o;
          return o.errno;
        }
      }
      function rt(e, a, t, r, s) {
        var i = $a(a, t);
        try {
          if (isNaN(i)) return 61;
          var o = z.getStreamFromFD(e);
          return n.llseek(o, i, r), E = [o.position >>> 0, (c = o.position, +Math.abs(c) >= 1 ? c > 0 ? +Math.floor(c / 4294967296) >>> 0 : ~~+Math.ceil((c - +(~~c >>> 0)) / 4294967296) >>> 0 : 0)], k[s >> 2] = E[0], k[s + 4 >> 2] = E[1], o.getdents && i === 0 && r === 0 && (o.getdents = null), 0;
        } catch (d) {
          if (typeof n > "u" || d.name !== "ErrnoError") throw d;
          return d.errno;
        }
      }
      var st = (e, a, t, r) => {
        for (var s = 0, i = 0; i < t; i++) {
          var o = P[a >> 2], d = P[a + 4 >> 2];
          a += 8;
          var m = n.write(e, j, o, d, r);
          if (m < 0) return -1;
          if (s += m, m < d)
            break;
        }
        return s;
      };
      function it(e, a, t, r) {
        try {
          var s = z.getStreamFromFD(e), i = st(s, a, t);
          return P[r >> 2] = i, 0;
        } catch (o) {
          if (typeof n > "u" || o.name !== "ErrnoError") throw o;
          return o.errno;
        }
      }
      var ot = (e) => {
        if (e instanceof qe || e == "unwind")
          return Se;
        be(1, e);
      }, Ze = (e) => ea(e), dt = (e) => {
        var a = Ae(e) + 1, t = Ze(a);
        return J(e, t, a), t;
      }, lt = n.createPath, ft = (e) => n.unlink(e), mt = n.createLazyFile, ct = n.createDevice;
      n.createPreloadedFile = Ke, n.staticInit(), l.FS_createPath = n.createPath, l.FS_createDataFile = n.createDataFile, l.FS_createPreloadedFile = n.createPreloadedFile, l.FS_unlink = n.unlink, l.FS_createLazyFile = n.createLazyFile, l.FS_createDevice = n.createDevice, v.doesNotExistError = new n.ErrnoError(44), v.doesNotExistError.stack = "<generic error, no stack>";
      var pt = { a: Sa, b: Pa, e: Ta, s: ja, h: Ca, f: xa, q: Oa, p: La, r: Ua, k: Ba, j: Ia, n: qa, l: Ga, i: Je, o: Xa, t: Ya, u: Za, d: et, c: at, v: nt, m: rt, g: it }, Y;
      Ea();
      var Qe = l._main = (e, a) => (Qe = l._main = Y.y)(e, a), ea = (e) => (ea = Y.A)(e);
      l.addRunDependency = Fe, l.removeRunDependency = le, l.callMain = aa, l.FS_createPreloadedFile = Ke, l.FS_unlink = ft, l.FS_createPath = lt, l.FS_createDevice = ct, l.FS = n, l.FS_createDataFile = Xe, l.FS_createLazyFile = mt;
      var ge;
      ee = function e() {
        ge || ta(), ge || (ee = e);
      };
      function aa(e = []) {
        var a = Qe;
        e.unshift(ie);
        var t = e.length, r = Ze((t + 1) * 4), s = r;
        e.forEach((o) => {
          P[s >> 2] = dt(o), s += 4;
        }), P[s >> 2] = 0;
        try {
          var i = a(t, r);
          return Ye(i, !0), i;
        } catch (o) {
          return ot(o);
        }
      }
      function ta(e = we) {
        if (H > 0 || (la(), H > 0))
          return;
        function a() {
          ge || (ge = !0, l.calledRun = !0, !Oe && (fa(), ma(), q(l), l.onRuntimeInitialized?.(), na && aa(e), ca()));
        }
        l.setStatus ? (l.setStatus("Running..."), setTimeout(() => {
          setTimeout(() => l.setStatus(""), 1), a();
        }, 1)) : a();
      }
      if (l.preInit)
        for (typeof l.preInit == "function" && (l.preInit = [l.preInit]); l.preInit.length > 0; )
          l.preInit.pop()();
      var na = !1;
      return l.noInitialRun && (na = !1), ta(), T = he, T;
    };
  })();
  typeof je == "object" && typeof B == "object" ? (B.exports = Te, B.exports.default = Te) : typeof define == "function" && define.amd && define([], () => Te);
  const kt = (B.exports == null ? {} : B.exports).default || B.exports;
  globalThis.__createPhonemize = kt;
});
wt();
export default (...a) => globalThis.__createPhonemize(...a);
