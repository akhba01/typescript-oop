// public 
// protected
// private
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
var Hewan7 = /** @class */ (function () {
    function Hewan7(nama, kaki, mamalia) {
        this.nama = '';
        this.mamalia = false;
        this.nama = nama;
        this.kaki = kaki;
        this.mamalia = mamalia;
    }
    Hewan7.prototype.berjalan = function () {
    };
    return Hewan7;
}());
var Katak7 = /** @class */ (function (_super) {
    __extends(Katak7, _super);
    function Katak7(nama, kaki, mamalia, umurTelur, umurKecebong) {
        var _this = _super.call(this, nama, kaki, mamalia) || this;
        _this.umurTelur = umurTelur;
        _this.umurKecebong = umurKecebong;
        return _this;
    }
    Katak7.prototype.getUmur = function () {
        console.log("".concat(this.nama, " umur telur ").concat(this.umurTelur));
    };
    Katak7.prototype.getUmurKecebong = function () {
        console.log("".concat(this.nama, " umur kecebong ").concat(this.umurKecebong));
    };
    return Katak7;
}(Hewan7));
var katak7 = new Katak7('Katak', 4, true, 2, 3);
katak7.getUmur();
katak7.getUmurKecebong();
console.log(Katak7);
