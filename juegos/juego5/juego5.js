cambiarPantalla("portada-juego5");

document.getElementById("btn-comenzar-juego5").addEventListener("click", function () {
    cambiarPantalla("juego5");
});


const juego5 = document.getElementById("juego5");
const animal = document.getElementById("animal-juego5");

let sonido5 = new Audio();

const animales = [
    {
        imagen: "../../assets/personajes/animales/pollito.png",
        sonido: "../../assets/sonidos/pollito.mp3"
    },

    {
        imagen: "../../assets/personajes/animales/vaca.jpg",
        sonido: "../../assets/sonidos/vaca.mp3"
    },

    {
        imagen: "../../assets/personajes/animales/cerdo.jpg",
        sonido: "../../assets/sonidos/cerdo.mp3"
    },

    {
        imagen: "../../assets/personajes/animales/gato.png",
        sonido: "../../assets/sonidos/gato.mp3"
    },

    {
        imagen: "../../assets/personajes/animales/oveja.jpg",
        sonido: "../../assets/sonidos/oveja.mp3"
    },

    {
        imagen: "../../assets/personajes/animales/perro.jpg",
        sonido: "../../assets/sonidos/perro.mp3"
    },

    {
        imagen: "../../assets/personajes/animales/mono.jpg",
        sonido: "../../assets/sonidos/mono.mp3"
    },

    {
        imagen: "../../assets/personajes/animales/lobo.jpg",
        sonido: "../../assets/sonidos/lobo.mp3"
    }
]

let numero5 = 0;

animal.src = animales[numero5].imagen;

document.addEventListener("keydown", function (event) {
    if (event.code === "Space" || event.code === "Enter") {
        if (juego5.style.display === "block") {

            numero5++;

            if (numero5 >= animales.length) {
                numero5 = 0;
            }

            animal.src = animales[numero5].imagen;

            sonido5.pause();
            sonido5.currentTime = 0;
            sonido5.src = animales[numero5].sonido;
            sonido5.play();
        }
    }

});
