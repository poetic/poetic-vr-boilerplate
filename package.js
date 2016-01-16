Package.describe({
  name: 'reallukemartin:vrboiler-plate',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'A small wrapper to a web virtual reality boiler plate page',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/poetic/poetic-vr-boilerplate',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles(['webvr-boilerplate/js/deps/three.js',
               'webvr-boilerplate/js/deps/ddsloader.js',
               'webvr-boilerplate/js/deps/mtlloader.js',
               'webvr-boilerplate/js/deps/objloader.js',
               'webvr-boilerplate/js/deps/objmtlloader.js',
               'webvr-boilerplate/js/deps/VRControls.js',
               'webvr-boilerplate/js/deps/VREffect.js',
               'webvr-boilerplate/js/deps/webvr-polyfill.js',
               'webvr-boilerplate/build/webvr-manager.js',
               'json-loader-fix.js',
               'scene-manager.js',
               'utils.js',
               'utils-animate.js',],
               'client', {bare: true});

  api.export(['SceneManager', 'Utils']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('poetic:vrboiler-plate');
});
