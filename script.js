function cambiarPantalla(idPantalla) {
    document.querySelectorAll(".pantalla").forEach(pantalla => {
        pantalla.style.display = "none";
    });
    document.getElementById(idPantalla).style.display = "block";
}

cambiarPantalla("pantalla-inicio");

document.getElementById("btnInformes").addEventListener("click", () => {
    cambiarPantalla("pantalla-informes");
})

document.getElementById("btnAbout").addEventListener("click", () => {
    cambiarPantalla("pantalla-about");
})

document.getElementById("btnComenzar").addEventListener("click", () => {
   document.getElementById("Comenzar").style.display= "flex";
})

document.querySelectorAll(".BotonSalir").forEach (boton => {
    boton.addEventListener("click", () => {
        cambiarPantalla(boton.dataset.destino);
    });
})

document.querySelectorAll(".btn-cerrar-popup").forEach (boton => {
    boton.addEventListener("click", () => {
        boton.closest("#Comenzar, #CrearUsuario").style.display = "none";
    });
})

document.querySelectorAll("#btn-con-cuenta, #btn-sin-cuenta").forEach(boton => {
    boton.addEventListener("click", () => {
        cambiarPantalla(boton.dataset.destino);
        document.getElementById("Comenzar").style.display = "none";
    });
});

document.querySelectorAll("#btnCrearJugador1, #btnCrearJugador2").forEach(boton => {
    boton.addEventListener("click", () => {
        document.getElementById("CrearUsuario").style.display = "flex";
    });
});

document.querySelectorAll("#btn-jugar").forEach (boton => {
    boton.addEventListener("click", () => {
        cambiarPantalla(boton.dataset.destino);
        document.getElementById("CrearUsuario").style.display = "none";
    });
})

document.querySelectorAll(".usuario-item").forEach (boton => {
    boton.addEventListener("click", () => {
        cambiarPantalla(boton.dataset.destino);
    });
})

document.querySelectorAll(".juego-card").forEach(card => {
    card.addEventListener("click", () => {
        cambiarPantalla(card.dataset.destino);
    });
});

document.querySelectorAll(".btn-comenzar-juego").forEach(card => {
    card.addEventListener("click", () => {
        cambiarPantalla(card.dataset.destino);
    });
});

//JUEGO 1111111111111111111111111111111111111111111111

const juego = document.getElementById("juego1");

const burbujas = [];

for (let i = 0; i < 20; i++) {

    const burbuja = document.createElement("div");

    burbuja.classList.add("burbuja");

    const tamaño = Math.random() * 200 + 40;

    burbuja.style.width = tamaño + "px";
    burbuja.style.height = tamaño + "px";

    burbuja.style.left =
        Math.random() * (window.innerWidth - tamaño) + "px";

    burbuja.style.top =
        Math.random() * (window.innerHeight - tamaño) + "px";

    juego.appendChild(burbuja);

    burbujas.push(burbuja);
}

document.addEventListener("keydown", function(event) {
    if(event.code === "Space") {

        if (burbujas.length===0){
            console.log("TERMINASTE");
        }
        const numero = Math.floor(Math.random() * burbujas.length);

        const burbuja = burbujas[numero];

        burbuja.remove();
        
        burbujas.splice(numero, 1);

    console.log("explotaste una burbuja😊");

    if (burbujas.length===0){
        console.log("TERMINASTE");
    }
    }
});

