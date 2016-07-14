import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  DirectionalLight,
  Vector3
} from "three";
import {
  assign
} from "lodash";

export function createRenderer(elm: HTMLElement): THREE.WebGLRenderer {
  const renderer = new WebGLRenderer({ antialias: true });
  renderer.setSize(elm.clientWidth, elm.clientHeight);
  elm.appendChild(renderer.domElement);
  renderer.setClearColor(0xffffff, 1.0);
  return renderer;
}

export function createCamera(fov: number, aspect: number, position: THREE.Vector3, up: THREE.Vector3): THREE.PerspectiveCamera {
  const camera = new PerspectiveCamera(fov, aspect, 1, 10000);
  assign(camera.position, position);
  assign(camera.up, up);
  camera.lookAt( new Vector3(0, 0, 0) );
  return camera;
}

export function createScene(): THREE.Scene {
  return new Scene();
}

export function createLight(position: THREE.Vector3): THREE.DirectionalLight {
  const light = new DirectionalLight(0xffffff, 1.0);
  light.position.set(position.x, position.y, position.z);
  return light;
}
