import Slight from '../src/Slight';

const canvas = document.getElementById('canvas');
const { Engine } = Slight;

const engine = new Engine(canvas);

engine.scene(
  <Slight.Fragment>
    <camera />
    <world>
      
    </world>
  </Slight.Fragment>
)