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
var Hewan4 = /** @class */ (function () {
    function Hewan4() {
        this.nama = "";
        this.kaki = 0;
    }
    Hewan4.prototype.bernafas = function () {
        console.log("".concat(this.nama, " bernafas"));
    };
    return Hewan4;
}());
var Burung4 = /** @class */ (function (_super) {
    __extends(Burung4, _super);
    function Burung4(nama, kaki, warnanya) {
        var _this = _super.call(this, nama, kaki) || this;
        _this.warna = "merah";
        _this.warna = warnanya;
        return _this;
    }
    Burung4.prototype.bernafas = function () {
        console.log("".concat(this.nama, " bernafas mempunyai warna ").concat(this.warna));
    };
    return Burung4;
}(Hewan4));
var burung4 = new Burung4('Burung', 2, 'merah');
burung4.nama = 'Kakatua';
burung4.kaki = 2;
burung4.warna = 'biru';
burung4.bernafas();
console.log(burung4);
