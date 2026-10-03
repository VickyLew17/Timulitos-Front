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

    document.getElementById("informe-nombre").textContent = jugador.nombre;

    document.getElementById("informe-tiempo").textContent = jugador.tiempo;

    document.getElementById("informe-juegos").textContent = jugador.juegosRepetidos;

    document.getElementById("informe-ultima-sesion").textContent = jugador.ultimaSesion;

    document.getElementById("informe-jugo-con").textContent = jugador.jugoCon;

    cambiarPantalla("pantalla-informe-usuario");
}