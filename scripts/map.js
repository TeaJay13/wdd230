

function myMap() {
    var idahoFalls = {lat: 43.4927, lng: -112.0408};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: idahoFalls
    });
    var marker = new google.maps.Marker({
        position: idahoFalls,
        map: map
    });
}

