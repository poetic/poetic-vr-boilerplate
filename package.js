Package.describe({
  name: 'poeticsystems:vrboiler-plate',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('jquery');
  api.addFiles(['webvr-boilerplate/js/deps/three.js',
               'webvr-boilerplate/js/deps/VRControls.js',
               'webvr-boilerplate/js/deps/VREffect.js',
               'webvr-boilerplate/js/deps/webvr-polyfill.js',
               'webvr-boilerplate/build/webvr-manager.js',
               'initiate.js']);
  api.export("THREE");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('poeticsystems:vrboiler-plate');
  api.addFiles('vrboiler-plate-tests.js');
});
