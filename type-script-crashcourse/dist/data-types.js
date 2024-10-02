const isActive = true;
console.log(`Boolean: ${isActive}`);
const age = 30;
console.log(`Number: ${age}`);
const bigNumber = 783148936486139n;
console.log(`BigInt: ${bigNumber}`);
const userName = "John Doe";
console.log(`String: ${userName}`);
const notDefined = undefined;
console.log(`Undefined: ${notDefined}`);
const empty = null;
console.log(`Null:${empty}`);
let randomValue = "Hello!";
randomValue = 123;
console.log(`Any: ${randomValue}`);
let unknownValue;
unknownValue = true;
console.log(`Unknown: ${unknownValue}`);
const numbers = [1, 2, 3];
console.log(`Array: ${numbers}`);
const person = ["John", 20];
console.log(`About: ${person}`);
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
})(Direction || (Direction = {}));
const direction = Direction.Up;
console.log(`Direction: ${direction}`);
const idSymbol = Symbol("age");
let user = {
    name: "John",
    [idSymbol]: 30,
};
console.log(`Symbol: ${user[idSymbol]}`);
function throwError(message) {
    throw new Error(message);
}
const oneObject = {};
console.log(`Object: ${oneObject}`);
