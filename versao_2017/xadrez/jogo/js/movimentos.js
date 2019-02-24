/*
	------------------------------------------------------------------------------
	| Arquivo onde estão definadas as funções com os movimentos de todas as peças |
	------------------------------------------------------------------------------
 */

function torre(torre, chek=''){  // Inicio da função torre.
	// A cada jogada pode se mover em até 4 direções diferentes.
	// baixo, cima, direita, esquerda

	var cordenada = new Array();
	cordenada = torre.pA.split('');

	var linha, coluna ; // recebe a linha e coluna que a torre esta

	linha = cordenada[1];
	coluna = cordenada[3];

	//Para Baixo
	for(var i = (parseInt(linha)+1); i<= 8; i++){
		var tab = tabuleiro.casa[i][coluna];
		var local = 'l'+i+'c'+coluna;
		if(tab!=''){
			if(tab.cor!=torre.cor){
				if(chek!=''){
					jogadas.push(local);
				}
				else{
					disCasa('#',local);
				}
			}
			break;
		}
		if(chek!=''){
			jogadas.push(local);
		}
		else{
			disCasa('#',local);
		}
	}
	//Para cima
	for(var i = (parseInt(linha)-1); i>= 1; i--){
		var tab = tabuleiro.casa[i][coluna];
		var local = 'l'+i+'c'+coluna;
		if(tab!=''){
			if(tab.cor!=torre.cor){
				if(chek!=''){
					jogadas.push(local);
				}
				else{
					disCasa('#',local);
				}
			}
			break;
		}
		if(chek!=''){
			jogadas.push(local);
		}
		else{
			disCasa('#',local);
		}
	}
	//Para direita
	for(var i = (parseInt(coluna)+1); i<= 8; i++){
		var tab = tabuleiro.casa[linha][i];
		var local = 'l'+linha+'c'+i;
		if(tab!=''){
			if(tab.cor!=torre.cor){
				if(chek!=''){
					jogadas.push(local);
				}
				else{
					disCasa('#',local);
				}
			}
			break;
		}
		if(chek!=''){
			jogadas.push(local);
		}
		else{
			disCasa('#',local);
		}
	}
	//Para esquerda
	for(var i = (parseInt(coluna)-1); i>= 1; i--){
		var tab = tabuleiro.casa[linha][i];
		var local = 'l'+linha+'c'+i;
		if(tab!=''){
			if(tab.cor!=torre.cor){
				if(chek!=''){
					jogadas.push(local);
				}
				else{
					disCasa('#',local);
				}
			}
			break;
		}
		if(chek!=''){
			jogadas.push(local);
		}
		else{
			disCasa('#',local);
		}
	}
}  // Fim da função torre.

function cavalo(cavalo, chek=''){ // Inicio da função cavalo.
	// A cada jogada vai haver no maximo 8 possibilidades de jogada
	var p1, p2, p3, p4, p5, p6, p7, p8;
	//Verificar se existe tabuleiro para poder analisar a possibilidade
	var existeP1, existeP2, existeP3, existeP4, existeP5, existeP6, existeP7, existeP8;
	var cordenada = new Array();
	cordenada = cavalo.pA.split('');

	var linha, coluna ; // recebe a linha e coluna que o cavalo esta

	linha = cordenada[1];
	coluna = cordenada[3];

	if((parseInt(linha)>2)&&(parseInt(coluna)>1)){
		var vl = parseInt(linha) -2;
		var vc = parseInt(coluna) -1;
		existeP1 = 'l'+vl+'c'+vc;
		var tab = tabuleiro.casa[vl][vc];
		if( (tab=='') || (cavalo.cor!=tab.cor) ){
			p1 = existeP1;
			if(chek!=''){
				jogadas.push(p1);
			}
			else{
				disCasa('#',p1);
			}
		}
	}else{
		existeP1 = false;
	}

	if((parseInt(linha)>2)&&(parseInt(coluna)<8)){
		var vl = parseInt(linha) -2;
		var vc = parseInt(coluna) +1;
		existeP2 = 'l'+vl+'c'+vc;
		var tab = tabuleiro.casa[vl][vc];
		if( (tab=='') || (cavalo.cor!=tab.cor) ){
			p2 = existeP2;
			if(chek!=''){
				jogadas.push(p2);
			}
			else{
				disCasa('#',p2);
			}
		}		
	}else{
		existeP2 = false;
	}

	if((parseInt(linha)>1)&&(parseInt(coluna)>2)){
		var vl = parseInt(linha) -1;
		var vc = parseInt(coluna) -2;
		existeP3 = 'l'+vl+'c'+vc;
		var tab = tabuleiro.casa[vl][vc];
		if( (tab=='') || (cavalo.cor!=tab.cor) ){
			p3 = existeP3;
			if(chek!=''){
				jogadas.push(p3);
			}
			else{
				disCasa('#',p3);
			}
		}
	}else{
		existeP3 = false;
	}

	if((parseInt(linha)>1)&&(parseInt(coluna)<7)){
		var vl = parseInt(linha) -1;
		var vc = parseInt(coluna) +2;
		existeP4 = 'l'+vl+'c'+vc;
		var tab = tabuleiro.casa[vl][vc];
		if( (tab=='') || (cavalo.cor!=tab.cor) ){
			p4 = existeP4;
			if(chek!=''){
				jogadas.push(p4);
			}
			else{
				disCasa('#',p4);
			}
		}
	}else{
		existeP4 = false;
	}
	
	if((parseInt(linha)<8)&&(parseInt(coluna)>2)){
		var vl = parseInt(linha) +1;
		var vc = parseInt(coluna) -2;
		existeP5 = 'l'+vl+'c'+vc;
		var tab = tabuleiro.casa[vl][vc];
		if( (tab=='') || (cavalo.cor!=tab.cor) ){
			p5 = existeP5;
			if(chek!=''){
				jogadas.push(p5);
			}
			else{
				disCasa('#',p5);
			}
		}
	}else{
		existeP5 = false;
	}

	if((parseInt(linha)<8)&&(parseInt(coluna)<7)){
		var vl = parseInt(linha) +1;
		var vc = parseInt(coluna) +2;
		existeP6 = 'l'+vl+'c'+vc;
		var tab = tabuleiro.casa[vl][vc];
		if( (tab=='') || (cavalo.cor!=tab.cor) ){
			p6 = existeP6;
			if(chek!=''){
				jogadas.push(p6);
			}
			else{
				disCasa('#',p6);
			}
		}
	}else{
		existeP6 = false;
	}

	if((parseInt(linha)<7)&&(parseInt(coluna)>1)){
		var vl = parseInt(linha) +2;
		var vc = parseInt(coluna) -1;
		existeP7 = 'l'+vl+'c'+vc;
		var tab = tabuleiro.casa[vl][vc];
		if( (tab=='') || (cavalo.cor!=tab.cor) ){
			p7 = existeP7;
			if(chek!=''){
				jogadas.push(p7);
			}
			else{
				disCasa('#',p7);
			}
		}
	}else{
		existeP7 = false;
	}

	if((parseInt(linha)<7)&&(parseInt(coluna)<8)){
		var vl = parseInt(linha) +2;
		var vc = parseInt(coluna) +1;
		existeP8 = 'l'+vl+'c'+vc;
		var tab = tabuleiro.casa[vl][vc];
		if( (tab=='') || (cavalo.cor!=tab.cor) ){
			p8 = existeP8;
			if(chek!=''){
				jogadas.push(p8);
			}
			else{
				disCasa('#',p8);
			}
		}
	}else{
		existeP8 = false;
	}
} // Fim da função cavalo.

function bispo(bispo, chek=''){ // Inicio da função bispo.
	// A cada jogada pode se mover em até 4 direções diferentes.

	var cordenada = new Array();
	cordenada = bispo.pA.split('');

	var linha, coluna ; // recebe a linha e coluna que o bispo esta

	linha = cordenada[1];
	coluna = cordenada[3];

	//Para Baixo Direita
	vl = parseInt(coluna);
	for(var i = (parseInt(linha)+1); i<= 8; i++){
		vl+=1;
		if(vl<9){
			var tab = tabuleiro.casa[i][vl];
			var local = 'l'+i+'c'+vl;
			if(tab!=''){
				if(tab.cor!=bispo.cor){
					if(chek!=''){
						jogadas.push(local);
					}
					else{
						disCasa('#',local);
					}
				}
				break;
			}
			if(chek!=''){
				jogadas.push(local);
			}
			else{
				disCasa('#',local);
			}
		}
	}
	//Para Baixo Esquerda
	vl = parseInt(coluna);
	for(var i = (parseInt(linha)+1); i<= 8; i++){
		vl-=1;
		if(vl>0){
			var tab = tabuleiro.casa[i][vl];
			var local = 'l'+i+'c'+vl;
			if(tab!=''){
				if(tab.cor!=bispo.cor){
					if(chek!=''){
						jogadas.push(local);
					}
					else{
						disCasa('#',local);
					}
				}
				break;
			}
			if(chek!=''){
				jogadas.push(local);
			}
			else{
				disCasa('#',local);
			}
		}
	}

	//Para Cima Direita
	vl = parseInt(coluna);
	for(var i = (parseInt(linha)-1); i>= 1; i--){
		vl+=1;
		if(vl<9){
			var tab = tabuleiro.casa[i][vl];
			var local = 'l'+i+'c'+vl;
			if(tab!=''){
				if(tab.cor!=bispo.cor){
					if(chek!=''){
						jogadas.push(local);
					}
					else{
						disCasa('#',local);
					}
				}
				break;
			}
			if(chek!=''){
				jogadas.push(local);
			}
			else{
				disCasa('#',local);
			}
		}
	}
	//Para Cima Esquerda
	vl = parseInt(coluna);
	for(var i = (parseInt(linha)-1); i>= 1; i--){
		vl-=1;
		if(vl>0){
			var tab = tabuleiro.casa[i][vl];
			var local = 'l'+i+'c'+vl;
			if(tab!=''){
				if(tab.cor!=bispo.cor){
					if(chek!=''){
						jogadas.push(local);
					}
					else{
						disCasa('#',local);
					}
				}
				break;
			}
			if(chek!=''){
				jogadas.push(local);
			}
			else{
				disCasa('#',local);
			}
		}
	}

} // Fim da função bispo.

function rainha(rainha, chek=''){ // Inicio da função rainha.
	torre(rainha, chek);
	bispo(rainha, chek);
} // Fim da função rainha.

function rei(rei, chek=''){ // Inicio da função rei.
	// A cada jogada pode se mover em até 4 direções diferentes.

	var cordenada = new Array();
	cordenada = rei.pA.split('');

	var linha, coluna ; // recebe a linha e coluna que a torre esta

	linha = cordenada[1];
	coluna = cordenada[3];

	var baixoL = parseInt(linha)+1;
	var cimaL = parseInt(linha)-1;
	var esquerdaColunaEsq = parseInt(coluna)-1;
	var direitaColunaDir = parseInt(coluna)+1;

	if(baixoL<9){
		var baixo = 'l'+baixoL+'c'+coluna
		var tab = tabuleiro.casa[baixoL][coluna];
		if(tab==''||tab.cor!=rei.cor){
			if(chek!=''){
				jogadas.push(baixo);
			}
			else{
				disCasa('#',baixo);
			}
		}
	}
	if(cimaL>0){
		var cima = 'l'+cimaL+'c'+coluna
		var tab = tabuleiro.casa[cimaL][coluna];
		if(tab==''||tab.cor!=rei.cor){
			if(chek!=''){
				jogadas.push(cima);
			}
			else{
				disCasa('#',cima);
			}
		}
	}
	if(direitaColunaDir<9){
		var direita = 'l'+linha+'c'+direitaColunaDir
		var tab = tabuleiro.casa[linha][direitaColunaDir];
		if(tab==''||tab.cor!=rei.cor){
			if(chek!=''){
				jogadas.push(direita);
			}
			else{
				disCasa('#',direita);
			}
		}
	}
	if(esquerdaColunaEsq>0){
		var esquerda = 'l'+linha+'c'+esquerdaColunaEsq
		var tab = tabuleiro.casa[linha][esquerdaColunaEsq];
		if(tab==''||tab.cor!=rei.cor){
			if(chek!=''){
				jogadas.push(esquerda);
			}
			else{
				disCasa('#',esquerda);
			}
		}
	}
	if( (direitaColunaDir<9&&cimaL>0) ){
		var diagonalCimaDir = 'l'+cimaL+'c'+direitaColunaDir;
		var tab = tabuleiro.casa[cimaL][direitaColunaDir];
		if(tab==''||tab.cor!=rei.cor){
			if(chek!=''){
				jogadas.push(diagonalCimaDir);
			}
			else{
				disCasa('#',diagonalCimaDir);
			}
		}
	}
	if( (esquerdaColunaEsq>0&&cimaL>0) ){
		var diagonalCimaEsq = 'l'+cimaL+'c'+esquerdaColunaEsq;
		var tab = tabuleiro.casa[cimaL][esquerdaColunaEsq];
		if(tab==''||tab.cor!=rei.cor){
			if(chek!=''){
				jogadas.push(diagonalCimaEsq);
			}
			else{
				disCasa('#',diagonalCimaEsq);
			}
		}
	}
	if( (direitaColunaDir<9&&baixoL<9) ){
		var diagonalBaixoDir = 'l'+baixoL+'c'+direitaColunaDir;
		var tab = tabuleiro.casa[baixoL][direitaColunaDir];
		if(tab==''||tab.cor!=rei.cor){
			if(chek!=''){
				jogadas.push(diagonalBaixoDir);
			}
			else{
				disCasa('#',diagonalBaixoDir);
			}
		}
	}
	if( (esquerdaColunaEsq>0&&baixoL<9) ){
		var diagonalBaixoEsq = 'l'+baixoL+'c'+esquerdaColunaEsq;
		var tab = tabuleiro.casa[baixoL][esquerdaColunaEsq];
		if(tab==''||tab.cor!=rei.cor){
			if(chek!=''){
				jogadas.push(diagonalBaixoEsq);
			}
			else{
				disCasa('#',diagonalBaixoEsq);
			}
		}
	}
} // Fim da função rei.

function peao(peao, chek=''){ // Inicio da função peao.
	var cordenada = new Array();
	cordenada = peao.pA.split('');
	preta = peao.letra=='p'?true:false; 
	var linha, coluna ; // recebe a linha e coluna que o peao esta
	var frente; // recebe a cordenada da casa da frente do peao
	var esquerda; // recebe a cordenada da casa da diagonal esquerda do peao
	var direita; // recebe a cordenada da casa da diagonal direita do peao
	var lf,lff; // recebe linha da frente e a segunda linha frente
	var dd, de; // recebe diagonal direita e esquerda
	var conFrente, conFrenteF; // recebe o conteudo da casa da frente e da segunda a casa frente
	var conDireita; // recebe o conteudo da diagonal a direita
	var conEsquerda; // rece o conteudo da diagonal a esquerda
	var corPeca;
	var iniFrente; //recebe true se na casa da frente a inimigo
	var iniFrenteF; //recebe true se na segunda casa da frente a inimigo
	var IniDireita; //recebe true se na casa da diagonal direita a inimigo
	var iniEsquerda; //recebe true se na casa da diagonal esquerda a inimigo

	linha = cordenada[1];
	coluna = cordenada[3];
	
	dd = coluna=='8'?'':parseInt(coluna)+1;
	de = coluna=='1'?'':parseInt(coluna)-1;

	if(preta){
		lf = parseInt(linha)+1;
		lff = linha=='2'?lf+1:'';
		corPeca = 'b';
	}
	else{
		lf = parseInt(linha)-1;
		lff = linha=='7'?lf-1:'';
		corPeca = 'w';
	}

	frente = 'l'+lf+'c'+coluna;
	direita = dd==''?'inexistente':'l'+lf+'c'+dd;
	esquerda = de==''?'inexistente':'l'+lf+'c'+de;
	frenteP = lff==''?'':'l'+lff+'c'+coluna;

	conFrente = tabuleiro.casa[lf][coluna];
	conFrenteF = frenteP!=''?tabuleiro.casa[lff][coluna]:'';
	conDireita = tabuleiro.casa[lf][dd];
	conEsquerda = tabuleiro.casa[lf][de];
	if(conFrente!=''){
		iniFrente = conFrente.cor==corPeca?false:true;		
	}else{
		iniFrente = false;
	}
	if(conFrenteF!=''){
		iniFrenteF = conFrenteF.cor==corPeca?false:true;
	}else{
		iniFrenteF = false;
	}
	if(conDireita!=''&&direita!='inexistente'){
		IniDireita = conDireita.cor==corPeca?false:true;
	}else{
		IniDireita = false;
	}
	if(conEsquerda!=''&&esquerda!='inexistente'){
		iniEsquerda = conEsquerda.cor==corPeca?false:true;
	}else{
		iniEsquerda = false;
	}
	if(conFrente==''||!iniFrente){
		if(chek!=''){
			jogadas.push(frente);
		}
		else{
			disCasa('#',frente);
		}
		if( (conFrenteF==''&&frenteP!='') || (!iniFrenteF&&frenteP!='') ){
			if(chek!=''){
				jogadas.push(frenteP);
			}
			else{
				disCasa('#',frenteP);
			}
		}
	}
	if( !(esquerda=='inexistente') || !(direita=='inexistente') ){
		//Se existir tabuleiro a esquerda ou direita
		if( !(esquerda=='inexistente') && !(direita=='inexistente')){
			//Se existir tabuleiro a esquerda e direita
			if( iniEsquerda || IniDireita ){
				//Se existir inimigo possivel a esquerda ou direita
				if( iniEsquerda && IniDireita ){
					//Se existir inimigo possivel a esquerda e direita
					if(chek!=''){
						jogadas.push(esquerda);
						jogadas.push(direita);
					}
					else{
						disCasa('#',esquerda);
						disCasa('#',direita);
					}
				}
				else if(iniEsquerda){
					//Se existir inimigo a esquerda
					if(chek!=''){
						jogadas.push(esquerda);
					}
					else{
						disCasa('#',esquerda);
					}
				}
				else{
					//Se exitir inimigo a direita
					if(chek!=''){
						jogadas.push(direita);
					}
					else{
						disCasa('#',direita);
					}
				}
			}
		}
		else if( !(esquerda=='inexistente') ){
			//Se exitir tabuleiro só a esquerda.
			if(iniEsquerda){
				//Se existir inimigo a esquerda
				if(chek!=''){
						jogadas.push(esquerda);
					}
				else{
					disCasa('#',esquerda);
				}
			}
		}
		else{
			//Se exitir tabuleiro só a direita
			if(IniDireita){
				//Se exitir inimigo a direita
				if(chek!=''){
					jogadas.push(direita);
				}
				else{
					disCasa('#',direita);
				}
			}
		}
	}
} // Fim da função peao.

