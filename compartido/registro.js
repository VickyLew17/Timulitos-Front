
const rutasJuegos = {
    "Burbujero": "burbujero",
    "Destellos": "destellos",
    "Tiro Libre": "tiro-libre",
    "Banda Loca": "banda-loca",
    "Zoo": "zoo",
    "Magia": "magia",
    "Splash!": "splash",
    "Topito Cabezón": "topito-cabezon"
};


function registrarPartida(nombreJugador, nombreCompañero, juego, minutos, puntos, boton) {

    const ruta = rutasJuegos[juego];

   

    return fetch(SERVIDOR + "/resultados/" + ruta, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            usuario: nombreJugador,
            contrincante: nombreCompañero,
            tiempo: minutos,
            puntos: puntos
        }),
        keepalive: true
    })
    .catch(error => {
        console.log("No se pudo guardar la partida en el servidor:", error);
    });
}