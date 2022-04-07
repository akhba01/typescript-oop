interface Vechile{
    name: string;
    wheel: number;

}

interface Car extends Vechile{
    doors: number;
}

class Civic implements Car{
    name: string = "civic";
    wheel: number = 4;
    doors: number = 4;
}

console.log(Civic);

Civic.name = "honda";
console.log(Civic);//