'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8cab35da5a84cca32381d2558e8a7eac",
"assets/assets/about1.jpeg": "ed95aedd6432e55192576ed3740d9910",
"assets/assets/about2.jpeg": "fc6568d30a9ec96b1558a7b24b35cc84",
"assets/assets/about3.jpeg": "3a2a11f4477640dd7b78ba77993367a1",
"assets/assets/contactUs.jpg": "130ea8bed8fc1f2812a5bae6d72d6a20",
"assets/assets/diagnosticsAndSpecialist/accu.jpeg": "a2526b2c67c9f697ec188eb8a17cf0c2",
"assets/assets/diagnosticsAndSpecialist/ARKM-150-main.jpg": "c5ab9e93f23615878b4a273196ee1f00",
"assets/assets/diagnosticsAndSpecialist/ARKM-150.jpg": "7b2dd036ca771605b5772ee0e7d250ba",
"assets/assets/diagnosticsAndSpecialist/CP-40-thumb.jpg": "2aeb4ae884ad1580680ff3dbefc62eb0",
"assets/assets/diagnosticsAndSpecialist/CP-40.jpeg": "a73b86503240d7b8ff2d8bada3da0be9",
"assets/assets/diagnosticsAndSpecialist/CP_40%2523.jpeg": "bf37b283e891de8f345e021ec3a38738",
"assets/assets/diagnosticsAndSpecialist/diagnostics.jpg": "311527319f4ecd8fa93e87430d0fcd58",
"assets/assets/diagnosticsAndSpecialist/MT-266.jpeg": "b693b99df66bd76e86c1efbb03d5e2ff",
"assets/assets/diagnosticsAndSpecialist/show.jpg": "85ea0e344469a0843b96e11d798dd87f",
"assets/assets/diagnosticsAndSpecialist/SM-Tube_Thumb.jpg": "6553a79d8d145591ea4d7ddea04286ce",
"assets/assets/diagnosticsAndSpecialist/smTube.jpeg": "eeeb9045b9f4afdafbf9c14be9243df0",
"assets/assets/diagnosticsAndSpecialist/SNT700-thumb.jpg": "9836c2ccef53ee168d73f819144f1ea2",
"assets/assets/diagnosticsAndSpecialist/SNT700.....jpeg": "36fe32eaf4817bb7c05c30d90ef57032",
"assets/assets/diagnosticsAndSpecialist/SNT700...jpeg": "db6598497b35e5887dd698ac904ca68c",
"assets/assets/diagnosticsAndSpecialist/SNT700..jpeg": "df9de6db42ab062a3bae2016ef369d53",
"assets/assets/diagnosticsAndSpecialist/SNT700.jpeg": "db5e94f6d45f9c409b5f9daa8390878c",
"assets/assets/diagnosticsAndSpecialist/TF-600.jpeg": "b6b8732494744bb3ce6bddd7c3b3728f",
"assets/assets/diagnosticsAndSpecialist/VT-5%2523.jpeg": "ad63ee6bafd9f572168c71370fefc55e",
"assets/assets/diagnosticsAndSpecialist/VT-5.jpeg": "f33525dc3bb433d43e66f311cc851c11",
"assets/assets/diagnosticsAndSpecialist/VT5-thumb.jpg": "9d390337ebcd74b746338705dcb8f648",
"assets/assets/eye2.jpg": "75ce8d426dee7891b6fac2966ff8c4d5",
"assets/assets/imagingSystems/dis1.jpg": "56ac4fbfeb0a5b8b8dc5fd994fcbc1a6",
"assets/assets/imagingSystems/imagingSystems.jpg": "29902ead9bf2f593a7dbac089a3c1876",
"assets/assets/imagingSystems/show.jpg": "544aa9d3319b8d9a46fe043800855e6d",
"assets/assets/imagingSystems/td10.jpg": "f41de903b80f64af37ec74c4d2f4c997",
"assets/assets/operatingMicroscopes/OM-19-thumb.jpg": "e2cda1a0d94e0e8021271a914611ed48",
"assets/assets/operatingMicroscopes/OM-9-thumb.jpg": "0b8b5d7b5f05d87881a68bd3b892b47d",
"assets/assets/operatingMicroscopes/om19.jpeg": "dd37aa306a1a465375ab035dfdc8978e",
"assets/assets/operatingMicroscopes/om6.jpeg": "c4337f7ec2f883e3b541740e2d4e4497",
"assets/assets/operatingMicroscopes/om6blur.jpeg": "60ea4e4a111266d5a4fb8dbaa68e0900",
"assets/assets/operatingMicroscopes/om9.jpeg": "07b2b016a06dbbd9a7131fd4062d09f3",
"assets/assets/operatingMicroscopes/om9blur.jpeg": "8af94e6af1e68886de6e97721d0a65af",
"assets/assets/operatingMicroscopes/om_6_thumb.jpg": "8cee611ce1d1e1e1702b857284aada2d",
"assets/assets/operatingMicroscopes/operatingMicroscopes.jpg": "a9bb7ee27f3fed4438a3a0d58f70cdee",
"assets/assets/operatingMicroscopes/show.jpg": "5c5a5de679e39f0a873b55bda197d325",
"assets/assets/opthalmicFurnitures/DeltaQ.jpg": "936222ffee14f0b2d5564884f5e35406",
"assets/assets/opthalmicFurnitures/drone4.jpeg": "7a518e4231578b952135eb432811c792",
"assets/assets/opthalmicFurnitures/drone4.jpg": "03071ea27fd97e82957740d45d04da2b",
"assets/assets/opthalmicFurnitures/drone41.jpeg": "b112780378ee4826b07d1f41502e9c0f",
"assets/assets/opthalmicFurnitures/furnitures.jpg": "01526494f6790b90bab3289b38a62ea9",
"assets/assets/opthalmicFurnitures/MDS-14-14s.jpeg": "56a6f295bf30f49a7b69f436271c1a77",
"assets/assets/opthalmicFurnitures/show.jpg": "4082eb0da6cdc9fa4e2d2dc1fb95822a",
"assets/assets/opthalmicFurnitures/Zulu-1.jpeg": "b004218695ecbdacc97892c87671be9f",
"assets/assets/opthalmicFurnitures/Zulu-2.jpg": "22b5f39eb15caab3819d04181b710445",
"assets/assets/opthalmicFurnitures/Zulu-3.png": "f2f9b45cf8802888a2877678805c3c9f",
"assets/assets/photo16642554522222222226.jpeg": "e5d61940d28ccad5dd1ff59eccba6538",
"assets/assets/slitLampMicroscopes/30GL-with-hand-rest_thumb.jpg": "26422866427756737b3d4103b1263814",
"assets/assets/slitLampMicroscopes/30GL..jpeg": "5ed800a1bdaaa194fcee56e051fb59c7",
"assets/assets/slitLampMicroscopes/30GL.jpeg": "e7b41f40328b06a0bf89861534720898",
"assets/assets/slitLampMicroscopes/700GL-with-hand-rest_thumb.jpg": "87081c8291090aa3d765314870770935",
"assets/assets/slitLampMicroscopes/700GL.jpeg": "74a62c6fe9c71382dc5530700b60f96e",
"assets/assets/slitLampMicroscopes/700GLBlur.jpeg": "dfd800833dccf131793e4b3d0a00ccd1",
"assets/assets/slitLampMicroscopes/AT-1-thumb.jpg": "58ec1b40859150353af263288e5fb176",
"assets/assets/slitLampMicroscopes/AT-1.jpeg": "22333af0c6aff0a4d7f4d886fe256aa8",
"assets/assets/slitLampMicroscopes/MS1.jpg": "b2bfef8f375f1b9cbc393debe01df0e0",
"assets/assets/slitLampMicroscopes/MS1_thumb.jpg": "59795c170e88edecfbcfba2cd2c25af6",
"assets/assets/slitLampMicroscopes/show.jpg": "29b4dfc1be59edd5cbee1cad8a56e109",
"assets/assets/slitLampMicroscopes/slitLamp.jpeg": "af670458a67835698a7f2a7c75a4b5b2",
"assets/assets/slitLampMicroscopes/slitLampMicroscopes.jpg": "9c3f6b6081bb7821a9fab0080f923930",
"assets/assets/team.jpeg": "64e4d5e62a1b02c8c3a8b47c0ddfc62b",
"assets/assets/team2.jpeg": "399c82e854500df33201b4c68fd0b257",
"assets/assets/team3.jpeg": "7760a50bdd4997be3b50554709d67a84",
"assets/assets/tmicoLogo.png": "4f966dd1097b7ee887d3a9830ed321ca",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "a53128fe3a1505f6de29be9e8f5b0ca0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/shaders/ink_sparkle.frag": "a04e492a05f9fd1a8cc6f12163b184dd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "069eef370e6509890fcc4a796b4e0cc5",
"/": "069eef370e6509890fcc4a796b4e0cc5",
"main.dart.js": "c77ef1a8485841c6b53aea74e50b2ce2",
"manifest.json": "1dc78e5b9563fc94972ea3e3fb1532f2",
"version.json": "a66e6ac443284a351975c76c5678e350"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
