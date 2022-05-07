
export default class Engine {
  constructor(canvas = document.createElement('canvas'), {
    width,
    height,
    fullScreen = true,
    webgl = 2,
    antialias = false,
    preserveDrawingBuffer = false,
  }) {

    this.gl = canvas.getContext('webgl')

  }
}