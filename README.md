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

# Transitioner

Boilerplate now comes with a powerful transitioner that will tween any property of a mesh overtime and call a callback after the animation is done

Sample usage would be:
```
function randomColor(mesh){
  Utils.transition({
    mesh: mesh,
    type: 'gradient-shift',
    opts: {stop: new THREE.Color(Math.random(), Math.random(), Math.random())},
    duration: 3,
    callback: randomColor,
  });
}
```

To call this function you would add this line of code to your scene.onRendered function
```
randomColor(SceneManager.scene.getObjectByName('box'));
```

Something to notice is the callback parameter of the transitioner will call a function you pass with the mesh as an argument again. By using this principle you can apply an asynchronous recursive function to continue to change the object's color/position ect overtime.

# Supported Animations

Unfortunately to prevent internal code issues with arbritrary animation types a case must be added for each supported transition type

## Currently Supported Animations

```
'fade-out'
'fade-in'
'move-x' // expects a number as stop point
'move-y' // expects a number as stop point
'move-z' // expects a number as stop point
'gradient-shift' // expects an r g b vector {r: 1.0, g: 0.5, b: 1.0}
'specular-shift' // expects an r g b vector {r: 1.0, g: 0.5, b: 1.0}
```

New animation supported types are in the works.
