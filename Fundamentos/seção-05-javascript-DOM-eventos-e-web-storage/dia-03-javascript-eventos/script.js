const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    
    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();
// Escreva seu código abaixo.
  
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  /*const daysInM = () => {
    let getDay = document.querySelector('#days');
    for (let i = 0; i < decemberDaysList.length; i += 1){
      let day = decemberDaysList[i];
      let dayL = document.createElement('li');
      dayL.innerHTML = day;
      if (day === 24 || day === 31) {
        // Caso o dia for 24 ou 31
        dayL.className = 'day holiday'; // Atribua a classe 'day holiday' ao li criado
        getDay.appendChild(dayL); // Anexe o li criado como elemento filho do ul
      } else if (day === 4 || day === 11 || day === 18) {
        // Caso o dia for 4, 11 ou 18
        dayL.className = 'day friday'; // Atribua a classe 'day friday' ao li criado
        getDay.appendChild(dayL);
      } else if (day === 25) {
        // Caso o dia for 25
        dayL.className = 'day holiday friday'; // Atribua a classe 'day holiday friday' ao li criado
        getDay.appendChild(dayL);
      } else {
        // Caso seja qualquer outro dia adicione a classe day ao li criado
        dayL.className = 'day';
        getDay.appendChild(dayL);
      }
    }
  }
  daysInM();*/
  const createDaysOfTheMonth = () => {
    let getDaysList = document.querySelector('#days');
  
    for (let index = 0; index < decemberDaysList.length; index += 1) {
      
      let day = decemberDaysList[index];
      let dayItem = document.createElement('li');
      dayItem.innerHTML = day;
      
      if (day === 24 || day === 31) {
        // Caso o dia for 24 ou 31
        dayItem.className = 'day holiday'; // Atribua a classe 'day holiday' ao li criado
        getDaysList.appendChild(dayItem); // Anexe o li criado como elemento filho do ul
      } else if (day === 4 || day === 11 || day === 18) {
        // Caso o dia for 4, 11 ou 18
        dayItem.className = 'day friday'; // Atribua a classe 'day friday' ao li criado
        getDaysList.appendChild(dayItem);
      } else if (day === 25) {
        // Caso o dia for 25
        dayItem.className = 'day holiday friday'; // Atribua a classe 'day holiday friday' ao li criado
        getDaysList.appendChild(dayItem);
      } else {
        // Caso seja qualquer outro dia adicione a classe day ao li criado
        dayItem.className = 'day';
        getDaysList.appendChild(dayItem);
      }
    }
  }
  createDaysOfTheMonth();
  // 2
  const chillButton = (buttonName) => {
    let buttonC = document.querySelector('.buttons-container');
    let button = document.createElement('button');
    let buttonId = 'btn-holiday';
  
    button.innerHTML = buttonName;
    button.id = buttonId;
    
    buttonC.appendChild(button);
  }
  
  chillButton('Feriados');
  // 3

const btnFeriadosCC = () => {  
const holidayC = document.querySelectorAll('.holiday');
const feriadosB = document.querySelector('#btn-holiday');
sameC = 'rgb(225, 200, 240)';
const backgroundC = 'rgb(238,238,238)';
feriadosB.addEventListener('click', () =>{
    for (let i = 0; i < holidayC.length; i += 1){
      if (holidayC[i].style.backgroundColor === sameC){
        holidayC[i].style.backgroundColor = backgroundC;
      } else {
        holidayC[i].style.backgroundColor = sameC;
      }
    }  
  });
}
btnFeriadosCC();
// 4
const createFridayButton = (buttonName) => {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-friday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton); 
}
createFridayButton('Sexta-feira');
//5
const displayFridays = (fridaysArray) => {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', () => {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  });
}
let decemberFridays = [ 4, 11, 18, 25 ];
displayFridays(decemberFridays);
//6
const dayMouseOver = () => {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600'; // Ele pega o evento alvo e altera o estilo de fontWeight para 600
  });
}
const dayMouseOut = () => {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200'; // Ele pega o evento alvo e altera o estilo de fontWeight para 200
  });
}
dayMouseOver();
dayMouseOut();
//7
const newTaskSpan = (task) => {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName); // Anexando a task como filha de taskContainer
}
newTaskSpan('projeto');
//8
const newTaskDiv = (color) => {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask); // Adiciona newTask como filho de tasksContainer
}

newTaskDiv('rgb(230, 198, 139)');
//9
const setTaskClass = () => {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');
  myTasks.addEventListener('click', (event) => {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
}
setTaskClass();
//10
const setDayColor = () => {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', (event) => {
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor; // Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
      event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
    } else if (eventTargetColor === taskColor) {
      event.target.style.color = 'rgb(119,119,119)';  // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
    }
  });
}
setDayColor();
//11
const addNewTask = () => {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', () => {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  });

  getInputField.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
}

addNewTask();

