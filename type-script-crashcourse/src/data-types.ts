const isActive = true;
console.log(`Boolean: ${isActive}`);

const age: number = 30;
console.log(`Number: ${age}`);

const bigNumber: bigint = 783148936486139n;

console.log(`BigInt: ${bigNumber}`);

const userName: string = "John Doe";
console.log(`String: ${userName}`);

const notDefined: undefined = undefined;
console.log(`Undefined: ${notDefined}`);

const empty: null = null;
console.log(`Null:${empty}`);

let randomValue: any = "Hello!";
randomValue = 123;
console.log(`Any: ${randomValue}`);

let unknownValue: unknown;
unknownValue = true;
console.log(`Unknown: ${unknownValue}`);

const numbers = [1, 2, 3];
console.log(`Array: ${numbers}`);

const person: [string, number] = ["John", 20];
console.log(`About: ${person}`);

enum Direction {
  Up = "UP",
  Down = "DOWN",
}
const direction = Direction.Up;
console.log(`Direction: ${direction}`);

const idSymbol = Symbol("age");
let user = {
  name: "John",
  [idSymbol]: 30,
};

console.log(`Symbol: ${user[idSymbol]}`);

function throwError(message: string): never {
  throw new Error(message);
}

const oneObject: object = {};
console.log(`Object: ${oneObject}`);
