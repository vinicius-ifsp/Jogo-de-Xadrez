<?php 
	$decideCor=0; //essa variavel vai ser usada para decidir qual a cor de cada casa do tabuleiro.
	for ($i=1; $i <= 8; $i++) { // Este for é responsavel por fazer as casas da vertical.
		for ($j=1; $j <= 8; $j++) { // Este for é responsavel por fazer as casas da horizontal. 
			$valorLeft=100*($j-1); // Variavel responsavel por saber quanto px se distanciar para esquerda.
			$valorTop=100*($i-1); // Variavel responsavel por saber quanto px se descer do topo.
				if($decideCor%2==0) // se a variavel $decideCor tiver valor par a cor é preta.
					$cor="background-color: #B18753;"; // cor preta			
				else
					$cor="background-color: #FFFFE8;"; // cor branca
					if ($i==1&&$j==1) // Faz o 1° Quadrado
						echo "<div  class='posicionaCasa' style='left: ".$valorLeft."px; ".$cor."' id='l".$i."c".$j."' onclick='casaInds()'><img src='' id='posicaol".$i."c".$j."' style='position: absolute; top: 25px; left: 25px;'></div>";
					else if ($i==1&&$j<9) // Faz o 7° Quadrados restante da primeira fileira
							echo "<div  class='posicionaCasa' style='left: ".$valorLeft."px; ".$cor."' id='l".$i."c".$j."' onclick='casaInds()'><img src='' id='posicaol".$i."c".$j."' style='position: absolute; top: 25px; left: 25px;'></div>";
					else // Faz todos os outros quadrados
						echo "<div  class='posicionaCasa' style='left: ".$valorLeft."px; top: ".$valorTop."px; ".$cor."' id='l".$i."c".$j."' onclick='casaInds()'><img src='' id='posicaol".$i."c".$j."' style='position: absolute; top: 25px; left: 25px;'></div>";
						$decideCor++;
		}
		$decideCor++;
	}
?>