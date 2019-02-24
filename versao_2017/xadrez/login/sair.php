<?php
	include 'Jogador.php';

	//$local = "http://localhost/xadrez/login/tipoJogo.php";
	//$local = "http://localhost/projects/xadrez/versao_2017/xadrez/login/tipoJogo.php";
	session_start();
	session_destroy();
	/*if(isset($_SERVER['HTTP_REFERER'])){
		$url= $_SERVER['HTTP_REFERER'];
		if($url==$local){
			// unset($_SESSION['jog1']);
			// unset($_SESSION['jog2']);
			// unset($_SESSION['jogadores']);
			// unset($_SESSION['mensagem']);
			session_destroy();
		}
	}*/
	header('location: ../index.html');
?>