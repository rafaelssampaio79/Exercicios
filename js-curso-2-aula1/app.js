//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

// testando o voice
//responsiveVoice.speak('escolha o numero de 1 a 10', 'Brazilian Portuguese Female', {rate:1.2} );

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número entre 1 e 10 XPTO');

function verificarChute() {
    //console.log('O botão foi clicado!');
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
};

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);    
}