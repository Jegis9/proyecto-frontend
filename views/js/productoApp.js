//INICIO DEL CONSEAMA DE CREAR
document.getElementById("crearProducto").addEventListener("submit", function(event) {
    event.preventDefault(); // Detener la recarga automática de la página
    var codigo = document.getElementById("codigoCrear");
    var nombre = document.getElementById("nombreCrear");
    var descripcion = document.getElementById("descripcionCrear");
    var imagen = document.getElementById("imagenCrear");
    var mensajes = []; // Usamos un array para almacenar los mensajes
    var resultado = true;
    const regexNombre = /^[A-Za-z0-9\s\-,.&()']+$/;

    if (codigo.value.length < 3) {
        mensajes.push('Ingrese un código válido o código muy corto ❌');
        resultado = false;
    } else {
        mensajes.push('Estructura del código válida ✔️');
    }
    if(regexNombre.test(nombre.value)){
        mensajes.push('Buena estructura del nombre ✔️');
    } else {
        mensajes.push('Mala estructura del nombre ❌');
        resultado = false;
    }
    if(descripcion.value < 1){
        mensajes.push('Ingrese una descripción o descripción muy corta ❌');
        resultado = false;
    } else {
        mensajes.push('Estructura de descripción válida ✔️');
    }
    if(imagen.files.length > 0){
        const imagenentrada = imagen.files[0];
        mensajes.push('Imagen seleccionada ✔️');
    } else {
        mensajes.push('Ninguna imagen seleccionada ❌');
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
    document.getElementById("codigoCrear").value = "";
    document.getElementById("nombreCrear").value ="";
    document.getElementById("descripcionCrear").value ="";
    document.getElementById("imagenCrear").value ="";
}
//FINAL DEL CODIGO PARA EL CONSEAMA DE CREAR
//*************************************************************************** */
//INICIO DEL CONSEAMA ELIMINAR
document.getElementById("eliminarProducto").addEventListener("submit", function(event) {
    event.preventDefault(); // Detener la recarga automática de la página
    var nombreEliminar = document.getElementById("nombreEliminar");
    const regexNombre = /^[A-Za-z0-9\s\-,.&()']+$/;
    var mensajes = []; // Usamos un array para almacenar los mensajes
    var resultado = true;
    if(regexNombre.test(nombreEliminar.value)){
        mensajes.push('Buena estructura del nombre ✔️');
    } else {
        mensajes.push('Escriba un nombre ❌');
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
    document.getElementById("nombreEliminar").value ="";
}
//FIN DEL CONSEAMA ELIMINAR
//INICIO DEL CONSEAMA ACTUALIZAR
document.getElementById("actualizarProducto").addEventListener("submit", function(event) {
    event.preventDefault(); // Detener la recarga automática de la página
    var codigo = document.getElementById("codigoActualizar");
    var nombre = document.getElementById("nombreActualizar");
    var descripcion = document.getElementById("descripcionActualizar");
    var imagen = document.getElementById("imagenActualizar");
    var mensajes = []; // Usamos un array para almacenar los mensajes
    var resultado = true;
    const regexNombre = /^[A-Za-z0-9\s\-,.&()']+$/;

    if (codigo.value.length < 3) {
        mensajes.push('Ingrese un código válido o código muy corto ❌');
        resultado = false;
    } else {
        mensajes.push('Estructura del código válida ✔️');
    }
    if(regexNombre.test(nombre.value)){
        mensajes.push('Buena estructura del nombre ✔️');
    } else {
        mensajes.push('Mala estructura del nombre ❌');
        resultado = false;
    }
    if(descripcion.value < 1){
        mensajes.push('Ingrese una descripción o descripción muy corta ❌');
        resultado = false;
    } else {
        mensajes.push('Estructura de descripción válida ✔️');
    }
    if(imagen.files.length > 0){
        const imagenentrada = imagen.files[0];
        mensajes.push('Imagen seleccionada ✔️');
    } else {
        mensajes.push('Ninguna imagen seleccionada ❌');
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
    document.getElementById("codigoActualizar").value = "";
    document.getElementById("nombreActualizar").value ="";
    document.getElementById("descripcionActualizar").value ="";
    document.getElementById("imagenActualizar").value ="";
}