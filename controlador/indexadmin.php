<?PHP 
	include_once('consultas.php');
	include_once('session.php');

	//crea un objeto de cada clase
	$objsession=new session();
	$objusuario=new consultas();

	/*if (isset($_SESSION['usuario'])) {
		echo "Hay sesión";
		$objusuario->asignaradmin($objsession->regsession());
		//include_once('../index.php');
	}else*/ 
	
	if (isset($_POST['usuario']) && isset($_POST['contrasena'])) 
	{
		   
		   $usuario=$_POST['usuario'];
		   $contrasena=$_POST['contrasena'];

		   if ($objusuario->validarusuario($usuario,$contrasena))
		   	 {
			   	//echo "usuario validado";	
			   	$objsession->sessionact($usuario);
			   	$objusuario->asignaradmin($usuario);

				 // include_once('homeadmin.php');
				echo 1;
				  
			 }
			 else{
			 	//echo 'Nombre de usuario y/o contraseña incorrecto';
				//include_once'loginadmin.php';
				echo 2; 
				
			 }

	}else
		{

		
		  //include_once 'loginadmin.php';
		}
?>