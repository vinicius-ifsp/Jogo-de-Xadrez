<?php
    session_start();
    if(!isset($_SESSION['msgCadastrar'])){
        $_SESSION['msgCadastrar']=' ';
    }
    
    $msg = $_SESSION['msgCadastrar'];
    unset($_SESSION['msgCadastrar']);

    if(isset($_SESSION['jogadores'])){
      if($_SESSION['jogadores']==1){
        unset($_SESSION['jog1']);
        $_SESSION['jogadores']=0;
      }else{
        unset($_SESSION['jogadores']); 
      }
    }
    if(isset($_SESSION['mensagem'])){
        unset($_SESSION['mensagem']);
    }
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Cadastrar</title>
  <!-- Define a viewport -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Adicionar CSS Bootstrap -->
  <link rel="stylesheet" type="text/css" href="../bootstrap-3/css/bootstrap.min.css">
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
        padding: 30px;
    }
    .icoCad{
      padding-left: 105px;
    }
  </style>
</head>
<body>
    <div class="container">
        <div class="col-md-4 col-md-offset-4">
            <form class="form-signin formCad" action="cadJogador.php" method="post">
              <i class="fa fa-5x fa-user-plus text-primary sr-icons icoCad"></i>
                <h2 class="form-signin-heading text-center">Cadastre-se</h2>
                <?php echo $msg; ?>
               <input type="text" name="nome" class="form-control " placeholder="Nome" required autofocus><br>

                <input type="email" name="email" class="form-control" placeholder="Email" required autofocus><br>
                
                <input type="password"  name="senha" class="form-control" placeholder="Password" required><br>
                
                <button class="btn btn-lg btn-primary btn-block" type="submit">Cadastrar</button>
                
                <div class="row text-center" style="margin-top: 20px;"> 
                    Lembrou? <a href="login.php">Clique aqui</a> para logar
                </div>
          </form>
        </div>
    </div> <!-- /container -->

</body>
</html>



