<?php 
    include_once 'operacoesBD/funcoes.php';
    session_start();
	if(!isset($_SESSION['tabelas'])){
        criarTabelas();
    }
    if(!isset($_SESSION['jogadores'])){
        $_SESSION['jogadores']=0;
    }
    if($_SESSION['jogadores']==2){
        header('location: tipoJogo.php');
    }

    if(!isset($_SESSION['mensagem'])){
        $_SESSION['mensagem'] = "<div class='alert alert-success'>Faça login com o Primeiro Jogador</div>";
    }
    $msg = $_SESSION['mensagem'];
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Login</title>
  <!-- Define a viewport -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Adicionar CSS Bootstrap -->
  <link rel="stylesheet" type="text/css" href="../bootstrap-3/css/bootstrap.min.css">
  <!-- Adicionar Link Icones -->
  <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
  <style>
    body{
        /*background: #2980b9;*/
        background-image: url('../img/login.jpg');
        background-repeat: no-repeat;
    }
    .formCad{
        background: #ffffff;
        margin-top: 100px;
        padding: 40px;
        box-shadow: 0 0 15px -2px rgba(0,0,0,.7);
    }
    .icoUser{
        padding-left: 100px;
    }
  </style>
</head>
<body>
    <div class="container">
        <div class="col-md-4 col-md-offset-4" >
            <form class="form-signin formCad" method="post" action="autentication.php">
                <i class="fa fa-5x fa-user-circle text-primary sr-icons icoUser"></i>
                <h2 class="form-signin-heading text-center">Entrar</h2>
                <?php echo $msg; ?>

                <input type="email" name="email" class="form-control" placeholder="Email" required autofocus><br>
                
                <input type="password"  name="senha" class="form-control" placeholder="Password" required><br>
                
                <button class="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
                
                <div class="row text-center" style="margin-top: 20px;"> 
                    Lembrou? <a href="cadastrar.php">Clique aqui</a> para se cadastar
                </div>
          </form>
        </div>
    </div> <!-- /container -->
</body>
</html>



