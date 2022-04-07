class Hewan6{
    name: string;

    bernafas(){
        console.log(`${this.name}  sedang bernafas`);
    }

}

class Katak6 extends Hewan6{
    bernafas() {
        console.log(`${this.name} bosan bernafas`);
    }
}

const katak6 = new Katak6();
katak6.name = 'Katak';
katak6.bernafas();