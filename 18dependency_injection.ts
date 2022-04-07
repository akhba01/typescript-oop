class AStore {
  private name: string = "Store A";
  private address: string = "Address A";
  private profit: number = 1000;

  getName(): string {
    return this.name;
  }

  getAddress(): string {
    return this.address;
  }

  getProfit(): number {
    return this.profit;
  }
}

class FashionProduct {
  private name: string = "Fashion Product A";
  private price: number = 1000;
  private store: AStore;

  constructor(name = "Fashion Product A", price = 1000, store = new AStore()) {
    this.name = name;
    this.price = price;
    this.store = store;
    this.store = new AStore();
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.store.getProfit();
  }

  sale(price: number): void {
    console.log(
      `${this.name} is sold for ${price} profit is ${price - this.price}`
    );
  }
}

class TechProduct {
  private name: string = "Tech Product A";
  private price: number = 1000;
  private store: AStore;

  constructor(name = "Tech Product A", price = 1000, store = new AStore()) {
    this.name = name;
    this.price = price;
    this.store = store;
    this.store = new AStore();
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.store.getProfit();
  }

  sale(price: number): void {
    console.log(
      `${this.name} is sold for ${price} profit is ${price - this.price} store name is ${this.store.getName()}`
    );
  }
}

const baju = new FashionProduct("Baju", 10000, new AStore());
baju.sale(15000);
console.log(baju);


// ---------------------------------------------------------------------------------------------------------------------

interface IStore {
    name: string;
    address: string;
    profit: number;
    getProfit(): number;
}

class OldStore implements IStore {
     name: string = "Store A";
     address: string = "Address A";
     profit: number = 1000;

    getName(): string {
        return this.name;
    }

    getAddress(): string {
        return this.address;
    }

    getProfit(): number {
        return this.profit;
    }
}


class NewStore implements IStore {
    name: string = "Toko Baru";
    address: string = "Address Baru";
    profit: number = 2500;

    getName(): string {
        return this.name;
    }

    getAddress(): string {
        return this.address;
    }

    getProfit(): number {
        return this.profit;
    }
}

class HijabProduct {
     name: string ;
     price: number;
     store: IStore;

    constructor({ name, price, store }: { name: string; price: number; store: IStore }) {
        this.name = name;
        this.price = price;
        this.store = store;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.store.getProfit();
    }

    sale(price: number): void {
        console.log(
            `${this.name} is sold for ${price} profit is ${price - this.store.profit}`
        );
    }
}

class FoodProduct {
    private name: string = "Food Product A";
    private price: number = 1000;
    private store: IStore;

    constructor(name = "Food Product A", price = 1000, store : IStore) {
        this.name = name;
        this.price = price;
        this.store = store;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.store.getProfit();
    }

    sale(price: number): void {
        console.log(
            `${this.name} is sold for ${price} profit is ${price - this.price}`
        );
    }
} 

const oldStore = new OldStore();
const newStore = new NewStore();

const bajuBagus = new HijabProduct({name :"Baju Bagus", store : oldStore, price : 10000});
const hijabMahal = new HijabProduct({name :"Hijab Mahal", store : newStore, price : 10000});

console.log(bajuBagus);
console.log(hijabMahal);

bajuBagus.sale(15000);
hijabMahal.sale(15000);