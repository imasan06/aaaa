$(document).ready(function(){
	$("#mensaje").hide();
	iniciarTabla();

	var elementos=document.querySelectorAll(".act");
    for (var i=0;i<elementos.length;i++){
			elementos[i].addEventListener("mouseover",pon_mensaje,false);
			elementos[i].addEventListener("mouseout",quita_mensaje,false);
	}

	//selector de temas
  	var theme = $("#tema");

  	$("#to-green").click(function(){
  		theme.attr("href","css/verde.css");
  	});

  	$("#to-red").click(function(){
  		theme.attr("href","css/rojo.css");
  	});

  	$("#to-blue").click(function(){
  		theme.attr("href","css/azul.css");
  	});

  	$("#to-purple").click(function(){
  		theme.attr("href","css/morado.css");
  	});

  	$("#to-brown").click(function(){
  		theme.attr("href","css/marron.css");
  	});


});

	var miTabla = 'tabla1'; // poner aquí el id de la tabla que queremos editar

	// preparar la tabla para edición
	function iniciarTabla() {
		tab = $(this).attr(miTabla);
	    filas = tab.getElementsByTagName('tr');

		  for (i=0; fil = filas[i]; i++) {
		  	celdas = fil.getElementsByTagName('td');
		    for (j=0; cel = celdas[j]; j++) {
		      //if ((i>0 && j==celdas.length-1) ) continue; // La última columna  y la última fila no se pueden editar
		      cel.onclick = function() {crearInput(this)} 
		    } // end for j 
		  } //end for i
	    
	} // end function

	// crear input para editar datos
	function crearInput(celda) {
		celda.onclick = function() {return false}
	  	txt = celda.innerHTML;
	  	celda.innerHTML = '';
	    obj = celda.appendChild(document.createElement('input'));
	  	obj.value = txt;
	  	obj.focus();
	  	obj.onblur = function() {
		    txt = this.value;
		    celda.removeChild(obj);
		    celda.innerHTML = txt;
		    celda.onclick = function() {crearInput(celda)
		}  
	  }
	}

	function pon_mensaje(){
		tarea = $(this).text();
		$("#mensaje").show().html("<p>Tarea del día: </p>"+tarea);
		console.log(tarea);
	} 

	function quita_mensaje(){
		$("#mensaje").hide();
	}

	function abrir(){
		document.getElementById("formulario").style.display="block";
	}

	function cerrar(){
		document.getElementById("formulario").style.display="none";
	}

	function enviada(){
		alert("Enviado con éxito");
	}


