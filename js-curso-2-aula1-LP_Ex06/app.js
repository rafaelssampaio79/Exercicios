/* Gera o texto na tela */
function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

exibirTextoNaTela('h1','Verificador de Número');
exibirTextoNaTela('p','Insira um número para verificação');

/* Primeira Versão - Código Estruturado Padrão 
function verificarNumero() {
    let numero_01 = parseInt(document.querySelector('input').value);
    if (numero_01 > 0) {
        console.log("O número é positivo.");
      } else if (numero_01 < 0) {
        console.log("O número é negativo.");
      } else {
        console.log("O número é zero.");
      }
};
*/

/* Segunda Versão usando Usando Opertador Ternário, Alert e Template Strings */
function verificarNumero() {
    let numero_01 = parseInt(document.querySelector('input').value);
    alert(numero_01 > 0 ? `O número ${numero_01} é positivo.` : numero_01 < 0 ? `O número ${numero_01} é negativo.` : "O número é zero.");
    };