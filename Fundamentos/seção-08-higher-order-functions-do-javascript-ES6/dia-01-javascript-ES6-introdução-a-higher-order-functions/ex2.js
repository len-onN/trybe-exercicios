const elJuego = (bet) => {
  let number = Math.round(Math.random()*5);
  if (number < 1) { number = 1;}
  if (bet === number) {
    return `Parabéns, ${bet}, o número escolhido coincide com o sorteado ${number}!`;
  } else {
    return `Parabéns, ${bet}, apesar de ter perdido a aposta: ${number}, sobrevive!`;
  }
};
console.log(elJuego(3));