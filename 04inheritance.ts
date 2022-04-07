class Hewan4{
    nama : string ="";
    kaki : number = 0;

    bernafas(){
        console.log(`${this.nama} bernafas`);
    }

}

class Burung4 extends Hewan4{
    warna : string = "merah";
    constructor(nama : string, kaki : number,warnanya : string){
        super(nama, kaki);
        this.warna = warnanya;
    }
    bernafas(){
        console.log(`${this.nama} bernafas mempunyai warna ${this.warna}`);
    }
}

const burung4 = new Burung4('Burung', 2, 'merah');
burung4.nama = 'Kakatua';
burung4.kaki = 2;
burung4.warna = 'biru';
burung4.bernafas();

console.log(burung4);

