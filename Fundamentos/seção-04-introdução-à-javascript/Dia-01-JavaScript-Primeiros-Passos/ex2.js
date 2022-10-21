/* Exercício 1 - 5 operações aritméticas */

let a = 2;
let b = 5;
let c;

c = (a + b);
console.log(c);
c = (b/a);
console.log(c);
c = (a*b);
console.log(c);
c = (a**b);
console.log(c);
c = (b - a);
console.log(c);

/* Exercício 2 - Compara e retorna o maior */

const a = 15;
const b = 10;

if (a > b){
    console.log(a);
} else {
    console.log(b);
}

/* Exercício 3 - Compara 3 números retorna maior */

const a = 10;
const b = 11;
const c = 12;

if (a > b && a > c){
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else {
    console.log(c);
}