        <div class="modal fade modal-personalizado" id="myModalEdit">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Editar</h4>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <input type="text" class="form-control" id="nome"
                    placeholder="Nome" required><br>
                    <input type="email" class="form-control" id="email" placeholder="E-mail" required>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary" onclick="salvarEdit()">Salvar</button>
              </div>
            </div>
          </div>
        </div>