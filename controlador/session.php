<?PHP
	/**
	 * 
	 */
	class session 
	{
		
		function __construct()
		{
			session_start();
		}
	
	//guardar valor actual de la sesion
	public function sessionact($usuario){
		$_SESSION['usuario']=$usuario;
	}

	public function regsession()
		{
			return $_SESSION['usuario'];
		}
		
	public function cerrarsession(){
		session_unset();
		session_destroy();
	}

 }
?>