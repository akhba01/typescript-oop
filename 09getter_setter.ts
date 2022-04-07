class ProdukA {
    private _nama: string;
    private _harga: number = 0;
    private _jumlah: number ;
    private _diskon: number = 0;
    get nama(): string {
        return this._nama;
    }
    set nama(nama: string) {
        this._nama = nama;
    }
    get harga(): number {
        return this._harga;
    }
    set harga(harga: number) {
        this._harga = harga * 0.1;
    }
    get jumlah(): number {
        return this._jumlah;
    }
    set jumlah(jumlah: number) {
        this._jumlah = jumlah;
    }
    constructor(nama: string, harga: number, jumlah: number) {
        this._nama = nama;
        this._harga = harga;
        this._jumlah = jumlah;
    }
}

const produkA = new ProdukA('Baju', 20000, 10);
produkA.harga = 44444
console.log(produkA.harga);
produkA.nama = 'Baju Baru';
console.log(produkA.nama);
produkA.jumlah = 20;
console.log(produkA.jumlah);
console.log(produkA);