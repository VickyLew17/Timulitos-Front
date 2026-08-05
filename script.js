function cambiarPantalla(idPantalla) {

    document.querySelectorAll(".pantalla").forEach(pantalla => {
        pantalla.style.display = "none";
    });

    document.getElementById(idPantalla).style.display = "block";
}

/*cambiarPantalla("pantalla-inicio");

document.getElementById("btnAbout").addEventListener("click", () => {
    cambiarPantalla("pantalla-about");
});

document.getElementById("btnInformes").addEventListener("click", () => {
    cambiarPantalla("pantalla-informes");
});

document.getElementById("btnComenzar").addEventListener("click", () => {
    document.getElementById("Comenzar").style.display = "flex";
}); */