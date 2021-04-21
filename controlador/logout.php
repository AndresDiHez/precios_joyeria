<?PHP
	include_once('session.php');

	



		$session=new session();
		$session->cerrarsession();

	
	
		header('location:../view/sesion.php');
	
	
?>