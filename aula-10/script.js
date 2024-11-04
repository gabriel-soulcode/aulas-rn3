// console.log("Hello World II")
/* 
console.log("Isto nunca será executado.")
*/

let nome = "Gabriel Braga";
let idade = 22;
let nota = 8.7;

idade = 23;
nota = 6.5;

console.log(nome, idade, nota);

// let a = 5;
// let b = 6;
// let c = 3;
// let a = 5, b = 6, c = 3;

// let goiaba;
let goiaba;

const maskCPF = "000.000.000-00";
// maskCPF = "novo valor";

let tipo;
console.log(typeof tipo); // undefined
tipo = "Lorem";
console.log(typeof tipo); // string
tipo = 24;
console.log(typeof tipo); // number
tipo = false;
console.log(typeof tipo); // boolean
tipo = null;
console.log(typeof tipo); // null

const x = 12, y = 6;
console.log(x + y); // 18
console.log(y - x); // -6
console.log(x * y); // 72
console.log(x / y); // 2
console.log(x % y); // 0
console.log(x ** y); // 2985984

console.log(5 / 3);

const per = 75;
const num = 200;
console.log(num * (per / 100));

let a = 5, b = 6, c = 3;
let delta = (b ** 2) + (4 * a * c);
console.log(delta);

let numero = 7;
numero += 5; // 12
numero *= 3; // 36
numero /= 9; // 4
numero -= 12; // -8
console.log(numero);

numero = 2;

console.log(numero++); // 2, numero = 3
console.log(++numero); // 4, numero = 4
console.log(numero--); // 4, numero = 3
console.log(--numero); // 2, numero = 2

numero++; // numero = 3
console.log(numero); // 3, numero = 3

console.log(6 == 6); // true
console.log("6" === 6); // false
console.log(4 > 7); // false
console.log(4 < 7); // true
console.log(9 >= 9); // true
console.log(7 <= 7); // true
console.log("6" !== 6); // true
console.log("6" != 6); // false

console.log("Gabriel" == "gabriel"); // false
console.log("Gabriel" != "gabriel"); // true

let p = true;
let q = false;
// Conjunção - E - AND - &&
// Disjunção - OU - OR - ||
// Negação - NÃO - NOT - !
console.log(p && q); // false
console.log(p || q); // true
console.log(p && !q); // true
console.log(!p || q); // false
console.log(!(p || q)); // false

// aritmetico > comparação > lógico
console.log((4*3) > 125 || (6%3 == 1) || (90*2*0.5) == (110-20));