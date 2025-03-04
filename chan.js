let intentosTotales = 10;
let intentos = intentosTotales;
let energiaRestaurada = false;

function lanzarDado() {
    return Math.floor(Math.random() * 20) + 1;
}

function jugar() {
    if (intentos <= 0) return;
    
    let resultadoDado = lanzarDado();
    let mensaje = `Sacaste un ${resultadoDado}. `;
    
    if (resultadoDado >= 15) {
        mensaje += "¡Acción exitosa! Logras controlar el problema y restaurar la energía.";
        energiaRestaurada = true;
        intentos = 0;
    } else if (resultadoDado >= 8) {
        mensaje += "Tu acción ayuda un poco, pero la energía solo se restablece parcialmente.";
    } else {
        mensaje += "Tu acción falla y la situación empeora.";
    }
    
    intentos--;
    document.getElementById("resultado").innerText = mensaje;
    document.getElementById("intentos").innerText = `Intentos restantes: ${intentos}`;
    
    if (intentos <= 0) {
        document.getElementById("final").innerText = energiaRestaurada 
            ? "🎉 ¡Felicidades! Has logrado restaurar la energía del sector. 🎉"
            : "💀 No lograste restaurar la energía. El sector queda a oscuras... 💀";
    }
}

function reiniciarJuego() {
    intentos = intentosTotales;
    energiaRestaurada = false;
    document.getElementById("resultado").innerText = "";
    document.getElementById("intentos").innerText = `Intentos restantes: ${intentos}`;
    document.getElementById("final").innerText = "";
}
