/* Exercício 1 - 5 operações aritméticas */

let a6 = 2;
let b6 = 5;
let c6;

c6 = (a6 + b6);
console.log(c6);
c6 = (b6/a6);
console.log(c6);
c6 = (a6*b6);
console.log(c6);
c6 = (a6**b6);
console.log(c6);
c6 = (b6 - a6);
console.log(c6);

/* Exercício 2 - Compara e retorna o maior */

const a = 15;
const b = 10;

if (a > b){
    console.log(a);
} else {
    console.log(b);
}

/* Exercício 3 - Compara 3 números retorna maior */

const a5 = 10;
const b5 = 11;
const c5 = 12;

if (a5 > b5 && a5 > c5){
    console.log(a);
} else if (b5 > a5 && b5 > c5) {
    console.log(b5);
} else {
    console.log(c5);
}

/* Exercício 4 - Avalia um número como positivo, negativo ou zero */

let a4 = -1394;

if (a4 > 0){
    console.log('positive');
} else if (a4 < 0){
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

let receivedTerm = 'Torre'
let piece = receivedTerm.toLowerCase();


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

/* Exercício 7 - Converte notas 0~10 para F~A */

let nota = 10;
if (nota > 100 || nota < 0){
    console.log('Valor recebido não está dentro do escopo de valores que representam nota');
} else if (nota >= 90){
    nota = 'A';
    console.log(nota);
} else if (nota >= 80){
    nota = 'B';
    console.log(nota);
}else if (nota >= 70){
    nota = 'C';
    console.log(nota);
}else if (nota >= 60){
    nota = 'D';
    console.log(nota);
}else if (nota >= 50){
    nota = 'E';
    console.log(nota);
}else if (nota < 50){
    nota = 'F';
    console.log(nota);
}

/* Exercício 8 - 1 por todos - se um for par, os 3 são constantes e é true, caso contrário, false */

let b1 = 3;
let b2 = 5;
let b3 = 10;

if (b1 % 2 === 0 || b2 % 2 === 0 || b3 % 2 === 0){
    const c1 = b1;
    const c2 = b2;
    const c3 = b3;
    console.log(c1, c2, c3);
    console.log(true);
} else {
    console.log(false);
}

/* Exercício 9 - Igual o 8 só que ao contrário */

let d1 = 3;
let d2 = 5;
let d3 = 10;

if (d1 % 2 !== 0 || d2 % 2 !== 0 || d3 % 2 !== 0){
    const f1 = d1;
    const f2 = d2;
    const f3 = d3;
    console.log(f1, f2, f3);
    console.log(true);
} else {
    console.log(false);
}

/* Exercício 10 - calculadora de lucro */

const custo = -0.35;
const vDeVenda = 0.70;
const tax = 0.2;

if (custo < 0 || vDeVenda < 0){
    console.log('Os conceitos de custo e venda exigem valores positivos');
} else {
    let vDeCusto = custo + tax*custo;
    let lucro = vDeVenda - vDeCusto;
    console.log('O lucro foi de: ' + lucro);
}

/* Exercício 11 - Calculadora de salário líquido dado um salário bruto (IR INSS) */

let sBruto = 3000;
let sLiquido;
let sBase;

if (sBruto <= 1556.94){
    sBase = sBruto - sBruto*0.08;
}
if (sBruto <= 2594.92 && sBruto > 1556.94){
    sBase = sBruto - sBruto*0.09;
}
if (sBruto <= 5189.82 && sBruto > 2594.93){
    sBase = sBruto - sBruto*0.11;
}
if (sBruto > 5189.82){
    sBase = sBruto - 570.88;
}
if (sBase <= 1903.98){
    sLiquido = sBase - (sBase*0.075 - 142.8);
    console.log(sLiquido);
} else if (sBase <= 2826.65 && sBase > 1903.98){
    sLiquido = sBase - (sBase*0.075 - 142.8);
    console.log(sLiquido);
} else if (sBase <= 3751.05 && sBase > 2826.65){
    sLiquido = sBase - (sBase*0.15 - 354.8);
    console.log(sLiquido);
} else if (sBase > 3751.05 && sBase <= 4664.68){
    sLiquido = sBase - (sBase*0.225 - 636.13);
    console.log(sLiquido);  
} else if (sBase > 4664.68){
    sLiquido = sBase - (sBase*0.275 - 869.36);
}

