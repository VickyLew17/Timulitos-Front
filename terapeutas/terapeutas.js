cambiarPantalla("UsuarioTerapeuta");

const ID_INICIAL = "Sonnys2026";

function leerIdTerapeutas() {
    const guardado = localStorage.getItem("idTerapeutas");

    if (guardado === null) {
        return ID_INICIAL;
    }

    return guardado;
}

document.getElementById("btn-entrar-terapeuta").addEventListener("click", () => {

    const input = document.getElementById("ID-terapeutas");
    const error = document.getElementById("error-id-terapeutas");

    if (input.value.trim() === leerIdTerapeutas()) {
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

function mostrarListaUsuarios() {

    listaInformes.innerHTML = "";

    jugadores.forEach(jugador => {

        const elemento = document.createElement("div");

        elemento.classList.add("usuario-item");
        elemento.classList.add(jugador.color);

        elemento.innerHTML = `
        <div class="personaje-usuario"> <img class="${jugador.animal}" src="../assets/terapeutas/${jugador.animal}.png" alt=""></div>
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
}

mostrarListaUsuarios();

const buscador = document.getElementById("buscar-usuario");

buscador.addEventListener("input", () => {
    const texto = buscador.value.trim().toLowerCase();

    const tarjetas = listaInformes.querySelectorAll(".usuario-item");

    tarjetas.forEach(tarjeta => {
        const nombre = tarjeta.querySelector(".nombre-usuario").textContent.trim().toLowerCase();

        tarjeta.style.display = nombre.includes(texto) ? "" : "none";
    });
});

let graficoProgreso = null;
let jugadorActual = null;

function calcularInforme(jugador, partidas) {

    const actividad = [];
    const progreso = [];
    let puntos = 0;
    let minutosTotales = 0;

    partidas.forEach(partida => {

        let juego = actividad.find(item => item.juego === partida.juego);

        if (juego === undefined) {
            juego = { juego: partida.juego, veces: 0, minutos: 0 };

            actividad.push(juego);
        }

        juego.veces++;
        juego.minutos += partida.tiempo;


        const fecha = partida.fecha.split(",")[0];

        let dia = progreso.find(item => item.fecha === fecha);

        if (dia === undefined) {
            dia = { fecha: fecha, minutos: 0 };

            progreso.push(dia);
        }

        dia.minutos += partida.tiempo;

        puntos += partida.puntos;
        minutosTotales += partida.tiempo;
    });

    const ultima = partidas[partidas.length - 1];

    return {
        nombre: jugador.nombre,
        id: jugador.id,
        animal: jugador.animal,
        actividad: actividad,
        progreso: progreso.slice(-5),
        puntos: puntos,
        tiempoTotal: minutosTotales + " minutos",
        ultimaSesion: ultima.fecha.split(",")[0],
        jugoCon: ultima.contrincante

    };

}

async function mostrarInforme(jugador) {

    jugadorActual = jugador;

    let datos = jugador;

    try {
        const respuesta = await fetch(SERVIDOR + "/resultados/usuario/" + encodeURIComponent(jugador.nombre));

        const partidas = await respuesta.json();

        if (partidas.length > 0) {
            datos = calcularInforme(jugador, partidas);
        }
    }

    catch (error) {
        console.log("No se pudo conectar con el servidor, muestra los datos de ejemplo");
    }

    hacerInforme(datos);

}

function hacerInforme(jugador) {

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
    else {
        document.getElementById("informe-mas-jugado-juego").textContent = "---";
        document.getElementById("informe-mas-jugado-veces").textContent = "";
        document.getElementById("informe-mas-jugado-minutos").textContent = "";
    }

    const progreso = jugador.progreso || [];

    const fechas = progreso.map(sesion => sesion.fecha);
    const minutos = progreso.map(sesion => sesion.minutos);

    if (graficoProgreso !== null) {
        graficoProgreso.destroy();
    }

    graficoProgreso = new Chart(document.getElementById("graficoProgreso"), {
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

}

document.getElementById("btn-eliminar-usuario").addEventListener("click", () => {

    const confirmado = confirm(`¿Estás seguro de que deseas eliminar al usuario "${jugadorActual.nombre}"? Esta acción no se puede deshacer.`);

    if (!confirmado) {
        return;
    }

    const posicion = jugadores.indexOf(jugadorActual);

    jugadores.splice(posicion, 1);

    guardarJugadores();

    mostrarListaUsuarios();
    cambiarPantalla("pantalla-informes");
});



const popupCambiarId = document.getElementById("popup-cambiar-id");
const campoIdNuevo = document.getElementById("id-nuevo");
const campoIdRepetido = document.getElementById("id-repetido");
const mensajeCambiarId = document.getElementById("mensaje-cambiar-id");

function cerrarCambiarId() {
    popupCambiarId.classList.remove("visible");

    campoIdNuevo.value = "";
    campoIdRepetido.value = "";

    mensajeCambiarId.textContent = "";
}

document.getElementById("btn-abrir-cambiar-id").addEventListener("click", () => {
    popupCambiarId.classList.add("visible");
});

document.getElementById("btn-cancelar-id").addEventListener("click", cerrarCambiarId);

document.getElementById("btn-guardar-id").addEventListener("click", () => {

    const nuevo = campoIdNuevo.value.trim();
    const repetido = campoIdRepetido.value.trim();

    if (nuevo === "") {
        mensajeCambiarId.textContent = "Escribí el ID nuevo";

        return;
    }

    if (nuevo !== repetido) {
        mensajeCambiarId.textContent = "Los dos ID no coinciden";

        return;
    }

    localStorage.setItem("idTerapeutas", nuevo);

    cerrarCambiarId();
});
