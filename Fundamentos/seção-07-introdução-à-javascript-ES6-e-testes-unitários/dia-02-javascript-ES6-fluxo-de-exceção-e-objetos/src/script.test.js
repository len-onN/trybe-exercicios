const { expect } = require('expect');
const myRemove = require('./script.js');
/*A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item, caso ele exista no array:
Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado;*/
it('verifica se saída corresponde ao esperado', () => {
    let array = [1, 2, 3, 4];
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);    
})

/*Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];*/
it('verifica se para certa entrada há uma saída distinta', () => {
    let array = [1, 2, 3, 4];
    expect(myRemove(array, 3)).not.toBe([1, 2, 3, 4]);
})


/*Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.*/