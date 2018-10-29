import $ from 'jquery'
import colors from './colors';
// const hola = () => console.log("hola");
// hola();

console.log(colors);
// $("#myDiv").text("Hola que tal estas tu");

getLocation()
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(savePosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function savePosition(position) {
    console.log("savePosition");
    let localCordenadas = {}

    let posicion = {
        _latitud: position.coords.latitude,
        _longitud: position.coords.longitude,
    }   

    if( Object.keys(window.localStorage).length === 0){
        window.localStorage.setItem('cordenadas', JSON.stringify(posicion));
        localCordenadas = JSON.parse(window.localStorage.getItem('cordenadas')) }
    else{
        var comparaPosiciones = posicion._latitud == localCordenadas._latitud && posicion._longitud == localCordenadas._longitud ;

        if(!comparaPosiciones)
        {
            posicion = {
                _latitud: position.coords.latitude,
                _longitud: position.coords.longitude,
            }
        }
    }
    console.log("carga text");
    $("#myDiv").text("tu posición es Latitud: " +  position.coords.latitude +  "longitud: " +  position.coords.longitude);

    Notification.requestPermission().then(function(result) {
        console.log(result);
      });
      new Notification("tu posición es Latitud: " +  position.coords.latitude +  "longitud: " +  position.coords.longitude);
}





//console.log(window.localStorage)
