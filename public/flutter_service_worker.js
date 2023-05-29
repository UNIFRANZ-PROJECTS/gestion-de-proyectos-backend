'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_24.part.js": "bf9b272b0d8a7866b0bb04f974846993",
"main.dart.js_46.part.js": "3b72b2faf88e2e9dca3c0aaecbd170f9",
"main.dart.js_56.part.js": "e8576ce38ee99e1c020af40f338b2941",
"version.json": "a5eec91a3f6426e1bfa90139f964ca99",
"main.dart.js_60.part.js": "bd69b63e5da5930d6f873b30c39ba269",
"main.dart.js_12.part.js": "bf1cebf3f0d646d4c4d7c3ff3436dc76",
"main.dart.js_61.part.js": "8be46309ff099d081659461ead2a70fc",
"main.dart.js_6.part.js": "c2624e418b594000eabc9ad5c254c6a8",
"index.html": "f9c57516ed28a3b173626b6a52b9b598",
"/": "f9c57516ed28a3b173626b6a52b9b598",
"main.dart.js_13.part.js": "55683062b6b02b106970d2aa3b702104",
"main.dart.js_35.part.js": "6dc04c28b1299e8de6e9e4f47e27af59",
"main.dart.js_25.part.js": "87c727c00fd577254b8365c8caef63df",
"main.dart.js_57.part.js": "d0d466db35d05df059b104e200bfe5d7",
"main.dart.js_47.part.js": "9eebae79d4dd2d73f64f215f9f24144a",
"main.dart.js_11.part.js": "7eab5e383818be4fefc504666f04d037",
"main.dart.js_63.part.js": "ed72296223d8817b2701fd6b1c032605",
"main.dart.js_4.part.js": "d104e65509d65fba8f5267a1be198c55",
"main.dart.js": "28415f014a15a2deecab2e2bab97a118",
"main.dart.js_45.part.js": "4d27b81f5228becb63d81530d9ad1261",
"main.dart.js_37.part.js": "77adf167bd5cd22ba03879f2da9d91ca",
"main.dart.js_19.part.js": "e09065bf19ac1366bd2663e0767df7ee",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js_54.part.js": "b53cbcb8cc19a6f414c4a9a3fb334c0e",
"main.dart.js_44.part.js": "133925e6257c342b967f50b8c4e215d9",
"main.dart.js_36.part.js": "f65ee85bc007e3e97c212cba0c27cee5",
"main.dart.js_26.part.js": "37f53ea81d4a0e31ab89a9dd9b24ad2d",
"main.dart.js_10.part.js": "a892a46ee475ba99bb0c57e0ad886631",
"main.dart.js_62.part.js": "ce3d2716eccc6a95e031110400d19f61",
"main.dart.js_58.part.js": "fc071d4bab051d43029973c9356315ec",
"main.dart.js_48.part.js": "653849f49e364d9ddce4eb58f1c0c829",
"main.dart.js_15.part.js": "22b9e444e0a7ba2837fb61a11a65d6d0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_41.part.js": "7b4d23a22aff1ba62c34af424be4af46",
"main.dart.js_51.part.js": "6a63d78ab5effe54b6a9ee63078f07dc",
"main.dart.js_33.part.js": "e0f0bc8e178e3f988a6b20e963e7112e",
"main.dart.js_9.part.js": "11e8d6731c9ee4ebc865c5bacc7cca99",
"main.dart.js_50.part.js": "c27234efad2e75c1670bcf4e1870a243",
"main.dart.js_40.part.js": "33135cc61fd2323ff17d5cd7bd3f7648",
"main.dart.js_32.part.js": "87d66bde84c533ef89c68794ab7cd9d7",
"main.dart.js_22.part.js": "38005ff9223bdffef96fcb1d6baf7011",
"main.dart.js_8.part.js": "b21381e1b2175ea4e4e652753d1dce17",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2983fdf2a82fa9321a7466c147023f3f",
"main.dart.js_59.part.js": "2feda822e25365597aa12fb54edfd267",
"main.dart.js_14.part.js": "da63107f09557a17b8357117a80d8475",
"main.dart.js_1.part.js": "c4c511838f66669e2e3b3ec8a8667110",
"main.dart.js_30.part.js": "b8dbc49115dcfcecb957d28c9db69755",
"main.dart.js_42.part.js": "5f842aeb461b550e3761a92ce0802275",
"main.dart.js_52.part.js": "296b21769b4af8e4bda21629551e7860",
"main.dart.js_29.part.js": "9d90b014a6574b60c243e38475069693",
"main.dart.js_64.part.js": "be9e9c73b4fd5e4e4e334df47fa484a8",
"main.dart.js_3.part.js": "7ad0833f63d6284b7c9c08ac2ffb9ce5",
"main.dart.js_16.part.js": "ba48f21059e06901979e81550dc390f2",
"assets/AssetManifest.json": "eee11d058b15c6ea918e4a0a502f5535",
"assets/NOTICES": "b7047c51f6003f741e279f7ee564b89a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "e9b615ba838bbeed8c87baca76b88ef2",
"assets/fonts/MaterialIcons-Regular.otf": "1c8ef3dcfde167cb8d1da3f0dbc5b830",
"assets/assets/images/logo-dorado.png": "3004d069218bfaac89e2eadd341a7800",
"assets/assets/images/no-image.jpg": "9d6effa3cf2851c6de57db9aaa28ea55",
"assets/assets/images/logo-plateado.png": "4ce3542148a2389c658f51c12ec39196",
"assets/assets/images/study.jpg": "106aef4c07f45da56336d0884e39cbd3",
"assets/assets/images/logo-centro.png": "d5e22350d54b71c5b857038bd73bb252",
"assets/assets/images/home-03.jpg": "9fd812f6269cb7830389ee2846feacf5",
"assets/assets/images/home-02.jpg": "f5642308b8ac2b4d7118c1f225b15ac1",
"assets/assets/images/logo.png": "db0b0df8643903e929df0622401f45c2",
"assets/assets/images/home-01.jpg": "9c14fc5cd8551aed314c74241b9bcce4",
"assets/assets/images/home-04.jpg": "e8c7681805f3c67c5760bf0cf31a0c66",
"assets/assets/images/logo-bronce.png": "9808392c7c39ceb98a6ff0c668af83ba",
"assets/assets/images/logo.svg": "8be9b5920276355a6ef3efaaf987424d",
"assets/assets/gifs/loader.gif": "74b84c61dc457547ce5c674e0ef82c19",
"assets/assets/gifs/load.gif": "7fc09f7a20685bfbdccd4d80c9acab59",
"main.dart.js_38.part.js": "8285ac45184198de0bef87954f53e2c1",
"main.dart.js_65.part.js": "852da40306ee8912693b811a3378566f",
"main.dart.js_17.part.js": "086db55721d344abe4582e7da6a9e33c",
"main.dart.js_31.part.js": "949590262af5f12e90d47bbf5446cbfb",
"main.dart.js_53.part.js": "1e82b78baad749a35d33c47a7676c490",
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
