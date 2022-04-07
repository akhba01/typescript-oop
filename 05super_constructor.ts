class Hewan5 {
    nama : string = '';
    kaki: number = 0;
    constructor(nama :string , kaki: number) {
        this.nama = nama;
        this.kaki = kaki;
    }
    bernafas() {
        console.log(`${this.nama} bernafas`);
    }
}

class Ular5 extends Hewan5 {
    beracun : boolean = false;

    constructor(nama: string, kaki: number, beracun: boolean) {
        super(nama, kaki);
        this.beracun = beracun;
    }
}

const ular5 = new Ular5('Ular', 2, false);
console.log(ular5);