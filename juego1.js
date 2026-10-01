
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
