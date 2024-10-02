interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

//Using the interface
const newUser: User = {
  id: 341434,
  name: "John",
  email: "john@example.com",
  age: 30,
};
console.log(newUser.name);


