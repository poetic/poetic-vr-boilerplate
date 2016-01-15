Utils = {};
Utils.callbacks = [];
Utils.eventQue = {};

Utils.events = function(obj) {
  for (var prop in obj ) {
    Utils.eventQue[prop] = obj[prop];
  }
};

Utils.handleCollisions = function() {
  SceneManager.getLookAtCollisions().forEach( function(mesh) {
    var fn = Utils.eventQue['lookAt .' + mesh.object.name];
    if(typeof(fn) === 'function'){
      fn(mesh.object);
    }
  });
};

Utils.handleAnimations = function() {
  Utils.animations.forEach(function(animation, i, animations){
    animation.applyAnimation.callback(animation.applyAnimation.opts, animation);
    if(!animation.isAnimating){
      if(typeof(animation.callback) === 'function'){
        animation.callback(animation.mesh);
      }
      animations.splice(i, 1);
    }
  });
};

Utils.update = function() {
  Utils.handleCollisions();
  Utils.handleAnimations();
  Utils.callbacks.forEach(function(callback){
    callback.fn(callback.args);
  })
};

Utils.animate = function(objsToUpdate) {
  objsToUpdate.forEach( function( obj ) { obj.update(); } );
  requestAnimationFrame( function() { this.animate( objsToUpdate ); }.bind(this) );
};

Utils.registerFunction = function(fn, args){
  Utils.callbacks.push({
    fn: fn,
    args: args,
  });
}
