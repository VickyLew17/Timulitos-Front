
cambiarPantalla("portada-juego5");

document.getElementById("btn-comenzar-juego5").addEventListener("click", function () {
    cambiarPantalla("juego5");
});


const juego5 = document.getElementById("juego5");


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
        imagen: "../../assets/personajes/animales/gato.jpg",
        sonido: "../../assets/sonidos/gato.mp3"
    },

    {
        imagen: "../../assets/personajes/animales/oveja.jpg",
        sonido: "../../assets/sonidos/oveja.mp3"
    },

    {
        imagen: "../../assets/personajes/animales/perro.jpg",
        sonido: "../../assets/sonidos/perro.mp3"
    }
]

const fila5 = document.getElementById("fila-juego5");
const imagenes5 = [];

animales.forEach(dato => {

    const imagen = document.createElement("img");

    imagen.src = dato.imagen;
    imagen.classList.add("personaje");

    fila5.appendChild(imagen);
    imagenes5.push(imagen);
});

let numero5 = -1;


document.addEventListener("keydown", function (event) {
    if (event.code === "Space" || event.code === "Enter") {
        if (juego5.style.display === "block") {

            if (numero5 >= 0) { imagenes5[numero5].classList.remove("activo");
                imagenes5[numero5].style.transform = "";
            }


            numero5++;

            if (numero5 >= animales.length) {
                numero5 = 0;
            }

            const imagen = imagenes5[numero5];

            // 3. Calcular cuánto hay que moverlo para llegar al centro
            const caja = imagen.getBoundingClientRect();

            const moverX = window.innerWidth / 2 - (caja.left + caja.width / 2);
            const moverY = window.innerHeight / 2 - (caja.top + caja.height / 2);

            
            imagen.style.transform = `translate(${moverX}px, ${moverY}px) scale(3.2)`;
            imagen.classList.add("activo");

            
            sonido5.pause();
            sonido5.currentTime = 0;
            sonido5.src = animales[numero5].sonido;
            sonido5.play();

        }
    }

});
