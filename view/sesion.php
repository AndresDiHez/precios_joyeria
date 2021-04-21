
<?PHP 
    include_once('header.php');
?>

	
   
	<div class="container">
		
		<div class="sesion">
						<img src="../recursos/images/logo.png" alt="" >
					
						<h1>INICIAR SESIÓN</h1>
				
				<div id="formulario">
					
						<input type="text" class="form-control form-control-lg" name="usuario" id="usuario" placeholder="Usuario">	
						
						<input type="password" class="form-control form-control-lg" name="contrasena" id="contrasena" placeholder="Password">
						<button id="iniciarsesion" class="btn  btn-lg btn-block" onclick="iniciarsesion();">INICIAR SESIÓN</button>
						
						<a  href="registro.php">Crear cuenta en Luz de Luna </a>
						
				
				</div>
		
		</div>
	</div>


</body>
</html>