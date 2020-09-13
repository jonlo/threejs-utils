import { Camera, Light, BoxHelper, Vector3 } from 'three'

const CAMERA_TYPE = Object.freeze({ 'OrthographicCamera': 'OrthographicCamera', 'PerspectiveCamera': 'PerspectiveCamera' });

export class SceneUtils {

    static center(scene, camera, controls, axis, caf, inverse) {
        let BbMaxx = -Infinity;
        let BbMaxy = -Infinity;
        let BbMaxz = -Infinity;
        let BbMinx = Infinity;
        let BbMiny = Infinity;
        let BbMinz = Infinity;
        for (let i = 0; i < scene.children.length; i++) {
            if (scene.children[i] instanceof Camera ||
                scene.children[i] instanceof Light)
                continue;
            let bhelper = new BoxHelper(scene.children[i], 0xff0000);
            bhelper.geometry.computeBoundingBox();
            let WRSmin = bhelper.localToWorld(bhelper.geometry.boundingBox.min);
            let WRSmax = bhelper.localToWorld(bhelper.geometry.boundingBox.max);
            if (WRSmin.x < BbMinx) {
                BbMinx = WRSmin.x;
            }
            if (WRSmin.y < BbMiny) {
                BbMiny = WRSmin.y;
            }
            if (WRSmin.z < BbMinz) {
                BbMinz = WRSmin.z;
            }
            if (WRSmax.x > BbMaxx) {
                BbMaxx = WRSmax.x;
            }
            if (WRSmax.y > BbMaxy) {
                BbMaxy = WRSmax.y;
            }
            if (WRSmax.z > BbMaxz) {
                BbMaxz = WRSmax.z;
            }
        }
        if (BbMinx === Infinity) {
            BbMaxx = -10;
            BbMaxy = -10;
            BbMaxz = -10;
            BbMinx = 10;
            BbMiny = 10;
            BbMinz = 10;
        }

        var length = new Vector3(BbMaxx - BbMinx,
            BbMaxy - BbMiny,
            BbMaxz - BbMinz);

        var center = new Vector3(BbMinx + (length.x / 2),
            BbMiny + (length.y / 2),
            BbMinz + (length.z / 2));

        if (camera.type === CAMERA_TYPE.OrthographicCamera) {

            let lengthX = 0;
            let lengthY = 0;
            switch (axis) {
                case 0:
                    lengthX = length.z;
                    lengthY = length.y;
                    break;
                case 1:
                    lengthX = length.z;
                    lengthY = length.x;
                    break;
                case 2:
                    lengthX = length.x;
                    lengthY = length.y;
                    break;
                default:
                    break;
            }
            let aspectWidth = window.innerWidth / lengthX;
            let aspectHeight = window.innerHeight / lengthY;
            let maxIsWidth = aspectWidth < aspectHeight;
            if (!maxIsWidth) {
                let aspect = window.innerWidth / window.innerHeight;
                camera.left = lengthY * aspect * caf / -2;
                camera.right = lengthY * aspect * caf / 2;
                camera.top = lengthY * caf / 2;
                camera.bottom = lengthY * caf / -2;
                camera.position.set(0, 0, 0).setComponent(axis, center.getComponent(axis) + (lengthY * caf * inverse));

            } else {
                let aspect = window.innerHeight / window.innerWidth;
                camera.left = lengthX * caf / -2;
                camera.right = lengthX * caf / 2;
                camera.top = lengthX * aspect * caf / 2;
                camera.bottom = lengthX * aspect * caf / -2;
                camera.position.set(0, 0, 0).setComponent(axis, center.getComponent(axis) + (lengthX * caf * inverse));
            }


        } else {
            var maxLenght = Math.max(length.x, length.z);
            let dist = (maxLenght * caf) / 2 / Math.tan(Math.PI * camera.fov / 360);
            camera.position.set(center.x, center.y, center.z + (maxLenght * caf));
            if (controls) {
                controls.target = new Vector3(0, center.y, 0);
            }
        }
        camera.updateProjectionMatrix();
    }

    static getScreenPosition(position, camera, width, height) {
        let screenPosition = position.clone();
        screenPosition.project(camera);
        screenPosition.x = (screenPosition.x + 1) * width / 2;
        screenPosition.y = - (screenPosition.y - 1) * height / 2;
        screenPosition.z = 0;
        return screenPosition;
    }

}