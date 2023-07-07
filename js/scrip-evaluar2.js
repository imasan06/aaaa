document.getElementById("inputbus").addEventListener("input", onInputChange);

function onInputChange(){
    let inputText= document.getElementById("inputbus").value.toString().toLowerCase();
    //console.log(inputText);
    let tableBody = document.getElementById("datatable");
    let tableRows = tableBody.getElementsByTagName("tr");
    
    for(let i = 0; i< tableRows.length; i++){
        //console.log(tableRows[i].cells[3].textContent);
        let textoConsulta = tableRows[i].cells[0].textContent.toString().toLowerCase();

        if( textoConsulta.indexOf(inputText)=== -1){
            tableRows[i].style.visibility = "collapse";
        }else{
            tableRows[i].style.visibility = "";            
        }
    }
}



  // Obtén el lienzo del gráfico
  var lienzo = document.getElementById('miGraficoCircular').getContext('2d');

  // Configura los datos del gráfico
  var datos = {
    labels: ['P Inicio       ', 'P Proceso', 'P Terminado'], // Etiquetas para cada segmento del gráfico
    datasets: [{
      data: [3, 4, 7], // Valores para cada segmento del gráfico
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'] // Colores de fondo para cada segmento
    }]
  };

  // Configura las opciones del gráfico
  var opciones = {
    responsive: true // Hace que el gráfico se adapte al tamaño de su contenedor
  };

  // Crea el gráfico circular
  var graficoCircular = new Chart(lienzo, {
    type: 'pie', // Tipo de gráfico circular
    data: datos,
    options: opciones
  });

  //BOTON PARA IR A OTRA PAGINA

  function irAPagina() {
    window.location.href = 'index-evaluacion-eva.html';
  }

