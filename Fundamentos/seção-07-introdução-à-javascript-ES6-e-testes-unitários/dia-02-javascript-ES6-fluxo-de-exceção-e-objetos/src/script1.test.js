const myFizzBuzz = require('./script1');

it('teste com divisivel por 3 e 5', () => {
 expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

it('teste com divisivel apenas por 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
});

it('teste com divisivel apenas por 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
});

it('teste com não-divisivel por 3 ou 5', () => {
    expect(myFizzBuzz(11)).toBe(11);
});

it('teste com notANumber', () => {
    expect(myFizzBuzz('olá')).toBe(false);
})