cambiarPantalla("portada-juego8");

document.getElementById("btn-comenzar-juego8").addEventListener("click", function () {
    cambiarPantalla("juego8");

    setTimeout(sacarTopo, 500);

    avisarTurno(1);
});

const juego8 = document.getElementById("juego8");

const martillo1 = document.getElementById("martillo-1");
const martillo2 = document.getElementById("martillo-2");

const topos = document.querySelectorAll(".topo");

let topoActual = null;
let turno = 1;
let golpeando = false;

let puntos1 = 0;
let puntos2 = 0;


function sacarTopo() {

    const numero = Math.floor(Math.random() * topos.length);

    topoActual = topos[numero];

    topoActual.classList.add("arriba");
}


document.addEventListener("keydown", function (event) {

    if (juego8.style.display !== "block" || golpeando || topoActual === null) {
        return;
    }

    if (juego8.style.display === "block") {

        if (event.code === "Space" && turno === 1) {
            golpear(martillo1, 40);
        }

        if (event.code === "Enter" && turno === 2) {
            golpear(martillo2, -40);
        }
    }
});

function golpear(martillo, angulo) {

    golpeando = true;

    const cajaTopo = topoActual.getBoundingClientRect();
    const cajaMartillo = martillo.getBoundingClientRect();

    const moverX = (cajaTopo.left + cajaTopo.width / 2) - (cajaMartillo.left + cajaMartillo.width / 2);
    const moverY = cajaTopo.top - (cajaMartillo.top + cajaMartillo.height / 2) - 30;


    martillo.style.transform = `translate(${moverX}px, ${moverY}px)`;

    setTimeout(() => {
        martillo.style.transform = `translate(${moverX}px, ${moverY}px) rotate(${angulo}deg)`;
    }, 500);

    if (turno === 1){
        puntos1 ++;
        document.getElementById("puntaje-juego8-J1").textContent = puntos1 + "   ⭐";
    }
    else if (turno === 2){
        puntos2 ++;
        document.getElementById("puntaje-juego8-J2").textContent = puntos2 + "   ⭐"
    }

    setTimeout(() => {
        topoActual.classList.remove("arriba");
        martillo.style.transform = "";
    }, 1400);

    setTimeout(() => {
        if (turno === 1) {
            turno = 2;
        }
        else {
            turno = 1;
        }

        avisarTurno(turno);

        golpeando = false;
        sacarTopo();
    }, 2300);
}