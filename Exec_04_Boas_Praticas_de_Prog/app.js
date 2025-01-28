/* 1. Mensagem de boas-vindas: */
/* 1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas. */
console.log("Bem-vindo!");

/* 2. Exibir nome no console: */
/* 2. Crie uma variável chamada "nome" e atribua a ela o seu nome. */
/* Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador. */
let nome = "Rafael";
console.log("Olá, " + nome + "!");
console.log(`Olá, ${nome} !`); // Usando Template Strings

/* 3. Exibir nome com alert: /*
/* 3. Crie uma variável chamada "nome" e atribua a ela o seu nome. */
/* Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" . */
let nome2 = "Rafael";
alert("Olá, " + nome2 + "!");
alert(`Olá, ${nome2} !`); // Usando Template Strings

/* 4. Perguntar a linguagem de programação favorita: */
/* 4. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. */
/* Em seguida, armazene a resposta em uma variável e mostre no console do navegador. */
let linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
console.log("Você gosta de " + linguagem + "!");
console.log(`Você gosta de ${linguagem} !`); // Usando Template Strings

/* 5. Soma de dois valores: */
/* 5. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. */
/* Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". */
/* Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console. */
let valor_5_1 = 10; // Substitua pelo valor desejado
let valor_5_2 = 20; // Substitua pelo valor desejado
let resultado_5 = valor_5_1 + valor_5_2;
console.log("A soma de " + valor_5_1 + " e " + valor_5_2 + " é igual a " + resultado_5 + ".");
alert(`A soma de ${valor_5_1} e ${valor_5_2} é igual a ${resultado_5} .`); // Usando Alert e Template Strings

/* 6. Subtração de dois valores: */
/* 6. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. */
/* Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". */
/* Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console. */
let valor_6_1 = 30; // Substitua pelo valor desejado
let valor_6_2 = 15; // Substitua pelo valor desejado
let resultado_6 = valor_6_1 - valor_6_2;
console.log("A diferença entre " + valor_6_1 + " e " + valor_6_2 + " é igual a " + resultado_6 + ".");
alert(`A diferença entre ${valor_6_1} e ${valor_6_2} é igual a ${resultado_6}.`); // Usando Alert e Template Strings

/* 7. Verificar maioridade: */
/* 7. Peça ao usuário para inserir sua idade com prompt. */
/* Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console. */

let idade = prompt("Qual a sua idade?");
if (idade >= 18) {
    console.log("Você é maior de idade.");
    alert(`Você é maior de idade.`); // Usando Alert e Template Strings
} else {
    console.log("Você é menor de idade.");
    alert(`Você é menor de idade.`); // Usando Alert e Template Strings
}

/* 7.1. Verificar maioridade: */
/* 7.1. Peça ao usuário para inserir sua idade com prompt. */
/* Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console. */
let idade_7_1 = prompt("Qual a sua idade?");
idade_7_1 >= 18 ? alert(`Você é maior de idade.`) : alert(`Você é menor de idade.`); // Usando Opertador Ternário, Alert e Template Strings

/* 8. Verificar se o número é positivo, negativo ou zero: */
/* 8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. */
/* Use if-else para imprimir a respectiva mensagem. */
let numero_8 = prompt("Digite um número:");
if (numero_8 > 0) {
console.log("O número é positivo.");
} else if (numero_8 < 0) {
console.log("O número é negativo.");
} else {
console.log("O número é zero.");
}

/* 9. Imprimir números de 1 a 10: */
/* 9. Use um loop while para imprimir os números de 1 a 10 no console. */
let i = 1;
while (i <= 10) {
console.log(i);
i++;
}

/* 10. Verificar aprovação: */
/* 10. Crie uma variável "nota" e atribua um valor numérico a ela. */
/* Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console. */

let nota = 8; // Substitua pelo valor desejado
if (nota >= 7) {
console.log("Aprovado");
} else {
console.log("Reprovado");
}

/* 11. Gerar número aleatório: */
/* 11. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console. */
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

/* 12. Gerar número inteiro entre 1 e 10: */
/* 12. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console. */
let numeroAleatorio_12 = Math.floor(Math.random() * 10) + 1;
console.log(numeroAleatorio_12);

/* 13. Gerar número inteiro entre 1 e 1000: */
/* 13. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console. */
let numeroAleatorio_13 = Math.floor(Math.random() * 1000) + 1;
console.log(numeroAleatorio_13);