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
