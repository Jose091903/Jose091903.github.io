
(function() {
    var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
    var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.es.3f6fedfec6077d439ed6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/394.latest.es.7e352dd2538d0d6db654.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/346.latest.es.dc079fa5ed8ba00f4349.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/891.latest.es.051286e30b2bab5510b4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.es.50092c0c2c27a94398f6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/977.latest.es.e1a0ded7d00403072415.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/535.latest.es.279632d5b190d715dfcc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/554.latest.es.b74ff25a0f1341a307ae.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/307.latest.es.1ef70c3c55fdc418786f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.es.9d28a8641181c588aefb.js"];
    var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/394.latest.es.e8b14f752c857b25b055.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.es.cbda45b43fa1d875bd53.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.latest.es.b1a85f925b41702ad78f.css"];
    var fontPreconnectUrls = [];
    var fontPrefetchUrls = [];
    var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0280/6474/3521/files/3_Logo_Front_x320.jpg?v=1614349443"];

    function preconnect(url, callback) {
      var link = document.createElement('link');
      link.rel = 'dns-prefetch preconnect';
      link.href = url;
      link.crossOrigin = '';
      link.onload = link.onerror = callback;
      document.head.appendChild(link);
    }

    function preconnectAssets() {
      var resources = [baseURL].concat(fontPreconnectUrls);
      var index = 0;
      (function next() {
        var res = resources[index++];
        if (res) preconnect(res[0], next);
      })();
    }

    function prefetch(url, as, callback) {
      var link = document.createElement('link');
      if (link.relList.supports('prefetch')) {
        link.rel = 'prefetch';
        link.fetchPriority = 'low';
        link.as = as;
        if (as === 'font') link.type = 'font/woff2';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      } else {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onloadend = callback;
        xhr.send();
      }
    }

    function prefetchAssets() {
      var resources = [].concat(
        scripts.map(function(url) { return [url, 'script']; }),
        styles.map(function(url) { return [url, 'style']; }),
        fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
        imgPrefetchUrls.map(function(url) { return [url, 'image']; })
      );
      var index = 0;
      (function next() {
        var res = resources[index++];
        if (res) prefetch(res[0], res[1], next);
      })();
    }

    function onLoaded() {
      preconnectAssets();
      prefetchAssets();
    }

    if (document.readyState === 'complete') {
      onLoaded();
    } else {
      addEventListener('load', onLoaded);
    }
  })();
