// 1. Crie um programa que receba um vetor de números e mostre a soma de todos os elementos. Utilize um loop while para percorrer o vetor e somar cada elemento.
let numeros = [12, 90, 22, 17, 56, 49, 46, 34, 10];
let i = 0;
let tamanho = numeros.length;
let soma = 0;

while (i < tamanho) {
    soma += numeros[i];
    i++;
}

console.log("Soma", soma);

// 2. Escreva um programa que recebe um vetor de números e mostre a quantidade de números pares no vetor. Use um loop while para verificar cada elemento e um contador para contar os números pares.
let index = 0;
let pares = [];
let tam = numeros.length;
while (index < tam) {
    const numero = numeros[index];
    if (numero % 2 == 0) {
        pares.push(numero);
    }
    index++;
}
console.log("Pares:", pares);
console.log("Tamanho:", pares.length);

// 3. Crie um programa que receba um vetor de strings e imprima cada item com uma mensagem personalizada, por exemplo: "Item: maçã", "Item: banana", etc. Utilize o loop for...of para percorrer o vetor e exibir cada item.
let supermercado = ["Pães", "Leite", "Papel Higiênico", "Ração do Cachorro", "Sabão", "Arroz"];
for (let item of supermercado) {
    console.log("Item:", item);
}

// 4. Desenvolva um programa que receba um vetor de números e um valor multiplicador. O programa deve mostrar um novo vetor com cada elemento multiplicado pelo valor fornecido.
let mutiplicador = 3;
let fatores = [5, 9, 12, 17, 50, 38, 42, 71];
let resultados = [];
for (let fator of fatores) {
    resultados.push(fator * mutiplicador);
}
console.log(resultados);

// 5.  Escreva um programa que receba um vetor de números e mostre o maior valor contido nele. Utilize um loop for para comparar cada valor e encontrar o maior.
let nums = [45, 676, 23, 98, 17, 905, 56, 94, 123];
let maior = 0;
for (let num of nums) {
    if (maior < num) {
        maior = num;
    }
}
console.log("Maior", maior);