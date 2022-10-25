/* - Quadrado de n x n - */
let n1 = 3;
let a1 = "*";
let b = [0];

for (let i = 0; i < n1; i += 1){
     b[i] = a1;  
}
for (i = 0; i < n1; i += 1){
console.log(b);
}
/* - Exercício piramide - */

let n = 5;
let a = (n-1)/2;
let array = [];
array[a] = "*";
let s;
//console.log(array);

for (i = n - 1; i >= 0; i -= 1){
    if (i != a){
        array[i] = " ";
    }
}
console.log(array);
for (o = a; o >= 0; o -= 1){
    if (o != a){
    array[o] = "*";
    s = a - o;
    array[a + s] = "*";
    console.log(array);
}
}