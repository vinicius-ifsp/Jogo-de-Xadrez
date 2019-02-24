/*
	--------------------------------------------------------------------------------
	| Arquivo onde estão definidas as funções referente as operações com as peças. |
	--------------------------------------------------------------------------------
 */

function criarPecas(){ // Inicio da função criarPecas.
	listaPecas.push(new Peca('r-','l1c1','b'));
	listaPecas.push(new Peca('n-','l1c2','b'));
	listaPecas.push(new Peca('b-','l1c3','b'));
	listaPecas.push(new Peca('q-','l1c4','b'));
	listaPecas.push(new Peca('k-','l1c5','b'));
	listaPecas.push(new Peca('b-','l1c6','b'));
	listaPecas.push(new Peca('n-','l1c7','b'));
	listaPecas.push(new Peca('r-','l1c8','b'));
	for(var i = 1; i < 9; i++){
		var pi = 'l2c'+i;
		listaPecas.push(new Peca('p-',pi,'b'));
	}

	listaPecas.push(new Peca('R','l8c1','w'));
	listaPecas.push(new Peca('N','l8c2','w'));
	listaPecas.push(new Peca('B','l8c3','w'));
	listaPecas.push(new Peca('Q','l8c4','w'));
	listaPecas.push(new Peca('K','l8c5','w'));
	listaPecas.push(new Peca('B','l8c6','w'));
	listaPecas.push(new Peca('N','l8c7','w'));
	listaPecas.push(new Peca('R','l8c8','w'));
	for(var i = 1; i < 9; i++){
		var pi = 'l7c'+i;
		listaPecas.push(new Peca('P',pi,'w'));
	}
} // Fim da função criarPecas.

function excluirPeca(local){ // Inicio da função excluirPeca.
	for(i in listaPecas){
		if(listaPecas[i].pA==local){
			listaPecas.splice(i, 1); // Exclui peça da lista
			break;
		}
	}
} // Fim da função excluirPeca.

function posicionaInicio(){ // Inicio da função posicionaInicio.
	for(var i = 0; i < listaPecas.length; i++){
		tabuleiro.posicionaPeca(listaPecas[i], listaPecas[i].pA);
	}
	//imprimePecas()
	//criaStrTab();

} // Fim da função posicionaInicio.

function movePeca(local, posicao){ // Inicio da função movePeca.
	var p; //Peça
	var moveu;
	var indice;
	var corP;
	for(var i = 0; i< listaPecas.length;i++){
		if(listaPecas[i].pA==posicao){
			p = listaPecas[i];
			indice = i;
			break;
		}
	}
	moveu = tabuleiro.posicionaPeca(p,local);
	corP = p.cor;
	if(moveu!=true){
		fimJogo(moveu);
	}else{
		listaPecas[indice].pA = local;
		p = null;
	}
	criaStrTab();
	decideVez(corP);
} // Fim da função movePeca.

function decideVez(cor){ // Inicio da função decideVez.
	$('.posicionaCasa').attr('onclick', 'return false');
	for(var i = 0; i<listaPecas.length; i++){
		if(listaPecas[i].cor!=cor){
			var local = "#"+listaPecas[i].pA;
			$(local).attr('onclick', 'selecionou(this)');
		}
	}
	vez = cor=='b'?'w':'b';
} // Fim da função decideVez;

function cheque(){ // Inicio da função cheque.
	var reiCor = reiChek==1?'branco':'preto';
	alert("Rei "+reiCor+" esta em cheque!");
	//return true;
} // Fim da função cheque.

function fimJogo(msg){ // Inicio da função fimJogo.
	tabuleiro.casasVazia(); 
	alert(msg);
	if(confirm("Revanche?")){
		window.location.href='index.php';
	}else{
		alert('Obrigado por Jogar.')
	}
} // Fim da função fimJogo.

function imprimePecas(){ // Inicio da função imprimePecas.
	var str = '---'
	for(i in listaPecas){
		var p = listaPecas[i];
		str += 'letra: '+p.letra+' Local: '+p.pA+' Indice: '+i+'----';
	}
	console.log(str);
} // Fim da função imprimePecas.