
cambiarPantalla("portada-juego6");

document.getElementById("btn-comenzar-juego6").addEventListener("click", function () {
    cambiarPantalla("juego6");
});


const juego6 = document.getElementById("juego6");
const objeto = document.getElementById("objeto-juego6");
const varita = document.getElementById("varita-magica");

const objetos = [
    {
        imagen: "../../assets/personajes/naipes.png"
    },

    {
        imagen: "../../assets/personajes/paloma.png"
    },

    {
        imagen: "../../assets/personajes/pañuelo-colores.png"
    },

    {
        imagen: "../../assets/personajes/papel-higenico.png"
    },

    {
        imagen: "../../assets/personajes/libro.png"
    }
]

let numero6 = 0;

objeto.style.opacity = 0;

document.addEventListener("keydown", function (event) {
    if (event.code === "Space" || event.code === "Enter") {
        if (juego6.style.display === "block") {

            moverVarita();

            setTimeout(() => {
                sacarObjeto();
            }, 500);
        }
    }
});


function moverVarita() {

    let tiempo = 0;

    function animarVarita() {

        tiempo += 0.02;

        let rotacion;

        if (tiempo < 0.5) {
            rotacion = 20 * (tiempo / 0.5);
        }
        else {
            rotacion = 20 - (20 * ((tiempo - 0.5) / 0.5));
        }

        varita.style.transform = `rotate(${rotacion}deg)`;

        if (tiempo < 1) {
            requestAnimationFrame(animarVarita);
        }

        else {
            varita.style.transform = "rotate(0deg)";
        }
    }

    animarVarita();
}


function sacarObjeto() {

    objeto.src = objetos[numero6].imagen;

    let tiempo = 0;

    objeto.style.opacity = "1";

    function animarObjeto() {

        tiempo += 0.01;

        let x = 40 + (35 * tiempo);

        let y = 10 + (180 * tiempo) - (180 * tiempo * tiempo);

        objeto.style.left = x + "%";
        objeto.style.bottom = y + "%";

        if (tiempo < .8) {
            requestAnimationFrame(animarObjeto);
        }


    }

    animarObjeto();



    setTimeout(() => {

        objeto.style.opacity = 0;

        
    numero6++;

    if (numero6 >= objetos.length) {
        numero6 = 0;
    }

    }, 2000);
}
