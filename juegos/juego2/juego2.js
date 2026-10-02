cambiarPantalla("portada-juego2");

document.getElementById("btn-comenzar-juego2").addEventListener("click", function () {
    cambiarPantalla("juego2");
});


const juego2 = document.getElementById("juego2");
const sonido2 = new Audio("assets/sonidos/fuego-artificial.mp3");
sonido2.preload = "auto";

document.addEventListener("keydown", function (event) {

    if (event.code === "Space" || event.code === "Enter") {

        if (document.getElementById("juego2").style.display === "block") {

            console.log("creando fuego artificial");

            crearFuegoArtificial();

        }
    }
});

function crearFuegoArtificial() {

    const particulas = [];


    const xInicial = Math.random() * window.innerWidth;
    const yInicial = Math.random() * window.innerHeight;

    sonido2.pause();
    sonido2.playbackRate = 1.0;
    sonido2.currentTime = 1.7;
    sonido2.play().catch(error => {
        console.log("No se pudo reproducir el sonido:", error);
    });

    const colores = ["red", "blue", "yellow", "green", "pink", "purple", "orange", "cyan", "magenta", "lime", "teal", "indigo", "violet", "gold", "silver", "coral", "salmon", "turquoise", "lavender", "peach", "mint", "plum", "navy", "maroon", "olive", "aqua", "fuchsia", "crimson", "khaki", "orchid", "peru", "sienna", "tan", "tomato", "wheat", "azure", "beige", "bisque", "chocolate", "cornflowerblue", "darkorange", "deeppink", "dodgerblue", "firebrick", "forestgreen", "hotpink", "lightseagreen", "mediumslateblue"];

    const color = colores[Math.floor(Math.random() * colores.length)];


    for (let i = 0; i < 60; i++) {

        const particula = document.createElement("div");

        particula.classList.add("particula");


        particula.style.left = xInicial + "px";
        particula.style.top = yInicial + "px";


        particula.style.backgroundColor = color;

        particula.style.opacity = 1;


        particula.dx = (Math.random() * 2 - 1) * 4;
        particula.dy = (Math.random() * 2 - 1) * 4;

        juego2.appendChild(particula);

        particulas.push(particula);
    }

    moverParticulas(particulas);
}

function moverParticulas(particulas) {

    particulas.forEach(function (particula) {

        let x = parseFloat(particula.style.left);
        let y = parseFloat(particula.style.top);

        x += particula.dx;
        y += particula.dy;

        particula.style.left = x + "px";
        particula.style.top = y + "px";

        let opacidad = parseFloat(particula.style.opacity);

        opacidad -= 0.01;

        particula.style.opacity = opacidad;

        if (opacidad <= 0) {
            particula.remove();
        }

    });

    requestAnimationFrame(function () {
        moverParticulas(particulas);
    });

}
