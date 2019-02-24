<?php 
	include '../login/Jogador.php';
	session_start();
	$retornaJson = array();	
	$id=$_SESSION['idJogo'];
	conectar();

	$sql = "SELECT * FROM Jogadas WHERE idJogo = {$id} "; // Cria a instrução.
	$result = $con->query($sql);
	
	if($result->num_rows > 0){
		while($row= mysqli_fetch_array($result)) {
			$string = $row['strJogada'];
			array_push($retornaJson, $string);
		}
	}
	else{
		array_push($retornaJson, '');
	}
	desconectar();

	print_r(json_encode($retornaJson)); // Retorna a string.
?>