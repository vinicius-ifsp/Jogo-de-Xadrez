<?php 
    include 'operacoesBD/funcoes.php';
    conectar();
    criarTabelas();
    header('location: login.php');     
?>