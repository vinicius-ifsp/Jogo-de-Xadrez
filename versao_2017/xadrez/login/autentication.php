<?php
	//Inicialmente verefica se o arquivo foi requisitado via post.
	if( (isset($_POST['email']) )&&( isset($_POST['senha']) ) ){
		$email = $_POST['email'];
		$senha = $_POST['senha'];

		include_once 'Jogador.php';
		session_start();
		$entrou=false;
		if(isset($_SESSION['jog1'])){ // Caso digite o mesmo email do primeiro jogador
			$jog1Email = $_SESSION['jog1']->getEmail();
			if($jog1Email==$email){
				$_SESSION['mensagem']='<div class="alert alert-danger">Entre com outro Jogador!</div>';
				$entrou=true;
				header('location: login.php');
			}
		}
		if (!$entrou){
			include_once 'operacoesBD/funcoes.php';
			conectar();
			$sql="SELECT * FROM Jogador WHERE email='{$email}' and senha='{$senha}'";
			$result = $con->query($sql);
			if($result->num_rows > 0){
				if($row= mysqli_fetch_array($result)){
					//Se email e senha estiverem corretos.
					$nome = $row['nome'];
					$id = $row['id'];
					$jogador= new Jogador($nome,$email,$senha);
					$jogador->setId($id);
					
					if($_SESSION['jogadores']<1){
						$nj='jog1';
					}else{
						$nj='jog2';
					}
					$_SESSION['jogadores']+=1;
					$_SESSION[$nj] = $jogador;
					$_SESSION['mensagem']='<div class="alert alert-success">Faça login com o Segundo Jogador</div>';
					header("location: login.php");
				}
			}else{
				//Se email ou senha incorreta.
				$_SESSION['mensagem']='<div class="alert alert-danger">Jogador não encontrado. Verifique os campos!</div>';
				header("location: login.php");
			}
			desconectar();
		}
	}
	//Caso digite o endereço na url
	else{
		header('location: login.php');
	}

?>
