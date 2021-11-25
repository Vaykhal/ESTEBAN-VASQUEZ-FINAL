import * as THREE from 'https://cdn.skypack.dev/three@0.131.3';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.131.3/examples/jsm/controls/OrbitControls.js';
import { PointerLockControls } from 'https://cdn.skypack.dev/three@0.131.3/examples/jsm/controls/PointerLockControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.131.3/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
const renderer = new THREE.WebGLRenderer();

let objects = [];
let controls, light, light2, light3, light4, light5; 
let pitbull;

document.body.onload = () => {
  main();
};

window.onresize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight, true);
};

function main() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  scene.background = new THREE.Color(0x141414)
  document.body.appendChild(renderer.domElement);

  camera.position.z = 15;
  camera.position.y = 15;

  // Lights
  setupLights();

  // Visual Configs
  cameraConfig();
  controlsConfig();

  animate();

  loadModel1();
  loadModel2();
  loadModel3();
  loadModel4();
  loadModel5();
  loadModel6();


  let wall1 = drawCube2(20, 20, 4, 4, 0x404040, true);
  wall1.position.x = -12.5;
  wall1.position.z = 0;
  wall1.position.y = 7.5;
  wall1.scale.z = 10;
  wall1.scale.y = 15;
  scene.add(wall1);

  let wall2 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall2.position.x = 0;
  wall2.position.z = 5.5;
  wall2.position.y = 7.5;
  wall2.scale.x = 25;
  wall2.scale.y = 15;
  scene.add(wall2);

  let wall3 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall3.position.x = 0;
  wall3.position.z = -5.5;
  wall3.position.y = 7.5;
  wall3.scale.x = 25;
  wall3.scale.y = 15;
  scene.add(wall3);

/*   
  //PUERTA DE LA CASA
  let wall4 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall4.position.x = 12.5;
  wall4.position.z = 0;
  wall4.position.y = 7.5;
  wall4.scale.z = 10;
  wall4.scale.y = 15;
  scene.add(wall4); */

  let wall5 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall5.position.x = 12;
  wall5.position.z = 13;
  wall5.position.y = 7.5;
  wall5.scale.z = 14;
  wall5.scale.y = 15;
  scene.add(wall5);

  let wall6 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall6.position.x = 12;
  wall6.position.z = -10.5;
  wall6.position.y = 7.5;
  wall6.scale.z = 9;
  wall6.scale.y = 15;
  scene.add(wall6);

  let wall7 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall7.position.x = 20;
  wall7.position.z = 19.5;
  wall7.position.y = 7.5;
  wall7.scale.x = 15;
  wall7.scale.y = 15;
  scene.add(wall7);

 let wall8 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall8.position.x = 28;
  wall8.position.z = 7;
  wall8.position.y = 7.5;
  wall8.scale.z = 24;
  wall8.scale.y = 15;
  scene.add(wall8);

/* 
  //PUERTA DE LA HABITACIÓN PRINCIPAL
  let wall9 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall9.position.x = 28;
  wall9.position.z = -10;
  wall9.position.y = 7.5;
  wall9.scale.z = 10;
  wall9.scale.y = 15;
  scene.add(wall9); */


  let wall10 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall10.position.x = 5;
  wall10.position.z = -15.5;
  wall10.position.y = 7.5;
  wall10.scale.x = 25;
  wall10.scale.y = 15;
  scene.add(wall10);

  let wall11 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall11.position.x = 28;
  wall11.position.z = -17.5;
  wall11.position.y = 7.5;
  wall11.scale.z = 5;
  wall11.scale.y = 15;
  scene.add(wall11); 

  let wall12 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall12.position.x = 45;
  wall12.position.z = 19.5;
  wall12.position.y = 7.5;
  wall12.scale.x = 35;
  wall12.scale.y = 15;
  scene.add(wall12);

  let wall13 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall13.position.x = 45;
  wall13.position.z = -20.5;
  wall13.position.y = 7.5;
  wall13.scale.x = 35;
  wall13.scale.y = 15;
  scene.add(wall13);

  let wall14 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall14.position.x = 63;
  wall14.position.z = -0.5;
  wall14.position.y = 0.7;
  wall14.scale.z = 15;
  wall14.scale.y = 1.5;
  scene.add(wall14);

  let wall15 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall15.position.x = 63;
  wall15.position.z = -0.5;
  wall15.position.y = 14.2;
  wall15.scale.z = 15;
  wall15.scale.y = 1.5;
  scene.add(wall15);

  let wall16 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall16.position.x = 63;
  wall16.position.z = 13;
  wall16.position.y = 7.5;
  wall16.scale.z = 12;
  wall16.scale.y = 15;
  scene.add(wall16);

  let wall17 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall17.position.x = 63;
  wall17.position.z = -14;
  wall17.position.y = 7.5;
  wall17.scale.z = 12;
  wall17.scale.y = 15;
  scene.add(wall17);

  let wall18 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall18.position.x = 17;
  wall18.position.z = -19.5;
  wall18.position.y = 7.5;
  wall18.scale.z = 7;
  wall18.scale.y = 15;
  scene.add(wall18);

  //PUERTA DEL BAÑO
/*   let wall19 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall19.position.x = 17;
  wall19.position.z = -28;
  wall19.position.y = 7.5;
  wall19.scale.z = 10;
  wall19.scale.y = 15;
  scene.add(wall19); */
 
  let wall20 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall20.position.x = 17;
  wall20.position.z = -36.5;
  wall20.position.y = 7.5;
  wall20.scale.z = 7;
  wall20.scale.y = 15;
  scene.add(wall20);

  let wall21 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall21.position.x = 5;
  wall21.position.z = -40.5;
  wall21.position.y = 7.5;
  wall21.scale.x = 25;
  wall21.scale.y = 15;
  scene.add(wall21);
  
  let wall22 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall22.position.x = -8;
  wall22.position.z = -28;
  wall22.position.y = 7.5;
  wall22.scale.z = 26;
  wall22.scale.y = 15;
  scene.add(wall22);

  let wall23 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall23.position.x = -8;
  wall23.position.z = -57;
  wall23.position.y = 7.5;
  wall23.scale.z = 32;
  wall23.scale.y = 15;
  scene.add(wall23);

  let wall24 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall24.position.x = 4.5;
  wall24.position.z = -73.5;
  wall24.position.y = 7.5;
  wall24.scale.x = 26;
  wall24.scale.y = 15;
  scene.add(wall24);

  let wall25 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall25.position.x = 17;
  wall25.position.z = -46.5;
  wall25.position.y = 7.5;
  wall25.scale.z = 11;
  wall25.scale.y = 15;
  scene.add(wall25);

  //PUERA DE SEGUNDA HABITACIÓN
/*  let wall26 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall26.position.x = 17;
  wall26.position.z = -57;
  wall26.position.y = 7.5;
  wall26.scale.z = 10;
  wall26.scale.y = 15;
  scene.add(wall26); */ 

  let wall27 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall27.position.x = 17;
  wall27.position.z = -67.5;
  wall27.position.y = 7.5;
  wall27.scale.z = 11;
  wall27.scale.y = 15;
  scene.add(wall27);

  let wall28 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall28.position.x = 40;
  wall28.position.z = -73.5;
  wall28.position.y = 7.5;
  wall28.scale.x = 45;
  wall28.scale.y = 15;
  scene.add(wall28);

  let wall29 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall29.position.x = 63;
  wall29.position.z = -28.25;
  wall29.position.y = 7.5;
  wall29.scale.z = 16.5;
  wall29.scale.y = 15;
  scene.add(wall29);

  let wall30 = drawCube1(20, 20, 4, 4, 0x404040, true);
  wall30.position.x = 87;
  wall30.position.z = -37;
  wall30.position.y = 7.5;
  wall30.scale.x = 49;
  wall30.scale.y = 18;
  scene.add(wall30);


  //---------UBICACIÓN DE LOS PLANOS COMO SUELO---------
  //PASILLO ASCENSOR
  let plane1 = drawPlane1(25, 10, 4, 4, 0xffffff, true);
  plane1.rotation.x = Math.PI / 2;
  plane1.position.x = 0;
  plane1.receiveShadow = true;
  scene.add(plane1);

  //PASILLO PRINCIPAL
  let plane2 = drawPlane1(15, 34, 4, 4, 0xffffff, true);
  plane2.rotation.x = Math.PI / 2;
  plane2.position.x = 20;
  plane2.position.z = 2;
  scene.add(plane2);

  //HABITACIÓN PRINCIPAL
  let plane3 = drawPlane1(35, 39, 4, 4, 0xffffff, true);
  plane3.rotation.x = Math.PI / 2;
  plane3.position.x = 45;
  plane3.position.z = -0.5;
  plane3.receiveShadow = true;
  scene.add(plane3);

  //PASILLO LARGO
  let plane4 = drawPlane1(10, 59, 4, 4, 0xffffff, true);
  plane4.rotation.x = Math.PI / 2;
  plane4.position.x = 22.5;
  plane4.position.z = -44.5;
  scene.add(plane4);

  //BAÑO
  let plane5 = drawPlane1(25, 25, 4, 4, 0xffffff, true);
  plane5.rotation.x = Math.PI / 2;
  plane5.position.x = 5;
  plane5.position.z = -27.5;
  scene.add(plane5);

  //SEGUNDA HABITACIÓN
  let plane6 = drawPlane1(25, 32, 4, 4, 0xffffff, true);
  plane6.rotation.x = Math.PI / 2;
  plane6.position.x = 5;
  plane6.position.z = -57;
  scene.add(plane6);

  //TECHO
  let plane8 = drawPlane2(91, 98, 4, 4, 0x505050, true);
  plane8.rotation.x = Math.PI / 2;
  plane8.position.x = 18;
  plane8.position.z = -26;
  plane8.position.y = 15;
  scene.add(plane8);

  //SALA DE ESTAR
  let plane7 = drawPlane1(35, 54, 4, 4, 0xffffff, true);
  plane7.rotation.x = Math.PI / 2;
  plane7.position.x = 45;
  plane7.position.z = -47;
  plane7.receiveShadow = true;
  scene.add(plane7);

}

 //-------------SUELO DEL ESCENARIO-------------
function drawPlane1(w, h, sh, sw, color, ds = true) {
  const loader = new THREE.TextureLoader().load('./assets/SUELOS.jpg');;


  const geometry = new THREE.PlaneGeometry(w, h, sw, sh);
  const material = new THREE.MeshPhongMaterial({
    color,
    map: loader,
    side: ds ? THREE.DoubleSide : undefined,
  });
  const plane = new THREE.Mesh(geometry, material);
  plane.receiveShadow = true;  
  return plane;
}

 //---------TECHO DEL ESCENARIO---------
function drawPlane2(w, h, sh, sw, color, ds = true) {
  const loader = new THREE.TextureLoader().load('./assets/TECHO.jpg');;

  const geometry = new THREE.PlaneGeometry(w, h, sw, sh);
  const material = new THREE.MeshPhongMaterial({
    color,
    map: loader,
    side: ds ? THREE.DoubleSide : undefined,
  });
  const plane = new THREE.Mesh(geometry, material);
  plane.receiveShadow = true;  
  return plane;
} 

 //---------PAREDES DEL ESCENARIO---------
function drawCube1(color) {
  const loader = new THREE.TextureLoader().load('./assets/PAREDES.jpg');

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshPhongMaterial({
    color: 0xccabd8,
    map: loader,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;
}

 //-------------PUERTA DEL ASCENSOR-------------
function drawCube2(color) {
  const loader = new THREE.TextureLoader().load('./assets/ASCENSOR.jpg');;

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshLambertMaterial({
    color: 0x303030,
    map: loader,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;
}

//----------LUZ DE AMBIENTE Y HABITACIONES----------
function setupLights() {
  const ambient = new THREE.AmbientLight(0x303030, 1);
  scene.add(ambient);

  light = new THREE.PointLight(0xff00ea, 1.5);
  light.position.set(0, 14, 0);
  light.castShadow = true;
  scene.add(light); 

  light2 = new THREE.PointLight(0xff8000, 1.5);
  light2.position.set(45, 14, 0);
  light2.castShadow = true;
  scene.add(light2);

  light3 = new THREE.PointLight(0x00ffea, 1.5);
  light3.position.set(5.5, 14, -28);
  light3.castShadow = true;
  scene.add(light3);

  light4 = new THREE.PointLight(0xff00ea, 1.5);
  light4.position.set(5.5, 14, -57);
  light4.castShadow = true;
  scene.add(light4); 

  light5 = new THREE.PointLight(0xff8000, 1.5);
  light5.position.set(35, 14, -47);
  light5.castShadow = true;
  scene.add(light5)
}
 
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

//--------CÁMARA Y BLOQUEO DE PANEO--------
function controlsConfig() {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();
  controls.enablePan = false;
}

//--------POSICIÓN INICIAL DE LA CÁMARA--------
function cameraConfig() {
  camera.position.x = 10;
  camera.position.y = 7;
  camera.position.z = 3;
}

 //---------VIDEOS EN LAS PAREDES---------
let plane1 = video1(34, 21, 5, 3, 0xFFFFFF);
plane1.position.x = 45.5;
plane1.position.y = 7.5;
plane1.position.z = -19.5; 
scene.add(plane1);
objects.push(plane1);

let plane2 = video2(25, 18, 5, 3, 0xFFFFFF);
plane2.position.x = 5;
plane2.position.y = 7.5;
plane2.position.z = -16.5; 
plane2.rotation.y = Math.PI / 1;
scene.add(plane2);
objects.push(plane2);

let plane3 = video3(25, 18, 5, 3, 0xFFFFFF);
plane3.position.x = 5;
plane3.position.y = 6;
plane3.position.z = -42; 
plane3.rotation.y = Math.PI / 1;
scene.add(plane3);
objects.push(plane3);

function video1(w, h, sh, sw, color){
  const video = document.getElementById('video1');
  const texture = new THREE.VideoTexture(video);
  const geometry = new THREE.PlaneGeometry(w, h, sh, sw);
  const material = new THREE.MeshBasicMaterial({
    color,
    map: texture,
  });
  const plane = new THREE.Mesh(geometry, material);
  plane.receiveShadow = true;
  
  return plane;
}

function video2(w, h, sh, sw, color){
  const video = document.getElementById('video2');
  const texture = new THREE.VideoTexture(video);
  const geometry = new THREE.PlaneGeometry(w, h, sh, sw);
  const material = new THREE.MeshBasicMaterial({
    color,
    map: texture,
  });
  const plane = new THREE.Mesh(geometry, material);
  plane.receiveShadow = true;
  
  return plane;
}

function video3(w, h, sh, sw, color){
  const video = document.getElementById('video3');
  const texture = new THREE.VideoTexture(video);
  const geometry = new THREE.PlaneGeometry(w, h, sh, sw);
  const material = new THREE.MeshBasicMaterial({
    color,
    map: texture,
  });
  const plane = new THREE.Mesh(geometry, material);
  plane.receiveShadow = true;
  
  return plane;
}

//-------------AUDIO EN LOOP-------------
var audioLoader = new THREE.AudioLoader();
var listener = new THREE.AudioListener();
var audio = new THREE.Audio(listener);
audioLoader.load('./assets/MUSICA.mp3', function(buffer){
    audio.setBuffer(buffer);
    audio.setLoop(true);
    audio.play();
});

 //-------------CONTROLES DE JUGADOR-------------
controls = new PointerLockControls( camera, document.body );

				const blocker = document.getElementById( 'blocker' );
				const instructions = document.getElementById( 'instructions' );

				instructions.addEventListener( 'click', function () {

					controls.lock();
        } );

        controls.addEventListener( 'lock', function () {

					instructions.style.display = 'none';
					blocker.style.display = 'none';

				} );

				controls.addEventListener( 'unlock', function () {

					blocker.style.display = 'block';
					instructions.style.display = '';

				} );

				scene.add( controls.getObject() );

				const onKeyDown = function ( event ) {

					switch ( event.code ) {

						case 'ArrowUp':
						case 'KeyW':
							controls.moveForward (0.8);
						break;

						case 'ArrowLeft':
						case 'KeyA':
							controls.moveRight (-0.8);
						break;

						case 'ArrowDown':
						case 'KeyS':
							controls.moveForward (-0.8);
						break;

						case 'ArrowRight':
						case 'KeyD':
							controls.moveRight (0.8);
						break;

					}
				};

				const onKeyUp = function ( event ) {

					switch ( event.code ) {

						case 'ArrowUp':
						case 'KeyW':
							controls.moveForward (0);
						break;

						case 'ArrowLeft':
						case 'KeyA':
							controls.moveRight (0);
						break;

						case 'ArrowDown':
						case 'KeyS':
							controls.moveForward (0);
						break;

						case 'ArrowRight':
						case 'KeyD':
							controls.moveRight (0);
						break;

					}

				};

				document.addEventListener( 'keydown', onKeyDown );
				document.addEventListener( 'keyup', onKeyUp );

//-------------FONDO 360º------------- 
var loader = new THREE.TextureLoader();
  loader.load(
  './assets/FONDO.jpg',

  function (texture) {
  var material = new THREE.MeshBasicMaterial({
    map: texture
  });

  var geometry = new THREE.SphereBufferGeometry(3, 32, 32);
      geometry.scale(-100, 100, 100);
  
  var sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(0, 0, 0);
      sphere.rotation.y = Math.PI / 1;
      scene.add(sphere);
  
      renderer.render(scene, camera);
  }
);

//--------------TEXTOS EN 3D-------------- 
const loadertext1 = new THREE.FontLoader();
loadertext1.load('./assets/fonts/Cyberpunk Sealion_Regular.json', function (font = THREE.Font) {
  const geometry = new THREE.TextGeometry('Main Room', {
    font: font,
    size: 6,
    height: 2,
  })

  const textMesh = new THREE.Mesh(geometry, [
    new THREE.MeshPhongMaterial({ color: 0x303030}), //FUENTE
    new THREE.MeshPhongMaterial({ color: 0x00ffea}) //SIDE
  ])
  
  textMesh.castShadow = true;
  textMesh.position.x = 62;
  textMesh.position.y = 8;
  textMesh.position.z = 19;
  textMesh.rotation.y = Math.PI / 1;
  scene.add(textMesh)
}); 

const loadertext2 = new THREE.FontLoader();
loadertext2.load('./assets/fonts/Cyberpunk Sealion_Regular.json', function (font = THREE.Font) {
  const geometry = new THREE.TextGeometry('Hacker', {
    font: font,
    size: 6,
    height: 2,
  })

  const textMesh = new THREE.Mesh(geometry, [
    new THREE.MeshPhongMaterial({ color: 0x303030}), //FUENTE
    new THREE.MeshPhongMaterial({ color: 0x00ffea}) //SIDE
  ])
  
  textMesh.castShadow = true;
  textMesh.position.x = -8.4;
  textMesh.position.y = 8;
  textMesh.position.z = -18.5;
  textMesh.rotation.y = Math.PI / 2;
  scene.add(textMesh)
});

const loadertext3 = new THREE.FontLoader();
loadertext3.load('./assets/fonts/Cyberpunk Sealion_Regular.json', function (font = THREE.Font) {
  const geometry = new THREE.TextGeometry('Room', {
    font: font,
    size: 6,
    height: 2,
  })

  const textMesh = new THREE.Mesh(geometry, [
    new THREE.MeshPhongMaterial({ color: 0x303030}), //FUENTE
    new THREE.MeshPhongMaterial({ color: 0x00ffea}) //SIDE
  ])
  
  textMesh.castShadow = true;
  textMesh.position.x = 10.5;
  textMesh.position.y = 8;
  textMesh.position.z = -38.5;
  textMesh.rotation.y = Math.PI / -1;
  scene.add(textMesh)
}); 

const loadertext4 = new THREE.FontLoader();
loadertext4.load('./assets/fonts/Cyberpunk Sealion_Regular.json', function (font = THREE.Font) {
  const geometry = new THREE.TextGeometry('Living', {
    font: font,
    size: 6,
    height: 2,
  })

  const textMesh = new THREE.Mesh(geometry, [
    new THREE.MeshPhongMaterial({ color: 0x303030}), //FUENTE
    new THREE.MeshPhongMaterial({ color: 0x00ffea}) //SIDE
  ])
  
  textMesh.castShadow = true;
  textMesh.position.x = -8.4;
  textMesh.position.y = 8;
  textMesh.position.z = -53.5;
  textMesh.rotation.y = Math.PI / 2;
  scene.add(textMesh)
});

const loadertext5 = new THREE.FontLoader();
loadertext5.load('./assets/fonts/Cyberpunk Sealion_Regular.json', function (font = THREE.Font) {
  const geometry = new THREE.TextGeometry('Room', {
    font: font,
    size: 6,
    height: 2,
  })

  const textMesh = new THREE.Mesh(geometry, [
    new THREE.MeshPhongMaterial({ color: 0x303030}), //FUENTE
    new THREE.MeshPhongMaterial({ color: 0x00ffea}) //SIDE
  ])
  
  textMesh.castShadow = true;
  textMesh.position.x = 10.5;
  textMesh.position.y = 8;
  textMesh.position.z = -71.5;
  textMesh.rotation.y = Math.PI / -1;
  scene.add(textMesh)
}); 

const loadertext6 = new THREE.FontLoader();
loadertext6.load('./assets/fonts/Cyberpunk Sealion_Regular.json', function (font = THREE.Font) {
  const geometry = new THREE.TextGeometry('Cyberpunk', {
    font: font,
    size: 6,
    height: 2,
  })

  const textMesh = new THREE.Mesh(geometry, [
    new THREE.MeshPhongMaterial({ color: 0x303030}), //FUENTE
    new THREE.MeshPhongMaterial({ color: 0x00ffea}) //SIDE
  ])

  textMesh.castShadow = true;
  textMesh.position.x = 23.5;
  textMesh.position.y = 8;
  textMesh.position.z = -73;
  textMesh.rotation.y = Math.PI * 2;
  scene.add(textMesh)
}); 

const loadertext7 = new THREE.FontLoader();
loadertext7.load('./assets/fonts/Cyberpunk Sealion_Regular.json', function (font = THREE.Font) {
  const geometry = new THREE.TextGeometry('Garege', {
    font: font,
    size: 6,
    height: 2,
  })

  const textMesh = new THREE.Mesh(geometry, [
    new THREE.MeshPhongMaterial({ color: 0x303030}), //FUENTE
    new THREE.MeshPhongMaterial({ color: 0x00ffea}) //SIDE
  ])
  
  textMesh.castShadow = true;
  textMesh.position.x = 56;
  textMesh.position.y = 8;
  textMesh.position.z = -20.5;
  textMesh.rotation.y = Math.PI / -1;
  scene.add(textMesh)
});

//-----------CARGADO DE MODELOS----------- 
function loadModel1() {

  let loader = new GLTFLoader;
  loader.load(
    './assets/modelOne/scene.gltf',
    function (gltf) {
        pitbull = gltf.scene.children[0];
        pitbull.position.x = 45;
        pitbull.position.y = -0.2;
        pitbull.position.z = -40;
        pitbull.rotation.z = Math.PI / -1;
        pitbull.scale.set(0.18, 0.18, 0.18);
        scene.add(pitbull);
        animate();
    },

    function (xhr) {
       console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    
    function (error) {
       console.log('Un error ocurrió');
    },
  );
}

function loadModel2() {

  let loader = new GLTFLoader;
  loader.load(
    './assets/modelTwo/scene.gltf',
    function (gltf) {
        pitbull = gltf.scene.children[0];
        pitbull.position.x = 52;
        pitbull.position.y = -1;
        pitbull.position.z = -3;
        pitbull.rotation.z = Math.PI / -2;
        pitbull.scale.set(1.5, 1.5, 1.5);
        scene.add(pitbull);
        animate();
    },

    function (xhr) {
       console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    
    function (error) {
       console.log('Un error ocurrió');
    },
  );
}

function loadModel3() {

  let loader = new GLTFLoader;
  loader.load(
    './assets/modelThree/scene.gltf',
    function (gltf) {
        pitbull = gltf.scene.children[0];
        pitbull.position.x = 57;
        pitbull.position.y = 0;
        pitbull.position.z = 7;
        pitbull.rotation.z = Math.PI / -1;
        pitbull.scale.set(1, 1, 1);
        scene.add(pitbull);
        animate();
    },

    function (xhr) {
       console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    
    function (error) {
       console.log('Un error ocurrió');
    },
  );
}

function loadModel4() {

  let loader = new GLTFLoader;
  loader.load(
    './assets/modelFour/scene.gltf',
    function (gltf) {
        pitbull = gltf.scene.children[0];
        pitbull.position.x = -0.5;
        pitbull.position.y = -0.8;
        pitbull.position.z = -33.5;
        pitbull.rotation.z = Math.PI / 2;
        pitbull.scale.set(4, 4, 4);
        scene.add(pitbull);
        animate();
    },

    function (xhr) {
       console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    
    function (error) {
       console.log('Un error ocurrió');
    },
  );
}

function loadModel5() {

  let loader = new GLTFLoader;
  loader.load(
    './assets/modelFive/scene.gltf',
    function (gltf) {
        pitbull = gltf.scene.children[0];
        pitbull.position.x = 8;
        pitbull.position.y = 0;
        pitbull.position.z = -58.5;
        pitbull.scale.set(1.3, 1.3, 1.3);
        scene.add(pitbull);
        animate();
    },

    function (xhr) {
       console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    
    function (error) {
       console.log('Un error ocurrió');
    },
  );
}

function loadModel6() {

  let loader = new GLTFLoader;
  loader.load(
    './assets/modelSix/scene.gltf',
    function (gltf) {
        pitbull = gltf.scene.children[0];
        pitbull.position.x = 86.5;
        pitbull.position.y = -0.4;
        pitbull.position.z = -61;
        pitbull.rotation.z = Math.PI / -1;
        pitbull.scale.set(6, 6, 6);
        scene.add(pitbull);
        animate();
    },

    function (xhr) {
       console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    
    function (error) {
       console.log('Un error ocurrió');
    },
  );
}
