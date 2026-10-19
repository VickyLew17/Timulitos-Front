cambiarPantalla("UsuarioTerapeuta");

const ID_TERAPEUTAS = "Sonnys2026";

document.getElementById("btn-entrar-terapeuta").addEventListener("click", () => {

    const input = document.getElementById("ID-terapeutas");
    const error = document.getElementById("error-id-terapeutas");

    if (input.value.trim() === ID_TERAPEUTAS) {
        input.classList.remove("input-error");
        error.classList.remove("visible");

        cambiarPantalla("pantalla-informes");
    }

    else {
        input.classList.add("input-error");
        error.classList.add("visible");
    }
});

const input = document.getElementById("ID-terapeutas");
document.getElementById("ID-terapeutas").addEventListener("input", () => {
    document.getElementById("error-id-terapeutas").classList.remove("visible");
    input.classList.remove("input-error");
});



document.getElementById("btn-volver-lista").addEventListener("click", () => {
    cambiarPantalla("pantalla-informes");
});


const listaInformes = document.querySelector(".lista-usuarios");

jugadores.forEach(jugador => {

    const elemento = document.createElement("div");

    elemento.classList.add("usuario-item");
    elemento.classList.add(jugador.color);

    elemento.innerHTML = `
        <div class="personaje-usuario">
            <img src="../assets/terapeutas/${jugador.animal}.png" alt="">
        </div>
        <div>
            <p class="nombre-usuario"></p>
            <span class="btn-ver-analisis">Ver análisis →</span>
        </div>
    `;

    elemento.querySelector(".nombre-usuario").textContent = jugador.nombre;

    elemento.addEventListener("click", () => {
        mostrarInforme(jugador);
    });

    listaInformes.appendChild(elemento);
});


function mostrarInforme(jugador) {

    cambiarPantalla("pantalla-informe-usuario");

    document.getElementById("informe-nombre").textContent = jugador.nombre;
    document.getElementById("informe-animal").src = "../assets/terapeutas/" + jugador.animal + ".png";

    document.getElementById("informe-usuario").textContent = jugador.nombre;
    document.getElementById("informe-id").textContent = jugador.id;
    document.getElementById("informe-tiempo-total").textContent = jugador.tiempoTotal || "---";

    document.getElementById("informe-ultima-sesion").textContent = jugador.ultimaSesion;
    document.getElementById("informe-jugo-con").textContent = jugador.jugoCon;
    document.getElementById("informe-puntos").textContent = jugador.puntos || 0;

    const actividad = jugador.actividad || [];
    const listaActividad = document.getElementById("informe-actividad");

    listaActividad.innerHTML = "";

    actividad.forEach(dato => {

        console.log(dato);

        const item = document.createElement("p");

        item.classList.add("item-actividad");
        item.textContent = dato.juego + "    ▶   " + dato.veces;

        listaActividad.appendChild(item);
    });


    let masJugado = null;

    actividad.forEach(dato => {
        if (masJugado === null || dato.veces > masJugado.veces) {
            masJugado = dato;
        }
    });


    if (masJugado !== null) {
        document.getElementById("informe-mas-jugado-juego").textContent = masJugado.juego;
        document.getElementById("informe-mas-jugado-veces").textContent = masJugado.veces + " veces";
        document.getElementById("informe-mas-jugado-minutos").textContent = masJugado.minutos + " minutos";
    }

}

const progreso = [
    { fecha: "10/09", minutos: 30 },
    { fecha: "17/09", minutos: 15 },
    { fecha: "21/09", minutos: 40 },
    { fecha: "04/10", minutos: 25 },
    { fecha: "20/10", minutos: 30 }
];

const fechas = progreso.map(sesion => sesion.fecha);
const minutos = progreso.map(sesion => sesion.minutos);

const canvas = document.getElementById("graficoProgreso");

new Chart(canvas, {
    type: "bar",

    data: {
        labels: fechas,
        datasets: [{
            label: "Minutos jugados",
            data: minutos,
            backgroundColor: "#00D296",
            borderRadius: 6,
            barThickness: 60
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Minutos"
                },
                ticks: {
                    stepSize: 10
                }
            },

            x: {
                title: {
                    display: true,
                    text: "Fecha"
                }
            }
        }
    }
});