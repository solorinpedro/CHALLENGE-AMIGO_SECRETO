let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminar espacios al inicio y final

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detener la ejecución si el campo está vacío
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    input.value = "";

    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de volver a renderizarla

    // Recorrer el array y agregar cada nombre como un elemento de lista
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Por favor, añada al menos dos amigos para realizar el sorteo.");
        return;
    }

    // Crear un array de amigos para el sorteo
    let amigosCopy = [...amigos];
    let resultados = [];

    // Realizar el sorteo
    for (let i = 0; i < amigos.length; i++) {
        // Seleccionar un amigo al azar que no sea él mismo
        let elegido = amigosCopy.splice(Math.floor(Math.random() * amigosCopy.length), 1)[0];
        resultados.push(`${amigos[i]} le toca a ${elegido}`);
    }

    // Mostrar el resultado del sorteo
    mostrarResultado(resultados);
}

function mostrarResultado(resultados) {
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpiar cualquier resultado previo

    resultados.forEach((resultado) => {
        let li = document.createElement("li");
        li.textContent = resultado;
        resultadoLista.appendChild(li);
    });
}