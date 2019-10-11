geocodificadorModulo = (function () {
  var geocodificador // Geocodificador que dada una dirección devuelve una coordenada
  
    // Permite obtener las coordenadas y las usa con la función llamada por parámtero
  function usaDireccion (direccion, funcionALlamar) {
        /* Completar la función usaDireccion(dirección,funcionALlamar)
     para que se obtengan las coordenadas a partir de la dirección pasada por parámetro
     y que llame a la función pasada por parámetro con los siguientes parámetros
     dirección: la dirección pasada por parámetro
     coordenada: la ubicación de tipo google.maps.LatLng */
     
     geocodificador.geocode({'address': direccion}, function(results, status) {
			if (status === 'OK') {
        var resultadosBusqueda = results[0].geometry.location;
				funcionALlamar(direccion,resultadosBusqueda);
          //ESTO ESTA EN LA FUNCION direccionesModulo.agregarDireccionYMostrarEnMapa de "direcciones.js"
        /*resultados_lat = resultados.lat(),
					resultados_long = resultados.lng();*/
				/*map.setCenter(results[0].geometry.location);
				var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
        });*/
        
			} else {
				var mensajeError = "";
				if (status === "ZERO_RESULTS") {
					mensajeError = "No hubo resultados para la dirección ingresada.";
				} else if (status === "OVER_QUERY_LIMIT" || status === "REQUEST_DENIED" || status === "UNKNOWN_ERROR") {
					mensajeError = "Error general del mapa.";
				} else if (status === "INVALID_REQUEST") {
					mensajeError = "Error de la web. Contacte con Google Maps API support.";
				}
				alert(mensajeError);
			}
		});
	}


    // Inicializo el geocoder que obtiene las corrdenadas a partir de una dirección
    // La variable dirección es igual al texto ingresado por el usuario
    // Llama a la función usaDireccion para agregarla a los listados y mostrarlo en el mapa
  function inicializar () {
    var that = this
    geocodificador = new google.maps.Geocoder()

    //Cuando hay un cambio en el campo de #direccion lo busca

      $('#direccion').autocomplete({
        select: function(event,ui){
            console.log(event)
            console.log(ui)
      }})

  }
  /*
    $('#direccion').change(function(){
      debugger
        console.log("Hubo cambios en #direccion")
        console.log("direccion")
        var direccion2 = document.getElementById('direccion')
        console.log(direccion2)
        var direccion = document.getElementById('direccion').value
        console.log(direccion)
        that.usaDireccion(direccion, direccionesModulo.agregarDireccionYMostrarEnMapa)
      })

      $('#agregar').change(function(){
        console.log("Hubo cambios en #agregar")
        var direccion = document.getElementById('agregar').value
        
        that.usaDireccion(direccion, direccionesModulo.agregarDireccionYMostrarEnMapa)
      })

      // cuando se presiona la tecla enter en el campo direccion, se agrega la dirección y se muestra en el mapa
    /*document.querySelector('#direccion').addEventListener('keypress', function (e) {
      var key = e.which || e.keyCode
      if (key === 13) { // 13 is enter
                // code for enter
        var direccion = document.getElementById('direccion').value
        that.usaDireccion(direccion, direccionesModulo.agregarDireccionYMostrarEnMapa)
      }
    })*/
  return {
    usaDireccion,
    inicializar
  }
})()
