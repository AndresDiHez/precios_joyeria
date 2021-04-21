
   
    <div class="container">

        <div>
            <h1 class="titulo">CONSULTAR PRECIO</h1>
        </div>
        <div class="input-group mb-3">
                <input type="number" class="form-control" placeholder="Ingresar código" aria-label="Recipient's username" aria-describedby="basic-addon2" id="codigo" onkeypress="consultapress(event)">
               
                <div class="input-group-append">
                    <button class=" btn btn-danger" type="button" onclick="consulta()">Consultar</button>
                </div>
        </div>
        <div class="scroll">
            <table class="table">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">DESCRIPCIÓN</th>
                    <th scope="col">GR/PZ</th>
                    <th scope="col">Lista 1</th>
                    <th scope="col">Lista 2</th>
                    <th scope="col">Lista 3</th>
                    <th scope="col">Lista 4</th>
                    <th scope="col">Metal</th>
 
                    </tr>
                </thead>
            
                <tbody id="resultado" class="table-light" >
                <div id="loading" style="display:none; position:absolute;" >
                         
                         <img src="recursos/images/loading.gif">

                   </div>
                </tbody>
        
            </table>
        </div>
       
        <div class="actualizar" >
             <button class="btn btn-primary" onclick="actualizar();" id="actualizar">LIMPIAR VENTANA</button>
        </div>
    </div>
