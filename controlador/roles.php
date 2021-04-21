<?PHP
    include_once('consultas.php');

    $objdatos=new consultas();

    $rol=$_POST['rol'];
    $res=$objdatos->permisoroles($rol);
    
    echo json_encode($res[0][0]);
    
?>