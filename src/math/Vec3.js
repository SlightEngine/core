

export default class Vec3 {
  constructor(x = 0, y = x, z = x) {
    this.x = x;
    this.y = y;
    this.z = z;
  }


  // static properties
  up () {
    return new Vec3(0, 1, 0);
  }

  down () {
    return new Vec3(0, -1, 0);
  }

  left () {
    return new Vec3(-1, 0, 0);
  }

  right () {
    return new Vec3(1, 0, 0);
  }

  foward () {
    return new Vec3(0, 0, 1);
  }

  back () {
    return new Vec3(0, 0, -1);
  }

  zero () {
    return new Vec3(0, 0, 0);
  }

  one () {
    return new Vec3(1, 1, 1);
  }

  negativeInfinity () {
    return new Vec3(-Infinity, -Infinity, -Infinity);
  }

  positiveInfinity () {
    return new Vec3(Infinity, Infinity, Infinity);
  }


  // operators
  sub() {

  }

  mult() {

  }

  div() {

  }

  add() {

  }


  // properties
  magnitude () {
    // replace this with dot later
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }


  // public
  equals() {

  }

  set (x = 0, y = x, z = x) {

  }

  toString() {

  }

  // static methods
  angle() {

  }

  clampMagnitude() {

  }

  cross() {

  }

  distance() {

  }

  dot() {

  }

  lerp() {

  }

  lerpUnclamped() {

  }

  max() {

  }

  min() {

  }

  moveTowards() {

  }

  normalize() {

  }

  orthoNormalize() {

  }

  project() {

  }

  projectOnPlane() {

  }

  reflect() {

  }

  rotateTowards() {

  }

  scale() {

  }

  signedAngle() {

  }

  slerp() {

  }

  slerpUnclamped() {

  }

  smoothDamp() {

  }

  

}
