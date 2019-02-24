<?php 
    // include_once 'operacoesBD/funcoes.php';
    include_once 'Jogador.php';    
    session_start();
    $id = $_POST['id'];
    if($id==1){
        $id=$_SESSION['jog1']->getId();
        $_SESSION['idEdit'] = 'jog1';
    }else{
        $id=$_SESSION['jog2']->getId();
        $_SESSION['idEdit'] = 'jog2';
    }
    $retornaJson = array();
    conectar();
    $sql="SELECT * FROM Jogador WHERE id={$id}";
    $result = $con->query($sql);
    if($result->num_rows > 0){
        if($row= mysqli_fetch_array($result)){
            $nome = $row['nome'];
            $email = $row['email'];
            array_push($retornaJson, $nome);
            array_push($retornaJson, $email);
        }
    }
    else{
      $retornaJson = "0";
      unset($_SESSION['idEdit']);
    }
    desconectar();
    print_r(json_encode($retornaJson));
?>