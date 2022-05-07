

export default function Vec3(x = 0, y = x, z = x) {
  this.x = x;
  this.y = y;
  this.z = z;
}

// static properties
Vec3.prototype.up = function () {
  return new Vec3(0, 1, 0);
}

Vec3.prototype.down = function () {
  return new Vec3(0, -1, 0);
}

Vec3.prototype.left = function () {
  return new Vec3(-1, 0, 0);
}

Vec3.prototype.right = function () {
  return new Vec3(1, 0, 0);
}

Vec3.prototype.foward = function () {
  return new Vec3(0, 0, 1);
}

Vec3.prototype.back = function() {
  return new Vec3(0, 0, -1);
}

Vec3.prototype.zero = function() {
  return new Vec3(0, 0, 0);
}

Vec3.prototype.one = function () {
  return new Vec3(1, 1, 1);
}

Vec3.prototype.negativeInfinity = function () {
  return new Vec3(-Infinity, -Infinity, -Infinity);
}

Vec3.prototype.positiveInfinity = function () {
  return new Vec3(Infinity, Infinity, Infinity);
}

// properties
Vec3.prototype.magnitude = function() {
  // replace this with dot later
  return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
}

// public
Vec3.prototype.set = function(x = 0, y = x, z = x) {

}

// static methods

