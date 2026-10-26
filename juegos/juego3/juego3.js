cambiarPantalla("portada-juego3");

document.getElementById("btn-comenzar-juego3").addEventListener("click", function () {
    cambiarPantalla("juego3");
});


const juego3 = document.getElementById("juego3");

const aro = document.getElementById("aro");
const pelota = document.getElementById("pelota-basket");

let turno = 1;
let puntajeJ1 = 0;
let puntajeJ2 = 0;
let tirando = false;

function cambiarAro() {
    if (turno === 1) {
        aro.src = "../../assets/personajes/aro-azul.png";
    } else {
        aro.src = "../../assets/personajes/aro-rojo.png";
    }
}

cambiarAro();

function cambiarTurno() {
    tirando = false;

    if (turno === 1) {
        turno = 2;
    } else {
        turno = 1;
    }

    cambiarAro();
}

document.addEventListener("keydown", function (event) {

    if (juego3.style.display !== "block" || tirando) {
        return;
    }

    if (turno === 1 && event.code === "Space") {
        tirarPelota(pelota, aro);
    }

    if (turno === 2 && event.code === "Enter") {
        tirarPelota(pelota, aro);
    }

})


function tirarPelota(pelota, aro) {
    tirando = true;

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
            y = 10 + (160 * tiempo) - (175 * tiempo * tiempo);
        }

        pelota.style.left = x + "%";
        pelota.style.bottom = y + "%";

        if (tiempo < .95) {
            requestAnimationFrame(animarPelota);
        }

        else if (numero === 0) {

            if (turno === 1) {
                puntajeJ1++;
                document.getElementById("puntaje-juego3-J1").textContent = puntajeJ1 + "   ⭐️";
            } else {
                puntajeJ2++;
                document.getElementById("puntaje-juego3-J2").textContent = puntajeJ2 + "   ⭐️";
            }

            let tiempoCaida = 0;

            function caerPelota() {
                tiempoCaida += 0.02;

                pelota.style.left = x + "%";

                let nuevaY = y - (80 * tiempoCaida);

                pelota.style.bottom = nuevaY + "%";


                if (nuevaY > 5) {
                    requestAnimationFrame(caerPelota);
                } 
                
                else {
                    pelota.style.bottom = "5%";

                    setTimeout(() => {
                        pelota.style.left = "70%";
                        pelota.style.bottom = "10%";

                        cambiarTurno();
                    }, 500);
                }
            }

            caerPelota();

        }


        else {
        
            setTimeout(() => {
                pelota.style.left = "70%";
                pelota.style.bottom = "10%";

                cambiarTurno();
            }, 500);
        }
    }

    animarPelota();
};

