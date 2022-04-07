class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

interface Shark extends Animal {
  Swim(): void;
}

class IShark implements Shark {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  Swim() {
    console.log(`${this.name} is swimming`);
  }
}


