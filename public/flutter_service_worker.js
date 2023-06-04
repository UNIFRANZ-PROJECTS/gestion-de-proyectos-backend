'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_69.part.js": "2ddd1cb7c234c57103dc2a911ca9c4c2",
"main.dart.js_24.part.js": "001e628ba0885293e212d812e0dd6d2f",
"main.dart.js_46.part.js": "f2610542ccec715a96c2ed3a97d29c57",
"version.json": "a5eec91a3f6426e1bfa90139f964ca99",
"main.dart.js_7.part.js": "e5e3d841d4efdc453cb680bcd3b5c308",
"main.dart.js_60.part.js": "841d3ca692071082b35bfa7920dda1cb",
"main.dart.js_70.part.js": "8fd7330cb962c900aecd6b5c9e3fb2b8",
"main.dart.js_12.part.js": "4456d6feaee0c52af21a11f76e0a2bf7",
"main.dart.js_71.part.js": "8d98051d4252b6ec282201b7ecb4a558",
"main.dart.js_61.part.js": "9600997bc55fe861e9cbd1bf77087f2d",
"main.dart.js_6.part.js": "589e5b4bd305b83819cf1e5a19e88594",
"index.html": "e6d69bbc42a18bd838d3428a218055dd",
"/": "e6d69bbc42a18bd838d3428a218055dd",
"main.dart.js_13.part.js": "d3b5c20dba0f2f5d13508b6eb62d44c2",
"main.dart.js_68.part.js": "f35e1a9ee31d1648eb30c696e802d46a",
"main.dart.js_35.part.js": "80e705c92bff33f7f1c7211cf9ae9f43",
"main.dart.js_25.part.js": "24709cbafafafd38759c94bff0370508",
"main.dart.js_47.part.js": "8d041bfbc828c1707ee3c2a6842a6c7a",
"main.dart.js_4.part.js": "e92a316d14ee282b03b0cfa000a14fca",
"main.dart.js": "b5d48c3491feda72913885487cce26c8",
"main.dart.js_18.part.js": "de9153089f599fdf1fc1c7c12f0e8e5a",
"main.dart.js_45.part.js": "6626464f2008c5bb86ce70d41213c536",
"main.dart.js_55.part.js": "30fd06b652a038c8c81916be17507f05",
"main.dart.js_27.part.js": "1f0c56baec32ffdc83b55ffabf0d789b",
"main.dart.js_37.part.js": "baef743ec31e59e3b0312017b9c93de9",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js_54.part.js": "52f4ca5759ac8d0a744811776dd138d6",
"main.dart.js_44.part.js": "222ba31c19d0542a189c3da579a3adf0",
"main.dart.js_36.part.js": "24c1298689d61b25bc62b5dab63696fb",
"main.dart.js_26.part.js": "f4dcb599b7815a5298568f1ea7f8e21c",
"main.dart.js_10.part.js": "d999a4cb2e5ec23a7adad6dae5c726f2",
"main.dart.js_62.part.js": "a02c824d96bd33eb6c77239cfb3c7b24",
"main.dart.js_58.part.js": "5f32ea19d49ba3bca8c58227f030d0d2",
"main.dart.js_48.part.js": "c000b46f24dc07fba5f8a7420f6da962",
"main.dart.js_15.part.js": "2551e7be94f4f8496cb7cb5535705afe",
"main.dart.js_67.part.js": "37a3aadea5fba9a87ec4e5e55ea53264",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_41.part.js": "9c21ab715c5cc1d19620455d3aeda1e8",
"main.dart.js_51.part.js": "bade015063fe290e1d35d93cda89e012",
"main.dart.js_23.part.js": "8ede8936f8abb0dc235b4ffaed0cfc3b",
"main.dart.js_33.part.js": "9295ab93a690f78dabca47270af6138a",
"logo.png": "d5e22350d54b71c5b857038bd73bb252",
"main.dart.js_50.part.js": "ed52960bdd4826bb80c660885ca9294b",
"main.dart.js_32.part.js": "58cf2ffd22baf498b189184e7025be1c",
"main.dart.js_22.part.js": "54a33157eed992365b0c718b9cdcbc3d",
"main.dart.js_8.part.js": "72bd6b33a65c4f5e14bb975f700450a6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2983fdf2a82fa9321a7466c147023f3f",
"main.dart.js_49.part.js": "db29a8f5203af335d7e2c5034e253dcd",
"main.dart.js_59.part.js": "1f07a079bfa41147a4eb92c9dd34e4e6",
"main.dart.js_14.part.js": "e530556b4f78549380f5a089a42e2c80",
"main.dart.js_66.part.js": "2f2248cb03a0fb23842e7f520c32e948",
"main.dart.js_1.part.js": "ef382b7d1027a00a1f6286987b7ec865",
"main.dart.js_20.part.js": "0112ae4517fd27ced492459967bdb960",
"main.dart.js_52.part.js": "9c17c2482720b809dc7f7d7680e7296c",
"main.dart.js_29.part.js": "edab5f70d32eba0b891cedac40d1b35a",
"main.dart.js_64.part.js": "e3c36881d5a0ace7448cc94eeab42106",
"main.dart.js_3.part.js": "ba72f0fbd2a5f71e3c9a806e2bed945b",
"main.dart.js_16.part.js": "4f2a5370f4f2a48adcf3c2e9dfff46f5",
"assets/AssetManifest.json": "489e783b3f653ad5f749ce65169783ee",
"assets/NOTICES": "b975e75223ce155834e17b5dc88c260c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "f52f7c91786d971a98aa68df04255761",
"assets/fonts/MaterialIcons-Regular.otf": "56285793858bfec368b7cf2360f93457",
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
"main.dart.js_28.part.js": "1015c78af86e78a4e0f694fb075fa613",
"main.dart.js_38.part.js": "f7d11f3a2981cfb43114705e2e9f588b",
"main.dart.js_65.part.js": "9cf7392820fb4731c1a890d55af53ec3",
"main.dart.js_17.part.js": "812116ab2b51db4db7bb7b791a5b6f58",
"main.dart.js_31.part.js": "fe8b82091bb0bd642e8c5bd8e56737a7",
"main.dart.js_21.part.js": "205cff93deeba43962c333ffa078816c",
"main.dart.js_53.part.js": "b90882d0d4ec1b87bfacfdbfe8e479d9",
"main.dart.js_43.part.js": "16a454ae1c1951bf785d4a1a26e728d7",
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
