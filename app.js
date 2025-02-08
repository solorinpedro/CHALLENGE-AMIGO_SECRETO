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
        alert("Por favor, añada almenos dos un amigo para realizar el sorteo.");
        return;
    }

    // Seleccionar un nombre al azar de la lista
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nombreSorteado = amigos[indiceAleatorio];

    // Mostrar el nombre sorteado
    mostrarResultado(nombreSorteado);
}

function mostrarResultado(nombre) {
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpiar cualquier resultado previo

    let li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${nombre}`;
    resultadoLista.appendChild(li);
}