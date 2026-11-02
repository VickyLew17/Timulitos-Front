
cambiarPantalla("portada-juego4");

document.getElementById("btn-comenzar-juego4").addEventListener("click", function () {
    cambiarPantalla("juego4");
});


const juego4 = document.getElementById("juego4");

let sonido4 = new Audio();

const instrumentos = [
    {
        imagen: "../../assets/personajes/instrumentos/teclado.png",
        sonido: "../../assets/sonidos/teclado.mp3",
        left: "3%", top: "69%", ancho: "24%", zoom: 2
    },

    {
        imagen: "../../assets/personajes/instrumentos/violin.png",
        sonido: "../../assets/sonidos/violin.mp3",
        left: "15%", top: "9%", ancho: "12%", zoom: 2.5
    },

    {
        imagen: "../../assets/personajes/instrumentos/guitarra.png",
        sonido: "../../assets/sonidos/guitarra.mp3",
        left: "4%", top: "9%", ancho: "9.4%", zoom: 2.5
    },

    {
        imagen: "../../assets/personajes/instrumentos/trompeta.png",
        sonido: "../../assets/sonidos/trompeta.mp3",
        left: "28%", top: "14%", ancho: "11%", zoom: 3
    },

    {
        imagen: "../../assets/personajes/instrumentos/bateria.png",
        sonido: "../../assets/sonidos/bateria.mp3",
        left: "55%", top: "32%", ancho: "42%", zoom: 1.5
    },

    {
        imagen: "../../assets/personajes/instrumentos/arpa.png",
        sonido: "../../assets/sonidos/arpa.mp3",
        left: "32%", top: "50%", ancho: "16%", zoom: 2
    }
]

const fila4 = document.getElementById("fila-juego4");
const imagenes4 = [];

instrumentos.forEach(dato => {

    const imagen = document.createElement("img");

    imagen.src = dato.imagen;
    imagen.classList.add("personaje");

    imagen.style.left = dato.left;
    imagen.style.top = dato.top;
    imagen.style.width = dato.ancho;

    fila4.appendChild(imagen);
    imagenes4.push(imagen);
});

let numero4 = -1;


document.addEventListener("keydown", function (event) {
    if (event.code === "Space" || event.code === "Enter") {
        if (juego4.style.display === "block") {
            
            if (numero4 >= 0) {
                imagenes4[numero4].classList.remove("activo");
                imagenes4[numero4].style.transform = "";
            }


            numero4++;

            if (numero4 >= instrumentos.length) {
                numero4 = 0;
            }

            const imagen = imagenes4[numero4];

            const caja = imagen.getBoundingClientRect();

            const moverX = window.innerWidth / 2 - (caja.left + caja.width / 2);
            const moverY = window.innerHeight / 2 - (caja.top + caja.height / 2);

            
            imagen.style.transform = `translate(${moverX}px, ${moverY}px) scale(${instrumentos[numero4].zoom})`;
            imagen.classList.add("activo");

            
            sonido4.pause();
            sonido4.currentTime = 0;
            sonido4.src = instrumentos[numero4].sonido;
            sonido4.play();
        }
    }

});
