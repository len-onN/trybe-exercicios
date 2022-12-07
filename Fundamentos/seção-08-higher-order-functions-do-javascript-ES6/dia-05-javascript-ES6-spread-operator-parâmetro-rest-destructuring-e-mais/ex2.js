const sum = (...param) => param.reduce((acc, curr) => acc += curr);

console.log(sum(1, 2, 3, 4, 5, 6))