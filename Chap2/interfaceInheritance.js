var InterfaceNamespace;
(function (InterfaceNamespace) {
    var Motorcycle = /** @class */ (function () {
        function Motorcycle(name) {
            this.name = name;
        }
        Motorcycle.prototype.updatewheelCount = function (newwheelCount) {
            this.wheelCount = newwheelCount;
            console.log("Automobile has ".concat(this.wheelCount));
        };
        Motorcycle.prototype.showNumberOfwheels = function () {
            console.log("moved Automobile ".concat(this.wheelCount, " miles"));
        };
        Motorcycle.prototype.getFullName = function () {
            return "MC-" + this.name;
        };
        return Motorcycle;
    }());
    var moto = new Motorcycle("beginner-cycle");
    console.log(moto.getFullName());
})(InterfaceNamespace || (InterfaceNamespace = {}));
