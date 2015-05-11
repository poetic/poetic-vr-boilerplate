window.onload = function(){
console.log(window.document.body);
// counter starts at 0
Session.setDefault('counter', 0);

//Setup three.js WebGL renderer
var renderer = new Meteor.THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);

// Append the canvas element created by the renderer to document body element.
document.body.appendChild(renderer.domElement);

// Create a three.js scene.
var scene = new Meteor.THREE.Scene();

// Create a three.js camera.
var camera = new Meteor.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.3, 10000);

// Apply VR headset positional data to camera.
var controls = new Meteor.THREE.VRControls(camera);

// Apply VR stereo rendering to renderer.
var effect = new Meteor.THREE.VREffect(renderer);
effect.setSize(window.innerWidth, window.innerHeight);

// Create a VR manager helper to enter and exit VR mode.
var manager = new WebVRManager(renderer, effect, {hideButton: false});

// Create 3D objects.
var geometry = new Meteor.THREE.BoxGeometry(0.5, 0.5, 0.5);
var material = new Meteor.THREE.MeshNormalMaterial();
var cube = new Meteor.THREE.Mesh(geometry, material);

// Position cube mesh
cube.position.z = -1;

// Add cube mesh to your three.js scene
scene.add(cube);

// Request animation frame loop function
function animate() {
  // Apply rotation to cube mesh
  cube.rotation.y += 0.01;

  // Update VR headset position and apply to camera.
  controls.update();

  // Render the scene through the manager.
  manager.render(scene, camera);

  requestAnimationFrame(animate);
}

// Kick off animation loop
animate();

// Reset the position sensor when 'z' pressed.
function onKey(event) {
  if (event.keyCode == 90) { // z
    controls.resetSensor();
  }
};

window.addEventListener('keydown', onKey, true);

// Handle window resizes
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  effect.setSize( window.innerWidth, window.innerHeight );
}

window.addEventListener('resize', onWindowResize, false);
};
