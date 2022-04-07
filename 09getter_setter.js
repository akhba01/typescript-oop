var ProdukA = /** @class */ (function () {
    function ProdukA(nama, harga, jumlah) {
        this._harga = 0;
        this._diskon = 0;
        this._nama = nama;
        this._harga = harga;
        this._jumlah = jumlah;
    }
    Object.defineProperty(ProdukA.prototype, "nama", {
        get: function () {
            return this._nama;
        },
        set: function (nama) {
            this._nama = nama;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProdukA.prototype, "harga", {
        get: function () {
            return this._harga;
        },
        set: function (harga) {
            this._harga = harga * 0.1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProdukA.prototype, "jumlah", {
        get: function () {
            return this._jumlah;
        },
        set: function (jumlah) {
            this._jumlah = jumlah;
        },
        enumerable: false,
        configurable: true
    });
    return ProdukA;
}());
var produkA = new ProdukA('Baju', 20000, 10);
produkA.harga = 44444;
console.log(produkA.harga);
produkA.nama = 'Baju Baru';
console.log(produkA.nama);
produkA.jumlah = 20;
console.log(produkA.jumlah);
console.log(produkA);
