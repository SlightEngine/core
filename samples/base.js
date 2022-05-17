import Slight from '../../src/Slight';
import Camera from '../src/core/Camera';

const canvas = document.getElementById('canvas');
const { Engine } = Slight;

const engine = new Engine(canvas);

let box;

engine.scene(() => {
  const cam = new Camera();
  const sun = new Light.Hemispheric();

  box = new Mesh.Box();
});

engine.update((scene, dt) =>  {
  box.rotation.y += 1 * dt;
});