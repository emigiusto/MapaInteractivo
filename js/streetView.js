streetViewModulo = (function () {
  var panorama // 'Visor' de StreetView

  function inicializar () {
    panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: {lat: 42.345573, lng: -71.098326},
        pov: {
          heading: 34,
          pitch: 10
        }
      });
      mapa.setStreetView(panorama);
  }

    // Actualiza la ubicación del Panorama
  function fijarStreetView (ubicacion) {
        /* Completar la función fijarStreetView que actualiza la posición
         de la variable panorama y cambia el mapa de modo tal que se vea
         el streetView de la posición actual. */
         console.log(ubicacion)
         console.log(panorama.position)
         panorama.position = ubicacion;
         console.log(panorama.position)
         mapa.setStreetView(panorama);
  }

  return {
    inicializar,
    fijarStreetView
  }
})()
