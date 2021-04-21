<?PHP 
    
    include_once('consultas.php');

    $objdatos= new consultas2();

    $cp=$_POST['cp'];

    $res=$objdatos->cp($cp);
    
    
    
    if(!$res)
    {
        echo 1;
       
    
    }
    else
    {
        echo json_encode($res);
    }

?>