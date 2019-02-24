<?php 
	$strJogada = $_POST['jogadas']; // Atribui a jogadas a string que foi passada.
	// include '../login/operacoesBD/funcoes.php';
	include '../login/Jogador.php';
	session_start();
	$idJogo = $_SESSION['idJogo'];
	$sql = "UPDATE Jogadas SET strJogada='{$strJogada}' WHERE idJogo={$idJogo}";
	conectar();
	if (! $con->query($sql)){ // Se retorna false
			$msg = 'Erro ao salvar jogada!';
	}
	else{ // Se deu certo
		$msg = 'Jogada salva com sucesso!';
	}
	desconectar();

	echo $msg; // Retorna a mensagem.
?>