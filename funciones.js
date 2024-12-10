// Lista para almacenar los usuarios registrados
let users = [];

// Función para agregar un nuevo usuario a la lista
export function addUsers(user) { 
  users.push(user); // Añadir el usuario al array 'users'
}

// Función para obtener la lista de usuarios
export function getUsers() {
  return users; // Devolver la lista completa de usuarios
}
