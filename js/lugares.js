lugaresModulo = (function () {
  var servicioLugares // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).

    // Completa las direcciones ingresadas por el usuario a y establece los límites
    // con un círculo cuyo radio es de 20000 metros.
  function autocompletar () {
    var input = document.getElementById('direccion');
    var input2 = document.getElementById('desde');
    var input3 = document.getElementById('hasta');
    var input4 = document.getElementById('agregar');
        /* Completar la función autocompletar(): autocompleta los 4 campos de texto de la
        página (las direcciones ingresables por el usuario).
        Para esto creá un círculo con radio de 20000 metros y usalo para fijar
        los límites de la búsqueda de dirección. El círculo no se debe ver en el mapa. */
      var limitCircle = new google.maps.Circle( {
        center: mapa.center,
        radius: 20000
      });

    var options = {
      bounds: limitCircle.getBounds()
    };
    new google.maps.places.Autocomplete(input, options);
    new google.maps.places.Autocomplete(input2, options);
    new google.maps.places.Autocomplete(input3, options);
    new google.maps.places.Autocomplete(input4, options)
  }

    // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar () {
    servicioLugares = new google.maps.places.PlacesService(mapa);
    autocompletar();
  }

    // Busca lugares con el tipo especificado en el campo de TipoDeLugar

  function buscarCerca (posicion) {
        /* Completar la función buscarCerca  que realice la búsqueda de los lugares
    del tipo (tipodeLugar) y con el radio indicados en el HTML cerca del lugar
    pasado como parámetro y llame a la función marcarLugares. */
      let request = {
        location: posicion,
        radius: parseInt($('#radioS').text()).toString(),
        types: [ $('#tipoDeLugar')[0].value ]
      };

      servicioLugares.nearbySearch(request, marcadorModulo.marcarLugares);
/*
      servicioLugares.nearbySearch(request,function(results, status, pagination) {
          if (status !== 'OK') return;
          marcadorModulo.marcarLugares(results,status);

          moreButton.disabled = !pagination.hasNextPage;
          getNextPage = pagination.hasNextPage && function() {
            pagination.nextPage();
          };
        });
*/
  }
  return {
    inicializar,
    buscarCerca
  }
})()
