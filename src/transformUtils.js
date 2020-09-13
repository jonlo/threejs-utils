import { Matrix4 } from 'three'

export class TransformUtils {

    static rotateObject3dOnAxis(object3d, axis, radians) {
        object3d.applyMatrix(new Matrix4().makeRotationAxis(axis, radians));
    };

    static rotateObject3dAroundPivotOnAxis(object3d, pivotMatrix, axis, radians) {
        object3d.applyMatrix(new Matrix4().getInverse(pivotMatrix, false));
        object3d.applyMatrix(new Matrix4().makeRotationAxis(axis, radians));
        object3d.applyMatrix(pivotMatrix);
    }
}