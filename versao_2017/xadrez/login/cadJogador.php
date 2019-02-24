<?php 
	include_once 'Jogador.php';
	session_start();
	$nome = $_POST['nome'];
	$email = $_POST['email'];
	$senha = $_POST['senha'];
	$jogador= new Jogador($nome, $email, $senha);
	if($jogador->validarEmail()){
		if($jogador->cadastrar()){
			$_SESSION['msgCadastrar']="<div class='alert alert-success'>Jogador Cadastrado,<a href='login.php'>clique aqui</a> para logar</div>";
		}
	}else{
		$_SESSION['msgCadastrar']="<div class='alert alert-danger'>Email Já Cadastrado!</div>";
	}
	header('location: cadastrar.php');
?>