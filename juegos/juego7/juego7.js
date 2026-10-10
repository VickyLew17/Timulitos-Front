cambiarPantalla("portada-juego7");

document.getElementById("btn-comenzar-juego7").addEventListener("click", function () {
    cambiarPantalla("juego7");
});

const juego7 = document.getElementById("juego7");

const anzuelo1 = document.getElementById("anzuelo-1");
const anzuelo2 = document.getElementById("anzuelo-2");


let pescando1 = false;
let pescando2 = false;

const peces = [
    document.getElementById("pez-1"),
    document.getElementById("pez-2"),
    document.getElementById("pez-3"),
    document.getElementById("pez-4"),
    document.getElementById("pez-5"),
    document.getElementById("pez-6"),
    document.getElementById("pez-7")
];

let pezPescado = null;

let movimientoPeces = 0;
function moverPeces() {

    movimientoPeces += 0.01;

    if (pezPescado !== peces[0]) {
        peces[0].style.transform =
            `translateX(${Math.sin(movimientoPeces) * 30}px)`;
    }

    if (pezPescado !== peces[1]) {
        peces[1].style.transform =
            `translateX(${Math.sin(movimientoPeces + 1) * 30}px)`;
    }

    if (pezPescado !== peces[2]) {
        peces[2].style.transform =
            `translateX(${Math.sin(movimientoPeces + 2) * 30}px)`;
    }

    if (pezPescado !== peces[3]) {
        peces[3].style.transform =
            `translateX(${Math.sin(movimientoPeces + 3) * 30}px)`;
    }

    if (pezPescado !== peces[4]) {
        peces[4].style.transform =
            `translateX(${Math.sin(movimientoPeces + 4) * 30}px)`;
    }

    if (pezPescado !== peces[5]) {
        peces[5].style.transform =
            `translateX(${Math.sin(movimientoPeces + 5) * 30}px)`;
    }
    if (pezPescado !== peces[6]) {
        peces[6].style.transform =
            `translateX(${Math.sin(movimientoPeces + 6) * 30}px)`;
    }

    requestAnimationFrame(moverPeces);
}

moverPeces();

document.addEventListener("keydown", function (event) {

    if (juego7.style.display === "block") {

        if (event.code === "Space" && !pescando1) {

            pescar(anzuelo1, 1);
        }

        if (event.code === "Enter" && !pescando2) {

            pescar(anzuelo2, 2);
        }

    }
});


function pescar(anzuelo, jugador) {

    let pez;

    if (jugador === 1) {
        pez = peces[0];
    }

    else {
        pez = peces[2];
    }

    let posicion = 25;

    if (jugador === 1) {
        pescando1 = true;
    } else {
        pescando2 = true;
    }


    function bajarAnzuelo() {

        posicion += 1;

        anzuelo.style.top = posicion + "%";

        if (posicion < 60) {
            requestAnimationFrame(bajarAnzuelo);
        }

        else {

            pezPescado = pez;

            if (pez === peces[0]) {
                pez.style.transform = "rotate(90deg)";
            } else if (pez === peces[2]) {
                pez.style.transform = "rotate(-90deg)";
            }

            subirAnzuelo();
        }


    }

    function subirAnzuelo() {

        posicion -= 1;

        anzuelo.style.top = posicion + "%";
        pez.style.top = (posicion - 5) + "%";


        if (posicion > 25) {
            requestAnimationFrame(subirAnzuelo);
        }

        else {
            anzuelo.style.top = "25%";
            pez.style.top = "20%";

            if (jugador === 1) {
                pescando1 = false;
            } else {
                pescando2 = false;
            }

            setTimeout(() => {
                if (jugador === 1) {
                    pez.style.top = "55%";
                }
                else {
                    pez.style.top = "55%";
                }

                pezPescado = null;

            }, 500);
        }
    }

    bajarAnzuelo();
}
