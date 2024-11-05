// 1. Considerando as variáveis x = 7 e y = 8, crie um código que mostre:
// A soma dos números.
// A diferença entre os números.
// A multiplicação dos números.
// A divisão dos números.
// Dica: Utilize os operadores +, -, * e /.
let x = 7, y = 8;
console.log("x =", x, "y =", y);
console.log("Soma:", x + y);
console.log("Subtração:", x - y);
console.log("Mutiplicação:", x * y);
console.log("Divisão:", x / y);
console.log("Exponenciação:", x ** y);

// 2. Dado o valor let x = 10, utilize operadores de atribuição para modificar e exibir o valor de x da seguinte forma:
// Adicione 5 a x.
// Subtraia 3 de x.
// Multiplique x por 2.
// Divida x por 4.
// Dica: Utilize operadores como +=, -=, *=, e /=.
x = 10; // x = 10
x += 5; // x = 15
x -= 3; // x = 12
x *= 2; // x = 24
x /= 4; // x = 6
console.log("x =", x);

// 3. Escreva um código que tenha duas strings e verifica:
// Se as duas strings são iguais (utilizando ==).
// Se as duas strings são diferentes (utilizando !=).
const text1 = "Java";
const text2 = "JavaScript";
const iguais = text1 === text2;
const diferentes = text1 !== text2;
console.log("palavra 1:", text1);
console.log("palavra 2:", text2);
console.log("São iguais?", iguais);
console.log("São diferentes?", diferentes);

// 4. Escreva um código que tenha dois numeros e verifica:
// Se o primeiro numero é maior que o segundo.
// Se o primeiro numero é menor ou igual ao segundo.
let a = 10;
let b = 11;
console.log("a =", a);
console.log("b =", b);
console.log("a é maior que b?", a > b);
console.log("a é menor ou igual a b?", a <= b);
console.log("b é par?", ((b % 2) == 0));
console.log("b é ímpar?", (b % 2 == 1));

// 5. Crie um código que tenha três valores booleanos e mostre:
// A conjunção de todos eles.
// A disjunção de todos eles.
// A negação da disjunção de todos eles.
// Utilize os operadores lógicos &&, || e !
let p = true, q = false, s = true;
console.log("Conjunção:", (p && q && s));
console.log("Disjunção:", (p || q || s));
console.log("Negação da Disjunção:", !(p || q || s));