const linguagem = "JavaScript";
console.log(linguagem[0]); // J

for (let letra of linguagem) {
    console.log(letra);
}

console.log(linguagem);
console.log(linguagem.toLowerCase()); // minusculo
console.log(linguagem.toUpperCase()); // MAIUSCULO
console.log(linguagem.endsWith("Script")); // true
console.log(linguagem.startsWith("Java")); // false
console.log(linguagem.includes("Type")); // true
console.log(linguagem.indexOf("a")); // 1
console.log(linguagem.lastIndexOf("a")); // 3
console.log(linguagem.replace("Java", "Type")); // TypeScript
console.log(linguagem.slice(2, 7)); // JavaScript -> vaScr

const nome = "Gabriel Braga";
const curso = "Full Stack";
console.log("Bem-vindo", nome, "ao curso", curso);
console.log(`Bem-vindo ${nome} ao curso ${curso}`); // interpolar

const numero1 = 45;
const numero2 = 15;
console.log(`A soma de ${numero1} e ${numero2} é igual a ${numero1+numero2}`);

const pessoa = {
    nome: "Gabriel",
    dataNascimento: "00/00/0000",
    cpf: "000.000.000-00",
    altura: 1.75,
    corCabelo: "Castanho Escuro"
};

console.log(pessoa); // todo o objeto
console.log(pessoa.corCabelo); // cor do cabelo
console.log(pessoa["corCabelo"]); // cor do cabelo

console.log(pessoa.curso); // undefined
pessoa.curso = null;
console.log(pessoa.curso); // null

pessoa.email = "gabriel@email.com";
pessoa.nome = "Gabriel Braga";
console.log(pessoa);

delete pessoa.cpf; // apagar a propriedade cpf do objeto
console.log(pessoa);

let a1 = { nome: "João" };
let a2 = a1;

a2.nome = "Maria";

console.log(a1, a2);