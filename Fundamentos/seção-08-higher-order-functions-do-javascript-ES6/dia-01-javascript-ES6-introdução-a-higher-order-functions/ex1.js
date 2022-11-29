const example1 = (string) => {
    const id1 = string.toLowerCase().split(' ').join('_');
    const email = `${id1}@trybe.com`;
    return email;
}

const newEmployees = (emailtor) => {
    const employees = {
      id1: emailtor('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: emailtor('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: emailtor('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  console.log(newEmployees(example1));