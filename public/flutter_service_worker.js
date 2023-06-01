'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_69.part.js": "6a7c95b920a53408375dfaed3332dcad",
"main.dart.js_24.part.js": "0a5f11b903b44d4b4823921d8eea06e9",
"main.dart.js_34.part.js": "c346fca91c1d0e21913aef6dea243ec9",
"main.dart.js_46.part.js": "265abece5789cf9104e22eb95bda988a",
"main.dart.js_56.part.js": "6bdf7809f5ebfcda93659d398ad296f3",
"version.json": "a5eec91a3f6426e1bfa90139f964ca99",
"main.dart.js_7.part.js": "14347d20614ef2c8de8592b337981cf4",
"main.dart.js_60.part.js": "458cdeb1fe0abb013ba4c7008cd0e37c",
"main.dart.js_12.part.js": "4a61b01f82ba9d4617e7f6c3673f6fd0",
"main.dart.js_6.part.js": "29d426637c1e4909cc185dcdbaefb9e1",
"index.html": "8431ceed97a7cea18e90a207b2db9b00",
"/": "8431ceed97a7cea18e90a207b2db9b00",
"main.dart.js_13.part.js": "bf85c620ea044e8aeca0015059edc555",
"main.dart.js_68.part.js": "08f43cd0a28485e15193eb5c420d51e8",
"main.dart.js_35.part.js": "16d8ef5f2fa2c854b36a620fdb8fe288",
"main.dart.js_25.part.js": "7283de89ede4f09a52fee93762c16714",
"main.dart.js_57.part.js": "afb7b8a717bc3999515623ddcb7f3587",
"main.dart.js_47.part.js": "d5d8fba502d271fcf26fcaf21e1b3758",
"main.dart.js_11.part.js": "efa427c73063ee78b1462e85a8392ef7",
"main.dart.js_63.part.js": "d8a15cf505d7fc10f0712ffd6ab5ecc7",
"main.dart.js_4.part.js": "fc87650358ad72681868110fc783a5fd",
"main.dart.js": "df5e431424bb8d20d634dca24846c0dd",
"main.dart.js_45.part.js": "06cee2296f9c1739d4d10766c441fa31",
"main.dart.js_27.part.js": "ce6f851451498ab8ca1bc7092d4c3b4f",
"main.dart.js_37.part.js": "7c5f3bda4f48b7d2606363c68154c4ab",
"main.dart.js_19.part.js": "78d7cd4a0f96abfa65875d05e5ecabb4",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js_44.part.js": "b55e62a2fa92d262c0fe9778dc270996",
"main.dart.js_36.part.js": "18316ee8c4311936c84fa74f0b4b454d",
"main.dart.js_26.part.js": "fbfcaaa8eabc157ac508aaf368ba095a",
"main.dart.js_10.part.js": "001d0edb8ca1d7f373e344e2c4e4287a",
"main.dart.js_62.part.js": "a3855755e1a540876f50b930d03a3023",
"main.dart.js_58.part.js": "bb33ff4d55da87017759ae5571b29c66",
"main.dart.js_48.part.js": "210e3ff350ac62a1d1bc30e9f050c29c",
"main.dart.js_15.part.js": "48f15035d5839e2cbf5482e10ed5c61d",
"main.dart.js_67.part.js": "6110909d3a60f8ebc9566671f81b988c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_51.part.js": "912870fd9ad17db3afb0df7b4d355e88",
"main.dart.js_23.part.js": "de54f43e3786a4e5c18e3e5374ec8931",
"logo.png": "d5e22350d54b71c5b857038bd73bb252",
"main.dart.js_50.part.js": "3678e656ffa9cddc20aa75fabce37c71",
"main.dart.js_40.part.js": "b401d1fe6f2b7f7eaa9d37f49c270d70",
"main.dart.js_32.part.js": "efb5c080a8a498c072d6c3091af3261c",
"main.dart.js_22.part.js": "42b4f1fd7c4404692133266df5a39a31",
"main.dart.js_8.part.js": "be9bf86768429024b9da14e79548e0d1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2983fdf2a82fa9321a7466c147023f3f",
"main.dart.js_49.part.js": "e940837dafec44d1de6cb85cd1e1f4ac",
"main.dart.js_59.part.js": "6b9d4528398c4595695cf8f61eb283fa",
"main.dart.js_14.part.js": "1ab67bebc0df4fdd7c22a085f251d6a6",
"main.dart.js_66.part.js": "892a2a06acc9f88ce79dfe4c3ccfb835",
"main.dart.js_1.part.js": "2099f40be55db90a0caabf7986716d09",
"main.dart.js_20.part.js": "d26044bf2082063a3a922b2480a973bb",
"main.dart.js_30.part.js": "de8ff199b3cc57392230a47640a19c86",
"main.dart.js_42.part.js": "0ce269f7c733463865b173bebb375906",
"main.dart.js_52.part.js": "159bbd63432d100d154491dcdb1a737c",
"main.dart.js_64.part.js": "97a465267a0825616cdac84464847d52",
"main.dart.js_3.part.js": "7b29599fcf9317c969f8d407c6baaefc",
"main.dart.js_16.part.js": "f665a4e1d949bce81775c3886142202d",
"assets/AssetManifest.json": "489e783b3f653ad5f749ce65169783ee",
"assets/NOTICES": "b975e75223ce155834e17b5dc88c260c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "f52f7c91786d971a98aa68df04255761",
"assets/fonts/MaterialIcons-Regular.otf": "0d0fabe933aa775ba1aaed77a6f0ec23",
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
"main.dart.js_28.part.js": "cffe10b077a5a638be3bce18bd1d0491",
"main.dart.js_65.part.js": "a0623399c8866ace8d9cf26c8e76d285",
"main.dart.js_17.part.js": "fed74006736c77798605e1bdf3e850d8",
"main.dart.js_31.part.js": "9615e207badcf7326b210e5af64e9140",
"main.dart.js_21.part.js": "7de27b7d6bdba991708545faa6e81a61",
"main.dart.js_53.part.js": "6c2c0d545b59e173c6951e5c48f6ee47",
"main.dart.js_43.part.js": "27e055340c0498dfc053f3e62a196ee6",
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
