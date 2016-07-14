import {
  Mesh,
  CubeGeometry,
  MeshLambertMaterial,
  Vector3
} from "three";
import {
  createRenderer,
  createCamera,
  createScene,
  createLight
} from "./utils/three";
const styles = require("./index.css");

const canvas = document.getElementById("canvas-frame");
canvas.className = styles.canvas;

const renderer = createRenderer(canvas);
const camera = createCamera(
  45,
  canvas.clientWidth / canvas.clientHeight,
  new Vector3(100, 20, 50),
  new Vector3(0, 0, 1)
);
const scene = createScene();

const light = createLight( new Vector3(100, 100, 200) );
scene.add(light);

const cube = new Mesh(
  new CubeGeometry(50, 50, 50),
  new MeshLambertMaterial({ color: 0xff0000 })
);
scene.add(cube);
cube.position.set(0, 0, 0);

renderer.clear();
renderer.render(scene, camera);
