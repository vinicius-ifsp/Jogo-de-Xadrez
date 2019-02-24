function Peca(letra,pI,cor){
	//this.letra = letra ; // Letra da peça
	this.pI = pI; //pI = Posição Inicial
	this.pA = pI; //pA = Posição Atual
	this.img = 'img/'+letra+'.png';
	this.letra = letra.charAt(0);
	this.cor = cor;
}