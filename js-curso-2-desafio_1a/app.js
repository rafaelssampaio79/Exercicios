let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function botaoConsole() {
    console.log('O botão CONSOLE foi clicado!!!');
};

function botaoAlerta() {
    alert("Eu amo JS!!!");
};

function botaoPrompt() {
    let cidade = prompt("Registre o nome de uma cidade do Brasil!!!");
    alert(`Estive em ${cidade} e lembrei de você!!!`); // Usando Alert e Template Strings;
};

function botaoSoma() {
    let valor1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    let valor2 = parseInt(prompt("Digite o segundo número inteiro:"));
    alert(`A soma de ${valor1} mais ${valor2} é igual a: ${valor1 + valor2}`); // Usando Alert e Template Strings;
};