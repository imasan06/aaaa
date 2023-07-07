var total = 100; // Valor total para el cálculo porcentual
    var data = {
      labels: ['ESTADO'],
      datasets: [{
        label: 'PROYECTO NAME',
        data: [75],
        backgroundColor: 'black', // Color de fondo de la barra
        borderColor: 'rgba(75, 192, 192, 1)', // Color del borde de la barra
        borderWidth: 1 // Ancho del borde de la barra
      }]
    };

    // Configuración del gráfico
    var options = {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y', // Establecer el eje Y como el eje de índice
      scales: {
        x: {
          beginAtZero: true,
          max: total, // Establecer el valor máximo del eje X
          ticks: {
            callback: function(value) {
              return value + '%'; // Agregar el símbolo de porcentaje a los valores del eje X
            }
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {las
              return context.parsed.toFixed(2) + '%';
            }
          }
        }
      }
    };

    // Crear el gráfico de barra horizontal porcentual
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });