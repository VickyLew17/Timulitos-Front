cambiarPantalla("portada-juego3");

document.getElementById("btn-comenzar-juego3").addEventListener("click", function () {
    cambiarPantalla("juego3");
});


const juego3 = document.getElementById("juego3");

let puntaje3 = 0;

document.addEventListener("keydown", function (event) {

    if (event.code === "Space" || event.code === "Enter") {

        if (juego3.style.display === "block") {

            const aro = document.getElementById("aro");
            const pelota = document.getElementById("pelota-basket");

            tirarPelota(pelota, aro);
        }
    }
});

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

        if (tiempo < 1) {
            requestAnimationFrame(animarPelota);
        }

        else if (numero === 0) {
            console.log("¡Encestaste!");
            puntaje3++;
            document.getElementById("puntaje-juego3").textContent = "Puntaje: " + puntaje3;

            pelota.style.left = x + "%";
            pelota.style.bottom = y + "%";

            let tiempoCaida = 0;

            function caerPelota() {
                tiempoCaida += 0.02;

                pelota.style.left = x + "%";

                let nuevaY = y - (80 * tiempoCaida);

                pelota.style.bottom = nuevaY + "%";


                if (nuevaY > 10) {
                    requestAnimationFrame(caerPelota);
                } else {
                    pelota.style.bottom = "10%";

                    setTimeout(() => {
                        pelota.style.left = "70%";
                        pelota.style.bottom = "10%";
                    }, 500);
                }
            }

            caerPelota();

        }


        else {
            console.log("Fallaste");



            setTimeout(() => {
                pelota.style.left = "70%";
                pelota.style.bottom = "10%";
            }, 500);
        }
    }

    animarPelota();
};

