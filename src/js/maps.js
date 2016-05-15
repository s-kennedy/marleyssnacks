function loadMap() {
  var locations = [
    {
      title: "Bloorcourt Vet Clinic",
      address: "1079 Bloor Street West, Toronto, ON",
      latlng: new google.maps.LatLng(43.660148,-79.4343243)
    },
    {
      title: "Helmutt's Pet Supply",
      address: "865 Queen Street West, Toronto, ON",
      latlng: new google.maps.LatLng(43.645715, -79.410608)
    },
    {
      title: "The Dog Bowl",
      address: "984 Dundas Street West, Toronto, ON",
      latlng: new google.maps.LatLng(43.650540, -79.415198)
    },
    {
      title: "Pet Uno",
      address: "675 College Street, Toronto, ON",
      latlng: new google.maps.LatLng(43.654953, -79.417198)
    },
    {
      title: "Pet Valu",
      address: "75 Ellesmere Road, Toronto, ON",
      latlng: new google.maps.LatLng(43.758171, -79.312282)
    },
    {
      title: "Pet Valu",
      address: "1527 Victoria Park Ave, Toronto, ON",
      latlng: new google.maps.LatLng(43.726395, -79.302074)
    },
    {
      title: "Pet Valu",
      address: "339 College Street, Toronto, ON",
      latlng: new google.maps.LatLng(43.657171, -79.402658)
    },
    {
      title: "Petview",
      address: "322 Queen St W, Toronto, ON",
      latlng: new google.maps.LatLng(43.649405, -79.394373)
    },
    {
      title: "Dogee Spa",
      address: "179 Avenue Rd, Toronto, ON",
      latlng: new google.maps.LatLng(43.675073, -79.396542)
    }
  ]

  var myLatLng = {lat: 43.647743, lng: -79.414153};
  var bounds = new google.maps.LatLngBounds();

  var map = new google.maps.Map(document.getElementById('locations-map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 4
  });

  var placeMarker = function(location) {
    var marker = new google.maps.Marker({
      map: map,
      position: location.latlng,
      title: location.title
    });
    bounds.extend(location.latlng)
  }

  for (var i = 0; i < locations.length; i++ ) {
    placeMarker(locations[i])
  }

  map.fitBounds(bounds);

}
