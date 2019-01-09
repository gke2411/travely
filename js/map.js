var map, marker1, marker2, marker3,
	  		center = {
	  			lat: 43.94285655995267,
	  			lng: 12.390053432449081
	  			},
	  		image = 'img/map_marker.svg',
	  		mapWrap = document.getElementById('map');


  		function initMap() {
		var styledMapType = new google.maps.StyledMapType(
            [ { "elementType": "geometry",
                "stylers": [ 
                { "color": "#f5f5f5" } 
                ] }, 
              { "elementType": "labels.icon",
               "stylers": [ 
               { "visibility": "off" }
                ] }, 
               { "elementType": "labels.text.fill",
                "stylers": [
                 { "color": "#616161" }
                ] }, 
               { "elementType": "labels.text.stroke",
                "stylers": [
                 { "color": "#f5f5f5" }
                ] }, 
                { "featureType": "administrative.land_parcel",
                 "elementType": "labels.text.fill",
                 "stylers": [
                  { "color": "#bdbdbd" },
                  { "visibility": "off" }
                  ] },
                { "featureType": "landscape",
                  "stylers": [
                  { "visibility": "simplified" }
                  ] },
                { "featureType": "poi",
                  "stylers": [
                  { "visibility": "off" } 
                  ] },
                { "featureType": "poi",
                  "elementType": "geometry",
                  "stylers": [
                   { "color": "#eeeeee" },
                   { "visibility": "off" } 
                   ] }, 
                { "featureType": "poi",
                  "elementType": "labels.text.fill", 
                  "stylers": [ 
                   { "color": "#757575" } 
                   ] }, 
                 { "featureType": "poi.park", 
                   "elementType": "geometry", 
                   "stylers": [ 
                    { "color": "#e5e5e5" } 
                   ] }, 
                 { "featureType": "poi.park", 
                   "elementType": "labels.text.fill", 
                   "stylers": [ 
                    { "color": "#9e9e9e" } 
                    ] }, 
                 { "featureType": "road", 
                   "elementType": "geometry", 
                   "stylers": [ 
                   { "color": "#ffffff" } 
                   ] }, 
                 { "featureType": "road.arterial", 
                   "elementType": "labels.text.fill", 
                   "stylers": [ 
                   { "color": "#757575" } 
                   ] }, 
                 { "featureType": "road.highway", 
                   "elementType": "geometry", 
                   "stylers": [ 
                   { "color": "#dadada" } 
                   ] }, 
                 { "featureType": "road.highway", 
                   "elementType": "labels.text.fill", 
                   "stylers": [ 
                   { "color": "#616161" } 
                   ] }, 
                 { "featureType": "road.local", 
                   "elementType": "labels.text.fill", 
                   "stylers": [ 
                   { "color": "#9e9e9e" } 
                   ] }, 
                 { "featureType": "transit.line", 
                   "elementType": "geometry", 
                   "stylers": [ 
                    { "color": "#e5e5e5" } 
                   ] }, 
                 { "featureType": "transit.station", 
                   "elementType": "geometry", 
                   "stylers": [ 
                    { "color": "#eeeeee" } 
                    ] }, 
                 { "featureType": "water", 
                   "elementType": "geometry", 
                   "stylers": [ 
                   { "color": "#c9c9c9" } 
                   ] }, 
                 { "featureType": "water", 
                   "elementType": "labels.text.fill", 
                   "stylers": [ 
                   { "color": "#9e9e9e" } 
                   ] } 
                ],
            {name: 'Styled Map'});

	  		map = new google.maps.Map(mapWrap, {
	  				center: center,
	  				zoom: 5,
        			disableDefaultUI: true

        	});
	  		
	  		marker1 = new google.maps.Marker({
	          position: {
	  			lat: 43.94285655995267,
	  			lng: 12.390053432449081
	  			},
	          map: map,
	          icon: image
	        });
	        
	        marker2 = new google.maps.Marker({
	          position: {
	  			lat: 46.05060102760967,
	  			lng: 4.934435657542907
	  			},
	          map: map,
	          icon: image
	        });

	        marker3 = new google.maps.Marker({
	          position: {
				lat: 39.59139276056763,
				lng: -3.6656308218427744
				},
	          map: map,
	          icon: image
	        });

			map.mapTypes.set('styled_map', styledMapType);
        	map.setMapTypeId('styled_map');
        };