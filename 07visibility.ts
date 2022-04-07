// public 
// protected
// private

class Hewan7 {
    public nama: string = '';
    private kaki: number
    protected mamalia: boolean = false;

    constructor(nama: string, kaki: number, mamalia: boolean) {
        this.nama = nama;
        this.kaki = kaki;
        this.mamalia = mamalia;
    }

    berjalan() {
    }
}


class Katak7 extends Hewan7 {
    private umurTelur: number
    private umurKecebong: number 
    private umurKatak: number 

    constructor(nama: string, kaki: number, mamalia: boolean, umurTelur: number, umurKecebong: number) {
        super(nama, kaki, mamalia);
        this.umurTelur = umurTelur;
        this.umurKecebong = umurKecebong;
    }

    getUmur() {
        console.log(`${this.nama} umur telur ${this.umurTelur}`);
    }

    getUmurKecebong() {
        console.log(`${this.nama} umur kecebong ${this.umurKecebong}`);
    }

}

const katak7 = new Katak7('Katak', 4, true, 2, 3);
katak7.getUmur();
katak7.getUmurKecebong();
console.log(Katak7);