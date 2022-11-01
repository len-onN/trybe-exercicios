// buscando elemento
/*
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'red';
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Ainda não é um lobsomem';
const primeiroFilhoDoFilho = pai.firstElementChild;
const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;
const textElement = elementoOndeVoceEsta.nextSibling;
const terceiroFilho2 = pai.lastElementChild.previousElementSibling;
*/
// criando elemento

const pai = document.getElementById('pai'); // Recupere o elemento com o id pai
const irmaoElementoOndeVoceEsta = document.createElement('section'); // Crie um novo elemento
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const filhoDoPrimeiroFilhoDoFilho = document.createElement('section');
filhoDoPrimeiroFilhoDoFilho.id = 'filhoDoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

/*const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho'); // Recupere o elemento com o id `primeiroFilhoDoFilho`
const filhoPrimeiroFilhoDoFilho = document.createElement('section'); // Crie um novo elemento 
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);*/

const terceiroFilho = filhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho);