'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_69.part.js": "1d0121514bba3b97cece7a389a5be8d7",
"main.dart.js_24.part.js": "809b61c2f8a757fcb9346d4b5029c437",
"main.dart.js_34.part.js": "ed9fb460298acc88a8ce96f88801424d",
"main.dart.js_46.part.js": "02ad0d3c40ce77e5d20aa1ed62232501",
"version.json": "a5eec91a3f6426e1bfa90139f964ca99",
"main.dart.js_7.part.js": "e05fea817ac0a3391a52932308e9b7eb",
"main.dart.js_60.part.js": "8ccee7186889d4c9cdf34fd7224c467b",
"main.dart.js_70.part.js": "676ccdca5a40f10988434b11ad5ede45",
"main.dart.js_12.part.js": "20aba3e75b6695c849a4a9f89c90b11c",
"main.dart.js_61.part.js": "a3b0f92a40d6fa07f6a0144c20041bef",
"main.dart.js_6.part.js": "412654102cf06cc5cfc90a0909266a57",
"index.html": "e1bbb0f6d71d75ce71af58e44b3501c4",
"/": "e1bbb0f6d71d75ce71af58e44b3501c4",
"main.dart.js_13.part.js": "a82e47b8e79078fa2010dfe2a578ab82",
"main.dart.js_68.part.js": "6dadd6860fa9e9b86e3668d25cfd63ab",
"main.dart.js_35.part.js": "ddeacdb648aced3f741f58880b30a766",
"main.dart.js_25.part.js": "6c094a0ecdb1087db7022efe9d457c4d",
"main.dart.js_57.part.js": "823a85220c04f4c47854f42c596c8719",
"main.dart.js_47.part.js": "049b2069c6f59ed378d53d4cab45370a",
"main.dart.js_11.part.js": "90296a78d5bd44f4ccccfc7b49e0ab9e",
"main.dart.js_63.part.js": "c2a9fb3fba84d27ad98310fa1c78d3d8",
"main.dart.js_4.part.js": "9a9c7c5545200023c988a1e0b808f33b",
"main.dart.js": "0eada339b875e0fc2fa19af279b3b426",
"main.dart.js_45.part.js": "ed1060b7510b145161675b0b594eb107",
"main.dart.js_27.part.js": "53dbdd4658e5bdaf518b3167e2936dba",
"main.dart.js_37.part.js": "eba547dea42448d7130815e3dd330f1d",
"main.dart.js_19.part.js": "fec2bd2a2faec92599adca40181b0f69",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js_54.part.js": "ffb50d8c20e313f9dfc329d4675f9492",
"main.dart.js_44.part.js": "99a61574b9c52706fbce907a15a0ba7d",
"main.dart.js_36.part.js": "708d3d1ff2344f71e153d8c5741378a6",
"main.dart.js_26.part.js": "8140002ef51bbdc7d963f265f0168405",
"main.dart.js_10.part.js": "9b2eb2a49a3cbbe34d5db1b8eb2e0dc8",
"main.dart.js_58.part.js": "5cd72344ea31aa8f14167d6b637a4316",
"main.dart.js_48.part.js": "84a7735cfac970ef6813f0524cd9e681",
"main.dart.js_15.part.js": "28ccfd840f7535c4702497c8fee55251",
"main.dart.js_67.part.js": "3acb0fdb79baa0b97ae5a207c39eeeeb",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_51.part.js": "d7df6524c830a3d9c2a4592614197580",
"main.dart.js_23.part.js": "de54f43e3786a4e5c18e3e5374ec8931",
"logo.png": "d5e22350d54b71c5b857038bd73bb252",
"main.dart.js_50.part.js": "3abb35642fe67fd678a56e917c8915b9",
"main.dart.js_40.part.js": "9682cc49b008d07e917c05a5d2a08cde",
"main.dart.js_32.part.js": "e328f5f01940830bd966afd45ccb0a1b",
"main.dart.js_22.part.js": "2a636e4db0bf30d725211ceb6d7b83cd",
"main.dart.js_8.part.js": "aaf453f69224ed082fc151071e269c1f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2983fdf2a82fa9321a7466c147023f3f",
"main.dart.js_49.part.js": "3b1f70453130ad6962573d635b0556ba",
"main.dart.js_59.part.js": "50e1d05c100a8fad0978af04c904f5cb",
"main.dart.js_14.part.js": "1ca846ecd2a24464f4d2084fb54037e5",
"main.dart.js_66.part.js": "efe2db98282f85c196b9bbc61105acb1",
"main.dart.js_1.part.js": "23347d2325d8450b900527c40df987f6",
"main.dart.js_20.part.js": "3ff09a28e1c33fdfd482fac3c6d10a78",
"main.dart.js_30.part.js": "15321d1778311156978d9a6674e04316",
"main.dart.js_42.part.js": "01ad2f779e02291e7364b85765da97cd",
"main.dart.js_52.part.js": "55354e948e9dbb62f4a421187353d8b5",
"main.dart.js_64.part.js": "3e5bc4737d4945f938ab7934ad21dc1f",
"main.dart.js_3.part.js": "7b29599fcf9317c969f8d407c6baaefc",
"main.dart.js_16.part.js": "e9ce1acac2f4d2dac6c4481bc85304aa",
"assets/AssetManifest.json": "489e783b3f653ad5f749ce65169783ee",
"assets/NOTICES": "b975e75223ce155834e17b5dc88c260c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "f52f7c91786d971a98aa68df04255761",
"assets/fonts/MaterialIcons-Regular.otf": "92bc99ca13fd7c2b40fc2709a6ca30ff",
"assets/assets/images/logo-dorado.png": "3004d069218bfaac89e2eadd341a7800",
"assets/assets/images/no-image.jpg": "9d6effa3cf2851c6de57db9aaa28ea55",
"assets/assets/images/logo-plateado.png": "4ce3542148a2389c658f51c12ec39196",
"assets/assets/images/study.jpg": "106aef4c07f45da56336d0884e39cbd3",
"assets/assets/images/home-03.jpg": "9fd812f6269cb7830389ee2846feacf5",
"assets/assets/images/home-02.jpg": "f5642308b8ac2b4d7118c1f225b15ac1",
"assets/assets/images/logo.png": "d5e22350d54b71c5b857038bd73bb252",
"assets/assets/images/home-01.jpg": "9c14fc5cd8551aed314c74241b9bcce4",
"assets/assets/images/home-04.jpg": "e8c7681805f3c67c5760bf0cf31a0c66",
"assets/assets/images/logo-bronce.png": "9808392c7c39ceb98a6ff0c668af83ba",
"assets/assets/images/logo.svg": "8be9b5920276355a6ef3efaaf987424d",
"assets/assets/images/fondo.png": "27f31eee97b9be76eb3eb1b15d538afd",
"assets/assets/gifs/loader.gif": "74b84c61dc457547ce5c674e0ef82c19",
"assets/assets/gifs/load.gif": "7fc09f7a20685bfbdccd4d80c9acab59",
"main.dart.js_28.part.js": "b2d34d0cd6b7ff8f593c45539674e50c",
"main.dart.js_65.part.js": "5a8c3e2570c2420036f60819b54ca890",
"main.dart.js_17.part.js": "44109eda69fb4dbfbc71403989c82b0a",
"main.dart.js_31.part.js": "37bd115a021f3b1ff4f3fcbcbe56af68",
"main.dart.js_21.part.js": "f95ed10a50d78b5591eeb5c8f094966a",
"main.dart.js_53.part.js": "c9860e0fe0b552a10f5d7a2ceebd1aaa",
"main.dart.js_43.part.js": "04fe1f7628765fa6e19c31ea32202c50",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
