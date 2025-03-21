    let numeroSecreto = gerarNumeroAleatorio();
    let tentativas = 1;

    function exibirTextoNaTela(tag,texto){
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
    };
    // COMENTÁRIO PARA VALIDAR CURSO GIT E GITHUB
    function exibirMensagemInicial() {
        exibirTextoNaTela('h1','Jogo do número secreto V01');
        exibirTextoNaTela('p','Escolha um número entre 1 e 10');
    }
    
    exibirMensagemInicial();

    function verificarChute() {
        let chute = parseInt(document.querySelector('input').value);

        if (chute == numeroSecreto){
            exibirTextoNaTela('h1','Acertou!!');
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!!`;
            exibirTextoNaTela('p',mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if (chute > numeroSecreto){
                exibirTextoNaTela('p','O número secreto é menor!');
            } else {
                exibirTextoNaTela('p','O número secreto é maior!');
            }
            tentativas++;
            limparCampo();
        }
    }
    
    function gerarNumeroAleatorio() {
        return parseInt(Math.random() * 10 + 1);    
    }

    function limparCampo() {
        chute = document.querySelector('input');
        chute.value = '';
    }

    function reiniciarJogo() {
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled',true);
    }