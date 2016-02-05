/**
 * @author: Gursharnbir Singh
 */
/// <reference path="../../typings/tsd.d.ts"/>
var objects;
(function (objects) {
    // CONTROL CLASS 
    var Control = (function () {
        function Control(x_rotationSpeed, y_rotationSpeed, z_rotationSpeed, colorHead, colorBody, colorRightArm, colorLeftArm, colorRightLeg, colorLeftLeg, colorRightHand, colorLefthand) {
            this.x_rotationSpeed = x_rotationSpeed;
            this.y_rotationSpeed = y_rotationSpeed;
            this.z_rotationSpeed = z_rotationSpeed;
            this.colorHead = colorHead;
            this.colorBody = colorBody;
            this.colorRightArm = colorRightArm;
            this.colorLeftArm = colorLeftArm;
            this.colorRightLeg = colorRightLeg;
            this.colorLeftLeg = colorLeftLeg;
            this.colorLeftHand = colorLefthand;
            this.colorRightHand = colorRightHand;
        }
        //PUBLIC METHODS
        //Method for random colors
        Control.prototype.randomColors = function () {
            this.colorHead = '#' + Math.random().toString(16).substring(2, 8);
            this.colorBody = '#' + Math.random().toString(16).substring(2, 8);
            this.colorRightArm = '#' + Math.random().toString(16).substring(2, 8);
            this.colorLeftArm = '#' + Math.random().toString(16).substring(2, 8);
            this.colorRightLeg = '#' + Math.random().toString(16).substring(2, 8);
            this.colorLeftLeg = '#' + Math.random().toString(16).substring(2, 8);
            this.colorLeftHand = '#' + Math.random().toString(16).substring(2, 8);
            this.colorRightHand = '#' + Math.random().toString(16).substring(2, 8);
            console.log(this.colorHead);
            console.log(this.colorBody);
            console.log(this.colorRightArm);
            console.log(this.colorRightLeg);
            console.log(this.colorLeftLeg);
            console.log(this.colorLeftArm);
        };
        //Method for reset default colors  
        Control.prototype.resetColours = function () {
            this.colorHead = "#dbdbdb";
            this.colorBody = "#196619";
            this.colorRightArm = '#dbdbdb';
            this.colorLeftArm = '#dbdbdb';
            this.colorRightLeg = '#46d246';
            this.colorLeftLeg = '#46d246';
            this.colorLeftHand = "#46d246";
            this.colorRightHand = "#46d246";
            updateCubes();
        };
        //Method for rest position(stop the rotation)
        Control.prototype.resetPosition = function () {
            this.x_rotationSpeed = 0;
            this.y_rotationSpeed = 0;
            this.z_rotationSpeed = 0;
        };
        Control.prototype.clone = function () {
            var materials = [
                new THREE.MeshLambertMaterial({ opacity: 0.6, color: 0xff44ff, transparent: true }),
                new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true })
            ];
            var mesh2 = THREE.SceneUtils.createMultiMaterialObject(customGeometry, materials);
            mesh2.children.forEach(function (child) {
                child.castShadow = true;
            });
            mesh2.translateX(5);
            mesh2.translateZ(5);
            mesh2.name = "clone";
            scene.remove(scene.getObjectByName("clone"));
            scene.add(mesh2);
        };
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
