

let jugadorSeleccionado1 = null;
let jugadorSeleccionado2 = null;




document.querySelectorAll(".btn-cerrar-popup").forEach(boton => {
    boton.addEventListener("click", () => {
        boton.closest("#elegir-usuarios, #CrearUsuario1, #CrearUsuario2, #Tutorial, #video-tutorial, #IDUsuario").style.display = "none";
    });
});


document.querySelectorAll("#btn-cerrar-popup-usuarios-jugadores, #btn-cerrar-popup-usuario1, #btn-cerrar-popup-usuario2, #btn-cerrar-popup-tutorial, #btn-cerrar-popup-video-tutorial").forEach(boton => {
    boton.addEventListener("click", () => {
        document.getElementById("contenedor-comenzar").style.display = "flex";
        document.getElementById("conejo-colgando").style.display = "flex";


    });
});

document.getElementById("btn-cerrar-popup-id-usuario").addEventListener("click", () => {
    document.getElementById("IDUsuario").style.display = "none";

    document.getElementById("elegir-usuarios").style.display = "flex";

});

document.getElementById("btn-sin-cuenta").addEventListener("click", () => {
    document.getElementById("Tutorial").style.display = "flex";

    document.getElementById("contenedor-comenzar").style.display = "none";
    document.getElementById("conejo-colgando").style.display = "none";

    jugadorSeleccionado1 = null
    jugadorSeleccionado2 = null

});

document.getElementById("btn-con-cuenta").addEventListener("click", () => {

    document.getElementById("elegir-usuarios").style.display = "flex";
    document.getElementById("contenedor-comenzar").style.display = "none";

    document.getElementById("conejo-colgando").style.display = "none";

    document.querySelectorAll('.jugador-item').forEach(function (elemento) {
        elemento.classList.remove('seleccionado');

    });

    jugadorSeleccionado1 = null
    jugadorSeleccionado2 = null
});

document.getElementById("btnCrearJugador1").addEventListener("click", () => {

    document.getElementById("CrearUsuario1").style.display = "flex";
    document.getElementById("elegir-usuarios").style.display = "none";

    document.getElementById("nombre-usuario-jugador1").value = "";
    document.getElementById("ID-usuario-jugador1").value = "";

    document.getElementById("nombre-usuario-jugador1").classList.remove("input-error");
    document.getElementById("ID-usuario-jugador1").classList.remove("input-error");
});

document.getElementById("btnCrearJugador2").addEventListener("click", () => {

    document.getElementById("CrearUsuario2").style.display = "flex";
    document.getElementById("elegir-usuarios").style.display = "none";


    document.getElementById("nombre-usuario-jugador2").value = "";
    document.getElementById("ID-usuario-jugador2").value = "";

    document.getElementById("nombre-usuario-jugador2").classList.remove("input-error");
    document.getElementById("ID-usuario-jugador2").classList.remove("input-error");

});

document.querySelectorAll("#btn-jugar1, #btn-jugar2").forEach(boton => {
    boton.addEventListener("click", () => {

        let nombreIngresado;
        let IDIngresado;

        if (boton.id === "btn-jugar1") {
            nombreIngresado = document.getElementById("nombre-usuario-jugador1");
            IDIngresado = document.getElementById("ID-usuario-jugador1");

        }

        else {
            nombreIngresado = document.getElementById("nombre-usuario-jugador2");
            IDIngresado = document.getElementById("ID-usuario-jugador2");

        }

        const nombre = nombreIngresado.value.trim();
        const idUsuario = IDIngresado.value.trim();

        nombreIngresado.classList.remove("input-error");
        IDIngresado.classList.remove("input-error");

        if (nombre === "") {
            nombreIngresado.classList.add("input-error");

            
        }

        if (idUsuario === "") {
            IDIngresado.classList.add("input-error");
        
        }

        if (nombre === "" || idUsuario === "") {
            return;
        }

        document.getElementById("elegir-usuarios").style.display = "flex";
        document.getElementById("CrearUsuario1").style.display = "none";
        document.getElementById("CrearUsuario2").style.display = "none";

        jugadores.push({
            nombre: nombre,
            tiempo: "---",
            juegosRepetidos: "---",
            ultimaSesion: "---",
            jugoCon: "---",
            id: idUsuario

        });


        if (boton.id === "btn-jugar1") {
            jugadorSeleccionado1 = jugadores[jugadores.length - 1];
        }
        else {
            jugadorSeleccionado2 = jugadores[jugadores.length - 1];
        }

        mostrarJugadores();
        comprobarSeleccion();

        console.log("Nuevo jugador:", nombre);
        console.log(jugadores);


    });
})


document.getElementById("listos-para-tutorial").addEventListener("click", () => {
    document.getElementById("video-tutorial").style.display = "flex";

    document.getElementById("Tutorial").style.display = "none";

});




let jugadorProceso = null;
let jugadorProcesoNumero = null;

const animalArribaID = document.getElementById("sonnys-arriba-usuario-ID");




function mostrarJugadores() {

    const listaJugadores1 = document.getElementById("lista-jugadores1");
    const listaJugadores2 = document.getElementById("lista-jugadores2");

    listaJugadores1.innerHTML = "";
    listaJugadores2.innerHTML = "";

    jugadores.forEach(jugador => {


        const elemento1 = document.createElement("div");

        elemento1.classList.add("jugador-item");
        elemento1.setAttribute("tabindex", "0");
        elemento1.textContent = jugador.nombre;

        if (jugadorSeleccionado1 === jugador) {
            elemento1.classList.add("seleccionado");
        }

        elemento1.addEventListener("click", () => {

            document.getElementById("input-id-usuario").value = "";
            limpiarErrorID();

            jugadorProceso = jugador;
            jugadorProcesoNumero = 1;

            document.getElementById("nombre-usuario-id").textContent = jugador.nombre;

            document.getElementById("input-id-usuario").value = "";

            document.getElementById("IDUsuario").style.display = "flex";
            document.getElementById("elegir-usuarios").style.display = "none";

            animalArribaID.src = "../assets/arriba-popups/pollo-colgando.png";


        });

        listaJugadores1.appendChild(elemento1);





        const elemento2 = document.createElement("div");

        elemento2.classList.add("jugador-item");
        elemento2.setAttribute("tabindex", "0");
        elemento2.textContent = jugador.nombre;

        if (jugadorSeleccionado2 === jugador) {
            elemento2.classList.add("seleccionado");
        }

        elemento2.addEventListener("click", () => {

            document.getElementById("input-id-usuario").value = "";
            limpiarErrorID();

            jugadorProceso = jugador;
            jugadorProcesoNumero = 2;

            document.getElementById("nombre-usuario-id").textContent = jugador.nombre;

            document.getElementById("input-id-usuario").value = "";

            document.getElementById("IDUsuario").style.display = "flex";
            document.getElementById("elegir-usuarios").style.display = "none";

            animalArribaID.src = "../assets/arriba-popups/cerdo-colgando.png";

        });

        listaJugadores2.appendChild(elemento2);

    });
}

mostrarJugadores();



function comprobarSeleccion() {
    if (jugadorSeleccionado1 !== null && jugadorSeleccionado2 !== null) {


        document.getElementById("Tutorial").style.display = "flex";
        document.getElementById("elegir-usuarios").style.display = "none";

    }
};


const inputID = document.getElementById("input-id-usuario");
const errorID = document.getElementById("error-id-usuario");

function mostrarErrorID() {
    inputID.classList.add("input-error");
    errorID.classList.add("visible");
    inputID.setAttribute("aria-invalid", "true");
    inputID.focus();

    document.getElementById("input-id-usuario").textContent = "";
}

function limpiarErrorID() {
    inputID.classList.remove("input-error");
    errorID.classList.remove("visible");
    inputID.removeAttribute("aria-invalid");
}


inputID.addEventListener("input", limpiarErrorID);


document.getElementById("btn-confirmar-id").addEventListener("click", () => {

    const idIngresado = document.getElementById("input-id-usuario").value;

    if (idIngresado === jugadorProceso.id) {


        if (jugadorProcesoNumero === 1) {

            jugadorSeleccionado1 = jugadorProceso;

            document.querySelectorAll("#lista-jugadores1 .jugador-item").forEach(item => {

                item.classList.remove("seleccionado");

            });

            document.querySelectorAll("#lista-jugadores1 .jugador-item").forEach(item => {
                if (item.textContent === jugadorProceso.nombre) {
                    item.classList.add("seleccionado");
                }
            });
        }

        else {

            jugadorSeleccionado2 = jugadorProceso;

            document.querySelectorAll("#lista-jugadores2 .jugador-item").forEach(item => {

                item.classList.remove("seleccionado");

            });

            document.querySelectorAll("#lista-jugadores2 .jugador-item").forEach(item => {
                if (item.textContent === jugadorProceso.nombre) {
                    item.classList.add("seleccionado");

                }
            });
        }

        document.getElementById("IDUsuario").style.display = "none";
        document.getElementById("elegir-usuarios").style.display = "flex";

        comprobarSeleccion();

    }

    else {
        mostrarErrorID();
    }

});
