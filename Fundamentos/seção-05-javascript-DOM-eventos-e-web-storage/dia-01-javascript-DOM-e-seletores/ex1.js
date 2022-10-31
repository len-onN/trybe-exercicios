function pTurn(){
    let pT = document.getElementsByTagName('p')[1];
    pT.innerHTML = "Surfando nas ondas de código, de alguma praia mercantil pelo mundo.";
};
pTurn();
function changeSq(){
    let square = document.getElementsByClassName('main-content')[0];
    square.style.background = 'rgb(76,164,109)';
};
changeSq();
function changeSq1(){
    let squareC = document.getElementsByClassName('center-content')[0];
    squareC.style.background = 'white';
};
changeSq1();
const changeH = () => {
    let newH = document.getElementsByTagName('h1')[0];
    newH.innerHTML = "Exercícios - JavaScript, Dom e Seletores - 5.1";
};
changeH();
const upperP = () => {
    let newP = document.getElementsByTagName('p')[0];
    newP.innerHTML = newP.innerHTML.toUpperCase();
}
upperP();
function logP (){
    let p = document.getElementsByTagName('p');
    for (let i = 0; i < p.length; i += 1){
        console.log(p[i]);
    }
}
logP();