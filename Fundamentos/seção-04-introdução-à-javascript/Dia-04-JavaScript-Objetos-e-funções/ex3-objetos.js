let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  
  // ex1
  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo + '.');

  // ex2

  leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      },
  );
  console.log(leitor.livrosFavoritos);

  /* ex3 Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte 
  formato: “Julia tem quantidade livros favoritos”, onde “quantidade” é um número 
  gerado automaticamente pelo seu código.*/
  
  console.log("Julia tem " + leitor.livrosFavoritos.length + " livros favoritos.");