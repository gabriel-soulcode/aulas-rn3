
// Métodos e This
const pessoa = {
    nome: "Gabriel Braga",
    idade: 22,
    cumprimentar: function() {
        console.log(`Olá meu nome é ${this.nome}.`);
    }
};

console.log(pessoa);
pessoa.cumprimentar();

// Funções Construtores -> Função que cria um novo objeto (instância)
// POO (Programação Orientada a Objetos) -> Classe (Representação do Objeto)
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}
const pessoa2 = new Pessoa("Daniel", 27);
console.log(pessoa2);

// Operador Spread (Espalhar)
const produto1 = {
    descricao: "Manga Vermelha",
    preco: 2.5,
    categoria: "Frutas e Hortaliças"
};
const produto2 = {...produto1}; // copia propriedades de produto1 para produto2

produto1.descricao = "Manga Azul";
console.log(produto1.descricao);
console.log(produto2.descricao);

// Desestruturação (Destruction)
const produto3 = {
    descricao: "SSD 512GB",
    preco: 400
};
// const descricao = produto3.descricao; // antes
const { descricao, preco, categoria } = produto3; // depois
console.log(descricao); // SSD 512GB
console.log(preco);
console.log(categoria);

const pessoa3 = {
    nome: "Estefane",
    endereco: {
        rua: "Rua Aqui Perto",
        UF: "CE"
    }
};

const { nome, endereco: { rua, UF } } = pessoa3;

console.log(nome);
console.log(rua);
console.log(UF);

const venda = {
    cliente: "Bismark Araujo",
    data: "11/11/2024",
    nota: {
        codigo: "0498503485",
        tipo: "XML"
    }
}
const { cliente, nota: { codigo } } = venda;
console.log("Cliente:", cliente);
console.log("Codigo da Nota:", codigo);

const nomes = ["Rodrigo", "Leonardo", "Thiago"];
const [primeiro, segundo, terceiro, quarto] = nomes;
console.log(terceiro);
console.log(quarto);

const tarefas = [
    { desc: "Estudar JavaScript" },
    { desc: "Academia" },
    { desc: "Sair com Cachorro" },
];

const [{ desc }] = tarefas;
// console.log(tarefas[0].desc);
console.log(desc);

const nomes2 = [...nomes]; // copiar uma linha

console.log(nomes2);
