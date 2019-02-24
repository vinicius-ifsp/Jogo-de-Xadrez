function buscaJogo(){
	id=0;
	$.post('buscaJogo.php',{id: id}, function(data){
		str = $.parseJSON(data); // Tranforma em um objeto Json.
		str = str.toString(); // Transforma o objeto Json em uma string.
		str = str.split(''); // Transforma a string em um Array.
		posiciona(str); // Chama a função para posicionar as peças.
	});
}

function posiciona(str){
	var p; // Declara variavel que vai receber valor de cada indice da str.
	var linha = 1; // Inicializa a linha com o valor 1.
	var coluna = 1; // Inicializa a coluna com o valor 1.
	var pecasPegas = new Array(); // Cria o Array que recebera as peças pegas.
	for(z in listaPecas){
		pecasPegas[z] = '-'; // Esvazia o Array.
	}
	for(var l = 0; l<str.length-2;l++){
	// Percorre a string do jogo.
		p = str[l];
		if((p=='1')||(p=='2')||(p=='3')||(p=='4')||(p=='5')||(p=='6')||(p=='7')||(p=='8')||(p=='/')){
		// Se não tem peça.
			if(p!='/'){
			// Se é casa vazia.	
				var x = parseInt(p);
				for(var y = 1; y<=x; y++){
					tabuleiro.casa[linha][y] = "";
					coluna++;
				}
			} 
			else {
			// Se chegou na ultima coluna.	
				coluna = 1;
				linha++;
			}
		}
		else{
		// Se é uma peça.
			var local = 'l'+linha+'c'+coluna;
			for (i in listaPecas){
			// Percorre tabuleiro.
				if( (p==listaPecas[i].letra) && (pecasPegas[i]=='-') ){
				// Se tem mesma letra e ainda não está na lista de peças pegas.
					pecasPegas[i] = p; // Adiciona a peça ao Array de peças pegas.
					listaPecas[i].pA = local; // Altera a posição Atual da peça da lista.
					break;
				}
			}
			coluna++; // Após colocar a peça andasse uma coluna.
		}
	}
	// Após organizar as posições Atuais das peças da lista.
	posicionaInicio(); // Posiciona as peças.
	var strAnd = str[ ( (str.length)-1 ) ]
	decideVez(strAnd); // Chama função que decide a vez de qual cor de peça joga.
}
