class PublicPerson {
    constructor(nameParam) {
        this.name = nameParam;
    }
    hello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
let publicPerson = new PublicPerson("Vlad");
console.log(publicPerson.name);
publicPerson.hello();
//......................
class PrivatePerson {
    constructor(ageParam) {
        this.age = ageParam;
    }
    showAge() {
        console.log(`Hello, I am ${this.age} years old`);
    }
}
let privatePerson = new PrivatePerson(30);
// console.log(privatePerson.age); nu este posibila accesarea variabilei age;
//......................
class Animal {
    constructor(soundArg) {
        this.sound = soundArg;
    }
    makesSound() {
        console.log(`The animal is making this sound: ${this.sound}`);
    }
}
class Dog extends Animal {
    makesSound() {
        console.log(`The dog makes the sound: ${this.sound}`);
    }
}
let dog = new Dog("Woof Woof");
// console.log(dog.sound) Propeerty 'soud is protected and only accesible within class 'Animal' and its subclasses'
dog.makesSound();
