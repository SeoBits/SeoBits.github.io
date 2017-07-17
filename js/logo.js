{
	var canvas;
	var scene;
	var camera;
	var renderer;
	var geometries;
	var animationClock;

	function init(){
	  canvas = document.getElementById("canvas-logo");
	  scene = new THREE.Scene();
	  camera = new THREE.PerspectiveCamera(50, 1, 0.3, 1000);
	  renderer = new THREE.WebGLRenderer({preserveDrawingBuffer: true, canvas: canvas, alpha: true});
	  animationClock = new THREE.Clock();
	}

	function createGeometry(){
	  var geometry = new THREE.OctahedronGeometry(2, 0);
	  var material = new THREE.MeshBasicMaterial({
	  		color: 0xa9ff,
		    wireframe: true,
		});
	  
	  var logoGeometry = new THREE.Mesh( geometry, material);
	  logoGeometry.receiveShadow = true;
		logoGeometry.castShadow = true;
	  scene.add( logoGeometry );

	  return logoGeometry
	}

	function min(number, clampValue){
		if(number < clampValue){
			return clampValue;
		}
		return number;
	}

	function render(){
		requestAnimationFrame( render );
		for(var i = 0; i < geometries.length; i++){
			geometries[i].rotation.y = Math.sin(animationClock.getElapsedTime()) * 0.01 + (i * 0.01);
			geometries[i].rotation.x += 0.01;
			geometries[i].rotation.z += 0.01;
		}
		renderer.render( scene, camera );
	}

	init();
	geometries = [];
	for(var i = 0; i < 5; i++){
		geometries.push(createGeometry());
	}
	camera.position.z = 5;
	render();
}