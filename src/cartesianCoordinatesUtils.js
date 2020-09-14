/**
 * @classdesc Cartesian coordinates  utils
 * @class CartesianCoordinatesUtils
 * 
 **/

export class CartesianCoordinatesUtils {

	/**
	* Get the point between two points given a percentage distance
	* @name getPointInBetweenByPerc
	* @function getPointInBetweenByPerc
	* @param Vector3 startPoint     
	* @param Vector3 endPoint     
	* @param Number percentage     
	* @example CartesianCoordinatesUtils.getPointInBetweenByPerc(new Vector3(1,0,0),new Vector3(2,0,0),50)
   */
	static getPointInBetweenByPerc(startPoint, endPoint, percentage) {
		let dir = getDirBetweenPoints(startPoint, endPoint);
		let len = dir.length();
		dir = dir.normalize().multiplyScalar(len * percentage);
		return startPoint.clone().add(dir);
	}

	/**
	* Get the direction vector b etween two points
	* @name getDirBetweenPoints
	* @function getDirBetweenPoints
	* @param Vector3 startPoint     
	* @param Vector3 endPoint     
	* @example CartesianCoordinatesUtils.getDirBetweenPoints(new Vector3(1,0,0),new Vector3(2,0,0))
   */
	static getDirBetweenPoints(startPoint, endPoint) {
		let dir = endPoint.clone().sub(startPoint);
		return dir;
	}

	/**
	* Get the angle between two vectors
	* @name angleBetweenVectors
	* @function angleBetweenVectors
	* @param Vector3 v2     
	* @param Vector3 v1     
	* @example CartesianCoordinatesUtils.angleBetweenVectors(new Vector3(1,0,0),new Vector3(2,0,0))
   */
	static angleBetweenVectors(v2, v1) {
		let angle = Math.atan2(v1.y, v1.x) - Math.atan2(v2.y, v2.x);
		angle = angle * 180 / Math.PI;
		angle = angle < 0 ? 360 + angle : angle;
		return angle;
	}

}
