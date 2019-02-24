/*
	------------------------------------------------------------------------------
	| 		Arquivo onde estão definadas as funções utilizadas nas etapas de 	 |
	| 		movimentação das peças.      									 	 |
	------------------------------------------------------------------------------
 */

// Declaração das variaveis globais
var peca;
var jogadas;
var cores;
var casa;
var cliques = 0;
var corRaiz;
var reiChek;
// Fim das declarações de variaveis globais

function selecionou(local) {  // Inicio da função selecionou.
	cliques += 1;
	casa= local.getAttribute('id'); //id da casa que foi clicada.
	if(cliques==1){
		peca = tabuleiro.verificaCasa(casa); // recebe o que encontrou no local clicado.
		iniciaMov(); // Chama a função que inicia o movimento.
		jogadasDisp(peca); // Chama a função que busca jogadas disponiveis.
	}

	else{
		encerraMov(); // Chama a função que encerra o movimento.
	}	
} // Fim da função selecionou.

function jogadasDisp(p){ // Inicio da função jogadasDisp.
	$("#informacoes").append("<p>Peça: "+p.letra+"</p>"); //escreve peca selecionada.
	jogadas = new Array(); // Cria um array que vai receber locais de jogadas disponiveis.
	cores = new Array(); // Cria um array que vai receber as cores dos locais disponiveis.
	buscaJogadas(p,''); // Chama a função que busca jogadas para a peça selecionada.
	liberaCasas(); // Chama a função que libera as casas de disponiveis encontradas.
} // Fim da função jogadasDisp.

function buscaJogadas(p,chek=''){ // Inicio da função buscaJogadas.
// Chama a função que contem o movimento de acordo com a letra da peça.
	if( (p.letra=='r') || (p.letra=='R') ){
		torre(p, chek);
	}
	else if( (p.letra=='n') || (p.letra=='N') ){
		cavalo(p, chek);
	}
	else if ( (p.letra=='b') || (p.letra=='B') ) {
		bispo(p, chek);
	}
	else if( (p.letra=='q') || (p.letra=="Q") ){
		rainha(p, chek);
	}
	else if( (p.letra=="k") || (p.letra=="K") ){
		rei(p, chek);
	}
	else{
		peao(p, chek);
	}
} // Fim da função buscaJogadas.

function disCasa(tipo,local){ // Inicio da função disCasa.
	salvaCorFundo(local); // Chama a função que salva a cor de fundo do local disponivel.
	$(tipo+local).css('background', 'red'); // Muda a cor do local disponivel para red. 
	jogadas.push(local); // Adiciona o local no array de jogadas.
} // Fim da função disCasa.


function salvaCorFundo(local){ // Inicio da função salvaCorFundo.
	var cor = $("#"+local).css('background-color'); // Salva a cor do fundo do local.
	cores.push(cor); // Adiciona a cor no array de cores.
} // Fim da função salvaCorFundo.

function liberaCasas(){ // Inicio da função liberaCasas.
	for(i in jogadas){ // Percorre o array de jogadas.
		$('#'+jogadas[i]).attr('onclick', 'decide(this)') // Libera o click nos locais.
	}
} // Fim da função liberaCasas.

function decide(obj){  // Inicio da função decide.
// Função chamada quando um local de destino e selecionado.
	var local = obj.getAttribute('id'); // Id do local clicado.
	movePeca(local,peca.pA); // Função definida em oprPeca.js
	encerraMov(); // Chama a função que encerra o movimento.
	jogadas = null; // Limpa o array que continha as jogadas disponiveis.
	testaCheque(); // Chama a função que verifica cheque.
}  // Fim da função decide.

function voltaCorFundo(){ // Inicio da função voltaCorFundo.
	for(i in cores){ // Percorre o array de cores
		$('#'+jogadas[i]).css('background-color', cores[i]); // Volta a cor de fundo.
	}
} // Fim da função voltaCorFundo.

function iniciaMov(){ // Inicio da função iniciaMov.
	$("#informacoes p").remove(); //Limpa o quadro de informações.
	$("#informacoes").append("<p>Casa Selecionada: "+casa+"</p>"); //escreve Casa selecionada.
	$('.posicionaCasa').attr('onclick', 'return false'); //bloquea todos onclick, ou seja, os cliks nas casas nao tera efeito.
	corRaiz = $("#"+casa).css('background-color'); // pega a cor, para caso o usuario clique novamente
	$("#"+casa).attr('onclick', 'selecionou(this)'); //libera casa para clique.	
	$("#"+casa).css('background-color', 'red'); // Muda a cor de fundo do local selecionado.
} // Fim da função iniciaMov.

function encerraMov(){  // Inicio da função encerraMov.
	$("#"+casa).css('background-color', corRaiz); //retorna para a cor de fundo anterior. A casa não está mais selecioanda.	
	$("#informacoes p").remove(); // Limpa as informações.
	voltaCorFundo(); // Chama função que volta cor de fundo.
	if(cliques==2){ // Se não moveu a peça e deseja mover outra.
		var cor = peca.cor=='b'?'w':'b';
		decideVez(cor);
	}
	cliques=0;
} // Fim da função encerraMov.

function testaCheque(){  // Inicio da função testaCheque.
	for(var y = 0; y<listaPecas.length; y++){
		jogadas = new Array();
		if(listaPecas[y].cor!=vez){
			buscaJogadas(listaPecas[y],'1');
			for(i in jogadas){
				var jogada = jogadas[i].split("");
				var linha = jogada[1];
				var coluna = jogada[3];
				var tab = tabuleiro.casa[linha][coluna];
				if(tab!=''){
					if(tab.letra=='k'||tab.letra=='K'){
						if(tab.letra=='k'){
							reiChek = 0;
						}
						else{
							reiChek = 1;
						}
						cheque();
						y = listaPecas.length;
						break;
					}
				}
			}
		}
	}
}  // Fim da função testaCheque.


function casaInds(){
	$("#informacoes").append("<p>Não a peça nesta casa!</p>");
}