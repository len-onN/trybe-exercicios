const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
let cumulative = 0;
const pointer = (righAns, givenAns) => {
  righAns.forEach((element, index) => {
    if (element === givenAns[index]) {
      cumulative += 1;
    } else if (givenAns[index] === 'N.A') {        
    } else {
      cumulative -= 0.5;
    }
})
return cumulative;
}
const noteCounter = (righAns, givenAns, pointer) => {
    let cumulative = 0;
    return pointer(righAns, givenAns);
}
console.log(noteCounter(RIGHT_ANSWERS, STUDENT_ANSWERS, pointer));