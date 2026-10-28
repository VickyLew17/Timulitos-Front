const conexionBotones = new EventSource(SERVIDOR + "/botones");

conexionBotones.addEventListener("message", (event) => {
    
    if (event.data === "A") {
        document.dispatchEvent(new KeyboardEvent("keydown", { code: "Space" }));
    }

    if (event.data ==="R") {
        document.dispatchEvent(new KeyboardEvent("keydown", { code: "Enter"}));
    }
});

function avisarTurno(turno){
    fetch(SERVIDOR + "/turno", {
        method: "POST",
        headers: {"Content-Type": "applicatio/json"},
        body: JSON.stringify({turno: turno})
    })
    .catch(error => {
        console.log("no se pudo avisar el turno al arduino desde back:", error);
    });
}

avisarTurno(0);