
window.addEventListener("load", pageInit, false);

var map;

function pageInit(){
    new Map();
}

function Map(){

    this.init = function(){
        google.maps.event.addDomListener(window, 'load', this.createMap());
    };

    this.createMap = function(){
        var mapOptions = {
            center: { lat: 43.7799581, lng: 11.2425637},
            zoom: 14
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        this.createMarkers();
    };

    this.createMarkers = function(){

        var markers = [
            [43.7799580,11.2425637],
            [43.773,11.2425634],
            [43.775,11.24259]
        ];

        for(var i = 0; i<markers.length; i++){
            var myLatLong = new google.maps.LatLng(markers[i][0],markers[i][1]);

            var marker = new google.maps.Marker({
                position:myLatLong,
                map:map,
                title: 'available vespa'
            });

            var contentString = '<div id="content">'+
                '<a href="../scooter.html">scooterhtml</a>' +
                '</div>';

            var infoWindow = new google.maps.InfoWindow({
                conent: contentString
            });

            google.maps.event.addListener(marker, 'mouseover', function() {
                infoWindow.close(map,marker);
                infoWindow.setContent(contentString);
                infoWindow.open(map,marker);
            });

            google.maps.event.addListener(marker, 'click', function() {
                infoWindow.close(map,marker);
            });
        }
    };

    this.init();
}