# projeto-jogo-da-velha
Jogo da velha em HTML/CSS/JAVASCRIPT
Projeto feito em aula com a DIO para conclusão de curso.
HTML

<!DOCTYPE html>
<!-- informa que é uma versão mais recente do html (HTML5)-->
<html lang="pt-br">
<!--inicia ocódigo html e informa a linguagem usada na página-->

<head>
    <!--titulo que aparecerá na aba do navegador-->
    <!--inicia o topo da página-->

    <title>

        Jogo da velha
    </title>
    <!--fecha o campo titulo-->

    <meta charset="UTF-8">

    <link rel="stylesheet" href="estilo.css">
</head>
<!--fecha o topo da página-->

<body>
    <!--inicia o corpo da página-->

    <h1>
        <!--h1 é titulo que a aprecerá no corpo da página-->
        Jogo da Velha
    </h1>

    <div>
        <div id="1" class="quadrado" onclick="escolherQuadrado(this.id)">-</div>
        <!-- ativa o quadrado pelo clique-->
        <div id="2" class="quadrado" onclick="escolherQuadrado(this.id)">-</div>
        <!-- ativa o quadrado pelo clique-->
        <div id="3" class="quadrado" onclick="escolherQuadrado(this.id)">-</div>
        <!-- ativa o quadrado pelo clique-->
    </div>

    <div>
        <div id="4" class="quadrado" onclick="escolherQuadrado(this.id)">-</div>
        <!-- ativa o quadrado pelo clique-->
        <div id="5" class="quadrado" onclick="escolherQuadrado(this.id)">-</div>
        <!-- ativa o quadrado pelo clique-->
        <div id="6" class="quadrado" onclick="escolherQuadrado(this.id)">-</div>
        <!-- ativa o quadrado pelo clique-->
    </div>

    <div>
        <div id="7" class="quadrado" onclick="escolherQuadrado(this.id)">-</div>
        <!-- ativa o quadrado pelo clique-->
        <div id="8" class="quadrado" onclick="escolherQuadrado(this.id)">-</div>
        <!-- ativa o quadrado pelo clique-->
        <div id="9" class="quadrado" onclick="escolherQuadrado(this.id)">-</div>
        <!-- ativa o quadrado pelo clique-->
    </div>

    <div class="jogador">
        <!--identifica a classe jogador e coloca o texto-->
        <label>
        Jogador:
    </label>
        <label id="jogador-selecionado">

    </label>
    </div>

    <div class="vencedor">
        <!--identifica a classe vencedor e coloca o texto-->
        <label>
        Vencedor:
    </label>
        <label id="vencedor-selecionado">

    </label>
    </div>

    <div>
        <button onclick="reiniciar()"> <!-- ativa o botão reiniciar pelo clique-->
        Reiniciar
    </button>
    </div>

</body>
<!--fecha o corpo do código-->

<script src="velha.js"></script>
<!--associa o código javaScript ao html-->

</html>
<!--fecha o código html-->












CSS


body {
    text-align: center;
    /* alinha o corpo do texto associado ao html*/
}

.quadrado {
    /* define todo o launch do quadrado, alinhamento, largura, cor, fonte...*/
    text-align: center;
    width: 50px;
    background: #eee;
    display: inline-block;
    padding: 40px;
    font-size: 60px;
    margin: 5px;
    cursor: pointer;
    color: #eee;
}

.jogador,

/* alinhando o tamanho do nome do jogador e vencedor*/

.vencedor {
    font-size: 30px;
    margin-top: 10px;
}

button {
    /* alinhando o tamanho do botão reiniciar*/
    margin-top: 10px;
    width: 100px;
    height: 30px;
    background: #eee;
    cursor: pointer;
}


JAVASCRIPT



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
