import { addUsers, getUsers } from './funciones.js';

// Función para renderizar la lista de usuarios en la tabla
function renderUsers() {
  const userList = document.getElementById('user-list');
  userList.innerHTML = ''; // Limpiar la tabla antes de agregar usuarios

  getUsers().forEach((user) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.email}</td>
      <td>${user.nombre}</td>
      <td>${user.opcion}</td>
      <td>${user.notificaciones ? 'Sí' : 'No'}</td>
    `;
    userList.appendChild(row); // Corregido el error tipográfico "appendCsild" a "appendChild"
  });
}

// Función para agregar un nuevo usuario al sistema
function addNewUser(e) {
  e.preventDefault(); // Prevenir el envío del formulario

  // Corrección: Obtener los valores de los campos del formulario
  const email = document.getElementById('email').value;
  const nombre = document.getElementById('nombre').value;
  const opcion = document.querySelector('input[name="horario"]:checked').value;
  const notificaciones = document.getElementById('notificaciones').checked;

  // Agregar el nuevo usuario a la lista
  addUsers({ email, nombre, opcion, notificaciones });

  // Actualizar la tabla con los datos
  renderUsers();

  // Limpiar el formulario
  document.getElementById('formulario').reset();
}

// Evento para enviar el formulario
document.getElementById('formulario').addEventListener('submit', addNewUser);

// Hacer accesibles las funciones globalmente (opcional)
window.renderUsers = renderUsers;
window.addNewUser = addNewUser;

// Renderizar usuarios al cargar la página
renderUsers();


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//GALERIA
// Variables de la galería y el botón "Volver"
// Referencias a los elementos de la galería
const galeria = document.getElementById("galeria");
const vistaImagen = document.getElementById("vista-imagen");
const imagenGrande = document.getElementById("imagen-grande");
const btnVolver = document.getElementById("btn-volver");

// Función para mostrar la imagen ampliada
function mostrarImagen(imagen) {
    // Ocultar todas las imágenes de la galería
    galeria.classList.add("d-none");

    // Mostrar la vista ampliada y cargar la imagen
    vistaImagen.classList.remove("d-none");
    imagenGrande.src = imagen.src;
    imagenGrande.alt = imagen.alt;
}

// Función para volver a la galería
function volverGaleria() {
    // Ocultar la vista ampliada y mostrar la galería
    vistaImagen.classList.add("d-none");
    galeria.classList.remove("d-none");
}

// Agregar eventos de clic a las imágenes de la galería
const imagenesGaleria = document.querySelectorAll(".galeria-img");
imagenesGaleria.forEach(imagen => {
    imagen.addEventListener("click", () => {
        mostrarImagen(imagen);
    });
});

// Agregar evento de clic al botón "Volver"
btnVolver.addEventListener("click", volverGaleria);