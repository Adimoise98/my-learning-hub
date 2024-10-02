//PUBLIC
class PublicPerson {
  public name: string;

  constructor(nameParam: string) {
    this.name = nameParam;
  }
  public hello(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let publicPerson = new PublicPerson("Vlad");
console.log(publicPerson.name);
publicPerson.hello();

//......................

//PRIVATE

class PrivatePerson {
  private age: number;

  constructor(ageParam: number) {
    this.age = ageParam;
  }
  public showAge(): void {
    console.log(`Hello, I am ${this.age} years old`);
  }
}

let privatePerson = new PrivatePerson(30);
// console.log(privatePerson.age); nu este posibila accesarea variabilei age;

//......................

//PROTECTED

class Animal {
  protected sound: string;

  constructor(soundArg: string) {
    this.sound = soundArg;
  }
  public makesSound(): void {
    console.log(`The animal is making this sound: ${this.sound}`);
  }
}

class Dog extends Animal {
  public makesSound(): void {
    console.log(`The dog makes the sound: ${this.sound}`);
  }
}

let dog = new Dog("Woof Woof");
// console.log(dog.sound) Propeerty 'sound is protected and only accesible within class 'Animal' and its subclasses'

dog.makesSound();

//READONLY
class MyReadOnlyClass {
  readonly myReadOnlyProperty: number;

  constructor(value: number) {
    this.myReadOnlyProperty = value;
  }
}

const instance = new MyReadOnlyClass(10);
console.log("Read only instance value: ", instance.myReadOnlyProperty);

//STATIC

class Calculator {
  static pi = 3.14;

  //metoda statica: nu trebuie apelata cu new
  static calculateArea(radius: number): number {
    return this.pi * radius * radius;
  }
  //metoda non-statica
  calculateCircumFerence(radius: number) {
    return 2 * Calculator.pi * radius; //access static
  }
}
console.log(Calculator.pi);
console.log(Calculator.calculateArea(5));

const calculator = new Calculator();
// console.log(Calculator.calculateCircumFerence(5));

//PROTECTED EXAMPLE

class Angajat {
  private salariu: number;

  constructor(private nume: string, private pozitie: string, salariu: number) {
    this.salariu = salariu;
  }
  public detaliiAngajat(): string {
    return `Angajat: ${this.nume}, Pozitie: ${this.pozitie}, Salariu: ${this.salariu}`;
  }
  protected calculeazaBonus(): number {
    return this.salariu * 0.3;
  }
}

class Manager extends Angajat {}

//
