var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Hewan5 = /** @class */ (function () {
    function Hewan5(nama, kaki) {
        this.nama = '';
        this.kaki = 0;
        this.nama = nama;
        this.kaki = kaki;
    }
    Hewan5.prototype.bernafas = function () {
        console.log("".concat(this.nama, " bernafas"));
    };
    return Hewan5;
}());
var Ular5 = /** @class */ (function (_super) {
    __extends(Ular5, _super);
    function Ular5(nama, kaki, beracun) {
        var _this = _super.call(this, nama, kaki) || this;
        _this.beracun = false;
        _this.beracun = beracun;
        return _this;
    }
    return Ular5;
}(Hewan5));
var ular5 = new Ular5('Ular', 2, false);
console.log(ular5);
