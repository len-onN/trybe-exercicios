let player = {
    name : 'Marta',
    lastName : 'Silva',
    age : 34,
    medals : { golden : 2, silver: 3 }
}
console.log(player['medals']);
console.log(player.medals.golden);

// Exercício - para fixar - for in e mensagem

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };
  for (let i in names){
    console.log('Olá', names[i]);
  }

  // Exercício - para fixar - for in - mostra chave e valor

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for (let i1 in car){
    console.log(i1, car[i1]);
  }

  // Exercício 1 - praticando função

  function adicao (a, b){
    return a + b;
  }
  console.log(adicao(2, 5));
  
  function subtracao (a, b){
    return a - b;
  }
  console.log(subtracao(5, 2));

  function multiplicacao (a, b){
    return a*b;
  }
  console.log(multiplicacao(2, 5));

  function divisao(a, b){
    return a/b;
  }
  console.log(divisao(10, 5));

  function modulo (a, b){
    return a % b;
  }
  console.log(modulo(10, 3));

  // retorna o maior de dois número

  function greaterNum (a, b){
    if (a > b){
        return a + ' é maior que ' + b;
    } else if (b > a){
        return b + ' é maior que ' + b;
    } else {
        return a + ' e ' + b + ' são valores iguais';
    }
  }
  console.log(greaterNum(10, 10));