var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementById('quadrado'); // anexa o documento do quadrado ao javaScript


mudarJogador('x'); //faz com que o jogador inicial comece com 'x' 

function escolherQuadrado(id) { //faz com que não altere x para 0 no mesmo quadrado

    if (vencedor !== null) {
        return;
    }

    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000'; //cor do sinal dentro do quadrado x ou 0 

    if (jogador === 'x') { // muda o jogador, quando x após jogar vira 0 se jogador é igual a x ele muda para 0 e assim em diante
        jogador = 'o';
    } else {
        jogador = 'x'
    }

    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor) { //muda o valor do jogador
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() {
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if (checaSequencia(quadrado1, quadrado2, quadrado3)) { //checa se os 3 quadrados são iguais e ganha o jogo
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado4, quadrado5, quadrado6)) { //checa se os 3 quadrados são iguais e ganha o jogo
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    if (checaSequencia(quadrado7, quadrado8, quadrado9)) { //checa se os 3 quadrados são iguais e ganha o jogo
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    if (checaSequencia(quadrado1, quadrado4, quadrado7)) { //checa se os 3 quadrados são iguais e ganha o jogo
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado2, quadrado5, quadrado8)) { //checa se os 3 quadrados são iguais e ganha o jogo
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }

    if (checaSequencia(quadrado3, quadrado6, quadrado9)) { //checa se os 3 quadrados são iguais e ganha o jogo
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    if (checaSequencia(quadrado1, quadrado5, quadrado9)) { //checa se os 3 quadrados são iguais e ganha o jogo
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado3, quadrado5, quadrado7)) { //checa se os 3 quadrados são iguais e ganha o jogo
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
    }

}


function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor

}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) { //muda a cor do quadrado para determinar o vencedor
    quadrado1.style.backgroundColor = '#0C0';
    quadrado2.style.backgroundColor = '#0C0';
    quadrado3.style.backgroundColor = '#0C0';

}

function checaSequencia(quadrado1, quadrado2, quadrado3) { //checa se os quadrados são iguais
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }
    return eigual
}

function reiniciar() { //ativou o botão de reiniciar
    vencedor = null
    vencedorSelecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) { //for é um laço de repetição e determina quantas voltas ele vai dar, o i começa com 1, ele vai executar o código enquanto i for menor ou igual a 9
        var quadrado = document.getElementById(i); //anexou o documento id do html aqui
        quadrado.style.backgroundColor = '#eee'; // mudou a cor para inicial do quadrado
        quadrado.style.color = '#eee'; //mudou a cor para inicial do -
        quadrado.innerHTML = '-'; //iniciou o jogo com - 

    }

    mudarJogador('x'); //volta o jogador para 'x' depois de le todo o código
}