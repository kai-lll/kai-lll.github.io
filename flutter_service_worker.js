'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ed710bad5af15d9e8c7353d874be9183",
"index.html": "bf5f33ad922169ef0a7917250f41337b",
"/": "bf5f33ad922169ef0a7917250f41337b",
"main.dart.js": "2e95088f3f09a0233149dc9c98068161",
"README.md": "b372d89b8107e3a65dbfab0629ccb570",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "11936c9a18a27b4446344c3c75c9b799",
".git/ORIG_HEAD": "980d7a764ac391a2facf3722a32bc9a6",
".git/config": "595134e862cc57cafebab6611985ec6c",
".git/objects/66/3874b7732ca4aba01972a5711a450074dffff9": "36c4ad1f7a67990f9e43000fc263cb29",
".git/objects/3e/5f1403f16cbc39cb893c077257d0e5b07facc8": "28885255d737420f8489fe10f1a73344",
".git/objects/3e/6cdd83d5ff0691afae7d12b0fbee16c90b8df7": "5bb771b5bb362081c9dabb3a6745d80e",
".git/objects/6f/9a1abb3de12b725334276653e6915505cb3592": "e061f4c874ec43743bc8ec8e91d6ba7e",
".git/objects/9b/7b1ed3d8af0e08fc566970cb1704070ab192b3": "42e5ef61eed99d77a2a35d3977b6b0be",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9e/6acf31535a9f06e65d4f66bc4a13e256752072": "f3c892ac00b781d3901d74cb8e47968f",
".git/objects/9e/b173cc0c30fad1b9e8cf9086c2ad21f128bbfe": "827c51ccbece74b5386bde7f22cda8fb",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/eb1ddfbbc029bcab630581847471d7f238ec53": "b69277a8e391674b63a06b70141a9094",
".git/objects/67/eb2e037f02fb9782cf40b0d4b4d3155ed8a6e7": "67ab1b3c15d4d5c8ad0910233f720ec1",
".git/objects/67/ca4f6ff59c4cfb3add2e7ca8ee28eaa5289eb2": "2dcf0cf6cb96d265c7b4faaae63d77db",
".git/objects/93/4bacd35db3bcaf2267850977ce714af271212c": "c1eb9d6d63296db2da3555075cf543f6",
".git/objects/94/543eb8e7956539fb549dbf6d925c6f287bbe33": "e4ca0705784846b6e3d10fd957f07bef",
".git/objects/60/e1f6fccbbc677f6d90708b1000689477959c9f": "a9db968fc71dca7d65222e8e56ea76db",
".git/objects/a4/8e6a1a42f80fcb197e618fd8acad4477254a21": "2355878e461188013a559ac270e9c83d",
".git/objects/b2/43dd85a149495c2a11231af2038a11c2ef9cb3": "0956c3e5433c3a4c096437b8abb888bd",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/bb/865f978331b2aef138ed2f29f954f23696a948": "3e67b98e37fda64c1656e579e23cc40e",
".git/objects/da/23297a09ae300affddae01ab328a86f358328b": "31a39176b7ab060b28fb97c13300a827",
".git/objects/a5/5e7a179bde3e4e772c29c0c85e53354aa54618": "864fa237a43374fa8fb2d83b5db70152",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/bc/587d4d03175b4002c66ed56a2a89a7302737ef": "f84813b6e76905bf3ef1290f0929319f",
".git/objects/d8/c349b5ee9afca3fbba87dd037e7a1ca4c8414b": "fffce5092a0e624980792b3a4ed7a059",
".git/objects/e5/7cde844ed9d9498a6b307740d629f8265b21a2": "101a779cb1534fd9a48490cf4ccc7624",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/f4/6d33eff2432e42fcc01f9d95ff9712ddabc657": "1e6e7eedded9d58b9c8633602fceceaa",
".git/objects/f3/fd145d48468ec09c0e9eb3918e66c78ad842b1": "72331777b308a3a04fdb9528ac790fb9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/4b0508a12992019c571d1de6989dbb86f80a58": "c252ae05e5e067c76dc63652d93f7a49",
".git/objects/f2/8a92cddcd9dd8970898bd80bf804622a94cbe4": "9904226392fae07f3971c7630d6355e5",
".git/objects/f5/21b5ca66b30fece4bc1037ab33e1078f4b6df9": "50eec0680555f3dcd17d48937d7d0636",
".git/objects/e3/8b4fa29d2f34f3efce2021747131ae7854fd49": "811fe2044baa86f1fd25698c234e5827",
".git/objects/ed/67f55f0e6dc3ec6e235f1c716f7e5939fb9271": "99e5112dac0a196aa64ec386293d9b46",
".git/objects/ec/7af7de2e25b346894a76f1ee7644c1984c8f91": "73ab8242da979dca5d294745c18479cb",
".git/objects/18/38d989d0bdb62dc34da4b082776512615359e2": "032282c47e081c8ccbfb654cd8a1d1c6",
".git/objects/27/db19eb3ccc29bb89b9a31870e93bd2db90ac03": "a4a7e6c245e23c2e0b0aff3a96758174",
".git/objects/42/5718f50544aa225537d9146f48fe43844592d1": "fad9e7f9578f325a15b0adbd4e72d711",
".git/objects/42/06a1162bbb922e64f4041ffb00028e4c88395f": "de036c4e3a71c20edf8871b49e04ff22",
".git/objects/1a/fb33dc4169ed1e70c3d331ed08266682fa62eb": "25cf58ce2e0d075f22f93fa016710823",
".git/objects/17/63e153b6f24f136d4d5567320e74f68b248b87": "3c120e06a805f50856e2d4abd1fcc145",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/2fedf4abc460ca21932905653e7d8b72f660bb": "5bf253790c182f028e12defdd84c1238",
".git/objects/4d/fd4c891c9cde9035ca788f76e9bf29bb15873b": "68771508cc65ef39a8de83f872d231a4",
".git/objects/75/a1dbf893148b4815ab112a1536cc62c7db7ca4": "16bf17f9b9ffe7fa08e3590bc06c3ce8",
".git/objects/2a/603f01a6545e75392ea20e82d44c2aefa55f09": "33be169980626aa544e2868077e26928",
".git/objects/88/6704742bb3d9ddf7f21ce121471b28872ecc62": "00476fb32d8d2d395d67c56dbedfed93",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/7e9c96c082afc56f9ea8accb9ad1b6a51b50f6": "14502d3847951153e727697a99425fe5",
".git/objects/07/d2c0a9531c03d4820e38fdc77c05c5ceff1d5d": "05b2c535efe26adccc2df4d738ecc2a4",
".git/objects/6e/70ba4da23ea172d0a2aa85c2d9d4d2e522f9ec": "c74873d71a4c68ea8dd0a32a25e64d40",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/31/455b7d7befa77ac105aec9c7d91874826d0b02": "c5a55fcb720f2a266da7508c936d2d61",
".git/objects/62/01ca2cbd0c4f9aa188c86f15f2c1c61f29c705": "584b10a59e33d21bf369499b914b4499",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/54/27816b230f32f79cb2f5f1e6e3a5e6c1521ffb": "d2fed837a4491b6e01da09c08700c14c",
".git/objects/3f/e8cc9238f266b718555d65436d420ff68d7c21": "22a96f9e2a84a3702dbf2b4f48fb21a8",
".git/objects/6d/02e8cdfaeff581e2765a5a704a4549a9c2af4f": "f0e3c299321418417f80f3b7195dad7f",
".git/objects/06/a704910b4bc4713c00609ba683d8596d787ce3": "0fdb8e33605f075f73c54d2df107b6ca",
".git/objects/55/adaaed822278ce7504a4f279983af63c818bbc": "241447f1d710a9fef8fba17c5cde58b8",
".git/objects/0a/bcea9da539d6fdc654dcb52df2ff682c939fbc": "03673f79606495fc45dbd200d4329a92",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/90/8b62b0d946f62fb475c77a42b3cbd14b815bc7": "d7733e0ccecfadb6407ea93bcce60f46",
".git/objects/a0/899fff514fbe27c26e3c2f51377d4fa1c8af54": "bff628c9c9ec0c869a16f2f94a3aeb76",
".git/objects/b1/2c410e6c3017589f8a4e256454de4dbfe5ec89": "bf1ff386cfc90135821e6113ef782d16",
".git/objects/d5/f37e505d83a59c86e622fb5ac2f28cd3a02b25": "e1407e75205f51ba19d12f80763b32ab",
".git/objects/aa/aee6a888794124433fc79d2efd1e51fb43e4ae": "050ab749920afcc6b5631032fed4dfc6",
".git/objects/b7/b12fa2d2264d73cce7d09b91eca13fc0ee7423": "3da547f5e0635d8bb597ea09cdf6f4d2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6eb695408a051f2450fa99e34e7dc85d514e6e": "71f587ed6996413f8108aef2d7e280d4",
".git/objects/a1/aa1d67b8805710d0bdeaa8d7c2173186d6248e": "15a8bc8a82f7f2259ad124191195697f",
".git/objects/c4/0fd1098b5774e300b770c1db0bc1bca526330d": "cc1dbce4c752b1f1ef08b63aad8a7229",
".git/objects/e1/74836ebb2bdb2bfcc36a45f08d0cd7ac58c19a": "d5fc2402285464e5146447fb26c6589f",
".git/objects/c5/200edd153ff88059ac76e56d7421a9eac883f2": "1261fd71c0d3ef68315419c97e6bf875",
".git/objects/c2/d8ba6c6cbb070112465dac3393ffa2f51048d4": "31747d7044dba0e13eea8ac3c663ec4e",
".git/objects/f8/bc925dc98cd6122189eb0db764e5caec39d0ac": "dd79b59a5aa1004e59c73e86f38b3906",
".git/objects/e0/85b3d723a975e6152b1380f264dcc549692df4": "084adf06e5876e329c16321799791297",
".git/objects/46/355285cb52ff5885ba345d9328e62afca69864": "4d061be92cdca9c5cbd7c6d7c1565735",
".git/objects/79/56438db1887b701ff24359963599cb075255af": "882e7d93e411fc12ddda08b591d015c8",
".git/objects/1b/ec35e570deb55a46c8665aebf9019302f5495f": "2506aced3476874dfdf2b10b4d53a35a",
".git/objects/48/5e21fdef0009258b0bba682353aeb3366d414e": "5f133f040dfb941faa3db2c80772ffb1",
".git/objects/70/0d47b2c987ba4a134157fe1f06a45a49a92a04": "5013ca17813606fe389cef4bfff9b581",
".git/objects/84/3671e18d435288556159f567b98b908aaf9a97": "f6b7546020d2a411ef0e97945373dedd",
".git/objects/4f/0c780d5aa0ff8a7779244787a035b0718714ad": "b8e6d44a7bbdec2a89d8b35679cb4914",
".git/objects/2b/eb3042e7b4ec8585f9dc6dff6d97fe3caae865": "41964d24ad986e48290997f4ced80bbf",
".git/objects/78/499eb5e06972f449ce6fae93bc9fa10a55cd8b": "ae32e515f7d038ba0afd7ff4c5c4dcfe",
".git/objects/78/23cbaf4e6cf9573462338f0f46be0c154d11a4": "e19a98e936bfd4444c2bca01db0cbcae",
".git/objects/25/d39917162471041d9e62fca1847b2ceaab1bac": "a91973d41942fba2a2b0dffa1a201c47",
".git/objects/25/df022126ae1a4b4ef111514c361646611fdd84": "225327c21a5c133ecf6d1ece94d353b9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "3ff8492a3f4ffee89eb22017dc71fae0",
".git/logs/refs/heads/main": "9918899027929d6d419c03e79061d578",
".git/logs/refs/remotes/origin/main": "ffdc58443c0f66e527c82fe85aed2496",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f584a85269bec998673e5739fcbd7c93",
".git/refs/remotes/origin/main": "f584a85269bec998673e5739fcbd7c93",
".git/index": "82468f6643130d1210b8f40c4459b2db",
".git/COMMIT_EDITMSG": "f2284b1978beaa735c4fe866601f8093",
".git/FETCH_HEAD": "36899b54a56ff2662fae3e6ee2ca7f95",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/NOTICES": "e8ebe895272635e754d94d9df534e0d2",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
".idea/codeStyles/Project.xml": "fa3e11ed7b46847fea181b3cbe2d3996",
".idea/codeStyles/codeStyleConfig.xml": "6953433920da64c5773984e32223f023",
".idea/kai-lll.github.io.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
".idea/workspace.xml": "625ecdf4c8b40701aa200ca6d7fe5886",
".idea/modules.xml": "423fdc04739a95d7ac980e6942562de7",
".idea/misc.xml": "60bceb5690317356c64298ecd86ca10c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
