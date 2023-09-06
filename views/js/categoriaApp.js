document.getElementById("crearCategoria").addEventListener("submit", function(event) {
    event.preventDefault(); // Detener la recarga automática de la página
    var categoria = document.getElementById("nombreCategoria");
    var mensajes = []; // Usamos un array para almacenar los mensajes
    var resultado = true;
    const regexNombre = /^[a-zA-Z]+$/;


    
    if(regexNombre.test(categoria.value)){
        mensajes.push('Buena estructura del nombre ✔️');
    } else {
        mensajes.push('Mala estructura del nombre ❌');
        resultado = false;
    }
    // Crear una lista de mensajes
    var listaMensajes = '<ul style="text-align: left;">';
    mensajes.forEach(function(mensaje) {
        listaMensajes += '<li>' + mensaje + '</li>';
    });
    listaMensajes += '</ul>';
    
    Swal.fire({
        title: 'Validación de Datos',
        html: listaMensajes,
        icon: resultado ? 'success' : 'error',
        confirmButtonText: 'Ok'
    });
});

function LimpiarCrear()
{
    document.getElementById("nombreCategoria").value = "";
}

document.getElementById("eliminarCategoria").addEventListener("submit", function(event) {
    event.preventDefault(); // Detener la recarga automática de la página
    var categoriaEliminar = document.getElementById("nombreCategoriaEliminar");
    var mensajes = []; // Usamos un array para almacenar los mensajes
    var resultado = true;
    const regexNombre = /^[a-zA-Z]+$/;


    
    if(regexNombre.test(categoriaEliminar.value)){
        mensajes.push('Buena estructura del nombre ✔️');
    } else {
        mensajes.push('Mala estructura del nombre ❌');
        resultado = false;
    }
    // Crear una lista de mensajes
    var listaMensajes = '<ul style="text-align: left;">';
    mensajes.forEach(function(mensaje) {
        listaMensajes += '<li>' + mensaje + '</li>';
    });
    listaMensajes += '</ul>';
    
    Swal.fire({
        title: 'Validación de Datos',
        html: listaMensajes,
        icon: resultado ? 'success' : 'error',
        confirmButtonText: 'Ok'
    });
});
function LimpiarEliminar()
{
    document.getElementById("nombreCategoriaEliminar").value = "";
}

document.getElementById("actualizarCategoria").addEventListener("submit", function(event) {
    event.preventDefault(); // Detener la recarga automática de la página
    var idActualizar = document.getElementById("idActualizar");
    var categoriaActualizar = document.getElementById("nombreCategoriaActualizar");
    var mensajes = []; // Usamos un array para almacenar los mensajes
    var resultado = true;
    const regexId = /^\d+$/;
    const regexNombre = /^[a-zA-Z]+$/;


    if(regexId.test(idActualizar.value)){
        mensajes.push('Buena estructura del ID ✔️');
    } else {
        mensajes.push('Mala estructura del ID ❌');
        resultado = false;
    }
    if(regexNombre.test(categoriaActualizar.value)){
        mensajes.push('Buena estructura del nombre ✔️');
    } else {
        mensajes.push('Mala estructura del nombre ❌');
        resultado = false;
    }
    
    // Crear una lista de mensajes
    var listaMensajes = '<ul style="text-align: left;">';
    mensajes.forEach(function(mensaje) {
        listaMensajes += '<li>' + mensaje + '</li>';
    });
    listaMensajes += '</ul>';
    
    Swal.fire({
        title: 'Validación de Datos',
        html: listaMensajes,
        icon: resultado ? 'success' : 'error',
        confirmButtonText: 'Ok'
    });
});
function LimpiarActualizar()
{
    document.getElementById("nombreCategoriaActualizar").value = "";
    document.getElementById("idActualizar").value = "";
}