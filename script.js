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

const juego1 = document.getElementById("juego1");

const burbujas = [];

function crearBurbujas() {

for (let i = 0; i < 30; i++) {

    const burbuja = document.createElement("div");

    burbuja.classList.add("burbuja");

    const tamaño = Math.random() * 200 + 60;

    burbuja.style.width = tamaño + "px";
    burbuja.style.height = tamaño + "px";

    burbuja.style.left =
        Math.random() * (window.innerWidth - tamaño) + "px";

    burbuja.style.top =
        Math.random() * (window.innerHeight - tamaño) + "px";

        burbuja.dx = (Math.random() * 2 - 1) * 1;
        burbuja.dy = (Math.random() * 2 - 1) * 1;
    

    juego1.appendChild(burbuja);

    burbujas.push(burbuja);
} 
}

crearBurbujas();

function moverBurbujas() {

    burbujas.forEach(burbuja => {

        let x = parseFloat(burbuja.style.left);
        let y = parseFloat(burbuja.style.top);

        const tamaño = burbuja.offsetWidth;

        x += burbuja.dx;
        y += burbuja.dy;

        if (x <= 0 || x + tamaño >= window.innerWidth) {
            burbuja.dx *= -1;
        }

        if (y <= 0 || y + tamaño >= window.innerHeight) {
            burbuja.dy *= -1;
        }

        burbuja.style.left = x + "px";
        burbuja.style.top = y + "px";
    });

    requestAnimationFrame(moverBurbujas);
}

moverBurbujas();

document.addEventListener("keydown", function(event) {

    if(event.code === "Space" || event.code === "Enter") {
    
        if (document.getElementById("juego1").style.display === "block") {


        const numero = Math.floor(Math.random() * burbujas.length);

        const burbuja = burbujas[numero];

        burbuja.remove();
        
        burbujas.splice(numero, 1);

        console.log("explotaste una burbuja");

        if (burbujas.length === 0){
            document.getElementById("fin-juego1").style.display = "block";
        }
    }
  }
});

juego1.querySelector(".BotonSalir").addEventListener("click", () => {
    burbujas.length = 0;

    document.querySelectorAll("#juego1 .burbuja").forEach(burbuja => {
        burbuja.remove();
    });

    document.getElementById("fin-juego1").style.display = "none";

    crearBurbujas();
    
});

document.getElementById("btn-reiniciar-juego1").addEventListener("click", function() {

    burbujas.length = 0;

    document.querySelectorAll("#juego1 .burbuja").forEach(burbuja => {
        burbuja.remove();
    });

    document.getElementById("fin-juego1").style.display = "none";

    crearBurbujas();
});

//JUEGO 222222222222222222222222222222222222

const juego2 = document.getElementById("juego2");

document.addEventListener("keydown", function(event) {

    if (event.code === "Space" || event.code === "Enter") {

        if (document.getElementById("juego2").style.display === "block") {
        
            console.log("creando fuego artificial");

        crearFuegoArtificial();

    }
    }
});

function crearFuegoArtificial() {

    const particulas = [];

   
    const xInicial = Math.random() * window.innerWidth;
    const yInicial = Math.random() * window.innerHeight;

    
    const colores = ["red", "blue", "yellow", "green", "pink", "purple", "orange"];

    const color = colores[Math.floor(Math.random() * colores.length)];


    for (let i = 0; i < 60; i++) {

        const particula = document.createElement("div");

        particula.classList.add("particula");

      
        particula.style.left = xInicial + "px";
        particula.style.top = yInicial + "px";


        particula.style.backgroundColor = color;

        particula.style.opacity = 1;

      
        particula.dx = (Math.random() * 2 - 1) * 4;
        particula.dy = (Math.random() * 2 - 1) * 4;

        juego2.appendChild(particula);

        particulas.push(particula);
    }

    moverParticulas(particulas);
}

function moverParticulas(particulas) {

    particulas.forEach(function(particula) {

        let x = parseFloat(particula.style.left);
        let y = parseFloat(particula.style.top);

        x += particula.dx;
        y += particula.dy;

        particula.style.left = x + "px";
        particula.style.top = y + "px";

        let opacidad = parseFloat(particula.style.opacity);

        opacidad -= 0.01;

        particula.style.opacity = opacidad;

        if (opacidad <= 0) {
            particula.remove();
        }

    });

    requestAnimationFrame(function() {
        moverParticulas(particulas);
    });

}

//JUEGO 33333333333333333333333333333333333333333333333333333333333333


const juego3 = document.getElementById("juego3");

let puntaje3 = 0;

document.addEventListener("keydown", function(event) {

    if (event.code === "Space" || event.code === "Enter") {

        if (juego3.style.display === "block") {

            const aro = document.getElementById("aro");
            const pelota = document.getElementById("pelota-basket");
            
            tirarPelota(pelota, aro);
}}});

function tirarPelota(pelota, aro) {

    const numero = Math.floor(Math.random() * 2);
    let tiempo = 0;

    function animarPelota() {
        tiempo += 0.01;

        let x = 70 - 50 * tiempo;

        let y;

        if (numero === 0) {
            y = 10 + (250 * tiempo) - (200 * tiempo * tiempo);
        } 
        
        else {
            y = 10 + (150 * tiempo) - (160 * tiempo * tiempo);
        }

        pelota.style.left = x + "%";
        pelota.style.bottom = y + "%";

        if (tiempo < 1 ) {
            requestAnimationFrame(animarPelota);
        } 
        
        else if (numero === 0) {
            console.log("¡Encestaste!");
            puntaje3 ++;
            document.getElementById("puntaje-juego3").textContent = "Puntaje: " + puntaje3;

            pelota.style.left = x + "%";
            pelota.style.bottom = y + "%";

            let tiempoCaida = 0;

            function caerPelota () {
                tiempoCaida += 0.02;

                pelota.style.left = x + "%";

                let nuevaY = y - (100 * tiempoCaida);

                pelota.style.bottom = nuevaY + "%";
                

                if (nuevaY > 10) {
                    requestAnimationFrame(caerPelota);
                } else {
                    pelota.style.bottom = "10%";

                setTimeout(() =>  {
                    pelota.style.left = "70%";
                    pelota.style.bottom = "10%";
                }, 500);
                }
            }

                caerPelota();

        } 

        
        else {
            console.log("Fallaste");
            

            
            setTimeout(() =>  {
                pelota.style.left = "70%";
                pelota.style.bottom = "10%";
            }, 500);
        }
    }
    
    animarPelota();
}

juego3.querySelector(".BotonSalir").addEventListener("click", () => {
    puntaje3 = 0;
    document.getElementById("puntaje-juego3").textContent = "Puntaje: " + puntaje3;
});

