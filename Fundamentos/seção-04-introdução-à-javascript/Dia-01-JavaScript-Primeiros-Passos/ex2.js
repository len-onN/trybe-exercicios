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

/* Exercício 4 - Avalia um número como positivo, negativo ou zero */

let a = -1394;

if (a > 0){
    console.log('positive');
} else if (a < 0){
    console.log('negative');
} else {
    console.log('zero');
}

/* Exercício 5 :rocket: - Analisador de ângulos, e triângulos */

let a1 = -41;
let a2 = 60;
let a3 = 80;

if (a1 < 0 || a2 < 0 || a3 < 0){
    console.log('Valor inapropriado para ângulo, apenas valores positivos');
} else if ( a1 + a2 + a3 === 180){
    console.log(true);
} else {
    console.log(false);
}

/* Exercício 6 - Switch/Case para explicar peças de xadrez */

let piece = 'torre';

switch (piece){
    case 'torre':
        console.log('A torre se movimenta em linha reta, em qualquer sentido, e é limitada pelas outras peças');
    break;
    case 'bispo':
        console.log('O bispo se movimenta em diagonal, em qualquer sentido, e é limitado pelas outras peças');
        break;
    case 'cavalo':
        console.log('O cavalo se movimenta duas casas em linha reta e então uma casa para o lado, desde que a casa final esteja vazia não é limitado por outras peças');
        break;
    case 'peão':
        console.log('O peão se movimenta em linha reta, sempre na direção do campo inimigo. Quando uma peça inimiga está na diagonal imediata a frente do peão, ele pode eliminar essa peça');
        break;
    case 'rainha':
        console.log('Efetua o movimento de todas as peças, exceto ao movimento do cavalo');
        break;
    case 'rei':
        console.log('O rei se movimenta para qualquer uma das casas imediatamente ligadas a sua');
    break;
    default:
        console.log('Este termo não é conhecido como um nome de peças de xadrez.');
        break;
}