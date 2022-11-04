let options = ['Cor de Fundo', 'Cor do Texto', 'Tamanho da Fonte', 'Espaço entre linhas', 'Tipo de Fonte'];
let idOpt = ['bgc', 'txtc', 'fsize', 'lineH', 'fFam'];
let bgcolor = ['red', 'blue', 'green'];
let textC = ['rgb(123, 120, 190)', 'yellow', 'green', 'white'];
let fontS = ['8pt', '10pt', '13pt', '15pt'];
let lineH = ['0.5em', '0.8em', '1.2em', '1.5em'];
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
        const ul = document.querySelector(`#${idOpt[i]}`)
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
                
        }
        }
    }
};
btnBrew();
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