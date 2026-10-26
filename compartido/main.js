
const SERVIDOR = "http://localhost:3000";

function cambiarPantalla(idPantalla) {
    console.log(idPantalla);

    document.querySelectorAll(".pantalla").forEach(pantalla => {
        pantalla.style.display = "none";
    });
    document.getElementById(idPantalla).style.display = "block";

};