var datos = [
    { nombre: "Carapongo", semestre: "Semestre I-2023", fecha: "02/04/2023", localidad: "Chosica", vigencia: "1 año" },
    { nombre: "El Olivar", semestre: "Semestre ll-2022", fecha: "01/02/2022", localidad: "Chosica", vigencia: "2 años" },
    { nombre: "Vallecito", semestre: "Semestre ll-2022", fecha: "04/03/2023", localidad: "Chosica", vigencia: "3 años" }
  ];

  // Función para cargar los datos en la tabla
  function cargarDatos() {
    var tabla = document.getElementById("tbodyDatos");
    tabla.innerHTML = "";

    for (var i = 0; i < datos.length; i++) {
      var fila = tabla.insertRow();

      var nombreConvenio = fila.insertCell();
      nombreConvenio.innerHTML = datos[i].nombre;

      var semestre = fila.insertCell();
      semestre.innerHTML = datos[i].semestre;

      var fecha = fila.insertCell();
      fecha.innerHTML = datos[i].fecha;

      var localidad = fila.insertCell();
      localidad.innerHTML = datos[i].localidad;

      var tiempoVigencia = fila.insertCell();
      tiempoVigencia.innerHTML = datos[i].vigencia;

      var acciones = fila.insertCell();
      acciones.innerHTML = '<button onclick="eliminar(' + i + ')">Eliminar</button>';
    }
  }

  // Función para filtrar los datos de la tabla
  function filtrar() {
    var input = document.getElementById("filtroInput");
    var filtro = input.value.toUpperCase();
    var tabla = document.getElementById("tablaDatos");
    var filas = tabla.getElementsByTagName("tr");

    for (var i = 0; i < filas.length; i++) {
      var celdaNombre = filas[i].getElementsByTagName("td")[0];
      if (celdaNombre) {
        var textoCelda = celdaNombre.textContent || celdaNombre.innerText;
        if (textoCelda.toUpperCase().indexOf(filtro) > -1) {
          filas[i].style.display = "";
        } else {
          filas[i].style.display = "none";
        }
      }
    }
  }

  // Función para abrir el modal
  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  // Función para cerrar el modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  // Función para cancelar el agregado de un registro
  function cancelar() {
    closeModal();
    document.getElementById("nombreConvenio").value = "";
    document.getElementById("semestre").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("localidad").value = "";
    document.getElementById("tiempoVigencia").value = "";
  }

  // Función para agregar un nuevo registro
  function agregar() {
    var nombre = document.getElementById("nombreConvenio").value;
    var semestre = document.getElementById("semestre").value;
    var fecha = document.getElementById("fecha").value;
    var localidad = document.getElementById("localidad").value;
    var vigencia = document.getElementById("tiempoVigencia").value;

    datos.push({ nombre: nombre, semestre: semestre, fecha: fecha, localidad: localidad, vigencia: vigencia });
    closeModal();
    cargarDatos();
    document.getElementById("nombreConvenio").value = "";
    document.getElementById("semestre").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("localidad").value = "";
    document.getElementById("tiempoVigencia").value = "";
  }

  // Función para eliminar un registro
  function eliminar(index) {
    datos.splice(index, 1);
    cargarDatos();
  }

  // Cargar los datos iniciales
  cargarDatos();
 // ... código previo ...

    // Función para filtrar la tabla según la palabra clave ingresada
    function filtrarTabla() {
        var input = document.getElementById("filtroInput");
        var filtro = input.value.toUpperCase();
        var tabla = document.getElementById("tablaDatos");
        var filas = tabla.getElementsByTagName("tr");
  
        // Recorrer todas las filas y mostrar/ocultar según la coincidencia con la palabra clave
        for (var i = 0; i < filas.length; i++) {
          var mostrarFila = false;
          var celdas = filas[i].getElementsByTagName("td");
  
          for (var j = 0; j < celdas.length; j++) {
            var textoCelda = celdas[j].innerText || celdas[j].textContent;
  
            if (textoCelda.toUpperCase().indexOf(filtro) > -1) {
              mostrarFila = true;
              break;
            }
          }
  
          if (mostrarFila) {
            filas[i].style.display = "";
          } else {
            // Si no hay ninguna celda que coincida, verificar si es la fila del encabezado
            if (i === 0) {
              filas[i].style.display = "";
            } else {
              filas[i].style.display = "none";
            }
          }
        }
      }
  