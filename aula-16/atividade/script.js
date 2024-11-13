// const principal = document.querySelector("#principal");
// const opcao1 = document.querySelector("#opcao-1");
// const opcao2 = document.querySelector("#opcao-2");
// const opcao3 = document.querySelector("#opcao-3");
// const opcao4 = document.querySelector("#opcao-4");

// principal.src = opcao1.src;

// opcao1.addEventListener("click", () => {
//     principal.src = opcao1.src;
// });

// opcao2.addEventListener("click", () => {
//     principal.src = opcao2.src;
// });

// opcao3.addEventListener("click", () => {
//     principal.src = opcao3.src;
// });

// opcao4.addEventListener("click", () => {
//     principal.src = opcao4.src;
// });

const principal = document.querySelector("#principal");
const opcoes = document.querySelectorAll(".opcao");

principal.src = opcoes[0].src;

for (const opcao of opcoes) {
    opcao.addEventListener("click", (evento) => {
        const imagem = evento.currentTarget;
        principal.src = imagem.src;
    });
}