
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

/* -  - */


