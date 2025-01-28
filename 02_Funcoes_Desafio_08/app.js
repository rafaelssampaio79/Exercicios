// 1. Criar uma função que exibe "Olá, mundo!".

function exibirSaudacao() {
    alert("Olá, mundo!");
};

exibirSaudacao();

// 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no alert.

let nome = prompt("Qual seu nome?");

function exibirOlaNome(nome) {
    alert("Olá, " + nome + "!");
};

exibirOlaNome(nome);

// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

let numero_01 = parseInt(prompt("Digite um numero:"));

function dobrarNumero(numero_01) {
    alert("o Dobro de " + numero_01 + " é igual à: " + (numero_01*2));
};

dobrarNumero(numero_01);

// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.

let num1 = parseInt(prompt("Digite o primeiro numero:"));
let num2 = parseInt(prompt("Digite o segundo numero:"));
let num3 = parseInt(prompt("Digite o terceiro numero:"));

function calcularMedia(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
};

alert("A média de " + num1 + " , " + num2 + " e " + num3 + " é igual a: " + calcularMedia(num1, num2, num3));

// 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

let num4 = parseInt(prompt("Digite o primeiro numero:"));
let num5 = parseInt(prompt("Digite o segundo numero:"));

function maiorNumero(num4, num5) {
    return num4 > num5 ? num4 : num5;
};

alert("O maior número entre " + num4 + " e " + num5 + " é: " + maiorNumero(num4, num5));

// 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.

let num6 = parseInt(prompt("Digite o um numero:"));

function multiplicarPorSiMesmo(num6) {
    return num6 * num6;
};

alert("O número " + num6 + " multiplicado por ele mesmo é igual à: " +  multiplicarPorSiMesmo(num6));