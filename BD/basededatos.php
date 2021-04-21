<?php
	class conexionbd 
	{
		private $cadenaconexion;
		private $user;
		private $password;
		private $objconexion; 

		public function __construct($cadenaconexion, $user, $password)
		{
			$this->cadenaconexion=$cadenaconexion;
            $this->user=$user;
            $this->password=$password;
		}
        
        public function conectar (){
            try{
                $this->objconexion=new PDO($this->cadenaconexion,$this->user,$this->password);
            }
            
            catch (PDOException $e){
                die('Error'.$e->GetMessage());
            }
        }
        
        public function desconectar(){
            $this->objbd=null;
        }
        
        public function ejecutar($consulta){
            try{
                $ejecutar= $this->objconexion->prepare($consulta);
                $ejecutar->execute();
                $rows=$ejecutar->fetchAll();
                return $rows;
            }
            catch(PDOException $e){
                throw $e;
            }
            
            
        }
	}

?>