var FILES = {
  leaflet: {
    js:   ['http://cdn.leafletjs.com/leaflet/v1.0.0-beta.2/leaflet.js'],
    css:  ['http://cdn.leafletjs.com/leaflet/v1.0.0-beta.2/leaflet.css'],
  }
};

var deps = new Deps.Dependency;
var loaded = false;

var onLoaded = function () {
  loaded = true;
  deps.changed();
};

var onLeafletLoaded = function (plugins, cb) {
  var pluginCount = _.size(plugins);

  if (pluginCount === 0) {
    cb();
    return;
  }

  var loadCb = function () {
    pluginCount--;

    if (pluginCount === 0) {
      cb();
      return;
    }
  };

  _.each(plugins, function (plugin) {
    loadFiles(FILES[plugin], loadCb);
  });
};

var loadScript = function (src, cb) {
  var elem = document.createElement('script');
  elem.type = 'text/javascript';
  elem.src = src;
  elem.defer = true;

  elem.addEventListener('load', _.partial(cb, src), false);

  var head = document.getElementsByTagName('head')[0];
  head.appendChild(elem);
};

var loadCss = function (href) {
  var elem = document.createElement('link');
  elem.rel = 'stylesheet';
  elem.href = href;

  var head = document.getElementsByTagName('head')[0];
  head.appendChild(elem);
};

var loadFiles = function (files, cb) {
  var loadCount = _.size(files.js);

  var loadCb = function (url) {
    if (Leaflet.debug)
      console.log('Loaded:', url);

    loadCount--;

    if (loadCount === 0)
      cb();
  };

  _.each(files.css, loadCss);
  _.each(files.js, function (url) {
    loadScript(url, loadCb);
  });
};

Leaflet = {
  debug: false,

  load: function () {
    if (loaded)
      return;

    var plugins = _.values(arguments);
    loadFiles(FILES.leaflet, _.partial(onLeafletLoaded, plugins, onLoaded));
  },

  loaded: function () {
    deps.depend();
    return loaded;
  }
};
