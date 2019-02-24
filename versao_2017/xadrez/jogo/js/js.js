/*
	------------------------------------------------------------------------------------
	| Arquivo onde esta definada a função main, chamada após o carregamento da pagina. |
	------------------------------------------------------------------------------------
 */

// Declaração das variaveis globais
var tabuleiro = new Tabuleiro();
var listaPecas = new Array();
var irregularW = 0;
var irregularB = 0;
var vez;
// Fim das declarações de variaveis globais


$(document).ready(function(){
	criarPecas(); // Função definida em oprPeca.js
	tabuleiro.casasVazia(); // Metodo do objeto Tabuleiro. Definido em ClassTabuleiro.js
	jogar(); // Função definida abaixo
	//decideVez('b');
	//tabuleiro.imprime()
});

function jogar(){
	buscaJogo();
}

// function jogar(){
// 	// var resp = parseInt(prompt("Para novo jogo digite 0, se deseja continuar um jogo digite seu id"));
// 	if(resp!=0){
// 		buscaJogo(resp); // Função definida em buscaJogo.js
// 	}
// 	else{
// 		posicionaInicio(); // Função definida em oprPeca.js
// 		decideVez('b'); // Função definida em oprPeca.js
// 	}
// }