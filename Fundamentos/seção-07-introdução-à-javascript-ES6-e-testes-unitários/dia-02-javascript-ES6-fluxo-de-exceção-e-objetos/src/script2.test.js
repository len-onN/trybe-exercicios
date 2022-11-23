const { encode, decode } = require('./script2');

describe('Testa funções encode e decode', () => {
    
    it('Testa se a função encode existe', () => {
        expect(encode).toBeDefined();
    });

    it('Testa se a função decode existe', () => {
        expect(typeof decode).toEqual('function');
    })

    it('Testa se encode(a) retorna 1', () => {
        expect(encode('a e i o u')).toEqual('1 2 3 4 5');
    })
    
    it(`Testa se decode('1 2 3 4 5') retorna 'a e i o u'`, () => {
        expect(decode('12345')).toBe('aeiou');
    })

    it(`Testa se encode converte outras letras`, () => {
        expect(encode('anti-stabilishment')).toBe('1nt3-st1b3l3shm2nt');
    })

    it('Testa se decode converte outros caracteres', () => {
        expect(decode('v3 5m1 h3st4r31 s2m c4r')).toBe('vi uma historia sem cor');
    })

    it('Testa tamanho das strings', () => {
        expect(decode('banana').length).toBe(6);
    })
})