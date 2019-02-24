<?php 
  include_once 'operacoesBD/funcoes.php';
  include_once 'Jogador.php';
  $retornaJson = array();    
  session_start();  
  $idEdit = $_SESSION['idEdit'];
  $id = $_SESSION[$idEdit]->getId();
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $sql = "UPDATE Jogador SET nome='{$nome}', email='{$email}' WHERE id={$id}";
  conectar();
  if($con->query($sql)){
    $_SESSION[$idEdit]->setNome($nome);
    $_SESSION[$idEdit]->setEmail($email);
    $msg = "Dados alterados";
    array_push($retornaJson, $msg);
    array_push($retornaJson, $idEdit);
  }else{
    $retornaJson = false;
  }
  desconectar();
  unset($_SESSION['idEdit']);
  print_r(json_encode($retornaJson));
?>