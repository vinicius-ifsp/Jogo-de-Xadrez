<?php 
    // include_once 'operacoesBD/funcoes.php';
    include_once 'Jogador.php';    
    session_start();
    
    $idJog1 = $_SESSION['jog1']->getId();
    $idJog2 = $_SESSION['jog2']->getId();
    $retornaJson = array();
    conectar();
    $sql="SELECT * FROM Jogo WHERE idJog1={$idJog1} and idJog2={$idJog2}";
    $result = $con->query($sql);
    if($result->num_rows > 0){
        if($row= mysqli_fetch_array($result)){
            $id = $row['id'];
            $data = $row['data'];
            array_push($retornaJson, $id);
            array_push($retornaJson, $data);
            $_SESSION['idJogo']=$id;
            
        }
    }
    else{
      $retornaJson = false;
    }
    desconectar();
    print_r(json_encode($retornaJson));
    // json_encode($retornaJson,JSON_FORCE_OBJECT);
?>