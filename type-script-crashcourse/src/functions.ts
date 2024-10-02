function sum(a: number, b: number): number {
  return a + b;
}

console.log(`Sum: ${sum(5, 10)}`);

function salut(nume: string = "Adrian"): string {
  return `Salut ${nume}`;
}

console.log(salut("Vlad"));
console.log(salut());

function sumaElemente(lista: number[]): number {
  let total: number = 0;
  for (let i = 0; i < lista.length; i++) {
    total = total + lista[i];
  }
  return total;
}
console.log(sumaElemente([1, 2, 3, 4]));

//generic function

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirstElement([4, 8, 16]));
