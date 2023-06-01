'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_69.part.js": "18fda3b99c8ee6b1dda914ca126b1c2d",
"main.dart.js_24.part.js": "50ed3c1c963c1b764a5d432c38cdef65",
"main.dart.js_34.part.js": "e46c08932a991533c6cb5aadea1c3c79",
"main.dart.js_46.part.js": "32f3afc20d505208691054659dbbb955",
"main.dart.js_56.part.js": "16bd8b5ed7ec364b22b53f5bd291e766",
"version.json": "a5eec91a3f6426e1bfa90139f964ca99",
"main.dart.js_7.part.js": "d7d21a9fc603fa49f1aa3dd7b6a1a242",
"main.dart.js_60.part.js": "7bfd97470f2684bc5e3189522e898844",
"main.dart.js_12.part.js": "a1636fca3961a99bd68fbe389a8ecf56",
"main.dart.js_6.part.js": "1858059c8308e0cd740b84fba7fe9b3c",
"index.html": "e26b7c531d8ad5f07420964bcb401253",
"/": "e26b7c531d8ad5f07420964bcb401253",
"main.dart.js_13.part.js": "a839e1300e38a7bd6fc01efa683efc06",
"main.dart.js_68.part.js": "1938fcb66e35479a179a2f917a3d0f41",
"main.dart.js_35.part.js": "ee11a32be6e00e1d245fd460ce6fe181",
"main.dart.js_25.part.js": "7283de89ede4f09a52fee93762c16714",
"main.dart.js_57.part.js": "2033a97168a31c80cc613dda016015ca",
"main.dart.js_47.part.js": "187321ddb0fa6b7d5c004a39145f1f17",
"main.dart.js_11.part.js": "64f93d5189a0fbcb8b447fd7b388760a",
"main.dart.js_63.part.js": "40ee570116a49cd18adfd6a737894e56",
"main.dart.js_4.part.js": "5f335101a9e388ff627598cdbed44d2d",
"main.dart.js": "d26a8f5eba83ed34de535ada706dadd6",
"main.dart.js_45.part.js": "a3042583ca8e61fbd26efd3de8a8cb33",
"main.dart.js_27.part.js": "c84cf364d2a8ba456b88390d42af6156",
"main.dart.js_37.part.js": "83156651ac9f95770862550c6285c99d",
"main.dart.js_19.part.js": "629775a2f621a76f92ce0dd413dd1fc5",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js_44.part.js": "2979e0d7cbe9ad1bcb38588761de5a33",
"main.dart.js_36.part.js": "76a39e65e83f1cb524d957d30fe2f793",
"main.dart.js_26.part.js": "7cde0407fd23f27fb76b17b6fdae076c",
"main.dart.js_10.part.js": "2766412e666964fb7e9f08e245d9c7df",
"main.dart.js_62.part.js": "2a5d5f25c1d72311a2f450fafe2a9321",
"main.dart.js_58.part.js": "785522c7085b3a53fa67a3305cbca49c",
"main.dart.js_48.part.js": "5741067c9e7e7d8561ceac1f230f175c",
"main.dart.js_15.part.js": "efda18e240eee14d57eddaf7baf3348c",
"main.dart.js_67.part.js": "47d2b852bd08bec97df952314a76f277",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_51.part.js": "9dfffa2fdc7c0a04a9520d49a59cb39d",
"main.dart.js_23.part.js": "58fa7aa694d1100394c245f5073035aa",
"logo.png": "d5e22350d54b71c5b857038bd73bb252",
"main.dart.js_50.part.js": "c7970e59bfc6ac405fd08bb64f80a626",
"main.dart.js_40.part.js": "164139c7d9a5604e83ebcb3e7ea605a7",
"main.dart.js_32.part.js": "a23a223ac435de586ba911f33b49eb0d",
"main.dart.js_22.part.js": "b9fe30189e88767c9bb85d26371b028c",
"main.dart.js_8.part.js": "321e15f79149bfcf65bbc0d3026a6b22",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2983fdf2a82fa9321a7466c147023f3f",
"main.dart.js_49.part.js": "d190b968d7308a21002235fff7caec41",
"main.dart.js_59.part.js": "0f6209489818123d3e1995df0306dc3b",
"main.dart.js_14.part.js": "46a1f25a72afda874441e7c4ef157a8e",
"main.dart.js_66.part.js": "dfc394ee08e9ff2e3f13362453570396",
"main.dart.js_1.part.js": "6d21190bde3e935e99aa06edcf30f8e1",
"main.dart.js_20.part.js": "1ab27c41721c130f088dc753d12bc548",
"main.dart.js_30.part.js": "f0fd6d7ac0ec52e05010e23c7d71c4eb",
"main.dart.js_42.part.js": "d4f969519c38fcc201441a5a79088b55",
"main.dart.js_52.part.js": "901ea4c31c8641efc69700fd88aa7c07",
"main.dart.js_64.part.js": "b14377093995b4438f96c70f9bc20dca",
"main.dart.js_3.part.js": "7b29599fcf9317c969f8d407c6baaefc",
"main.dart.js_16.part.js": "2088e4782f783c094498fa4727d4a72b",
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
"main.dart.js_28.part.js": "7367f7831a47970501bb8a1741fff680",
"main.dart.js_65.part.js": "84234d5d07e3def84e9e6c7e4afdbaaa",
"main.dart.js_17.part.js": "8383057a54978f0dec1f7317f3e3c5f2",
"main.dart.js_31.part.js": "31be9b87d20ea83cee57e129d731d296",
"main.dart.js_21.part.js": "7d8f7081f53d71b03c3e7047b0178630",
"main.dart.js_53.part.js": "443ef2f2a891624212e95c4e3357c2e9",
"main.dart.js_43.part.js": "889c658643949de82c5c8093c22f8498",
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
