# jonlo-threejs-utils

Contains utils to work with threejs.

- Transform
- Scene
- Cartesian coordinate 

### Installation

```shell
npm install jonlo-threejs-utils
```

# Functions

## Classes

<dl>
<dt><a href="#SceneUtils">SceneUtils</a></dt>
<dd><p>Scene utils</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#center">center()</a></dt>
<dd><p>centers the camera over all the scene3d objects</p>
</dd>
</dl>

<a name="SceneUtils"></a>

## SceneUtils
Scene utils

**Kind**: global class
<a name="center"></a>

## center()
centers the camera over all the scene3d objects

**Kind**: global function
**Example**
```js
SceneUtils.center(scene, camera, controls, 0, 1, 1);
```
## Classes

<dl>
<dt><a href="#TransformUtils">TransformUtils</a></dt>
<dd><p>Transform utils</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#rotateObject3dOnAxis">rotateObject3dOnAxis(Object3d, Vector3, Number)</a></dt>
<dd><p>Rotates a Ojbect3d over a given axis</p>
</dd>
<dt><a href="#rotateObject3dAroundPivotOnAxis">rotateObject3dAroundPivotOnAxis(Object3d, Matrix4, Vector3, Number)</a></dt>
<dd><p>Rotates a Ojbect3d around a pivot matrix over a given axis</p>
</dd>
<dt><a href="#createPivotMatrix">createPivotMatrix(Vector3, Quaternion, Vector3)</a></dt>
<dd><p>Creates a pivot matrix</p>
</dd>
</dl>

<a name="TransformUtils"></a>

## TransformUtils
Transform utils

**Kind**: global class
<a name="rotateObject3dOnAxis"></a>

## rotateObject3dOnAxis(Object3d, Vector3, Number)
Rotates a Ojbect3d over a given axis

**Kind**: global function

| Param | Description |
| --- | --- |
| Object3d | object3d |
| Vector3 | axis |
| Number | radians |

**Example**
```js
TransformUtils.rotateObject3dOnAxis(object3d, new Vector3(1, 0, 0), Math.degToRad(90))
```
<a name="rotateObject3dAroundPivotOnAxis"></a>

## rotateObject3dAroundPivotOnAxis(Object3d, Matrix4, Vector3, Number)
Rotates a Ojbect3d around a pivot matrix over a given axis

**Kind**: global function

| Param | Description |
| --- | --- |
| Object3d | object3d |
| Matrix4 | pivotMatrix |
| Vector3 | axis |
| Number | radians |

**Example**
```js
TransformUtils.rotateObject3dAroundPivotOnAxis(object3d, pivotMatrix, new Vector3(1, 0, 0), Math.degToRad(90))
```
<a name="createPivotMatrix"></a>

## createPivotMatrix(Vector3, Quaternion, Vector3)
Creates a pivot matrix

**Kind**: global function

| Param | Description |
| --- | --- |
| Vector3 | position |
| Quaternion | rotation |
| Vector3 | scale |

**Example**
```js
TransformUtils.createPivotMatrix(position, rotation, scale)
```

## Classes

<dl>
<dt><a href="#CartesianCoordinatesUtils">CartesianCoordinatesUtils</a></dt>
<dd><p>Cartesian coordinates  utils</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#getPointInBetweenByPerc">getPointInBetweenByPerc(Vector3, Vector3, Number)</a></dt>
<dd><p>Get the point between two points given a percentage distance</p>
</dd>
<dt><a href="#getDirBetweenPoints">getDirBetweenPoints(Vector3, Vector3)</a></dt>
<dd><p>Get the direction vector b etween two points</p>
</dd>
<dt><a href="#angleBetweenVectors">angleBetweenVectors(Vector3, Vector3)</a></dt>
<dd><p>Get the angle between two vectors</p>
</dd>
</dl>

<a name="CartesianCoordinatesUtils"></a>

## CartesianCoordinatesUtils
Cartesian coordinates  utils

**Kind**: global class
<a name="getPointInBetweenByPerc"></a>

## getPointInBetweenByPerc(Vector3, Vector3, Number)
Get the point between two points given a percentage distance

**Kind**: global function

| Param | Description |
| --- | --- |
| Vector3 | startPoint |
| Vector3 | endPoint |
| Number | percentage |

**Example**
```js
CartesianCoordinatesUtils.getPointInBetweenByPerc(new Vector3(1,0,0),new Vector3(2,0,0),50)
```
<a name="getDirBetweenPoints"></a>

## getDirBetweenPoints(Vector3, Vector3)
Get the direction vector b etween two points

**Kind**: global function

| Param | Description |
| --- | --- |
| Vector3 | startPoint |
| Vector3 | endPoint |

**Example**
```js
CartesianCoordinatesUtils.getDirBetweenPoints(new Vector3(1,0,0),new Vector3(2,0,0))
```
<a name="angleBetweenVectors"></a>

## angleBetweenVectors(Vector3, Vector3)
Get the angle between two vectors

**Kind**: global function

| Param | Description |
| --- | --- |
| Vector3 | v2 |
| Vector3 | v1 |

**Example**
```js
CartesianCoordinatesUtils.angleBetweenVectors(new Vector3(1,0,0),new Vector3(2,0,0))
```