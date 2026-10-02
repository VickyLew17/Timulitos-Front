cambiarPantalla("portada-juego8");

document.getElementById("btn-comenzar-juego8").addEventListener("click", function () {
    cambiarPantalla("juego8");
});

const juego8 = document.getElementById("juego8");

const martillo1 = document.getElementById("martillo-1");
const martillo2 = document.getElementById("martillo-2");

const topos = [
    document.getElementById("topo-1"),
    document.getElementById("topo-2"),
    document.getElementById("topo-3"),
    document.getElementById("topo-4"),
    document.getElementById("topo-5"),
    document.getElementById("topo-6")
];

let topoActual = null;
let golpeando1 = false;
let golpeando2 = false;

function mostrarTopo() {

    topos.forEach(topo => {
        topo.style.display = "none";
    });

    const numero = Math.floor(Math.random() * topos.length);

    topoActual = topos[numero];

    topoActual.style.display = "block";
}

mostrarTopo();

document.addEventListener("keydown", function (event) {

    if (juego8.style.display === "block") {

        if (event.code === "Space" && !golpeando1) {
            golpear(martillo1, 1);
        }

        if (event.code === "Enter" && !golpeando2) {
            golpear(martillo2, 2);
        }

    }

});

function golpear(martillo, jugador) {

    let posicion = 10;

    if (jugador === 1) {
        golpeando1 = true;
    } else {
        golpeando2 = true;
    }

    function bajarMartillo() {

        posicion += 2;

        martillo.style.top = posicion + "%";

        if (posicion < 45) {

            requestAnimationFrame(bajarMartillo);

        } else {

            if (topoActual !== null) {
                topoActual.style.display = "none";
            }

            subirMartillo();
        }
    }


    function subirMartillo() {

        posicion -= 2;

        martillo.style.top = posicion + "%";

        if (posicion > 10) {

            requestAnimationFrame(subirMartillo);

        } else {

            martillo.style.top = "10%";

            if (jugador === 1) {
                golpeando1 = false;
            } else {
                golpeando2 = false;
            }

            setTimeout(() => {
                mostrarTopo();
            }, 500);
        }
    }

    bajarMartillo();
}