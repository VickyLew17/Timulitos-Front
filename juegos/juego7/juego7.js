cambiarPantalla("portada-juego7");

document.getElementById("btn-comenzar-juego7").addEventListener("click", function () {
    cambiarPantalla("juego7");

    avisarTurno(1);
});

const juego7 = document.getElementById("juego7");

const anzuelo1 = document.getElementById("anzuelo-1");
const anzuelo2 = document.getElementById("anzuelo-2");


let pescando = false;
let turno = 1;

let puntos1 = 0;
let puntos2 = 0;

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

    peces.forEach((pez, i) => {
        if (pezPescado !== pez) {
            pez.style.transform =
                `translateX(${Math.sin(movimientoPeces + i) * 30}px)`;
        }
    });

    requestAnimationFrame(moverPeces);
}

moverPeces();

document.addEventListener("keydown", function (event) {

    if (juego7.style.display === "block") {

        if (event.code === "Space" && turno === 1 && !pescando) {

            pescar(anzuelo1, 1);
        }

        if (event.code === "Enter" && turno === 2 && !pescando) {

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

   pescando = true;


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

            if (jugador === 1){
                puntos1 ++;

                document.getElementById("puntaje-juego7-J1").textContent = puntos1 + "    ⭐"
            }
            else if (jugador === 2){
                puntos2 ++;

                document.getElementById("puntaje-juego7-J2").textContent = puntos2 + "   ⭐"
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

                if (turno === 1) {
                    turno = 2;
                } else {
                    turno = 1;
                }

                avisarTurno(turno);

                pescando = false;

            }, 500);
        }
    }

    bajarAnzuelo();
}
