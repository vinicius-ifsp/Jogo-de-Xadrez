function criaStrTab() {
	valCampos = new Array();
	//tabuleiro.imprime();
	for (var i = 1; i < 9; i++) {
		var cont = 0;
		for (var j = 1; j < 9; j++) {
			var tab = tabuleiro.casa[i][j];
			if (tab != '') {
				if (tab.letra == 'r' || tab.letra == 'R') { // Torre
					if (tab.letra == 'r') {
						valCampos.push('r');
					} else {
						valCampos.push('R');
					}
				} else if (tab.letra == 'n' || tab.letra == 'N') { // Cavalo
					if (tab.letra == 'n') {
						valCampos.push('n');
					} else {
						valCampos.push('N');
					}
				} else if (tab.letra == 'b' || tab.letra == 'B') { // Bispo
					if (tab.letra == 'b') {
						valCampos.push('b');
					} else {
						valCampos.push('B');
					}
				} else if (tab.letra == 'q' || tab.letra == 'Q') { // Rainha
					if (tab.letra == 'q') {
						valCampos.push('q');
					} else {
						valCampos.push('Q');
					}
				} else if (tab.letra == 'k' || tab.letra == 'K') { // Rei
					if (tab.letra == 'k') {
						valCampos.push('k');
					} else {
						valCampos.push('K');
					}
				} else if (tab.letra == 'p' || tab.letra == 'P') { // Peão
					if (tab.letra == 'p') {
						valCampos.push('p');
					} else {
						valCampos.push('P');
					}
				}
			} else { // Vazio
				cont += 1;
				var vetAnd = valCampos[((valCampos.length) - 1)];
				if (vetAnd == cont) {
					valCampos[((valCampos.length) - 1)] = (cont + 1);
				} else {
					valCampos.push(1);
					cont = 0;
				}
			}
		}
		if (i < 8) {
			valCampos.push('/');
		}
	}
	salvaTab(valCampos);
}

function salvaTab(vetStr) {
	var tab = '';
	for (i in vetStr) {
		tab += vetStr[i];
	}
	tab += ' ' + vez;
	//alert(tab);
	$.post('salvaJogada.php', {
		jogadas: tab
	}, function (resp) {
		//alert(resp);
	})

}