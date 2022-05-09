
export default class Engine {
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

    const attributes = { alpha, antialias, depth, desynchronized, failIfMajorPerformanceCaveat, powerPreference, premultipliedAlpha, preserveDrawingBuffer, stencil, xrCompatible };
    

    if (webgl === 2) this.gl = canvas.getContext('webgl2', attributes);
    this.isWebgl2 = !!this.gl;

    if (!this.gl) this.gl = canvas.getContext('webgl', attributes);
    if (!this.gl) console.error('webgl is not supported');

    
  }
}