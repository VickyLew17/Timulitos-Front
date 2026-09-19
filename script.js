function cambiarPantalla(idPantalla) {
    console.log(idPantalla);

    document.querySelectorAll(".pantalla").forEach(pantalla => {
        pantalla.style.display = "none";
    });
    document.getElementById(idPantalla).style.display = "block";

}

cambiarPantalla("pantalla-inicio");

document.getElementById("btnInformes").addEventListener("click", () => {
    document.getElementById("UsuarioTerapeuta").style.display = "flex";

});

document.getElementById("btn-login-terapeuta").addEventListener("click", () => {
    document.getElementById("LoginTerapeuta").style.display = "flex";
    document.getElementById("UsuarioTerapeuta").style.display = "none";
})

document.getElementById("btn-crear-terapeuta").addEventListener("click", () => {
    document.getElementById("CrearTerapeuta").style.display = "flex";
    document.getElementById("UsuarioTerapeuta").style.display = "none";
})

document.getElementById("btnAbout").addEventListener("click", () => {
    cambiarPantalla("pantalla-about");
})

document.getElementById("btnComenzar").addEventListener("click", () => {
    cambiarPantalla("Comenzar");
    document.getElementById("contenedor-comenzar").style.display = "flex";

});

document.querySelectorAll(".BotonSalir").forEach (boton => {
    boton.addEventListener("click", () => {
        cambiarPantalla(boton.dataset.destino);
    });
})

document.querySelectorAll(".btn-cerrar-popup").forEach (boton => {
    boton.addEventListener("click", () => {
        boton.closest("#elegir-usuarios, #CrearUsuario1, #CrearUsuario2, #UsuarioTerapeuta, #LoginTerapeuta, #CrearTerapeuta, #Tutorial, #video-tutorial").style.display = "none";
    });
})



document.querySelectorAll("#btn-cerrar-popup-usuarios-jugadores, #btn-cerrar-popup-usuario1, #btn-cerrar-popup-usuario2, #btn-cerrar-popup-tutorial, #btn-cerrar-popup-video-tutorial").forEach (boton => {
    boton.addEventListener("click", () => {
    document.getElementById("contenedor-comenzar").style.display = "flex";
        
    });
})

document.getElementById("btn-sin-cuenta").addEventListener("click", () => {
     document.getElementById("Tutorial").style.display = "flex";

      document.getElementById("contenedor-comenzar").style.display = "none";

});

document.getElementById("btn-con-cuenta").addEventListener("click", () => {
  
    document.getElementById("elegir-usuarios").style.display = "flex";
    document.getElementById("contenedor-comenzar").style.display = "none";

    
});

document.getElementById("btnCrearJugador1").addEventListener("click", () => {
  
    document.getElementById("CrearUsuario1").style.display = "flex";
    document.getElementById("elegir-usuarios").style.display = "none";

    
});

document.getElementById("btnCrearJugador2").addEventListener("click", () => {
  
    document.getElementById("CrearUsuario2").style.display = "flex";
    document.getElementById("elegir-usuarios").style.display = "none";

    
});



document.querySelectorAll("#btn-jugar1, #btn-jugar2").forEach (boton => {
    boton.addEventListener("click", () => {
        document.getElementById("Tutorial").style.display = "flex";

        document.getElementById("CrearUsuario1").style.display = "none";
        document.getElementById("CrearUsuario2").style.display = "none";

    });
})

document.getElementById("sin-tutorial").addEventListener("click", () => {
    cambiarPantalla("cuadricula");
    document.getElementById("Tutorial").style.display = "none";

});

document.getElementById("listos-para-tutorial").addEventListener("click", () => {
    document.getElementById("video-tutorial").style.display = "flex";

    document.getElementById("Tutorial").style.display = "none";

});

document.getElementById("btn-listo-video-tutorial").addEventListener("click", () => {
    cambiarPantalla("cuadricula");
    document.getElementById("video-tutorial").style.display = "none";

});

document.querySelectorAll("#btn-ingresar-terapeuta").forEach (boton => {
    boton.addEventListener("click", () => {
        cambiarPantalla(boton.dataset.destino);
        document.getElementById("LoginTerapeuta").style.display = "none";
    });
})

document.querySelectorAll("#btn-crear-cuenta-terapeuta").forEach (boton => {
    boton.addEventListener("click", () => {
        cambiarPantalla(boton.dataset.destino);
        document.getElementById("CrearTerapeuta").style.display = "none";
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

document.querySelectorAll(".juego-card").forEach(card => {
    card.addEventListener("keydown", function(event) {
        if (event.code === "Enter" || event.code === "Space") {
            event.preventDefault();
            card.click();
        }
    });
});

//JUEGO 1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111

const juego1 = document.getElementById("juego1");

const burbujas = [];

const sonidoPop = new Audio("assets/sonidos/bubble-pop.mp3");
sonidoPop.preload = "auto";


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

        sonidoPop.pause();
        sonidoPop.currentTime = 0;
        sonidoPop.play().catch(error => {
            console.log("No se pudo reproducir el sonido:", error);
        });

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

//JUEGO 2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222

const juego2 = document.getElementById("juego2");
const sonido2 = new Audio("assets/sonidos/fuego-artificial.mp3");
sonido2.preload = "auto";

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

    sonido2.pause();
    sonido2.playbackRate = 1.0;
    sonido2.currentTime = 1.7;
    sonido2.play().catch(error => {
        console.log("No se pudo reproducir el sonido:", error);
    });

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

//JUEGO 333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333


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
            y = 10 + (250 * tiempo) - (210 * tiempo * tiempo);
        } 
        
        else {
            y = 10 + (160 * tiempo) - (165 * tiempo * tiempo);
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

                let nuevaY = y - (80 * tiempoCaida);

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

//JUEGO 444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444

const juego4 = document.getElementById ("juego4");
const instrumento = document.getElementById ("instrumento-juego4");

let sonido4 = new Audio();

const instrumentos = [
    {
        imagen: "assets/personajes/instrumentos/teclado.png",
        sonido: "assets/sonidos/teclado.mp3"
    },

    {
        imagen: "assets/personajes/instrumentos/violin.png",
        sonido: "assets/sonidos/violin.mp3"
    }, 
    
    {
        imagen: "assets/personajes/instrumentos/guitarra.png",
        sonido: "assets/sonidos/guitarra.mp3"
    },

    {
        imagen: "assets/personajes/instrumentos/flauta.webp",
        sonido: "assets/sonidos/flauta.mp3"
    },

    {
        imagen: "assets/personajes/instrumentos/maracas.jfif",
        sonido: "assets/sonidos/maracas.mp3"
    },

    {
        imagen: "assets/personajes/instrumentos/bateria.webp",
        sonido: "assets/sonidos/bateria.mp3"
    },

    {
        imagen: "assets/personajes/instrumentos/arpa.avif",
        sonido: "assets/sonidos/arpa.mp3"
    },

    {
        imagen: "assets/personajes/instrumentos/saxo.webp",
        sonido: "assets/sonidos/saxo.mp3"
    }

]

let numero4 = 0;

instrumento.src = instrumentos[numero4  ].imagen;

document.addEventListener("keydown", function(event) {
    if (event.code === "Space" || event.code === "Enter") {
        if (juego4.style.display === "block") {
       
        numero4++;

        if (numero4 >= instrumentos.length) {
            numero4 = 0;
        }

        instrumento.src = instrumentos[numero4].imagen;

        sonido4.pause();
        sonido4.currentTime = 0;
        sonido4.src = instrumentos[numero4].sonido;
        sonido4.play();
        }
    }

});

//JUEGO 5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555

const juego5 = document.getElementById ("juego5");
const animal = document.getElementById ("animal-juego5");

let sonido5 = new Audio();

const animales = [
    {
        imagen: "assets/personajes/animales/pollito.png",
        sonido: "assets/sonidos/pollito.mp3"
    },

    {
        imagen: "assets/personajes/animales/vaca.jpg",
        sonido: "assets/sonidos/vaca.mp3"
    },

    {
        imagen: "assets/personajes/animales/cerdo.jpg",
        sonido: "assets/sonidos/cerdo.mp3"
    },

    {
        imagen: "assets/personajes/animales/gato.png",
        sonido: "assets/sonidos/gato.mp3"
    },

    {
        imagen: "assets/personajes/animales/oveja.jpg",
        sonido: "assets/sonidos/oveja.mp3"
    },

    {
        imagen: "assets/personajes/animales/perro.jpg",
        sonido: "assets/sonidos/perro.mp3"
    },

    {
        imagen: "assets/personajes/animales/mono.jpg",
        sonido: "assets/sonidos/mono.mp3"
    },

    {
        imagen: "assets/personajes/animales/lobo.jpg",
        sonido: "assets/sonidos/lobo.mp3"
    }
]

let numero5 = 0;

animal.src = animales[numero5].imagen;

document.addEventListener("keydown", function(event) {
    if (event.code === "Space" || event.code === "Enter") {
        if (juego5.style.display === "block") {
        
        numero5++;

        if (numero5 >= animales.length) {
            numero5 = 0;
        }

        animal.src = animales[numero5].imagen;

        sonido5.pause();
        sonido5.currentTime = 0;
        sonido5.src = animales[numero5].sonido;
        sonido5.play();
        }
    }

});

//JUEGO 6666666666666666666666666666666666666666666666666666666666666

const juego6 = document.getElementById ("juego6");
const objeto = document.getElementById ("objeto-juego6");
const varita = document.getElementById ("varita-magica");

const objetos = [
    {
        imagen: "assets/personajes/naipes.jpg"
    },

    {
        imagen: "assets/personajes/paloma.webp"
    }, 
    
    {
        imagen: "assets/personajes/pañuelo-colores.PNG"
    },
    
    {
        imagen: "assets/personajes/zapato.jfif"
    }
]

let numero6 = 0;

objeto.style.opacity = 0;

document.addEventListener("keydown", function(event) {
    if (event.code === "Space" || event.code === "Enter") {
        if (juego6.style.display === "block") {

            moverVarita();
            
            setTimeout(() =>  {
                sacarObjeto();
            }, 500);
        }
    }
});


function moverVarita() {

    let tiempo = 0;

    function animarVarita() {

        tiempo += 0.03;

        let rotacion;

        if (tiempo < 0.5) {
            rotacion = -20 * (tiempo / 0.5);
        } 
        else {
            rotacion = -20 + (20 * ((tiempo - 0.5) / 0.5));
        }

        varita.style.transform = `rotate(${rotacion}deg)`;

        if (tiempo < 1) {
            requestAnimationFrame(animarVarita);
        } 
        
        else {
            varita.style.transform = "rotate(0deg)";
        }
    }

    animarVarita();
}


function sacarObjeto() {

    objeto.src = objetos[numero6].imagen;

    let tiempo = 0;

    objeto.style.opacity = "1";

    function animarObjeto() {

        tiempo += 0.01;

        let x = 20 + (35 * tiempo);

        let y = 10 + (180 * tiempo) - (180 * tiempo * tiempo);

        objeto.style.left = x + "%";
        objeto.style.bottom = y + "%";

        if (tiempo < .8) {
            requestAnimationFrame(animarObjeto);
        } 
       
       
    }

    animarObjeto();
    

    numero6++;

    if (numero6 >= objetos.length) {
        numero6 = 0;
    }

    setTimeout(() =>  {
        
        objeto.style.opacity=0;
         
     }, 2000);
}

//JUEGO 7777777777777777777777777777777777777777777777777777777777777777777777777

const juego7 = document.getElementById("juego7");

const anzuelo1 = document.getElementById("anzuelo-1");
const anzuelo2 = document.getElementById("anzuelo-2");


let pescando1 = false;
let pescando2 = false;

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

    if (pezPescado !== peces[0]) {
        peces[0].style.transform =
            `translateX(${Math.sin(movimientoPeces) * 30}px)`;
    }

    if (pezPescado !== peces[1]) {
        peces[1].style.transform =
            `translateX(${Math.sin(movimientoPeces + 1) * 30}px)`;
    }

    if (pezPescado !== peces[2]) {
        peces[2].style.transform =
            `translateX(${Math.sin(movimientoPeces + 2) *30}px)`;
    }

    if (pezPescado !== peces[3]) {
        peces[3].style.transform =
            `translateX(${Math.sin(movimientoPeces + 3) * 30}px)`;
    }

     if (pezPescado !== peces[4]) {
        peces[4].style.transform =
            `translateX(${Math.sin(movimientoPeces + 4) * 30}px)`;
    }

     if (pezPescado !== peces[5]) {
        peces[5].style.transform =
            `translateX(${Math.sin(movimientoPeces + 5) * 30}px)`;
    }
     if (pezPescado !== peces[6]) {
        peces[6].style.transform =
            `translateX(${Math.sin(movimientoPeces + 6) * 30}px)`;
    }

    requestAnimationFrame(moverPeces);
}

moverPeces();   

document.addEventListener("keydown", function(event) {

    if (juego7.style.display === "block") {

        if (event.code === "Space" && !pescando1) {
            console.log("ESPACIO FUNCIONA")

            pescar(anzuelo1, 1);
        }

        if (event.code === "Enter" && !pescando2) {
            console.log("ENTER FUNCIONA")

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

    let posicion = 10;

    function bajarAnzuelo() {

        posicion += 1;

        anzuelo.style.top = posicion + "%";

        if (posicion < 55) {
            requestAnimationFrame(bajarAnzuelo);
        } 
        
        else {
         
            pezPescado = pez;

            pez.style.transform = "none";

            subirAnzuelo();
        }

        
    }

    function subirAnzuelo() {

        posicion -= 1;
    
        anzuelo.style.top = posicion + "%";
        pez.style.top = (posicion + 5) + "%";
    
        if (posicion > 10) {
            requestAnimationFrame(subirAnzuelo);
        } 
        
        else {
            anzuelo.style.top = "10%";
            pez.style.top = "15%";


            setTimeout(() =>  {
               if (jugador === 1){
                pez.style.top = "55%";
               }
               else {
                pez.style.top = "55%";      
                }

                pezPescado = null;
                
            }, 500);
        }
    }

    bajarAnzuelo();
}