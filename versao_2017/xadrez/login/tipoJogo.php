<?php
	include_once 'Jogador.php';
	session_start();
	if(isset($_SESSION['jog1']) && isset($_SESSION['jog2'])){
		$jog1 = $_SESSION['jog1'];
		$jog2 = $_SESSION['jog2'];
	}else{
		header('location: login.php');
	}
?>
<!DOCTYPE html>
<html lang="pt-br">

    <head>
        <meta charset="UTF-8">
        <title>Informações Jogadores</title>
        <!-- Define a viewport -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Adicionar CSS Bootstrap -->
        <link href="../bootstrap-3/css/bootstrap.min.css" rel="stylesheet">
        <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
        <style>
        body {
            padding-top: 20px;
            padding-bottom: 20px;
            background: #151111;
            /*background: url("../img/carol.jpeg");*/
            /*background-repeat: no-repeat;*/
        }

        .navbar {
            margin-bottom: 20px;
        }

        li:hover {
            background: #e7e7e7;
        }

        .modal-personalizado {
            margin-top: 100px;
        }
        </style>
    </head>

    <body>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <!-- Static navbar -->
                    <nav class="navbar navbar-default">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                                <a class="navbar-brand" href="tipoJogo.php">CHESS GAME</a>
                            </div>
                            <div id="navbar" class="navbar-collapse collapse">
                                <ul class="nav navbar-nav">
                                    <li class="active"><a href="#">Home</a></li>
                                    <li><a href="#" onclick="novoJogo()">Novo Jogo</a></li>
                                    <li><a href="#" onclick="carregarJogo()">Continuar Jogo</a></li>
                                </ul>
                                <ul class="nav navbar-nav navbar-right">
                                    <li><a href="sair.php">Sair</a></li>
                                </ul>
                            </div>
                            <!--/.nav-collapse -->
                        </div>
                        <!--/.container-fluid -->
                    </nav>
                </div>
            </div>
            <div class="jumbotron">
                <h1>Dados Jogadores</h1>
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Editar</th>
                                <th>Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><?php echo $jog1->getId(); ?></td>
                                <td class="nomejog1"><?php echo $jog1->getNome(); ?></td>
                                <td class="emailjog1"><?php echo $jog1->getEmail(); ?></td>
                                <td><i class="fa fa-pencil fa-2x btn" onclick="abrirModal('#myModalEdit',1)"></i></td>
                                <td><i class="fa-2x sr-icons fa fa-trash-o btn"></i></td>
                            </tr>
                            <tr>
                                <td><?php echo $jog2->getId(); ?></td>
                                <td class="nomejog2"><?php echo $jog2->getNome(); ?></td>
                                <td class="emailjog2"><?php echo $jog2->getEmail(); ?></td>
                                <td><i class="fa fa-pencil fa-2x btn" onclick="abrirModal('#myModalEdit',2)"></i></td>
                                <td><i class="fa-2x sr-icons fa fa-trash-o btn"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <?php include 'modalEdit.php'; ?>
            <?php include 'modalLoadJogo.php'; ?>
            <?php include 'modalNewJogo.php'; ?>
        </div> <!-- container -->

        <!-- Adicionar Jquery e Bootstrap Js, no final, para um melhor carregamento da página -->
        <script src="../bootstrap-3/jquery.min.js"></script>
        <script src="../bootstrap-3/js/bootstrap.min.js"></script>
        <script src="main.js"></script>
    </body>

</html>