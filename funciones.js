// funciones.js
export function crearFila(email, nombre, horario) {
    // Crea un elemento <tr> con los datos del formulario
    const fila = document.createElement("tr");

    // Crear celdas y agregar el contenido
    const celdaEmail = document.createElement("td");
    celdaEmail.textContent = email;

    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = nombre;

    const celdaHorario = document.createElement("td");
    celdaHorario.textContent = horario;

    // Agregar las celdas a la fila
    fila.appendChild(celdaEmail);
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaHorario);

    // Devolver la fila creada
    return fila;
}

// Función para mostrar una imagen ampliada
export function mostrarImagen(src) {
    const galeria = document.getElementById("galeria");
    const vistaImagen = document.getElementById("vista-imagen");
    const imagenGrande = document.getElementById("imagen-grande");

    galeria.classList.add("d-none");
    vistaImagen.classList.remove("d-none");
    imagenGrande.src = src;
}

// Función para volver a la galería
export function volverGaleria() {
    const galeria = document.getElementById("galeria");
    const vistaImagen = document.getElementById("vista-imagen");

    galeria.classList.remove("d-none");
    vistaImagen.classList.add("d-none");
}
