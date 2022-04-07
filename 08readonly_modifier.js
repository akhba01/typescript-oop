var Person = /** @class */ (function () {
    function Person(name, age) {
        this.gender = 'Pria';
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person('John', 30);
person.gender = "Wanita";
var a = 'a';
a = 'b';
