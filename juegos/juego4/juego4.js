
cambiarPantalla("portada-juego4");

document.getElementById("btn-comenzar-juego4").addEventListener("click", function () {
    cambiarPantalla("juego4");
});


const juego4 = document.getElementById("juego4");
const instrumento = document.getElementById("instrumento-juego4");

let sonido4 = new Audio();

const instrumentos = [
    {
        imagen: "../../assets/personajes/instrumentos/teclado.png",
        sonido: "../../assets/sonidos/teclado.mp3"
    },

    {
        imagen: "../../assets/personajes/instrumentos/violin.png",
        sonido: "../../assets/sonidos/violin.mp3"
    },

    {
        imagen: "../../assets/personajes/instrumentos/guitarra.png",
        sonido: "../../assets/sonidos/guitarra.mp3"
    },

    {
        imagen: "../../assets/personajes/instrumentos/flauta.webp",
        sonido: "../../assets/sonidos/flauta.mp3"
    },

    {
        imagen: "../../assets/personajes/instrumentos/maracas.jfif",
        sonido: "../../assets/sonidos/maracas.mp3"
    },

    {
        imagen: "../../assets/personajes/instrumentos/bateria.webp",
        sonido: "../../assets/sonidos/bateria.mp3"
    },

    {
        imagen: "../../assets/personajes/instrumentos/arpa.avif",
        sonido: "../../assets/sonidos/arpa.mp3"
    },

    {
        imagen: "../../assets/personajes/instrumentos/saxo.webp",
        sonido: "../../assets/sonidos/saxo.mp3"
    }

]

let numero4 = 0;

instrumento.src = instrumentos[numero4].imagen;

document.addEventListener("keydown", function (event) {
    if (event.code === "Space" || event.code === "Enter") {
        if (juego4.style.display === "block") {

            numero4++;

            if (numero4 >= instrumentos.length) {
                numero4 = 0;
            }

            instrumento.src = instrumentos[numero4].imagen;

            sonido4.pause();
            sonido4.currentTime = 0;
            sonido4.src = instrumentos[numero4].sonido;
            sonido4.play();
        }
    }

});
