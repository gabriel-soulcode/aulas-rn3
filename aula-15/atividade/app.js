// 1. Crie dois arquivos JavaScript: No primeiro arquivo (operacoes.js), defina duas funções: soma e multiplica, que recebem dois números e retornam a soma e o produto, respectivamente. Exporte ambas as funções. No segundo arquivo (app.js), importe as funções e teste-as com diferentes valores.

import { soma, multiplica } from "./operacoes.js";

console.log(soma(10, 15)); // 25
console.log(soma(45, 16)); // 61
console.log(multiplica(4, 6)); // 24
console.log(multiplica(5, 10)); // 50

// 2. Crie um arquivo (math.js) com duas funções: uma chamada subtrai que retorna a diferença entre dois números e uma função padrão (export default) chamada divide que retorna a divisão de dois números. Importe ambas as funções em outro arquivo e teste-as.

import divide, { subtrai } from "./math.js";
console.log(subtrai(18, 6)); // 12
console.log(divide(100, 3)); // 33.33

// 3. Crie dois vetores de números, vetor1 e vetor2, com valores distintos. Crie uma função que receba ambos os vetores e retorne um novo vetor que combine todos os elementos dos dois vetores. Use o operador spread para concatenar os vetores.
const vetor1 = [1, 2, 3];
const vetor2 = [4, 5, 6];
const vetor3 = [...vetor1, ...vetor2];
console.log(vetor3);

// 4. Crie um objeto usuario com as propriedades nome, idade, e email. Crie um novo objeto usuarioCompleto que contenha todas as propriedades de usuario mais uma propriedade adicional, telefone. Use o operador spread para copiar as propriedades.
const nome = "Gabriel";
const email = "gabriel@email.com";
const usuario = {
    nome, // nome: nome
    idade: 22,
    email // email: email
};
console.log(usuario);

const usuarioCompleto = {...usuario, telefone: "8899999999"};
console.log(usuarioCompleto);

{
// 5. Crie um objeto livro com as propriedades titulo, autor, ano e genero. Use destructuring para extrair titulo, genero e autor em variáveis separadas e exiba essas variáveis no console.
const livro = {
    titulo: "Código Limpo",
    genero: "Tecnologia",
    autor: {
        nome: "Robert C. Martin",
        nacionalidade: "Americano"
    },
    ano: 2014
};

const { titulo, genero, autor: { nome } } = livro;
console.log(titulo, genero, nome);

}