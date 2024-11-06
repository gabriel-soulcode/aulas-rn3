let lang = 'Python';
console.log(lang);
console.log(lang[5]); // n
console.log(lang[0]); // P

// vetor, array, lista, matriz
let numero = 5;
let numeros = [4, 8, 7, 1, 0, 6, 8, 0];
console.log("Vetor", numeros);
console.log("Segundo Elemento", numeros[2]);

numeros[2] = 14;
console.log("Antes", numeros);

numeros.push(3);
console.log("Depois", numeros);

console.log("Posicao Indefinida", numeros[12]);
console.log("Comprimento", numeros.length); // 9

let last = numeros.length - 1;
console.log("Ultimo", numeros[last]);

let mistura = [3, 4, 5, "HTML", "CSS", true, false, [1, 3, 4], "JS", 9];

const nomes = ["Leonardo", "Wesley", "Paulo", "Lais", "Igor", "Larissa"];
const tamanho = nomes.length;

for (let i = 0; i < tamanho; i++) {
    console.log("Bem-vindo(a)", nomes[i]);
}

console.log("------------");

for (let nome of nomes) { // for each
    console.log("Bem-vindo(a)", nome);
}