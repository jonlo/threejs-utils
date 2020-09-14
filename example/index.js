import { WebGLRenderer, Scene, PerspectiveCamera, BoxGeometry, Vector3, MeshBasicMaterial, Mesh, Math as THREEMath, Quaternion } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { SceneUtils } from '../threejsUtils';
import { TransformUtils } from '../threejsUtils';

var container,
	camera,
	scene,
	renderer,
	controls;

main();

function main() {
	// dom
	container = document.createElement('div');
	window.addEventListener('resize', onWindowResize, false);
	document.body.appendChild(container);

	// renderer
	renderer = new WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	container.appendChild(renderer.domElement);

	// scene
	scene = new Scene();
	// camera
	camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
	camera.position.set(10, 10, 15);

	//controls
	controls = new OrbitControls(camera, renderer.domElement);
	//controls.update() must be called after any manual changes to the camera's transform
	controls.update();
	let cube = createCube();
	test();
};

function test(){
	SceneUtils.center(scene, camera, controls, 1, 2, false);
	TransformUtils.rotateObject3dOnAxis(cube, new Vector3(1, 0, 0), THREEMath.degToRad(45));
	let pivotMatrix = TransformUtils.createPivotMatrix(new Vector3(5, 0, 0), new Quaternion(), new Vector3(1, 1, 1));
	TransformUtils.rotateObject3dAroundPivotOnAxis(cube, pivotMatrix, new Vector3(0, 1, 0), THREEMath.degToRad(90))
}

function createCube(width, height, depth, color) {
	var geometry = new BoxGeometry(width, height, depth);
	var material = new MeshBasicMaterial({ color: color });
	var cube = new Mesh(geometry, material);
	scene.add(cube);
	return cube;
}

function render() {
	renderer.render(scene, camera);
}

// animate            
(function animate() {
	requestAnimationFrame(animate);
	controls.update();
	render();

}());

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}