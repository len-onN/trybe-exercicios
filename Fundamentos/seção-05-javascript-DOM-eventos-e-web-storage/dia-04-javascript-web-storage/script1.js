let options = ['Cor de Fundo', 'Cor do Texto', 'Tamanho da Fonte', 'Espaço entre linhas', 'Tipo de Fonte'];
let idOpt = ['bgc', 'txtc', 'fsize', 'lineH', 'fFam'];
let bgcolor = ['red', 'blue', 'green'];
let textC = ['rgb(123, 120, 190', 'yellow', 'green', 'white'];
let fontS = ['8pt', '10pt', '13pt', '15pt'];
let lineH = ['0.5em', '0.8em', '1.2em', '1.5em'];

function btnBox () {
    for (let i = 0; i < options.length; i += 1){
        const nav = document.getElementById('nav');
        const lobule = document.createElement('div');
        const ul = document.createElement('ul');
        let h1 = document.createElement('h1');
        nav.appendChild(lobule);
        lobule.appendChild(ul);
        lobule.appendChild(h1);
        lobule.style.display = 'inline-block';
        lobule.id = idOpt[i];            
        lobule.style.padding = '4px';
        lobule.style.border = '2px solid black';
        lobule.style.margin = '7px';
        h1.innerText = options[i];
        h1.style.fontSize = '1.2em';
    };
function b

}
btnBox();
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