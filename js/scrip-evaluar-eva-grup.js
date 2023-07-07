var searchInput = document.getElementById('searchInput');
    var container = document.getElementById('container');
    var cuadros = container.getElementsByClassName('cuadro');

    searchInput.addEventListener('keyup', function() {
      var searchTerm = searchInput.value.toLowerCase();

      for (var i = 0; i < cuadros.length; i++) {
        var cuadro = cuadros[i];
        var titulo = cuadro.getElementsByTagName('h2')[0].innerText.toLowerCase();
        var contenido = cuadro.getElementsByTagName('p')[0].innerText.toLowerCase();

        if (titulo.includes(searchTerm) || contenido.includes(searchTerm)) {
          cuadro.style.display = 'block';
        } else {
          cuadro.style.display = 'none';
        }
      }
    });




    function mostrarSeccion(seccion) {
        var secciones = document.querySelectorAll('.estudiantes, .profesores');
        
        for (var i = 0; i < secciones.length; i++) {
          if (secciones[i].classList.contains(seccion)) {
            secciones[i].style.display = 'block';
          } else {
            secciones[i].style.display = 'none';
          }
        }
      }
      