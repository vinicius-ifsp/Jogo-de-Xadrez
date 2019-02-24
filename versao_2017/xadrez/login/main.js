function abrirModal(myModal,id=''){
  $(myModal).modal('show');
  if(id!=''){
    formEdit(id);
  }
}

function fecharModal(myModal){
  $(myModal).modal('hide');
}

function formEdit(id){
  $.ajax({
    url: 'buscarJogador.php',
    type: 'POST',
    dataType: 'JSON',
    data: {id: id},
    success: function(data){
      if(data!='0'){
        nome = data[0];
        email = data[1];
        $('#nome').val(nome);
        $('#email').val(email);
      }else{
        msg = "Jogador não encontrado";
        alert(msg);
      }
    },
    error: function(erro){
      alert("Erro: "+erro);
    }
  });     
}

function salvarEdit(){
  nome = $('#nome').val();
  email = $('#email').val();

  $.ajax({
    url: 'editJog.php',
    type: 'POST',
    dataType: 'JSON',
    data: {nome: nome, email: email},
    success: function(data){
      if(data!=false){
        id=data[1];
        local= ".nome"+id;
        atualizarCampo(local, nome);
        local = ".email"+id;
        atualizarCampo(local, email);
      }
      else{
        alert(data);
      }
    },
    error: function(erro){
      alert("Erro: "+erro);
    }
  });
  fecharModal("#myModalEdit");
 }
 
function atualizarCampo(local, valor){
  $(local).html(valor);
}

function novoJogo(){
  retorno = buscarJogo();
  flag = null;
  if(retorno!=false){
    abrirModal('#myModalNewJogo');
  }else{
    inicarJogo();
  }
}

function carregarJogo(){
  retorno = buscarJogo();
  flag = null;
  // alert("load: "+retorno);
  if(retorno!=false){
    id=retorno[0];
    data=retorno[1];
    atualizarCampo('#idJogo', id);
    atualizarCampo('#dataJogo', data);
    abrirModal('#myModalLoadJogo')
  }else{
    // fecharModal("#myModalLoadJogo");
    if(confirm("Jogo não encontrado, iniciar um novo jogo?")){
      inicarJogo();
    }
  }
}

var flag;
function buscarJogo(){
  $.ajax({
    url: 'buscarJogo.php',
    type: 'POST',
    dataType: 'json',
    cache: false,
    async: false,
    success: function(retorno){
          // alert('retorno :'+retorno);
          flag = retorno;
        }
  });
  // alert('flag1:'+flag[0]);
  // alert('flag2:'+flag[1]);
  // alert("flag: "+flag);
  return flag;
}

function apagarJogo(){
  $.ajax({
    url: 'apagarJogo.php',
    type: 'POST',
    dataType: 'json',
    cache: false,
    async: false,
    success: function(retorno){
          if(retorno){
            inicarJogo();
          }else{
            alert("Erro ao apagar Jogo do lado servidor");
          }
        },
    error: function(e){
      console.log(e.responseText);
    }
  });
}

function inicarJogo(){
  alert("Iniciando novo jogo");
  window.location.href='../jogo/index.php';
}