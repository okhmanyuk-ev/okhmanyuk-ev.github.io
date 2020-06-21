var renderer = new THREE.WebGLRenderer();
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
	
function frame() {
	cube.rotation.x += 0.1;
	cube.rotation.y += 0.1;
}

function render() {
	renderer.render(scene, camera);
}
	
function update() {
	requestAnimationFrame(update);
	frame();
	render();
};

function resize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
	
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function main() {
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

	scene.add( cube );

	camera.position.z = 5;
	
	window.addEventListener('resize', resize, false);

	update();
}











