function Tabuleiro(){
	this.casa = new Array ( // Cria a matriz do tabuleiro.
		new Array(9),
		new Array(9),
		new Array(9),
		new Array(9),
		new Array(9),
		new Array(9),
		new Array(9),
		new Array(9),
		new Array(9),
		new Array(9));

	this.casasVazia = function(){ // Deixa todas as casas vazias.
		for (var i = 1; i < 9; i++) {
			for(var j = 1 ; j < 9; j++){
				this.casa[i][j]="";
				local='#l'+i+'c'+j;
				$(local).attr('src', '');		
			}
		}
	}
	this.posicionaPeca = function(p,destino){ // Posiciona peça.
		var cordenada1 = new Array(); // Cria o array que vai receber a cordenada.
		cordenada1 = p.pA.split(''); // Adiciona a cordenada ao array.
		this.casa[cordenada1[1]][cordenada1[3]] = ""; // Deixa o local onde a peça esta vazio.
		$('#posicao'+p.pA).attr('src', ''); // Remove a img onde a peça esta.
		
		var cordenada2 = new Array(); // Cria o array que vai receber a cordenada de destino.
		cordenada2 = destino.split(''); // Adiciona a cordenada de destino ao Array.

		if(this.casa[cordenada2[1]][cordenada2[3]]!=''){ // Se no local de destino tem algo
			var rei = this.casa[cordenada2[1]][cordenada2[3]].letra;
			if(rei=='k'||rei=='K'){ // Se tem rei.
				if(rei=='k'){ // Se o rei é branco.
					return "Xequemate. O branco venceu!";
				}else{ // Se o rei é preto.
					return "Xequemate. O preto venceu!";
				}
			}
			this.casa[cordenada2[1]][cordenada2[3]]=''; // Deixa o local de destino vazio.
			$('#posicao'+destino).attr('src', ''); // Deixa o local de destino sem img.
			excluirPeca(destino); // Chama a função que exclui a peça que estava no destino.
		}
		p.pA=destino; // A posição atual da peça agora recebe o local de destino.

		this.casa[cordenada2[1]][cordenada2[3]] = p; // O local de destino recebe a peça.
		$('#posicao'+destino).attr('src', p.img); // O local de destino recebe a img da peça.

		return true; // Retorna verdadeiro, significando que o movimento foi concluido.
	}
	this.verificaCasa = function(posicao){
		var cordenada = new Array(); // Cria o array que vai receber a coordenada da posição.
		cordenada = posicao.split(''); // Adiciona a cordenada ao Array.
		var conteudo = this.casa[cordenada[1]][cordenada[3]]; // conteudo do tabuleiro na posição.
		if(conteudo=="")
			return ""; // Retorna vazio se não encontrar peça.
		return conteudo; // Retorna a peça encontrada.
	}
	this.imprime = function(){
	//Função que imprime a matriz do tabuleiro.
		//console.clear() //Limpa o console.
		var cont ;
		var string ;
		for (var i = 1; i < 9; i++) {
			cont = 0;
			string='';
			for(var j = 1 ; j < 9; j++){
				cont+=1
				if(this.casa[i][j]!=''){
					string+='|'+this.casa[i][j].letra+'|';
				}else{
					//console.log('%'+this.casa[i][j].letra+'%');
					string+=('%l'+[i]+'j'+[j]+'%----'+cont+'------');
				}
			}
			console.log(string);
			//console.log('/\n');
		}
	}
}
