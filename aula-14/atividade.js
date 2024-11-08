// 1. Escreva uma função anônima que recebe um número e retorna o dobro desse número. Atribua a função a uma variável chamada dobro e teste-a com alguns valores.
const dobro = function(n) {
    return n * 2;
}
console.log(`O dobro é: ${dobro(4)}`);

// 2. Crie uma arrow function chamada cubo que recebe um número e retorna o cubo dele. Teste a função com diferentes valores para verificar se o resultado está correto.
let cubo = n => n**3;
console.log(`Cubo: ${cubo(3)}`); // 27
console.log(`Cubo: ${cubo(2)}`); // 8
console.log(`Cubo: ${cubo(4)}`); // 64


// 3. Desenvolva uma função chamada calculaDesconto que recebe um preço e uma taxa de desconto (com valor padrão de 5%). A função deve retornar o preço com o desconto aplicado. Teste a função passando apenas o preço e depois passando o preço e a taxa.
function calculaDesconto(preco, desconto = 0.05) {
    return preco - (preco * desconto);
}
console.log(calculaDesconto(100)); // 95
console.log(calculaDesconto(300, 0.25)); // 225

// 4. Crie uma função chamada executaOperacao que recebe dois números e uma função de callback como parâmetros. A função deve executar a operação fornecida pelo callback com os dois números. Teste a função com operações de adição, subtração e multiplicação, passando funções anônimas como callbacks.
const soma = (n1, n2) => n1 + n2;
const subt = (n1, n2) => n1 - n2;
const mult = (n1, n2) => n1 * n2;

function executaOperacao(n1, n2, operacao) {
    return operacao(n1, n2);
}

console.log(executaOperacao(5, 10, soma));
console.log(executaOperacao(35, 10, subt));
console.log(executaOperacao(7, 4, mult));

// 5. Dado um vetor de números [1, 2, 3, 4, 5], utilize o método forEach e uma função de callback para imprimir cada número multiplicado por 2. Use uma função anônima ou uma arrow function como callback para simplificar o código.
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(n => {
    console.log(dobro(n));
});