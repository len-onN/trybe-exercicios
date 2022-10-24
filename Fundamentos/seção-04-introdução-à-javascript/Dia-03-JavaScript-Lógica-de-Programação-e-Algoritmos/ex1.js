/* exercício 1 - fatorial */

let fat = '1';
for (i = 10; i >= 1; i--){
    fat = fat*i;
}
console.log(fat);

/* Estrutura for - inverte palavras */

string = "bananinha";
gnirts = "";

for (i = string.length - 1; i >= 0 ; i -= 1){
    gnirts += string[i];
}
console.log(gnirts);