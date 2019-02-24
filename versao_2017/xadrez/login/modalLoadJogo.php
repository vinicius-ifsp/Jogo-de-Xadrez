        <div class="modal fade modal-personalizado" id="myModalLoadJogo">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Carregar Jogo</h4>
              </div>
              <div class="modal-body">
                <div class="table-responsive">
                  <table class="table table-bordered">
                    <thead>
                      <th>id</th>
                      <th>Jogodar 1</th>
                      <th>Jogador 2</th>
                      <th>Data Inicio</th>
                    </thead>
                    <tbody>
                      <td id="idJogo"></td>
                      <td class="nomejog1"><?php echo $jog1->getNome(); ?></td>
                      <td class="nomejog2"><?php echo $jog2->getNome(); ?></td>
                      <td id="dataJogo"></td>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary" onclick="window.location.href='../jogo/index.php'">Iniciar</button>
              </div>
            </div>
          </div>
        </div>