interface Teacher {
  name: string;
  age: number;
  phone?: string;
}

let teacher: Teacher = { name: "John", age: 30, phone: "0123456789" };
console.log(teacher)