
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
// ex1
  console.log('Bem-vinda,', info.personagem);

// ex2  
  info["recorrente"] = 'Sim';
  console.log(info);

// ex3
for (let i in info){
    console.log(i);
  }

// ex4
for (let i in info){
    console.log(info[i]);
  }

// ex5
let info1 = {
    personagem : "Tio Patinhas",
    origem : "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota : "O último MacPatinhas",
    recorrente : "Sim",
};
for (let i in info){
    if (i == "recorrente" && info[i] == "Sim" && info1[i] == "Sim") {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[i] + ' e ' + info1[i]);
    }
}