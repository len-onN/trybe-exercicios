/* exercício 1 - fatorial */

let fat = '1';
for (let i = 10; i >= 1; i--){
    fat = fat*i;
}
console.log(fat);

/* Estrutura for - inverte palavras */

string = "bananinha";
gnirts = "";

for (let i = string.length - 1; i >= 0 ; i -= 1){
    gnirts += string[i];
}
console.log(gnirts);

/* Maior string? e Menor String? */

let auray = ['java', 'javascript', 'python4344565', 'html', 'css'];
let a = auray[0].length;
let b = '';

for (let i = 0; i < auray.length; i += 1){
    if (auray[i].length > a ){
        b = auray[i];
    }
}
console.log(b);

for (let i = 0; i < auray.length; i += 1){
    if (auray[i].length < a ){
        b = auray[i];
    }
}
console.log(b);


/**/

