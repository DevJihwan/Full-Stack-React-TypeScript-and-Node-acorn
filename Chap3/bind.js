var A = /** @class */ (function () {
    function A() {
        this.name = "A";
    }
    A.prototype.go = function () {
        console.log(this.name);
    };
    return A;
}());
var B = /** @class */ (function () {
    function B() {
        this.name = "B";
    }
    B.prototype.go = function () {
        console.log(this.name);
    };
    return B;
}());
var aa = new A();
aa.go();
var bb = new B();
bb.go = bb.go.bind(aa);
bb.go();
