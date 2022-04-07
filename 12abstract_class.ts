abstract class Animal {
    abstract makeSound(): void;
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat(): void {
        console.log(`${this.name} makan`);
    }

    abstract bergerak(): void // abstract method

}

class Dog extends Animal {
    constructor({ name }: { name: string; }) {
        super(name);
    }
    makeSound(): void {
        console.log('Woof');
    }
    bergerak(): void {
        console.log('Dog bergerak');
    }
}

class Cat extends Animal {
    constructor({ name }: { name: string; }) {
        super(name);
    }
    makeSound(): void {
        console.log('Meow');
    }
    bergerak(): void {
        console.log('Cat bergerak');
    }
}

const dog = new Dog({ name: 'Dog' });
dog.makeSound();
dog.eat();
dog.bergerak();

const  cat = new Cat({ name: 'Cat' });
cat.makeSound();
cat.eat();
cat.bergerak();
