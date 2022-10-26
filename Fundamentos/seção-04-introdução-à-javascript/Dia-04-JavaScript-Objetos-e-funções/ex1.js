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

  // maior de três

  function top3(a, b, c){
    if (a > b){
      if (a > c){
        return a;
      } else { return c; }
    } else if (b > a){
      if (b > c){
        return b;
      } else { return c;}
    }
  }
  console.log(top3(12, 10, 4));  

  // Positivo, Negativo ou Zero? 

  function numState (a){
    if (a > 0){
      return 'positve';
    } else if (a < 0){
      return 'negative';
    } else {
      return 'zero';
    }
  }
  console.log(numState(3), numState(-3), numState(0));

  // Programa - os ângulos correspondem à um triângulo?

  function isTri (a, b, c){
    d = a + b + c;
    if (a > 0){
      if (b > 0){
        if (c > 0){
          if (d == 180){
            return true;
          } else { return false;}
        } else { return 'Erro - Para ângulo, apenas valores positivos.'; }
      } else { return 'Erro - Para ângulo, apenas valores positivos.'; }
    } else { return 'Erro - Para ângulo, apenas valores positivos.'; }
  }
  console.log(isTri(20, 50, 110), isTri (-1, 89, 92), isTri (10, 10, 10));