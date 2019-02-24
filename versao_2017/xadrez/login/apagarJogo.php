<?php 
    //include_once 'operacoesBD/funcoes.php';
    include_once 'Jogador.php';    
    session_start();
    $id = $_SESSION['idJogo'];
    $retornaJson = false;
    conectar();
    $sql="DELETE FROM Jogo WHERE id={$id}";
    if ($con->query($sql)){
        $sql="DELETE FROM Jogadas WHERE idJogo={$id}";
        if ($con->query($sql)){
          unset($_SESSION['idJogo']);
          $retornaJson = true;
          unset($_SESSION['novo']);
        }
    }
    desconectar();
    print_r(json_encode($retornaJson));
?>