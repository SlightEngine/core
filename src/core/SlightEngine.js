
export class Engine {
  constructor(canvas = document.createElement('canvas'), {

    fullScreen = true,

    webgl = 2,

    alpha = true,
    antialias = true,
    depth = true,
    desynchronized = false,
    failIfMajorPerformanceCaveat = false,
    powerPreference = 'default',
    premultipliedAlpha = true,
    preserveDrawingBuffer = false,
    stencil = false,
    xrCompatible = false
  } = {}) {

    window.Slight = {
      Engine: this
    };

    const attributes = { alpha, antialias, depth, desynchronized, failIfMajorPerformanceCaveat, powerPreference, premultipliedAlpha, preserveDrawingBuffer, stencil, xrCompatible };
  

    if (webgl === 2) this.gl = canvas.getContext('webgl2', attributes);
    this.isWebgl2 = !!this.gl;

    if (!this.gl) this.gl = canvas.getContext('webgl', attributes);
    if (!this.gl) console.error('webgl is not supported');

    this.state = {
      blendFunc: {
        src: this.gl.ONE,
        dst: this.gl.ZERO
      },
      blendEquation: {
        modeRGB: this.gl.FUNC_ADD
      },
      cullFace: null,
      frontFace: this.gl.CCW,
      depthMask: true,
    }

    this.scene = {

    }

  }

  scene(func) {

  }

  update(execute) {

    let lastUpdate = Date.now();
    let now, dt;

    function renderLoop() {
      now = Date.now();
      dt = now - lastUpdate;
      lastUpdate = now;

      execute(this.scene, dt);
      window.requestAnimationFrame(renderLoop);
    }

    window.requestAnimationFrame(renderLoop);
  }

}