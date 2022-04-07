class Person{
    readonly gender:string = 'Pria';
    private _name:string;
    private _age:number;
    constructor(name:string,age:number){
        this._name = name;
        this._age = age;
    }
    get name():string{
        return this._name;
    }
    get age():number{
        return this._age;
    }

}

const person = new Person('John',30);
person.gender = "Wanita"


const a = 'a'
a = 'b'