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

document.querySelectorAll(".BotonSalir").forEach (pantalla => {
    boton.addEventListener("click", () => {
        cambiarPantalla(boton.dataset.destino);
    });
})