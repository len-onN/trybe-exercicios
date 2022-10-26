
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
// ex1
  console.log('Bem-vinda,', info.personagem);

// ex2  
  info["recorrente"] = 'sim';
  console.log(info);

// ex3
  for (let i in info){
    console.log(i);
  }
// ex4