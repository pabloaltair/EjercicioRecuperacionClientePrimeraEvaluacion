//////////////////////////////////////////////////////////////////////////////////////////////////////////
//FORMULARIO
import { addUsers, getUsers } from './funciones.js';

function renderUsers() {
  const userList = document.getElementById("user-list");
  userList.innerHTML = ''; // Limpiar la lista antes de renderizar

  getUsers().forEach((user, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.opcion}</td>
      <td>${user.notificaciones}</td>
      <td>
        <button class="btn btn-warning btn-sm" onclick="editUser(${index})">Editar</button>
        <button class="btn btn-danger btn-sm" onclick="deleteUserEntry(${index})">Eliminar</button>
      </td>
    `;
    console.log(user.name, user.email, user.opcion, "Aaa")
    userList.appendChild(row);
  });
}

function addNewUser() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const opcion = document.getElementById('opcion').value;
  const notificaciones = document.getElementById('notificaciones').value;

  addUser({ name, email, opcion, notificaciones });
  renderUsers();

  // Limpiar el formulario
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('opcion').value = '';
  document.getElementById('notificaciones').value = '';
}



// Hacer accesibles las funciones globalmente
window.addNewUser = addNewUser;

// Renderizar usuarios al cargar la página
renderUsers();

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//GALERIA
// Variables de la galería y el botón "Volver"
const galeria = document.getElementById("galeria");
const vistaImagen = document.getElementById("vista-imagen");
const imagenGrande = document.getElementById("imagen-grande");
const btnVolver = document.getElementById("btn-volver");

// Variable para saber si estamos en la vista ampliada o no
let enVistaAmpliada = false;

// Función para mostrar la imagen ampliada
function mostrarImagen(src) {
    // Ocultar la vista de la galería
    galeria.classList.add("d-none");

    // Mostrar la vista de la imagen ampliada
    vistaImagen.classList.remove("d-none");

    // Establecer la fuente de la imagen ampliada
    imagenGrande.src = src;

    // Cambiar el estado a vista ampliada
    enVistaAmpliada = true;
}

// Función para volver a la galería
function volverGaleria() {
    // Mostrar todas las imágenes en la galería
    galeria.classList.remove("d-none");

    // Ocultar la vista ampliada
    vistaImagen.classList.add("d-none");

    // Cambiar el estado a vista normal
    enVistaAmpliada = false;
}

// Agregar eventos de clic a las imágenes de la galería
const imagenesGaleria = document.querySelectorAll(".galeria-img");
imagenesGaleria.forEach(imagen => {
    imagen.addEventListener("click", (e) => {
        // Mostrar la imagen ampliada al hacer clic
        mostrarImagen(e.target.src);
    });
});

// Evento del botón "Volver"
btnVolver.addEventListener("click", () => {
    volverGaleria();
});
