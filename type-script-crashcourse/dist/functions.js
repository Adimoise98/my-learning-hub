function sum(a, b) {
    return a + b;
}
console.log(`Sum: ${sum(5, 10)}`);
function salut(nume = "Adrian") {
    return `Salut ${nume}`;
}
console.log(salut("Vlad"));
console.log(salut());
function sumaElemente(lista) {
    let total = 0;
    for (let i = 0; i < lista.length; i++) {
        total = total + lista[i];
    }
    return total;
}
console.log(sumaElemente([1, 2, 3, 4]));
//generic function
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement([4, 8, 16]));
