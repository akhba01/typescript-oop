class Hewan4 {
    nama : string
    kaki : number

    constructor(nama : string, kaki : number) {
        this.nama = nama
        this.kaki = kaki
    }
}

const hewan4 = new Hewan4('Katak', 4)
console.log(hewan4)

// --------------

class Hewan41 {
    constructor(public nama : string, public kaki : number) {
        
    }
}

const burung41 = new Hewan41('Burung', 2)
console.log(burung41)