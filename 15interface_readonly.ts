interface Student {
  readonly name: string;
  readonly age: number;
}

let student: Student = { name: "John", age: 30 };

student.name = 'Pete'; // Error: Cannot assign to 'name' because it is a read-only property.