<?php
global $con;
function conectar(){
	global $con;
	$con = mysqli_connect ( "localhost", "admin", "admin1234") or die("Não é possivel se conectar ao banco");
	if(!mysqli_connect_errno()){
		$sql="CREATE DATABASE if not exists xadrez";
		$con->query($sql);
		mysqli_select_db($con, "xadrez") or die();
		return true;
	}
	return "Erro ao se Conectar.";
}

function desconectar(){
	global $con;
	mysqli_close ( $con );
}

function criarTabelas(){
	global $con;
	conectar();
	$tabelas = array(2);
	for($i=0; $i<3; $i++){
		if($i==0){
			$tabelas[$i] = "CREATE TABLE IF NOT EXISTS Jogador(id int, nome varchar(128), email varchar(128), senha varchar(128), PRIMARY KEY(id));";
		} else if($i==1){
			$tabelas[$i] = "CREATE TABLE IF NOT EXISTS Jogo(id int, idJog1 int, idJog2 int, data varchar(64), PRIMARY KEY(id));";
		} else{
			$tabelas[$i] = "CREATE TABLE IF NOT EXISTS Jogadas(strJogada varchar(128), idJogo int, PRIMARY KEY(idJogo));";
		}
	}
	foreach ($tabelas as $indice => $valor) {
		$con->query($valor);
	}
	unset($tabelas);
	// session_start();
	$_SESSION['tabelas']=true;
	desconectar();
}

function ultimoId($tabela){
	global $con;
	$ultimoId = 0;
	conectar();
	$sql = "SELECT Max(id) FROM {$tabela}";
	
	$result = $con->query($sql);
	while($resultados = mysqli_fetch_array($result)){
		if($resultados['Max(id)']!=''){
			$ultimoId = $resultados['Max(id)'];
		}
	}
	desconectar();
	return $ultimoId;
}
?>