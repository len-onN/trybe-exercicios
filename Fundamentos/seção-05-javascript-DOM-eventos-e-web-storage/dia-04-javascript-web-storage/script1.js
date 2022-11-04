let options = ['Cor de Fundo', 'Cor do Texto', 'Tamanho da Fonte', 'Espaço entre linhas', 'Tipo de Fonte'];
let idOpt = ['bgc', 'txtc', 'fsize', 'lineH', 'fFam'];
let bgcolor = ['red', 'blue', 'green'];
let textC = ['rgb(230, 120, 190)', 'yellow', 'green', 'white'];
let fontS = ['12pt', '14pt', '16pt', '18pt'];
let lineH = ['1em', '1.2em', '1.5em', '1.8em'];
let fFam = ['Arial, Helvetica, sans-serif', '"Times New Roman", Times, serif'];

function btnBox () {
    for (let i = 0; i < options.length; i += 1){
        const nav = document.getElementById('nav');
        const lobule = document.createElement('div');
        const ul = document.createElement('ul');
        let h1 = document.createElement('h1');
        nav.appendChild(lobule);
        lobule.appendChild(h1);
        lobule.appendChild(ul);
        lobule.style.display = 'inline-block';
        ul.id = idOpt[i];            
        lobule.style.padding = '4px';
        lobule.style.textAlign = 'center';
        lobule.style.border = '2px solid black';
        lobule.style.margin = '7px';
        h1.innerText = options[i];
        h1.style.fontSize = '1.2em';
    }; 
}
btnBox();
function btnBrew (){
    for (let i = 0; i < idOpt.length; i += 1){    
        const ul = document.querySelector(`#${idOpt[i]}`);
        ul.style.paddingInlineStart = '0px';
        //console.log(ul);
        if (i == 0){
            for (let i1 = 0; i1 < bgcolor.length; i1 += 1){
                const btnC = document.createElement('button');
                const li = document.createElement('li');
                ul.appendChild(li);
                li.appendChild(btnC);
                ul.style.listStyle = 'none';
                ul.style.textAlign = 'center';
                li.style.margin = '1px';
                btnC.innerText = bgcolor[i1];
                btnC.id = `bgcolor${i1}`;
                
        }
        } else if (i == 1){
            for (let i1 = 0; i1 < textC.length; i1 += 1){
                const btnC = document.createElement('button');
                const li = document.createElement('li');
                ul.appendChild(li);
                li.appendChild(btnC);
                ul.style.listStyle = 'none';
                ul.style.textAlign = 'center';
                li.style.margin = '1px';
                btnC.innerText = textC[i1];
                btnC.id = `textC${i1}`;
                
        }
        } else if (i == 2){
            for (let i1 = 0; i1 < fontS.length; i1 += 1){
                const btnC = document.createElement('button');
                const li = document.createElement('li');
                ul.appendChild(li);
                li.appendChild(btnC);
                ul.style.listStyle = 'none';
                ul.style.textAlign = 'center';
                li.style.margin = '1px';
                btnC.innerText = fontS[i1];
                btnC.id = `fontS${i1}`;
        }
        } else if (i == 3){
            for (let i1 = 0; i1 < lineH.length; i1 += 1){
                const btnC = document.createElement('button');
                const li = document.createElement('li');
                ul.appendChild(li);
                li.appendChild(btnC);
                ul.style.textAlign = 'center';
                li.style.listStyleType = 'none';
                li.style.margin = '1px';
                btnC.innerText = lineH[i1];
                btnC.id = `lineH${i1}`;
        }
        }else if (i == 4){
            for (let i1 = 0; i1 < fFam.length; i1 += 1){
                const btnC = document.createElement('button');
                const li = document.createElement('li');
                ul.appendChild(li);
                li.appendChild(btnC);
                ul.style.textAlign = 'center';
                li.style.listStyleType = 'none';
                li.style.margin = '1px';
                btnC.innerText = fFam[i1];        
                btnC.id = `fFam${i1}`;
        }
        }
    }
};
btnBrew();
const bgcolor1 = document.querySelector('#bgcolor1');
bgcolor1.addEventListener('click', ()=>{
    const body = document.querySelector('main');
    body.style.backgroundColor = bgcolor[1];
});
const bgcolor0 = document.querySelector('#bgcolor0');
bgcolor0.addEventListener('click', ()=>{
    const body = document.querySelector('main');
    body.style.backgroundColor = bgcolor[0];
});
const bgcolor2 = document.querySelector('#bgcolor2');
bgcolor2.addEventListener('click', ()=>{
    const body = document.querySelector('main');
    body.style.backgroundColor = bgcolor[2];
});
const fontC = document.querySelector('p');

const textC0 = document.querySelector('#textC0');
textC0.addEventListener('click', ()=>{
    fontC.style.color = textC[0];
});
const textC1 = document.querySelector('#textC1');
textC1.addEventListener('click', ()=>{
    
    fontC.style.color = textC[1];
});
const textC2 = document.querySelector('#textC2');
textC2.addEventListener('click', ()=>{
    
    fontC.style.color = textC[2];
});
const textC3 = document.querySelector('#textC3');
textC3.addEventListener('click', ()=>{
    fontC.style.color = textC[3];
});

const fontS0 = document.querySelector('#fontS0');
fontS0.addEventListener('click', ()=>{
    fontC.style.fontSize = fontS[0];
});
const fontS1 = document.querySelector('#fontS1');
fontS1.addEventListener('click', ()=>{
    fontC.style.fontSize = fontS[1];
});
const fontS2 = document.querySelector('#fontS2');
fontS2.addEventListener('click', ()=>{
    fontC.style.fontSize = fontS[2];
});
const fontS3 = document.querySelector('#fontS3');
fontS3.addEventListener('click', ()=>{
    fontC.style.fontSize = fontS[3];
});

const lineH0 = document.querySelector('#lineH0');
lineH0.addEventListener('click', ()=>{
    fontC.style.lineHeight = lineH[0];
});
const lineH1 = document.querySelector('#lineH1');
lineH1.addEventListener('click', ()=>{
    fontC.style.lineHeight = lineH[1];
});
const lineH2 = document.querySelector('#lineH2');
lineH2.addEventListener('click', ()=>{
    fontC.style.lineHeight = lineH[2];
});
const lineH3 = document.querySelector('#lineH3');
lineH3.addEventListener('click', ()=>{
    fontC.style.lineHeight = lineH[3];
});

const fFam0 = document.querySelector('#fFam0');
fFam0.addEventListener('click', ()=>{
    fontC.style.fontFamily = fFam[0];
});
const fFam1 = document.querySelector('#fFam1');
fFam1.addEventListener('click', ()=>{
    fontC.style.fontFamily = fFam[1];
    localStorage.fFam1 = fFam[1];
    console.log(localStorage);
});
/*for (let a = 0; a < fFam.length; a += 1){
 const b1 = document.querySelector(`#fFam${a}`);
 b1.addEventListener('click', ()=>{
    console.log(pL);
    if (a === 0){
        p1L.style.fontSize = '0.5em'; 
    } else {
       // const p1L = document.getElementsByTagName('p');
        p1L.style.fontSize = '2em';
    }
 });
}*/

/*nav.appendChild(ul);
ul.appendChild(li);
li.id = "bgc";
li.innerHTML = `<button>${bgcolor[0]}</button>`;
ul.style.listStyle = 'none';
li.addEventListener ('click', () => {
    console.log('deu certo!');
});
};*/

/*
Cor de fundo da tela;
Cor do texto;
Tamanho da fonte;
Espaçamento entre as linhas do texto;
Tipo da fonte (Font family).*/