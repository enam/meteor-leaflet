Package.describe({
  name: 'nicholasm:meteor-leaflet',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'meteor package for leaflet.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/enam/meteor-leaflet.git'
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['deps', 'underscore'], ['client']);
  api.addFiles(['meteor-leaflet.js', 'meteor-leaflet.css'], ['client']);
  api.export('Leaflet', ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use(['deps', 'underscore'], ['client']);
  api.addFiles(['meteor-leaflet.js', 'meteor-leaflet.css'], ['client']);
  api.export('Leaflet', ['client']);
});
