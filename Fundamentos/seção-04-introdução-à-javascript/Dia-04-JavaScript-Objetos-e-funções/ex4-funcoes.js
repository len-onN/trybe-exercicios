// ex1 
function isPalindrome (a){
    let retro = a.split('').reverse().join('');
    if (retro === a){
        return true;
    } else {
        return false;
    }
}

// ex2
let array = [2, 3, 6, 7, 10, 1];
function analogueBIndex(ar){
    let i = 0;
    for (let i1 in ar){
        if (ar[i1] > ar[i]){
            i = i1;
        }
    }
    return i;
}
console.log(analogueBIndex(array));

// ex3
function bigW (a){
    let bigW1 = [0];
    for (let i in a){
        if (a[i].length > bigW1.length){
            bigW1 = a[i];
        }
    }
    return bigW1;
}
console.log(bigW (['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// ex4
let ar1 = [2, 3, 2, 5, 8, 2, 3];
function rCount (a){ 
    let c1 = 0;
    let cr = 0;
    let idR = 0;
for (let i in a){
    let ver = a[i];
    for (let o in a){
        if (ver === a[o]){
            c1 += 1;
        }
    }
    if (c1 > cr){
        cr = c1;
        idR = i;
    }
    c1 = 0;
}   
  return a[idR];
}
console.log(rCount([2, 3, 2, 5, 8, 2, 3]));

// ex5
function sumInt(n){
    let c = 0;
    if (n > 0){
    for (let i = 1; n >= i; i += 1){
            c = c + i;
        }
    } else {
        return `${n} não é um numero natural!`
    }
    return c;
}
console.log(sumInt(3));

// ex6
/*function isEnd(word, ending){
            word = word.split('');
            ending = ending.split('');
            let d = word.length - ending.length;
            let verify = []; 
            let n1;
            let n2;         
        for (let i = word.length - 1; i > d - 1; i -= 1){
            if (word[i] === ending[i - d]){
                verify[i - d] = word[i];               
            }
        }
        n1 = verify.join('');
        n2 = ending.join('');
        if (n1 = n2){
            console.log(verify, ending)
            controle = true;
        } else { controle = false;}
    return controle;    
    }
let ba = 'aninha';
let bo = 'nanha';
console.log(isEnd('aninha', 'ninho'));
//ba = ba.split('');
//bo = bo.split('');
//console.log(`${ba.length - 1},
//             ${bo.length - 1}`);*/

function endW(word, ending) {
    word = word.split('');
    ending = ending.split('');
    let check = true;
  
    for (let index = 0; index < ending.length; index += 1) {
        if (word[word.length - ending.length + index] != ending[index]) {
            check = false;
        }
    }
  
    return check;
  }
  
  console.log(endW('Glaucier', 'ier')); 
  console.log(endW('Gloria', 'Salin')); 