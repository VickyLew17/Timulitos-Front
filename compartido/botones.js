const conexionBotones = new EventSource(SERVIDOR + "/botones");

conexionBotones.addEventListener("message", (event) => {
    
    if (event.data === "A") {
        document.dispatchEvent(new KeyboardEvent("keydown", { code: "Space" }));
    }

    if (event.data ==="R") {
        document.dispatchEvent(new KeyboardEvent("keydown", { code: "Enter"}));
    }
})