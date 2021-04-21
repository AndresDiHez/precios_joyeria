
        
    <div class="container">   
        <div class="enviocot">
            <h1 class="titulo">Cotizar envío</h1>
            <div class="form-row"> 
                <div class=col-md-4>
                    <label for="">Ancho</label>
                    <input type="number" id="ancho" class="form-control">
                </div>
                <div class=col-md-4>
                    <label for="">Alto</label>
                    <input type="number" name="" id="alto" class="form-control">
                </div>
                <div class=col-md-4>
                    <label for="">Grosor</label>
                    <input type="number" id="grosor" class="form-control" onchange="pesovolumetrico();">
                </div>
            </div>
            <label for="">Peso volumetrico: <span id="pesovolumetrico"> </span></label>

            <p>C.P</p>
                <input type="number" name="" id="cp"  class="form-control"><br>

            
                <p>SEGURO</p>
            <div class="form-row">
                <div class="col-md-4">
                    <input type="radio" id="rsegurosi" name="seguro" value="si">
                    <label for="">SI</label><br>
            
                    <input type="radio" id="rsegurono" name="seguro" value="no">
                    <label for="">NO</label>
                </div>
                
                <div class="col-md-4">
                    <label for="">Total a asegurar</label>
                    <input type="number" name="" id="seguro" class="form-control">
                </div>
            </div>

        
            <br>
            <p>PESO DE MERCACÍA</p>
                <input type="radio" id="1kg" name="peso" value="1kg" class="">
                <label for="">1KG</label>
            <br>
                <input type="radio" id="3kg" name="peso" value="1kg" class="">
                <label for="">HASTA 3KG</label>
            <br>
     


            <div class="tablaenvio">
            <button onclick="cotizarenvio();" class="btn btn-danger">CONSULTAR</button>


            <div class="scrollenvio">
                <table class="table">
                    <thead class="thead-light">
                        <tr>
                        <th scope="col">CP</th>
                        <th scope="col">Municipio</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Zona extendida</th>
                        <th scope="col">Precio envio</th>
                
                        
                        </tr>
                    </thead>
                
                    <tbody id="resultadoenvio" class="table-light" >
                        
                    </tbody>
            
                </table>
            </div>
            </div>
       
            <div class="actualizar" >
                <button class="btn btn-primary" onclick="actualizar();" id="actualizarenvio">LIMPIAR VENTANA</button>
            </div>
        </div>
    </div>


   

        
        

</body>
</html>