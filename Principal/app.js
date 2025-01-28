alert("Boas vindas ao nosso site!");
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
alert("Erro! Preencha todos os campos");
let mensagemDeErro = "Erro! Preencha todos os campos 2";
alert(mensagemDeErro);
alert("nome atual: " + nome + "\nidade atual: " + idade);
nome = prompt("Insira seu Nome:");
idade = prompt("Insira sua Idade:");
alert("nome atual: " + nome + "\nidade atual: " + idade);
if(idade >= 18) {
    console.log("Pode tirar a habilitação!");
    alert("Pode tirar a habilitação!"+"\nnome atual: " + nome + "\nidade atual: " + idade);
}