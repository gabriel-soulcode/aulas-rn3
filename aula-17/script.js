// Programação Assicrona -> Funções Executando em Paralelo

console.log("Antes");

setTimeout(() => {
    console.log("Atrasado");
}, 2000);

console.log("Depois");

let a = 2;
a++;
setTimeout(() => ++a, 1000);

console.log(a); // 3


// Promise - Promessa (instruções executadas de forma assincrona)

// axios.get("https://api.github.com/users/almir-soulcode").then(resposta => {
//     console.log(resposta);
// });


// async e await
async function buscarDadosGithub() {
    const resposta = await axios.get("https://api.github.com/users/gabriel-soulcode");
    console.log(resposta);
}

buscarDadosGithub();

console.log("Depois da requisão.");