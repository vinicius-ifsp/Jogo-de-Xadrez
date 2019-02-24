<?php
	include_once 'dadosJogo.php';
	echo "<a href='../login/sair.php'>sair</a>";
	session_start();
	if(isset($_SESSION['jog1']) && isset($_SESSION['jog2'])){
		$jog1 = $_SESSION['jog1'];
		$jog2 = $_SESSION['jog2'];

		if( (!isset($_SESSION['idJogo']) )&&(!isset($_SESSION['novo'])) ){
			if(!novo()){
				echo "<script>alert('Erro index.php->novo!')</script>";
			}
		}
	}else{
		header('location: ../login/login.php');
	}
?>
<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="css/estilo.css">
		<script src='js/jquery-3.2.1.js'></script>
		<script src='js/classTabuleiro.js'></script>
		<script src='js/classPeca.js'></script>
		<script src='js/salvaJogadas.js'></script>
		<script src='js/oprPeca.js'></script>
		<script src='js/buscaJogo.js'></script>
		<script src='js/movimentacao.js'></script>
		<script src='js/movimentos.js'></script>
		<!-- <script src='js/salvaJogadas.js'></script> -->
		<script src='js/js.js'></script>

		<title>Xadrez</title>
	</head>
	<body>
		<div id="informacoes"></div>
		<div id="fundoTab">
			<?php include 'tabHtml.php'; ?>
		</div>
		<div id="rodape">Desenvolvido por Vinícius Luiz da Silva</div>
	</body>
</html>