const conexionBotones = new EventSource(SERVIDOR + "/botones");

conexionBotones.addEventListener("message", (event) => {
    
    if (event.data === "1") {
        document.dispatchEvent(new KeyboardEvent("keydown", { code: "Space" }));
    }

    if (event.data ==="2") {
        document.dispatchEvent(new KeyboardEvent("keydown", { code: "Enter"}));
    }
});