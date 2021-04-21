var arr=[];

var posarray=0;

/*$(document).ready(function(){
    $('.selectpicker').selectpicker();

});*/


function consulta(){

    loading=document.getElementById('loading');
    loading.style.display='';

    loading=document.getElementById('resultado');
    loading.style.display='none';
    
    var codigo=$('#codigo').val();
    var sesion=$('#sesion').val();
   

   /* $.ajax({
        type: 'POST',
        url: 'controlador/roles.php',
        data: 'rol='+sesion
    }).done(function(res){
        var array=JSON.parse(res);
        
       
        if(array==4)
        {
           
            $.ajax({
                type: 'POST',
                url: 'controlador/conexionapi.php',
                data: 'codigo='+codigo+'&api=precio'
             
            }).done (function(res){
                
                var array=JSON.parse(res);
                var dat=array['precioNetoSinIVA1'];
        
                console.log(array);
              
                if(array.length===0){
        
                  alert('El código no existe');
                }else{
                    loading=document.getElementById('loading');
                    loading.style.display='none';
    
                    loading=document.getElementById('resultado');
                    loading.style.display='';
                iva=dat*(1.16);
               
                
        
                html="<tr>";
                html+="<th scope='row'>"
                html+=array['sku'];
                html+="</th>";
                
                html+="<td>";
                html+=array['description'];
              
                html+="</td>";
           
                html+="<td>";
                html+=array['unidad'];
                html+="</td>";
                html+="<td>";
                html+=iva;
                html+="</td>";
                html+="<td>";
                html+=(array['precioNetoSinIVA2'])*1.16;
                html+="</td>";
                html+="<td>";
                html+=(array['precioNetoSinIVA3'])*1.16;
                html+="</td>";
                html+="<td>";
                html+=(array['precioNetoSinIVA4'])*1.16;
                html+="</td>";
                
                html+="<td>";
                html+="hola";
                html+="</td>";

                html+="</tr>";
        
                $("#resultado").append(html);
            
                arr[posarray]=dat;
                posarray++;
               
              
        
                
                
                
            }
                
                
        
            }) ;
          
        }
        else
        {*/
            loading=document.getElementById('loading');
            loading.style.display='';
        
            loading=document.getElementById('resultado');
            loading.style.display='none';

            $.ajax({
                type: 'POST',
                url: 'controlador/conexionapi.php',
                data: 'codigo='+codigo+'&api=precio',
            }).done (function(res){

                 // setTimeout(function () {
                console.log(res);
                var array=JSON.parse(res);
                var dat=array['precioNetoSinIVA1'];
        
               
              
                if(array.length===0){
        
                  alert('El código no existe');
                  loading=document.getElementById('loading');
                  loading.style.display='none';
  
                  loading=document.getElementById('resultado');
                  loading.style.display='';
                }else{
                  loading=document.getElementById('loading');
                loading.style.display='none';

                loading=document.getElementById('resultado');
                loading.style.display='';
                //iva=dat*(1.16);
               
                
        
                html="<tr>";
                html+="<th scope='row'>"
                html+=array['sku'];
                html+="</th>";
                
                html+="<td>";
                html+=array['description'];
              
                html+="</td>";
           
                html+="<td>";
                html+=array['unidad'];
                html+="</td>";
                html+="<td>";
                html+=dat;
                html+="</td>";
                html+="<td>";
                html+=array['precioNetoSinIVA2'];
                html+="</td>";
                html+="<td>";
                html+=array['precioNetoSinIVA3'];
                html+="</td>";
                /*html+="<td>";
                html+=array['precioNetoSinIVA4'];
                html+="</td>";*/
        
                html+="</tr>";
        
                $("#resultado").append(html);
            
                arr[posarray]=dat;
                posarray++;
               
              
        
                
                
                
            }
                
              // },1);
        
            }).fail( function() {

                alert( 'Error!!' );

            }) ;
        /*}

    
    });*/
   
    

  
}
function consultapress(e)
{
    if(e.keyCode === 13)
    {
            loading=document.getElementById('loading');
            loading.style.display='';

            loading=document.getElementById('resultado');
            loading.style.display='none';
            
            var codigo=$('#codigo').val();
           /* var sesion=$('#sesion').val();
        

            $.ajax({
                type: 'POST',
                url: 'controlador/roles.php',
                data: 'rol='+sesion
            }).done(function(res){
                var array=JSON.parse(res);
                
            
                if(array==4)
                {
                
                    $.ajax({
                        type: 'POST',
                        url: 'controlador/conexionapi.php',
                        data: 'codigo='+codigo+'&api=precio'
                    
                    }).done (function(res){
                        
                        var array=JSON.parse(res);
                        var dat=array['precioNetoSinIVA1'];
                
                        console.log(array);
                    
                        if(array.length===0){
                
                        alert('El código no existe');
                        }else{
                            loading=document.getElementById('loading');
                            loading.style.display='none';
            
                            loading=document.getElementById('resultado');
                            loading.style.display='';
                        iva=dat*(1.16);
                    
                        
                
                        html="<tr>";
                        html+="<th scope='row'>"
                        html+=array['sku'];
                        html+="</th>";
                        
                        html+="<td>";
                        html+=array['description'];
                    
                        html+="</td>";
                
                        html+="<td>";
                        html+=array['unidad'];
                        html+="</td>";
                        html+="<td>";
                        html+=iva;
                        html+="</td>";
                        html+="<td>";
                        html+=(array['precioNetoSinIVA2'])*1.16;
                        html+="</td>";
                        html+="<td>";
                        html+=(array['precioNetoSinIVA3'])*1.16;
                        html+="</td>";
                        html+="<td>";
                        html+=(array['precioNetoSinIVA4'])*1.16;
                        html+="</td>";
                        
                        html+="<td>";
                        html+="hola";
                        html+="</td>";

                        html+="</tr>";
                
                        $("#resultado").append(html);
                    
                        arr[posarray]=dat;
                        posarray++;
                    
                    
                
                        
                        
                        
                    }
                        
                        
                
                    }) ;
                
                }
                else
                {*/
                    loading=document.getElementById('loading');
                    loading.style.display='';
                
                    loading=document.getElementById('resultado');
                    loading.style.display='none';

                    $.ajax({
                        type: 'POST',
                        url: 'controlador/conexionapi.php',
                        data: 'codigo='+codigo+'&api=precio',
                    
                    }).done (function(res){

                        // setTimeout(function () {
                            console.log(res);
                            var array=JSON.parse(res);
                            var dat=array['precioNetoSinIVA1'];

                            

                            if(array.length===0){

                                alert('El código no existe');
                                loading=document.getElementById('loading');
                                loading.style.display='none';

                                loading=document.getElementById('resultado');
                                loading.style.display='';
                                document.getElementById("codigo").value = "";

                            }else{
                                loading=document.getElementById('loading');
                                loading.style.display='none';

                                loading=document.getElementById('resultado');
                                loading.style.display='';
                                //iva=dat*(1.16);



                                html="<tr>";
                                html+="<th scope='row'>"
                                html+=array['sku'];
                                html+="</th>";

                                html+="<td>";
                                html+=array['description'];

                                html+="</td>";

                                html+="<td>";
                                html+=array['unidad'];
                                html+="</td>";
                                html+="<td>";
                                html+=dat;
                                html+="</td>";
                                html+="<td>";
                                html+=array['precioNetoSinIVA2'];
                                html+="</td>";
                                html+="<td>";
                                html+=array['precioNetoSinIVA3'];
                                html+="</td>";
                                /*html+="<td>";
                                html+=array['precioNetoSinIVA4'];
                                html+="</td>";*/

                                html+="</tr>";

                                $("#resultado").append(html);
                                document.getElementById("codigo").value = "";
                                arr[posarray]=dat;
                                posarray++;

                            }
                        // }, 1000);

                    }).fail( function() {

                        alert( 'Error!!' );

                    })
               /* }

            
            });*/
    }
}

function actualizar()
{
    
    $('#resultadoenvio').empty();
    $('#resultado').empty();
}

function iniciarsesion()
    {
       
       var usuario= $('#usuario').val();
       var contrasena= $('#contrasena').val();
        
        $.ajax({
            type: 'POST',
            url: '../controlador/indexadmin.php',
            data: 'usuario='+usuario+'&contrasena='+contrasena
        }).done (function(res)
        
            {  
                if(res==1)
                {
                    window.location.replace('../index.php');
                }
                else
                {
                    alertify.error('Nombre de usuario y/o contraseña incorrecto')
                }
             
              //header ('Location: ../index.php');
              
            });

       
    }

    function logout() 
    {
        
        

            $.ajax({
                type: 'POST',
                url: '../controlador/logout.php',
                data:'cerrarsesion=1'
            }).done(function(res)
                
                {
                    if(res==true)
                    {
                        alertify.error('Error al cerrar sesión');
                       
                    }
                    else{
                        alertify.success('Seción finalizada');
                    }
                });
    }

function cliente()
    {

            var cliente=$('#idcliente').val();
            var text='cliente';

            if(cliente=803020)
            {
                
                nombre= $('#nombrer').val();
                apellido=$('#apellidor').val();
                idcliente=$('#idcliente').val();
                user=$('#user').val();
                pass=$('#passwordr').val();
                rol=$('#codigorol').val();

             
                $.ajax({
                    type: 'POST',
                    url: '../controlador/registro.php',
                    data:'nombre='+nombre+'&apellido='+apellido+'&idcliente='+idcliente+'&user='+user+'&password='+pass+'&rol='+rol 
                }).done(function(res)
                    
                    {
                       
                        if(res==3)
                        {
                            alertify.warning("El nombre de usuario ya existe, selecciona otro nombre");
                        }
                        else
                        {
                        alertify.alert("Gracias por tu registro. Inicia sesión para conocer nuestros precios. ", function(){
                            window.location.replace('../index.php');
                            });
                        }
                     
                    });

              

                
                
            }

          
       

            else
            {
                alert('esta entrando a otro if');
                $.ajax({
                    type: 'POST',
                    url: '../controlador/conexionapi.php',
                    data:'idcliente='+cliente+'&api=cliente'
                }).done(function(res)
                    
                    {
                        var arrayc=JSON.parse(res);
    
                        
                        if(arrayc['success']==false)
                        {   
                            alertify.warning('No te encuentras registrado en nuestra base de datos de clientes');
                            
                        }
                        else
                        {
    
                            nombre= $('#nombrer').val();
                            apellido=$('#apellidor').val();
                            idcliente=$('#idcliente').val();
                            user=$('#user').val();
                            pass=$('#passwordr').val();
                            rol=$('#codigorol').val();
    
                         
                            $.ajax({
                                type: 'POST',
                                url: '../controlador/registro.php',
                                data:'nombre='+nombre+'&apellido='+apellido+'&idcliente='+idcliente+'&user='+user+'&password='+pass+'&rol='+rol 
                            }).done(function(res)
                                
                                {
                                   
    
                                    if(res=1)
                                    {
                                        alertify.warning("El número de cliente ya se encuentra registrado");
    
                                    }
                                    if(res=2)
                                    {
                                        alertify.warning("El código proporcionado por tu asesor es incorrecto");
    
                                    }
                                    if(res=3)
                                    {
                                        alertify.warning("El nombre de usuario ya existe, selecciona otro nombre");
                                    }
                                    else
                                    {
                                    alertify.alert("Gracias por tu registro. Inicia sesión para conocer nuestros precios. ", function(){
                                        window.location.replace('../index.php');
                                        });
                                    }
                                    
                                });
    
                          
    
                            
                            
                        }
    
                      
                    });
            }
            
    }

function pesovolumetrico ()
{

    $('#pesovolumetrico').empty();
    var ancho=$('#ancho').val();
    var alto=$('#alto').val();
    var grosor=$('#grosor').val();

    var totalcaja=(ancho*alto*grosor)/5000;
    
    

      $('#pesovolumetrico').append(totalcaja);
        
}

function cotizarenvio()
{
    var ancho=$('#ancho').val();
    var alto=$('#alto').val();
    var grosor=$('#grosor').val();

    var totalcaja=(ancho*alto*grosor)/5000;

    if (totalcaja<=3)
    {
        var cp=$('#cp').val();
    
        $.ajax({
            type: 'POST',
            url: 'controlador/cotizar.php',
            data:'cp='+cp
        }).done(function(res)
        
        {
            
           
           
            var arrays=JSON.parse(res);
            
            var seguro=$('#seguro').val();
            var resseguro=parseInt(seguro);
            var caja=10;
           
             if(res==1)
            {
                alert('El código postal no existe');
            }

            else
            {
                if(arrays[0][0]=='N')
                {
                   
                    
                    if(document.getElementById('rsegurosi').checked)
                    {
                        if(seguro=='')
                        {
                            alert('debes ingresar el seguro');
                        }
                        else
                        {

                            var totalseguro=(resseguro*0.01)*1.16;
                        
                            if(document.getElementById('1kg').checked)
                                {
                                    
                                    var kg1=245;
                                    var totalenvio1=kg1+totalseguro+caja;

                                    html='<tr>';

                                    html+='<td>';
                                    html+=arrays[0][4];
                                    html+='</td>';
            
                                    html+='<td>';
                                    html+=arrays[0][2];
                                    html+='</td>';
            
                                    html+='<td>';
                                    html+=arrays[0][3];
                                    html+='</td>';
            
                                    html+='<td>';
                                    html+=arrays[0][0];
                                    html+='</td>';
            
                                

                                    html+="<th scope='row'>"
                                    html+=totalenvio1;
                                    html+="</th>";
                                
            
                                    html+='</tr>';
            
                                    $('#resultadoenvio').append(html);
                                    
                                }
                                
                            if(document.getElementById('3kg').checked)
                                    {
                                        
                                    var kg1=295;
                                    var totalenvio2=kg1+totalseguro+caja;
                                    
                                    html='<tr>';

                                    html+='<td>';
                                    html+=arrays[0][4];
                                    html+='</td>';
            
                                    html+='<td>';
                                    html+=arrays[0][2];
                                    html+='</td>';
            
                                    html+='<td>';
                                    html+=arrays[0][3];
                                    html+='</td>';
            
                                    html+='<td>';
                                    html+=arrays[0][0];
                                    html+='</td>';
            
                                    html+="<th scope='row'>"
                                    html+=totalenvio2;
                                    html+="</th>";
            
                                    html+='</tr>';
            
                                    $('#resultadoenvio').append(html);
                                        
                                    }
                        }
                        
                    
                    }
                
                    if(document.getElementById('rsegurono').checked)
                        {
                            if(document.getElementById('1kg').checked)
                            {
                                
                                var kg1=245;
                                var totalenvio3=kg1+caja;
                              
                                html='<tr>';

                                html+='<td>';
                                html+=arrays[0][4];
                                html+='</td>';
        
                                html+='<td>';
                                html+=arrays[0][2];
                                html+='</td>';
        
                                html+='<td>';
                                html+=arrays[0][3];
                                html+='</td>';
        
                                html+='<td>';
                                html+=arrays[0][0];
                                html+='</td>';
        
                                html+="<th scope='row'>"
                                html+=totalenvio3;
                                html+="</th>";
        
                                html+='</tr>';
        
                                $('#resultadoenvio').append(html);
                                   

                            }
                        
                        if(document.getElementById('3kg').checked)
                                {

                                   
                                    var kg1=295;
                                    var totalenvio4=kg1+caja;
                                    
                                    html='<tr>';

                                    html+='<td>';
                                    html+=arrays[0][4];
                                    html+='</td>';
            
                                    html+='<td>';
                                    html+=arrays[0][2];
                                    html+='</td>';
            
                                    html+='<td>';
                                    html+=arrays[0][3];
                                    html+='</td>';
            
                                    html+='<td>';
                                    html+=arrays[0][0];
                                    html+='</td>';
            
                                    html+="<th scope='row'>"
                                    html+=totalenvio4;
                                    html+="</th>";
            
                                    html+='</tr>';
            
                                    $('#resultadoenvio').append(html);
        
                                }
                        }
                }
                else
                if(arrays[0][0]=='Y')
                {
                    
                    var zonaextendida=143;

                    if(document.getElementById('rsegurosi').checked)
                        {
                            var totalseguro=(resseguro*0.01)*1.16;
                        
                            if(document.getElementById('1kg').checked)
                                {
                                    
                                    var kg1=245;
                                    var totalenvio5=kg1+totalseguro+caja+zonaextendida;
                                    
                                    html='<tr>';

                                    html+='<td>';
                                    html+=arrays[0][4];
                                    html+='</td>';
            
                                    html+='<td>';
                                    html+=arrays[0][2];
                                    html+='</td>';
            
                                    html+='<td>';
                                    html+=arrays[0][3];
                                    html+='</td>';
            
                                    html+='<td>';
                                    html+=arrays[0][0];
                                    html+='</td>';
            
                                    html+="<th scope='row'>"
                                    html+=totalenvio5;
                                    html+="</th>";
            
                                    html+='</tr>';
            
                                    $('#resultadoenvio').append(html);

                                }
                            
                            if(document.getElementById('3kg').checked)
                                    {
                                        
                                        var kg1=295;
                                        var totalenvio6=kg1+totalseguro+caja+zonaextendida;
                                        
                                        html='<tr>';

                                        html+='<td>';
                                        html+=arrays[0][4];
                                        html+='</td>';
                
                                        html+='<td>';
                                        html+=arrays[0][2];
                                        html+='</td>';
                
                                        html+='<td>';
                                        html+=arrays[0][3];
                                        html+='</td>';
                
                                        html+='<td>';
                                        html+=arrays[0][0];
                                        html+='</td>';
                
                                        html+="<th scope='row'>"
                                        html+=totalenvio6
                                        html+="</th>";
                
                                        html+='</tr>';
                
                                        $('#resultadoenvio').append(html);
            
                                    }
                        }
                
                    if(document.getElementById('rsegurono').checked)
                        {
                            if(document.getElementById('1kg').checked)
                            {
                                
                                var kg1=245;
                                var totalenvio7=kg1+caja+zonaextendida;
                               
                                html='<tr>';

                                html+='<td>';
                                html+=arrays[0][4];
                                html+='</td>';
        
                                html+='<td>';
                                html+=arrays[0][2];
                                html+='</td>';
        
                                html+='<td>';
                                html+=arrays[0][3];
                                html+='</td>';
        
                                html+='<td>';
                                html+=arrays[0][0];
                                html+='</td>';
        
                                html+="<th scope='row'>"
                                html+=totalenvio7;
                                html+="</th>";
        
                                html+='</tr>';
        
                                $('#resultadoenvio').append(html);

                            }
                        
                            if(document.getElementById('3kg').checked)
                                {
                                   
                                    var kg1=295;
                                    var totalenvio8=kg1+caja+zonaextendida;
                                    
                                    html='<tr>';

                                    html+='<td>';
                                    html+=arrays[0][4];
                                    html+='</td>';
            
                                    html+='<td>';
                                    html+=arrays[0][2];
                                    html+='</td>';
            
                                    html+='<td>';
                                    html+=arrays[0][3];
                                    html+='</td>';
            
                                    html+='<td>';
                                    html+=arrays[0][0];
                                    html+='</td>';
            
                                    html+="<th scope='row'>"
                                    html+=totalenvio8;
                                    html+="</th>";
            
                                    html+='</tr>';
            
                                    $('#resultadoenvio').append(html);
        
                                }
                        }
                }
            
            }
        });
    }

    
    else
    {
        alert('El peso volumetrico rebasa los 3kg, favor de solicitar costo a tu encargada');
    }

}
