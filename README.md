namesspace has changed from poeticsystems to poetic
[Online Demo](http://boilerplatedemo.meteor.com/)

# To install
A wrapper around the repo https://github.com/borismus/webvr-boilerplate for meteor.

To use type `meteor add poetic:vrboiler-plate`
  * Run `meteor update` before adding package to avoid dependency issues.

# Example usage

Sample HTML File:
```
<head>
  <title>vrupdate</title>
</head>

<body>
  {{> scene}}
</body>

<template name="scene">
</template>
```

Initiate the Javascript
```
Template.scene.onRendered(function (){
  SceneManager.init();
  addCube(SceneManager.scene);
  Utils.animate( [SceneManager, Utils] );
});

function addCube(scene){
  var mesh = new THREE.Mesh( new THREE.BoxGeometry( 10, 10, 10 ),
             new THREE.MeshPhongMaterial({ color: 0x009900, specular: 0x00FF00, shininess: 50, shading: 0.5}) );
  scene.add(mesh);
  mesh.name = "box";
  mesh.position.z = -50;
  Utils.registerFunction(rotate, mesh);
}

function rotate(mesh){
  mesh.rotation.x += .01;
  mesh.rotation.y += .01;
}
```

Add events:
```
Utils.events({
  'lookAt .box': function(mesh) {
    console.log('stop looking at me');
  }
});
```
