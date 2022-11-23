let pessoaEstudante = {};
function proprietyAdder (object, newPropriety, value){
    object[newPropriety] = value;
}
const name1 = 'Lenon';
let newKey = 'Nome';
proprietyAdder(pessoaEstudante, newKey, name1);
const surname = 'Fernandes Philippi';
proprietyAdder(pessoaEstudante, 'Sobrenome', surname);
console.log(pessoaEstudante);
const fullName = `${name1} ${surname}`;
proprietyAdder(pessoaEstudante, 'Nome Completo', fullName);
const cpf = '06762443940';
proprietyAdder(pessoaEstudante, 'CPF', cpf);
const id = '55381189';
proprietyAdder(pessoaEstudante, 'Número de Identidade', id);
const street = 'Avenida Mario Piam';
proprietyAdder(pessoaEstudante, 'Rua', street);
const district = 'Zona Sul';
proprietyAdder(pessoaEstudante, 'Bairro', district);
const city = 'Balneário Rincão';
proprietyAdder(pessoaEstudante, 'Cidade', city);
const state = 'Santa Catarina';
proprietyAdder(pessoaEstudante, 'Estado', state);
const country = 'Brasil';
proprietyAdder(pessoaEstudante, 'País', country);
const cep = '88828000';
proprietyAdder(pessoaEstudante, 'CEP', cep);
console.table(pessoaEstudante);