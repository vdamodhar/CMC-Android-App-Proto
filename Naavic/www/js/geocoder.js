$(document).ready(function(){
  //Instantiate with some options and add the Control
    var geocoder = new Geocoder('nominatim', {
      provider: 'osm',
      lang: 'en',
      placeholder: 'Find address or place',
      limit: 5,
      debug: false,
      autoComplete: true,
      keepOpen: false,
      preventDefault : false
    });

    map.addControl(geocoder);
    //Listen when an address is chosen
    geocoder.on('addresschosen', function (evt) {

    });
});


