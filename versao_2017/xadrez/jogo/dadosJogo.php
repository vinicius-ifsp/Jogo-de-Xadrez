<?php 
	include '../login/Jogador.php';
	function novo(){
		global  $con;
		$id = ultimoId('Jogo')+1;
		$idJog1 = $_SESSION['jog1']->getId();
		$idJog2 = $_SESSION['jog2']->getId();
		$data = date('d/m/Y');
		$sql = "INSERT INTO Jogo(id, idJog1, idJog2, data) VALUES ({$id}, {$idJog1}, {$idJog2},'{$data}')";
		conectar();
		if (! $con->query($sql)){
		 	echo "Erro primeiro Sql<br>";
		 	return false;
		}
		$_SESSION['idJogo']=$id;
		$strJogada = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR b';
		$sql = "INSERT INTO Jogadas( strJogada, idJogo) VALUES ('{$strJogada}', {$id})";
		//echo $sql."<br>";
		if (! $con->query($sql)){
			echo "Erro segundo Sql<br>";
			return false;
		}
		desconectar();
		$_SESSION['novo']=true;
		return true;
	}
?>