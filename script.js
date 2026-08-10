function cambiarPantalla(idPantalla) {
    document.querySelectorAll(".pantalla").forEach(pantalla => {
        pantalla.style.display = "none";
    });
    document.getElementById(idPantalla).style.display = "block";
}

cambiarPantalla("pantalla-inicio");

document.getElementById("btnInformes").addEventListener("click", () => {
    cambiarPantalla("pantalla-informes");
})

document.getElementById("btnAbout").addEventListener("click", () => {
    cambiarPantalla("pantalla-about");
})

document.getElementById("btnComenzar").addEventListener("click", () => {
   document.getElementById("Comenzar").style.display= "flex";
})

document.querySelectorAll(".BotonSalir").forEach (boton => {
    boton.addEventListener("click", () => {
        cambiarPantalla(boton.dataset.destino);
    });
})

document.querySelectorAll(".btn-cerrar-popup").forEach (boton => {
    boton.addEventListener("click", () => {
        boton.closest("#Comenzar, #CrearUsuario").style.display = "none";
    });
})

document.querySelectorAll("#btn-con-cuenta, #btn-sin-cuenta").forEach(boton => {
    boton.addEventListener("click", () => {
        cambiarPantalla(boton.dataset.destino);
        document.getElementById("Comenzar").style.display = "none";
    });
});

document.querySelectorAll("#btnCrearJugador1, #btnCrearJugador2").forEach(boton => {
    boton.addEventListener("click", () => {
        document.getElementById("CrearUsuario").style.display = "flex";
    });
});

document.querySelectorAll("#btn-jugar").forEach (boton => {
    boton.addEventListener("click", () => {
        cambiarPantalla(boton.dataset.destino);
        document.getElementById("CrearUsuario").style.display = "none";
    });
})

document.querySelectorAll(".usuario-item").forEach (boton => {
    boton.addEventListener("click", () => {
        cambiarPantalla(boton.dataset.destino);
    });
})

document.querySelectorAll(".juego-card").forEach(card => {
    card.addEventListener("click", () => {
        cambiarPantalla(card.dataset.destino);
    });
});

document.querySelectorAll(".btn-comenzar-juego").forEach(card => {
    card.addEventListener("click", () => {
        cambiarPantalla(card.dataset.destino);
    });
});
