//_____Ejemplo Consulta periódica
//https://stackoverflow.com/questions/5052543/how-to-fire-ajax-request-periodically

$(document).ready(function() {
   
    valor = 0;
    executeQuery();
    $("#btnActualizar").click(executeQuery);   
   
});

var valor;

function executeQuery() {
  
    $.ajax({
    url: 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json',
    //url: ' https://blockchain.info/es/ticker', --> desactualizado 
     method: 'get',
      dataType: 'json',
      success: function (response) {
         
        $("#valorStr").val(response.bpi['USD'].rate);

        EvaluarVariacion(response.bpi['USD'].rate); //Evalúo variación antes de cargar el valor
     
        valor = response.bpi['USD'].rate; //cargo el valor a la variable global
    
    }
    });
   setTimeout(executeQuery,60000); // you could choose not to continue on failure...*/
  }
  

  function EvaluarVariacion(nuevo)
  {
       console.log("Valor Anterior: ",valor," Nuevo Valor: ",nuevo);
          
    if(nuevo == valor){
        console.log("Son iguales");
        $("#btnVariacion").removeClass();
        $("#btnVariacion").addClass("estable");
    
    }
    else if(nuevo > valor){          
        $("#btnVariacion").addClass("suba");

    }
    else if(nuevo < valor){
        $("#btnVariacion").addClass("baja");
      
    }

  }
