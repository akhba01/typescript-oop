var Ayam = /** @class */ (function () {
    function Ayam() {
    }
    Ayam.jalan = function () {
        console.log('Ayam jalan dengan kaki ' + this.kaki + ' buah');
    };
    Ayam.prototype.getKaki = function () {
        console.log(Ayam.kaki);
        // return this.kaki
    };
    Ayam.kaki = 2;
    return Ayam;
}());
console.log(Ayam.jalan());
var ayam2 = new Ayam();
ayam2.getKaki();
// ______________________
var ayam3 = new Ayam();
var ayam4 = new Ayam();
var ayam5 = new Ayam();
var ayam6 = new Ayam();
var ayam7 = new Ayam();
var ayam8 = new Ayam();
console.log(ayam3.getKaki());
console.log(ayam4.getKaki());
console.log(ayam5.getKaki());
console.log(ayam6.getKaki());
console.log(ayam7.getKaki());
console.log(ayam8.getKaki());
Ayam.kaki = 4;
console.log(ayam3.getKaki());
console.log(ayam4.getKaki());
console.log(ayam5.getKaki());
console.log(ayam6.getKaki());
console.log(ayam7.getKaki());
console.log(ayam8.getKaki());
