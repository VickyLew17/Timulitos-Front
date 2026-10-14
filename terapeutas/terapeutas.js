cambiarPantalla("UsuarioTerapeuta");

document.getElementById("btn-entrar-terapeuta").addEventListener("click", () => {
    cambiarPantalla("pantalla-informes");

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