function saudacao(nome, curso) {
    console.log(`Olá ${nome}. Bem-vindo(a) ao curso ${curso}.`);
}

saudacao("Gabriel", "Computação");

function soma(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
}

soma(5, 8);
soma(10, 12);
soma(53, 7);

function calcularMedia(n1, n2, n3) {
    const media = (n1 + n2 + n3) / 3;
    return media;
}

const mediaAluno = calcularMedia(6, 8, 9);
console.log(`A média do aluno é ${mediaAluno}`);

if (mediaAluno < 7) {
    console.log("Reprovado.");
} else {
    console.log("Aprovado.");
}

function obterDiaSemana(dia) {
    switch (dia) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda";
        case 3:
            return "Terça";
        case 4:
            return "Quarta";
        case 5:
            return "Quinta";
        case 6:
            return "Sexta";
        case 7:
            return "Sábado";
    }
}
console.log(obterDiaSemana(1)); // Domingo
console.log(obterDiaSemana(9)); // undefined

// Funções com Parâmetros
// Funções sem Parêmetros
// Funções com Retorno
// Funções sem Retorno

function calcularIMC(peso, altura) {
    return peso / (altura**2);
}

const imc1 = calcularIMC(70); // NaN (Not a Number)
console.log(imc1);

const imc2 = calcularIMC(70, 1.8);
console.log(imc2);

function despedir(nome = "Amigo(a)") {
    console.log(`Até logo, ${nome}!`);
}

despedir();

function calcularAreaCirculo(raio) {
    if (raio == undefined) {
        throw new Error("Raio do circulo não foi definido.");
    }
    return 3.14 * (raio ** 2);
}

console.log(calcularAreaCirculo(17));
// console.log(calcularAreaCirculo());

// Função Anônima -> Função sem nome (Geralmente usando como Callback)
function subtrair(n1, n2) {
    return n1 - n2;
}

const somar = function(n1, n2) {
    return n1 + n2;
}

console.log(subtrair(10, 5)); // 5
console.log(somar(10, 5)); // 15

// Callback -> Uma função passada como entrada de outra função
function calcular(operacao, n1, n2) {
    return operacao(n1, n2);
}

calcular(function(n1, n2) { return n1 + n2; }, 12, 8);

const numeros = [3, 6, 9, 4, 1, 7];
numeros.forEach(function(n) {
    console.log(n);
});

// Arrow Functions (Funções de Seta) -> Função Anônima
const funcaoSemSeta = function() {}
const funcaoComSeta = () => {}

console.log("--------------");

numeros.forEach(n => console.log(n));

const ola = _ => console.log("Olá!");
ola();

function potencia(base, expo) {
    return base**expo;
}

const potenciaArrow = (base, expo) => base**expo;

console.log(potencia(3, 4)); // 81
console.log(potenciaArrow(3, 4)); // 81