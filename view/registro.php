
<?PHP 
    include_once('header.php');
?>


    <div class="container">
        <div class="registro">
        
        <div >
            <h1>REGISTRO</h1>
            <p>Número de cliente</p>
            <input type="text" name="idcliente" id="idcliente" class="form-control form-control-lg">

            <p>Código proporcionado por asesor</p>
            <input type="text" name="" id="codigorol" class="form-control form-control-lg">

            <p>Nombre</p>
            <input type="text" name="" id="nombrer" class="form-control form-control-lg">

            <p>Apellido</p>
            <input type="text" name="" id="apellidor" class="form-control form-control-lg">
            
            <p>Usuario</p>
            <input type="text" name="" id="user" class="form-control form-control-lg">

            <p>Contraseña</p>
            <input type="password" name="" id="passwordr" class="form-control form-control-lg">

            <button onclick='cliente();' class="btn  btn-lg btn-block btnregistrar" >REGISTRAR</button>
            <a href="sesion.php">Iniciar sesión</a>
        </div>
        </div>
    </div>




</body>
</html>