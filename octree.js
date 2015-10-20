var octifyAabb = require('octify-aabb');

function Octant (box) {
  this.children = new Array(8);
  this.aabb = box;
  this.isLeaf = true;
  this.solid = false;
  this.width = Math.abs(box[0][0] - box[1][0]);
  // this.height = (box[0][1] - box[1][1])/2; // do we want to permit non-cubic octants?
}

Octant.prototype.subdivide = function () {
  var x = octifyAabb(this.aabb);

  // TODO: warn if overwriting children
  for (var i = 0; i < x.length; i++) {
    this.children[i] = new Octant(x[i])
  }

  this.isLeaf = false;
  this.solid = false;
}

Octant.prototype.insert = function (point, width) {
  var inside = contains(this.aabb, point);
  var tooBig = this.width > width;

  if (inside && tooBig) {
    if (this.isLeaf) {
      this.subdivide();
    }

    for (var i = 0; i < this.children.length; i++) {
      this.children[i].insert(point, width);
    }
  }
  else if (inside && !tooBig) {
    this.solid = true;
  }
}

Octant.prototype.intersects = function (ray) {
  var inter = ray.intersects(this.aabb, true);
  if (!inter) { return; }

  if (!this.isLeaf) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isLeaf && !this.children[i].solid) { continue; }

      if (this.children[i].intersects(ray)) return true;
    }
  }
  else {
    if (inter && this.solid) {
      return true;
    }
  }
}

function contains (box, point) {
  return ((point[0] >= box[0][0] && point[0] <= box[1][0]) &&
          (point[1] >= box[0][1] && point[1] <= box[1][1]) &&
          (point[2] >= box[0][2] && point[2] <= box[1][2]));
}

module.exports = Octant;
