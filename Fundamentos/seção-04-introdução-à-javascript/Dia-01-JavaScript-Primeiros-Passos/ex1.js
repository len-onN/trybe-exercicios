/* Exercicio Para Fixar - 1 */

const myName = 'Lenon Fernandes Philippi';
const birthCity = 'Içara';
let birthYear = '1989';
console.log(myName);
console.log(birthCity);
console.log(birthYear);
birthYear = '1990';
console.log(birthYear);
birthCity = 'Criciúma';
console.log(birthCity);

/* Exercício Para Fixar - 2 */

const base = 5;
const heigth = 8;
const area = base*heigth;
console.log(area);
const perimeter = base*2 + heigth*2;
console.log(perimeter);

/* Exercício Para Fixar - 3 - AND (||)  */

let weekDay = 'quarta-feira';
if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
} else {
    console.log("FINALMENTE, descanso merecido UwU");
}

/* Exercício Para Fixar - 4 - operador And */

const currentHour = 17;
let message;

if (currentHour >= 22 && currentHour <= 24){
  message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 18 && currentHour < 22){
  message = 'Rango da noite, vamos jantar :D';
} else if (currentHour >= 14 && currentHour < 18){
  message = 'Vamos fazer um bolo pro café da tarde?';
} else if (currentHour >= 11 && currentHour < 14){
  message = 'Hora do almoço!!!';
} else if (currentHour >= 4 && currentHour < 11){
  message = 'Hmmm, cheiro de café recém-passado';
}
console.log(message);

/* Exercício Para Fixar - 5 - Switch/case */

  let situation = 'aprovada';
  
  switch (situation){
    case 'aprovada':
      console.log('Parabéns, você foi aprovada(o)!');
    case 'reprovada':
      console.log('Você foi reprovada(o)!');
    case 'lista':
      console.log('Você está na lista de espera.');
    default:
      console.log('Informação incorreta.')
  }
  /* Exercício - Mensagem para situação aprova-reprova-espera */

  const notaTecnica = 75;
if (notaTecnica >= 80){
    console.log('Parabéns, você foi aprovada(o)!')
} else if (notaTecnica >=60){
    console.log('Você está na nossa lista de espera')
} else {
    console.log('Você foi reprovada(o)');
}