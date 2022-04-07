interface AndroidPhone {
    name: string;
    version: string;
    os: string;
    getInfo(): string;
}

class AndroidPhoneImpl implements AndroidPhone {
    name: string;
    version: string;
    os: string;
    constructor({ name, version, os }: { name: string; version: string; os: string; }) {
        this.name = name;
        this.version = version;
        this.os = os;
    }
    getInfo(): string {
        return `${this.name} ${this.version} ${this.os}`;
    }
}

class Samsung implements AndroidPhone {
    name: string;
    version: string;
    os: string;
    constructor({ name, version, os }: { name: string; version: string; os: string; }) {
        this.name = name;
        this.version = version;
        this.os = os;
    }
    getInfo(): string {
        return `${this.name} ${this.version} ${this.os}`;
    }
}

const androidPhone = new AndroidPhoneImpl({ name: 'Samsung', version: '10', os: 'Android' });
console.log(androidPhone.getInfo());

const samsung = new Samsung({ name: 'Samsung', version: '10', os: 'Android' });
console.log(samsung.getInfo());


class Game {
    private phone: AndroidPhone;
    constructor(private name: string, private phoneType: AndroidPhone) {
        this.phone = phoneType;
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    getPhone(): AndroidPhone {
        return this.phone;
    }

    getInfo(): string {
        return `${this.name} ${this.phone.getInfo()}`;
    }


    
}

const game = new Game('Game', androidPhone);
console.log(game.getInfo());


// ---------------------

