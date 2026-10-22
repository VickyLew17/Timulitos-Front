const nombreJuego = document.body.dataset.juego;

let inicioPartida = null;
let toquesJ1 = 0;
let toquesJ2 = 0;


document.querySelector(".btn-comenzar-juego").addEventListener("click", () => {
    
    inicioPartida = true

    toquesJ1 = 0;
    toquesJ2 = 0;
});

document.addEventListener("keydown", (event) => {
    if (event.code === "Space"){
        toquesJ1 ++;
    }
    if (event.code === "Enter"){
        toquesJ2 ++;
    }
});



document.querySelectorAll(".BotonSalir").forEach(boton => {
    boton.addEventListener("click", terminarPartida);
});

function terminarPartida() {
    if (inicioPartida === null){
        return;
    }

    const guardado = localStorage.getItem("jugadoresActuales")

    if (guardado === null){
        return;
    }

    const actuales = JSON.stringify(guardado);

    registrarPartida(actuales.jugador1, actuales.jugador2, nombreJuego, toquesJ1);
    registrarPartida(actuales.jugador2, actuales.jugador1, nombreJuego, toquesJ2);

    alert();


    inicioPartida = null
}