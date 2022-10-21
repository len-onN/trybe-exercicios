
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* - Mostrador de valores de arrays - */

for (i1 = 0; i1 < numbers.length; i1 = i1 + 1){
    console.log(numbers[i1]);
}

/* - Soma valores do array - */

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];*/
let soma1 = 0;

for (i2 = 0; i2 < numbers.length; i2 += 1){
    soma1 = soma1 + numbers[i2];
    
}
console.log(soma1);

/* - Calcula Média Aritimética - */

let med = soma1/numbers.length;
console.log(med);

/* - Med é maior ou menor/igual a 20? - */

if (med > 20){
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}

/* - For - qual o maior valor do array? - */

let maior = 0;

for (let i4 = 0; i4 < numbers.length; i4 += 1){
    if (numbers[i4] > maior) {
        maior = numbers[i4]
    }
}
/* console.log(maior); */

/* - Exercício - Tem impar aê? - */

let impar = 0;

for (let i5 = 0; i5 < numbers.length; i5++){
    if (numbers[i5] % 2 !== 0){
        impar++;
    }
    if (impar === 0){
        console.log('não há impares!');
    } 
}
console.log(impar);

/* - Exercício - Qual o menor valor do array? - */

let numero = numbers[0];

for (let i6 = 0; i6 < numbers.length; i6++){
    if (numbers[i6] < numero){
        numero = numbers[i6];
    }
}
console.log(numero);

/* - Exercício - Criando um array utilizando for - */

let ar = [];

for (let i7 = 0; i7 < 26; i7++){
    ar.push(i7);
}
console.log(ar);

/* - Dividindo os termos de um array - */

let result = [];

for (i8 = 0; i8 < 26; i8++){
    result[i8] = ar[i8]/2;
}
console.log(result);