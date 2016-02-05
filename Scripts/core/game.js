/**
 * @author: Gursharnbir Singh
 */
/// <reference path="_reference.ts"/>
// MAIN GAME FILE
// THREEJS Aliases
var Scene = THREE.Scene;
var Renderer = THREE.WebGLRenderer;
var PerspectiveCamera = THREE.PerspectiveCamera;
var BoxGeometry = THREE.BoxGeometry;
var CubeGeometry = THREE.CubeGeometry;
var PlaneGeometry = THREE.PlaneGeometry;
var AxisHelper = THREE.AxisHelper;
var LambertMaterial = THREE.MeshLambertMaterial;
var Mesh = THREE.Mesh;
var SpotLight = THREE.SpotLight;
var AmbientLight = THREE.AmbientLight;
var Control = objects.Control;
var GUI = dat.GUI;
var scene;
var renderer;
var camera;
var axes;
var spotLightHelper;
//Mesh Variables
var cube;
var body;
var rLeg;
var lLeg;
var ra;
var la;
var rh;
var lh;
var head;
var leftshoe;
var rightshoe;
var plane;
//Cube Variables
var cubeGeometry;
var bodycubeGeometry;
var legRcubeGeometry;
var legLcubeGeometry;
var lacubeGeometry;
var racubeGeometry;
var lhcubeGeometry;
var rhcubeGeometry;
var headcubeGeometry;
var leftshoecubeGeometry;
var rightshoecubeGeometry;
var planeGeometry;
//Material Variables
var cubeMaterial;
var bodycubeMaterial;
var legRcubeMaterial;
var legLcubeMaterial;
var headcubeMaterial;
var lhcubeMaterial;
var rhcubeMaterial;
var lacubeMaterial;
var racubeMaterial;
var leftshoecubeMaterial;
var rightshoecubeMaterial;
var planeMaterial;
//UI variables
var ambientLight;
var spotLight;
var control;
var controlY;
var controlZ;
var gui;
var stats;
var step = 0;
var human;
var sphereColorA;
var parameters;
//Initiate
function init() {
    // Instantiate a new Scene object
    scene = new Scene();
    setupRenderer(); // setup the default renderer
    setupCamera(); // setup the camera
    //Axis helper
    axes = new AxisHelper(15);
    axes.position.x = -14.5;
    axes.position.y = 0;
    axes.position.z = -14.5;
    scene.add(axes);
    console.log("Added Axis Helper");
    //added a plane in the scene
    planeGeometry = new PlaneGeometry(30, 35);
    planeMaterial = new LambertMaterial({ color: 0xFFFFFF });
    plane = new Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;
    plane.rotation.x = -0.5 * Math.PI;
    plane.rotation.z = -0.789;
    plane.position.x = 0;
    plane.position.y = 0;
    plane.position.z = 0;
    
    scene.add(plane);
    console.log("Added Plane Primitive");
    //Added an AmbientLight to the scene
    ambientLight = new AmbientLight(0x090909);
    scene.add(ambientLight);
    console.log("Added an Ambient Light");
    //Spotlight for the scene
    spotLight = new SpotLight(0xffffff);
    spotLight.position.set(-40, 60, -10);
    spotLight.castShadow = true;
    scene.add(spotLight);
    console.log("Added a SpotLight Light");
    //Humanoid boddy
    bodycubeGeometry = new CubeGeometry(3, 7, 7);
    bodycubeMaterial = new LambertMaterial({ color: 0xeeb2f7 });
    body = new Mesh(bodycubeGeometry, bodycubeMaterial);
    body.castShadow = true;
    body.receiveShadow = true;
    body.position.x = 0;
    body.position.y = 10;
    body.position.z = 0;
    console.log("Added Body");
    //Head of the humanoid
    headcubeGeometry = new CubeGeometry(3.25, 3.25, 3.25);
    headcubeMaterial = new LambertMaterial({ color: 0xffe0bd });
    head = new Mesh(headcubeGeometry, headcubeMaterial);
    head.castShadow = true;
    head.receiveShadow = true;
    head.position.x = 0;
    head.position.y = 15;
    head.position.z = 0;
    console.log("Added Head");
    //Right leg cube
    legRcubeGeometry = new CubeGeometry(2, 7, 2);
    legRcubeMaterial = new LambertMaterial({ color: 0xffe0bd });
    rLeg = new Mesh(legRcubeGeometry, legRcubeMaterial);
    rLeg.castShadow = true;
    rLeg.receiveShadow = true;
    rLeg.position.x = 0;
    rLeg.position.y = 4.170;
    rLeg.position.z = -2;
    console.log("Added Right Leg");
    //Left leg Cube
    legLcubeGeometry = new CubeGeometry(2, 7, 2);
    legLcubeMaterial = new LambertMaterial({ color: 0xffe0bd });
    lLeg = new Mesh(legLcubeGeometry, legLcubeMaterial);
    lLeg.castShadow = true;
    lLeg.receiveShadow = true;
    lLeg.position.x = 0;
    lLeg.position.y = 4.170;
    lLeg.position.z = 2;
    console.log("Added Left Leg");
    //Right Shoe
    rightshoecubeGeometry = new CubeGeometry(4, 2, 2);
    rightshoecubeMaterial = new LambertMaterial({ color: 0x000000 });
    rightshoe = new Mesh(rightshoecubeGeometry, rightshoecubeMaterial);
    rightshoe.castShadow = true;
    rightshoe.receiveShadow = true;
    rightshoe.position.x = -1;
    rightshoe.position.y = 1;
    rightshoe.position.z = -2;
    console.log("Added Right Shoe");
    //Left shoe
    leftshoecubeGeometry = new CubeGeometry(4, 2, 2);
    leftshoecubeMaterial = new LambertMaterial({ color: 0x000000 });
    leftshoe = new Mesh(leftshoecubeGeometry, leftshoecubeMaterial);
    leftshoe.castShadow = true;
    leftshoe.receiveShadow = true;
    leftshoe.position.x = -1;
    leftshoe.position.y = 1;
    leftshoe.position.z = 2;
    console.log("Added Left Shoe");
    //Left Hand
    lhcubeGeometry = new CubeGeometry(1.5, 1.5, 5);
    lhcubeMaterial = new LambertMaterial({ color: 0xffe0bd });
    lh = new Mesh(lhcubeGeometry, lhcubeMaterial);
    lh.castShadow = true;
    lh.receiveShadow = true;
    lh.position.x = 0;
    lh.position.y = 12.520;
    lh.position.z = 5;
    console.log("Added Left Hand");
    //Right Hand
    rhcubeGeometry = new CubeGeometry(1.5, 1.5, 5);
    rhcubeMaterial = new LambertMaterial({ color: 0xffe0bd }); // FFDAB9
    rh = new Mesh(rhcubeGeometry, rhcubeMaterial);
    rh.castShadow = true;
    rh.receiveShadow = true;
    rh.position.x = 0;
    rh.position.y = 12.520;
    rh.position.z = -5;
    console.log("Added Right Hand");
    //Left Arm
    lacubeGeometry = new CubeGeometry(1, 1, 2);
    lacubeMaterial = new LambertMaterial({ color: 0xffe0bd });
    la = new Mesh(lacubeGeometry, lacubeMaterial);
    la.castShadow = true;
    la.receiveShadow = true;
    la.position.x = 0;
    la.position.y = 12.520;
    la.position.z = 7.8;
    console.log("Added Left Arm");
    //Right Arm
    racubeGeometry = new CubeGeometry(1, 1, 2);
    racubeMaterial = new LambertMaterial({ color: 0xffe0bd }); // FFDAB9
    ra = new Mesh(racubeGeometry, racubeMaterial);
    ra.castShadow = true;
    ra.receiveShadow = true;
    ra.position.x = 0;
    ra.position.y = 12.520;
    ra.position.z = -7.8;
    console.log("Added Right Arm");
    //Added all the parts in human object then in scene
    human = new THREE.Object3D(); //create an empty container
    human.add(rLeg); //add a mesh with geometry to it
    human.add(body);
    human.add(lLeg);
    human.add(lh);
    human.add(rh);
    human.add(head);
    human.add(rightshoe);
    human.add(leftshoe);
    human.add(la);
    human.add(ra);
    human.rotation.y = -100;
    scene.add(human); //all parts added to scene
    //Cube to the Scene
    cubeGeometry = new BoxGeometry(4, 4, 4);
    cubeMaterial = new LambertMaterial({ color: 0xff0000 });
    cube = new Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;
    cube.position.x = 0;
    cube.position.y = 10;
    cube.position.z = 0;
    //controls added
    gui = new GUI();
    control = new Control(0, 0, 0, "#dbdbdb", "#196619", "#dbdbdb", "#dbdbdb", "#46d246", "#46d246", "#46d246", "#46d246");
    addControl(control);
    // Add stats i.e. framerate
    addStatsObject();
    console.log("Added Stats");
    document.body.appendChild(renderer.domElement);
    gameLoop(); // render the scene	
    window.addEventListener('resize', onResize, false);
}
function updateCubes() {
    head.material.setValues({ color: control.colorHead });
    body.material.setValues({ color: control.colorBody });
    ra.material.setValues({ color: control.colorRightArm });
    la.material.setValues({ color: control.colorLeftArm });
    rLeg.material.setValues({ color: control.colorRightLeg });
    lLeg.material.setValues({ color: control.colorLeftLeg });
    rh.material.setValues({ color: control.colorRightHand });
    lh.material.setValues({ color: control.colorLeftHand });
}
function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
//Controls for user
function addControl(controlObject) {
    var rotationFolder = gui.addFolder('Speed Control');
    rotationFolder.add(controlObject, 'x_rotationSpeed', 0, 0.3).listen();
    rotationFolder.add(controlObject, 'y_rotationSpeed', 0, 0.3).listen();
    rotationFolder.add(controlObject, 'z_rotationSpeed', 0, 0.3).listen();
    rotationFolder.add(controlObject, 'resetPosition').name('Reset ');
    rotationFolder.open();
    var colorFolder = gui.addFolder('Color Control');
    colorFolder.add(controlObject, 'randomColors').name('Random Colors');
    colorFolder.add(controlObject, 'resetColours').name('Reset Colors');
    colorFolder.open();
}
//stats
function addStatsObject() {
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
}
//Loop of rotation
function gameLoop() {
    stats.update();
    //animation
    human.rotation.x += control.x_rotationSpeed;
    human.rotation.y += control.y_rotationSpeed;
    human.rotation.z += control.z_rotationSpeed;
    // render using requestAnimationFrame
    requestAnimationFrame(gameLoop);
    // render the scene
    renderer.render(scene, camera);
    updateCubes();
}
// Setup default renderer
function setupRenderer() {
    renderer = new Renderer();
    renderer.setClearColor(0xEEEEEE, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    console.log("Finished setting up Renderer...");
}
// Setup main camera for the scene
function setupCamera() {
    camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);
    console.log("Finished setting up Camera...");
}
