class Car {
    constructor(brandParam, modelParam) {
        this.brand = brandParam;
        this.model = modelParam;
    }
    showDetails() {
        console.log(`Masina: ${this.brand} ${this.model}`);
    }
}
const firstCar = new Car("Dacia", "Logan");
const secondCar = new Car("Tesla", "Model X");
firstCar.showDetails();
secondCar.showDetails();
