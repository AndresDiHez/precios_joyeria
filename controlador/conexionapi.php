<?PHP

    $idSecurity='a2f8370ee6834da48215bcdf0fed9438355776679605486579';
    $idClient='736dd0ae8386424290b610d572386eb8836888816342527091';

        if($_POST['api']=='precio')
            {
                $url = 'https://comerciagold.com/service/Service1.svc/api/woocommerce/getDetailItem';
                $ch = curl_init($url);
                $codigo=$_POST['codigo'];
                $data = array(
                    'idSecurity'=>$idSecurity ,
                    'idClient'=>$idClient ,
                    'sku'=>$codigo,
                    'almacen'=>1,
                    'moneda'=>'MXN',
                    'idCustomer'=> 1
                );
            }

        if($_POST['api']=='cliente')
            {
                $idcliente=$_POST['idcliente']; 
                $url = 'https://comerciagold.com/service/Service1.svc/api/woocommerce/getDetailCustomer';
                $ch = curl_init($url);

                    $data = array(
                        'idSecurity'=>$idSecurity ,
                        'idClient'=>$idClient ,
                        'idCustomer'=> $idcliente
                    );
            }
       
        $payload = json_encode(($data));
        
        curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:text/plain'));
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Accept:application/json'));

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $result = curl_exec($ch);
        
        curl_close($ch);

        //$data = json_decode(file_get_contents('php://input'), true);
        $data=json_decode($result,true);

        $arr=json_encode($data,true);


    echo ($arr);
        

?>