/**
 * @classdesc Transform utils
 * @class TransformUtils
 * 
 **/
import { Matrix4 } from 'three'

export class TransformUtils {

    /**
     * Rotates a Ojbect3d over a given axis
     * @name rotateObject3dOnAxis
     * @function rotateObject3dOnAxis
     * @param Object3d object3d
     * @param Vector3 axis
     * @param Number radians
     * @example TransformUtils.rotateObject3dOnAxis(object3d, new Vector3(1, 0, 0), Math.degToRad(90))
    */
    static rotateObject3dOnAxis(object3d, axis, radians) {
        object3d.applyMatrix(new Matrix4().makeRotationAxis(axis, radians));
    };


    /**
     * Rotates a Ojbect3d around a pivot matrix over a given axis
     * @name rotateObject3dAroundPivotOnAxis
     * @function rotateObject3dAroundPivotOnAxis
     * @param Object3d object3d     
     * @param Matrix4 pivotMatrix
     * @param Vector3 axis
     * @param Number radians
     * @example TransformUtils.rotateObject3dAroundPivotOnAxis(object3d, pivotMatrix, new Vector3(1, 0, 0), Math.degToRad(90))
    */
    static rotateObject3dAroundPivotOnAxis(object3d, pivotMatrix, axis, radians) {
        object3d.applyMatrix(new Matrix4().getInverse(pivotMatrix, false));
        object3d.applyMatrix(new Matrix4().makeRotationAxis(axis, radians));
        object3d.applyMatrix(pivotMatrix);
    }

    /**
     * Creates a pivot matrix
     * @name createPivotMatrix
     * @function createPivotMatrix
     * @param Vector3 position     
     * @param Quaternion rotation     
     * @param Vector3 scale     
     * @example TransformUtils.createPivotMatrix(position, rotation, scale)
    */
    static createPivotMatrix(position, rotation, scale) {
        var pivot_matrix = new Matrix4();
        pivot_matrix.compose(position, rotation, scale);
        return pivot_matrix;
    }
}