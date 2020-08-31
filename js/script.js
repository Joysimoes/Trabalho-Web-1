
function Adicionar(){




    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    

  var cont =0;

        
    var nome2 = nome.bold();
    var mensagem2 = mensagem.bold();

   var listahtml = document.getElementById("lista").innerHTML;

   listahtml = listahtml + "<li>"+nome2+": "+mensagem2+"</li>" ;
   listahtml = listahtml + "<button type=button>Excluir</button>";

   document.getElementById("lista").innerHTML = listahtml ;  
                
}


function newPopup(){
    varWindow = window.open ('creditos.html', 'popup')
    }



    