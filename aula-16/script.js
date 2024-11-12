console.log("Há quanto html. Tudo bem?");
console.log(document.body);
// DOM não é um recurso do Node.js

// document.getElementById(); // busca pelo id
// document.getElementsByTagName(); // busca pela tag
// document.getElementsByClassName(); // pela classe
// document.querySelector(); // busca pelo seletor
// document.querySelectorAll(); // busca pelo seletor

const titulo = document.getElementById("titulo");
console.log(titulo);

const paragrafos = document.getElementsByTagName("p");
console.log(paragrafos);

const itens = document.getElementsByClassName("item");
console.log(itens);

const titulo2 = document.querySelector("#titulo");
console.log(titulo2);

const itens2 = document.querySelectorAll(".item");
console.log(itens2);

titulo2.innerHTML = "JavaScript é <em>mel</em>.";

const capa = document.querySelector("#capa");

setTimeout(() => {

    titulo2.style.color = "tomato";
    titulo2.style.fontFamily = "Arial";
    titulo2.style.backgroundColor = "pink";

    capa.style.border = "5px dashed purple";
    capa.src = "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=841&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

}, 3000);

// setInterval(() => {
//     // ...
// }, 3000);

const msg = document.querySelector("#msg");

setTimeout(() => {
    msg.classList.add("erro");
    msg.innerHTML = "Algo deu errado"
}, 2000);

setTimeout(() => {
    msg.classList.remove("erro");
    msg.classList.add("ok");
    msg.innerText = "Agora tá tudo OK!"
}, 4000);