<?php 
	include_once 'operacoesBD/funcoes.php';
	class Jogador{
		private $nome;
		private $email;
		private $senha;
		private $id;

		function Jogador($nome, $email, $senha){
			$this->nome=$nome;
			$this->email=$email;
			$this->senha=$senha;
		}
		function getNome(){
			return $this->nome;
		}
		function setNome($n){
			$this->nome=$n;
		}
		function getEmail(){
			return $this->email;
		}
		function setEmail($e){
			$this->email=$e;
		}
		function getSenha(){
			return $this->senha;
		}
		function setSenha($s){
			$this->senha=$s;
		}
		function getId(){
			return $this->id;
		}
		function setId($novoId){
			$this->id=$novoId;
		}
		function cadastrar(){
			$this->id=ultimoId('Jogador')+1;
			conectar();
			global $con;
			$sql = "INSERT INTO Jogador(id, nome, email, senha) VALUES ('{$this->id}', '{$this->nome}','{$this->email}','{$this->senha}');";
			if (! $con->query($sql)){
				$msg = false;
			}else{
				$msg = true;
			}
			desconectar();
			return $msg;
		}
		function validarEmail(){
			conectar();
			global $con;
			$sql="SELECT * FROM Jogador WHERE email='{$this->email}'";
			$result = $con->query($sql);
			if($result->num_rows > 0){
				return false;
			}
			desconectar();
			return true;
		}
	}

?>