# octree

```
var Octant = require('./octree');

var modelWidth = 4
var modelHalfWidth = modelWidth / 2;
var modelBounds = [
  [-modelHalfWidth, -modelHalfWidth, -modelHalfWidth],
  [modelHalfWidth, modelHalfWidth, modelHalfWidth]
];
var root = new Octant(modelBounds);
root.insert([1.0, 1.0, 1.0], 1);
```

the resulting octree in `root` looks like this:

```
{
  children: [{
    children: [, , , , , , , ],
    aabb: [
      [-2, -2, -2],
      [0, 0, 0]
    ],
    isLeaf: true,
    solid: false,
    width: 2
  }, {
    children: [, , , , , , , ],
    aabb: [
      [0, -2, -2],
      [2, 0, 0]
    ],
    isLeaf: true,
    solid: false,
    width: 2
  }, {
    children: [, , , , , , , ],
    aabb: [
      [0, 0, -2],
      [2, 2, 0]
    ],
    isLeaf: true,
    solid: false,
    width: 2
  }, {
    children: [, , , , , , , ],
    aabb: [
      [-2, 0, -2],
      [0, 2, 0]
    ],
    isLeaf: true,
    solid: false,
    width: 2
  }, {
    children: [, , , , , , , ],
    aabb: [
      [-2, -2, 0],
      [0, 0, 2]
    ],
    isLeaf: true,
    solid: false,
    width: 2
  }, {
    children: [, , , , , , , ],
    aabb: [
      [0, -2, 0],
      [2, 0, 2]
    ],
    isLeaf: true,
    solid: false,
    width: 2
  }, {
    children: [{
      children: [, , , , , , , ],
      aabb: [
        [0, 0, 0],
        [1, 1, 1]
      ],
      isLeaf: true,
      solid: true,
      width: 1
    }, {
      children: [, , , , , , , ],
      aabb: [
        [1, 0, 0],
        [2, 1, 1]
      ],
      isLeaf: true,
      solid: true,
      width: 1
    }, {
      children: [, , , , , , , ],
      aabb: [
        [1, 1, 0],
        [2, 2, 1]
      ],
      isLeaf: true,
      solid: true,
      width: 1
    }, {
      children: [, , , , , , , ],
      aabb: [
        [0, 1, 0],
        [1, 2, 1]
      ],
      isLeaf: true,
      solid: true,
      width: 1
    }, {
      children: [, , , , , , , ],
      aabb: [
        [0, 0, 1],
        [1, 1, 2]
      ],
      isLeaf: true,
      solid: true,
      width: 1
    }, {
      children: [, , , , , , , ],
      aabb: [
        [1, 0, 1],
        [2, 1, 2]
      ],
      isLeaf: true,
      solid: true,
      width: 1
    }, {
      children: [, , , , , , , ],
      aabb: [
        [1, 1, 1],
        [2, 2, 2]
      ],
      isLeaf: true,
      solid: true,
      width: 1
    }, {
      children: [, , , , , , , ],
      aabb: [
        [0, 1, 1],
        [1, 2, 2]
      ],
      isLeaf: true,
      solid: true,
      width: 1
    }],
    aabb: [
      [0, 0, 0],
      [2, 2, 2]
    ],
    isLeaf: false,
    solid: false,
    width: 2
  }, {
    children: [, , , , , , , ],
    aabb: [
      [-2, 0, 0],
      [0, 2, 2]
    ],
    isLeaf: true,
    solid: false,
    width: 2
  }],
  aabb: [
    [-2, -2, -2],
    [2, 2, 2]
  ],
  isLeaf: false,
  solid: false,
  width: 4
}
```
