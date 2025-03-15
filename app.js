const listaAmigos = [];
const listaElement = document.getElementById("listaAmigos");
const resultadoElement = document.getElementById("resultado");

// Sonidos
const sonidoClick = new Audio("assets/sounds/click.mp3");
const sonidoSorteo = new Audio("assets/sounds/sorteo.mp3"); // Redoble de tambores o fanfarria
const sonidoReset = new Audio("assets/sounds/reset.mp3");

function agregarAmigo() {
    sonidoClick.currentTime = 0;
    sonidoClick.play();

    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor escribe un nombre.");
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya fue ingresado.");
        return;
    }

    listaAmigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    listaElement.innerHTML = "";
    listaAmigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Necesitas al menos 2 personas para el sorteo.");
        return;
    }

    // 🥁 Reproducir sonido de redoble
    sonidoSorteo.currentTime = 0;
    sonidoSorteo.play();

    // Mostrar el resultado después de 2 segundos
    setTimeout(() => {
        const asignaciones = [...listaAmigos];
        const resultado = [];

        for (let i = 0; i < listaAmigos.length; i++) {
            const nombre = listaAmigos[i];
            const posibles = asignaciones.filter(a => a !== nombre);

            if (posibles.length === 0) {
                alert("Oops... No se pudo hacer el sorteo sin repeticiones. Intenta de nuevo.");
                return;
            }

            const elegido = posibles[Math.floor(Math.random() * posibles.length)];
            resultado.push(`${nombre} → ${elegido}`);

            const index = asignaciones.indexOf(elegido);
            asignaciones.splice(index, 1);
        }

        mostrarResultado(resultado);
    }, 2000); // ⏱️ Espera de 2 segundos
}

function mostrarResultado(lista) {
    resultadoElement.innerHTML = "";
    lista.forEach(texto => {
        const li = document.createElement("li");
        li.textContent = texto;
        resultadoElement.appendChild(li);
    });
}

function reiniciarJuego() {
    sonidoReset.currentTime = 0;
    sonidoReset.play(); // 🔊 Sonido al reiniciar

    listaAmigos.length = 0;
    listaElement.innerHTML = "";
    resultadoElement.innerHTML = "";
}
