var Hewan3 = /** @class */ (function () {
    function Hewan3() {
        this.nama = '';
        this.kaki = 0;
        this.mamalia = false;
    }
    Hewan3.prototype.bernafas = function () {
        console.log("".concat(this.nama, " bernafas"));
    };
    return Hewan3;
}());
var hewan3 = new Hewan3();
console.log(hewan3);
hewan3.nama = 'Katak';
hewan3.kaki = 4;
console.log(hewan3);
hewan3.bernafas();
