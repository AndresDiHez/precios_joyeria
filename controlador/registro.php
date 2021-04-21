<?PHP

    include_once('consultas.php');

    $objdatos=new consultas();
    

    $nombre=$_POST['nombre'];
    $apellido=$_POST['apellido'];
    $idclientec=$_POST['idcliente'];
    $usuario=$_POST['user'];
    $password=$_POST['password'];
    $rol=$_POST['rol'];


    if($idclientec==803020)
    {
        $validaruser=$objdatos->idusuario($usuario);
                        if(empty($validaruser[0][0]))
                        {

                            $idrol=$objdatos->idroles($rol);

                           
                                $objdatos->registroperfil($nombre,$apellido, $idclientec);
                                $id_perfil=$objdatos->idperfil($idclientec);                  

                                
                                $objdatos->registrousuario($usuario,$password);
                                $idusuario=$objdatos->idusuario($usuario);
                                $objdatos->relacionperfil($idusuario[0][0],$id_perfil[0][0]);

                                
                                $objdatos->registrarol($idrol[0][0],$idusuario[0][0]);
                            
                        }
                        else
                        {
                            echo "3";
                        }
    }

    else

    {

                $idcomercia=$objdatos->idperfil($idclientec);
            
            if(empty($idcomercia[0][0]))
            {
                
                $validaruser=$objdatos->idusuario($usuario);
                        if(empty($validaruser[0][0]))
                        {

                            $idrol=$objdatos->idroles($rol);

                            if(isset($idrol[0][0]))
                            {
                                $objdatos->registroperfil($nombre,$apellido, $idclientec);
                                $id_perfil=$objdatos->idperfil($idclientec);                  

                                
                                $objdatos->registrousuario($usuario,$password);
                                $idusuario=$objdatos->idusuario($usuario);
                                $objdatos->relacionperfil($idusuario[0][0],$id_perfil[0][0]);

                                
                                $objdatos->registrarol($idrol[0][0],$idusuario[0][0]);
                            }
                            else
                            {
                                echo "2";
                            }
                            


                        }
                        else
                        {
                            echo "3";
                        }
            }
            else
            {
                echo "1";
            }
            
    }        
    

     
?>