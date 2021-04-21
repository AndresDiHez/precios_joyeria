<?php
	include_once("../bd/basededatos.php");

	/**
	 * 
	 */
	class consultas extends conexionbd
	{
		private $nombre;
		private $username;

		public function __construct()
		{
			try {
				$this->objdatos=new conexionbd('mysql:host=localhost;dbname=joyeria2_ldl_p09;charset=utf8','joyeria2','LlVe#@JWBQlWh3');
			}
			catch (Exception $e){
				echo 'Oops! An error occurred. [' . $e->getMessage() . ', ' . $e->getCode() . ']';
			}
		}

		//Validar si el usuario existe en la Base de datos
		public function validarusuario($usuario,$pass)
			{
				$this->usuario=$usuario;
				$this->pass=$pass;

				$this->objdatos->conectar();
				$query= $this->objdatos->ejecutar("SELECT * FROM  usuario where user='$this->usuario' and password='$this->pass' ");

				
					if ($query==null) {
						return false;
					}
					else{
						return true;
					}

					$this->objdatos->desconectar();

			}
			//Asignar usuario
		public function asignarusuario($user)
			{
//				$this->user=$user;
//				$this->objdatos->conectar();
//				$query=$this->objdatos->ejecutar('SELECT * from alumno where usuario=$this->user');
//
//				foreach ($query as $datuser)
//						{
//							$this->nombre=$datuser['id_alumno'];
//							$this->username=$datuser['usuario'];
//						}



			}
		public function enviarusuario(
		){
			return $this->nombre;
		}

		

		
	//ADMINISTRADOR
		public function validaradmin($usuario,$pass)
			{
				$this->usuario=$usuario;
				$this->pass=$pass;

				$this->objdatos->conectar();
				$query= $this->objdatos->ejecutar("SELECT * FROM  usuario where usuario='$this->usuario' and contrasena='$this->pass' ");

				/*if ($query->rowCount()) {
					return true;
				}else
					{
						return false;
					}*/
					if ($query==null) {
						return false;
					}
					else{
						return true;
					}

					$this->objdatos->desconectar();

			}

		public function asignaradmin($user)
			{
//				$this->user=$user;
//				$this->objdatos->conectar();
//				$query=$this->objdatos->ejecutar('SELECT * from usuario where nombre=$this->user');
//
//				foreach ($query as $datuser)
//						{
//							$this->nombre=$datuser['id_administrador'];
//							$this->username=$datuser['nombre'];
//						}
//


			}
		public function enviaradmin()
			{
				return $this->nombre;
			}
		
		


			
		
		public function registroperfil($nombre, $apellido, $idcliente_comercia)
			{	
				$this->nombre=$nombre;
				$this->apellido=$apellido;
				$this->idcliente_comercia= $idcliente_comercia;

			
				$this->objdatos->conectar();
				$query=$this->objdatos->ejecutar("INSERT into perfil (id_perfil,nombre,apellido,idcliente_comercia) values ('',	'$this->nombre','$this->apellido',$this->idcliente_comercia);");

				$this->objdatos->desconectar();
			}

		public function idperfil($id_perfil)
			{
				$this->id_perfil=$id_perfil;
				
				$this->objdatos->conectar();
				$query=$this->objdatos->ejecutar("SELECT id_perfil from perfil
				where idcliente_comercia=$this->id_perfil");

				return $query; 
				$this->objdatos->desconectar();
				
			}
		
			
		
		public function registrousuario($usuario,$contrasena)
			{
				$this->usuario=$usuario;
				$this->contrasena=$contrasena;

				$this->objdatos->conectar();
				$query=$this->objdatos->ejecutar("INSERT into usuario (id_usuario,user,password) values ('','$this->usuario','$this->contrasena');");

				
				$this->objdatos->desconectar();
			}
		
		public function idusuario($usuario)
			{
				$this->usuario=$usuario;

				$this->objdatos->conectar();
				$query=$this->objdatos->ejecutar("SELECT id_usuario
				from usuario
				where user='$this->usuario'");

				return $query;
				$this->objdatos->desconectar();
			}
		
		public function relacionperfil( $idusuario,$idperfil)
			{
			

				$this->idperfil=$idperfil;
				$this->idusuario=$idusuario;

				$this->objdatos->conectar();
				$query=$this->objdatos->ejecutar("INSERT into rel_perfil(id_relacionp,fecha,id_usuario, id_perfil) values('',curdate(),$this->idusuario,$this->idperfil);");

				$this->objdatos->desconectar();
			}
		
		public function idroles($codigo)
			{
				$this->codigo=$codigo;

				$this->objdatos->conectar();
				$query=$this->objdatos->ejecutar("SELECT id_roles
				from roles
				where codigo=$this->codigo;");

				return $query;
				$this->objdatos->desconectar();
			}
		
		public function registrarol($idrol,$idusuario)
			{
				$this->idrol=$idrol;
				$this->idusuario=$idusuario;

				$this->objdatos->conectar();
				$query=$this->objdatos->ejecutar("INSERT into rel_roles(id_relacionr,fecha,id_usuario,id_roles)values('',curdate(),$this->idusuario,$this->idrol);");

				
				$this->objdatos->desconectar();
			}

		public function permisoroles($rol)
			{
				$this->rol=$rol;

				$this->objdatos->conectar();
				$query=$this->objdatos->ejecutar("SELECT r.id_roles 
				from roles r, usuario u, rel_roles rr
				where u.user='$this->rol'  and rr.id_roles=r.id_roles and u.id_usuario=rr.id_usuario;");

				return $query;
				$this->objdatos->desconectar();
			}

		public function cp2($cp)
			{
				die('entroooo');
				try {
					$this->cp=$cp;

					$this->objdatos->conectar();
					$query=$this->objdatos->ejecutar("SELECT area_remota,id_cobertura, municipio, estado, cp
				from envio_cobertura
				where cp='$this->cp';");

					return $query;
					$this->objdatos->desconectar();
				}
				catch (Exception $e) {
					echo 'Oops! An error occurred. [' . $e->getMessage() . ', ' . $e->getCode() . ']';
				}


			}
			
		public function consultacp()
			{

				$this->cp=$cp;

				$this->objdatos->conectar();
				$query=$this->objdatos->ejecutar("SELECT id_cobertura, municipio, estado, cp,area_remota
				from envio_cobertura;");

				return $query;
				$this->objdatos->desconectar();
			}	

}


	
?>
<?PHP 
	echo 'hola';
?>