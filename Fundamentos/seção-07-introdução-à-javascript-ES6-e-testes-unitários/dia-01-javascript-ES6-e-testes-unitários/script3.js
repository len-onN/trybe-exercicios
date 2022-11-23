const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  /*Crie uma função para adicionar o turno da noite na lesson2. 
  Essa função deve possuir três parâmetros, sendo eles: 
  o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.*/
function newProp (object, newProp, value){
    object[newProp] = value;
}
newProp(lesson2, 'turno', 'noite');

  /*Crie uma função para listar as keys de um objeto. 
  Essa função deve receber um objeto como parâmetro.*/
function listKey (object){
    for (index in object){
        console.log(index);
    };
}
listKey(lesson2);
  /*Crie uma função para mostrar o tamanho de um objeto.*/
function objectLength (object) {
    console.log(Object.keys(object).length);
}
objectLength(lesson2);
  /*Crie uma função para listar os valores de um objeto. 
  Essa função deve receber um objeto como parâmetro.*/
function showValue (object) {
    console.log(Object.values(object));
}
showValue(lesson2);
    /*Crie um objeto de nome allLessons, que deve 
    agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, 
    sendo essas chaves lesson1, lesson2 e lesson3.*/
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

const getNumberOfStudents = (obj) => {
  let total = 0;

  const keys = Object.keys(obj);
    
  for (index in keys) {
    total += obj[keys[index]].numeroEstudantes; // incremente a variável total a cada iteração
  }
  return total; // a função retorna o total de alunos após as iterações do "for/in"
};
console.log(getNumberOfStudents(allLessons));

const getValueByNumber = (obj,number) => Object.values(obj)[number];
  // usamos o "Object.values()" para criarmos um array com os valores do objeto, e então acessamos a sua posição passando o índice.
console.log(getValueByNumber(lesson1, 2));

const verifyPair = (obj, key, value) => {
  const entries = Object.entries(obj);
  let isEqual = false;
  for (let index in entries) {
    if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));