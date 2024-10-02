class Car {
  public brand: string;
  public model: string;

  constructor(brandParam: string, modelParam: string) {
    this.brand = brandParam;
    this.model = modelParam;
  }

  showDetails(): void {
    console.log(`Masina: ${this.brand} ${this.model}`);
  }
}

const firstCar = new Car("Dacia", "Logan");
const secondCar = new Car("Tesla", "Model X");

firstCar.showDetails();
secondCar.showDetails();
