document.getElementById("agregarProveedor").addEventListener("submit", function(event) {
    event.preventDefault(); // Detener la recarga automática de la página
    var mensajes = []; // Usamos un array para almacenar los mensajes
    var resultado = true;
    var razon = document.getElementById("razonAgregar");
    var direccion = document.getElementById("direccionAgregar");
    var telefono = document.getElementById("telefonoAgregar");
    const regexDireccion = /^[a-zA-Z0-9\s.,#-]+$/;
    const regexTelefono = /^(?:\+?502|00502)?[1-9]\d{7}$/;

if(razon.value.length<1){
    mensajes.push('Agregue una razon o verifique su estructura ❌');
    resultado = false;
}else{
    mensajes.push('Buena estructura de la razón ✔️');
}
if(regexDireccion.test(direccion.value)){
    mensajes.push('Buena estructura de la dirección ✔️');
}else{
    mensajes.push('Agregue una dirección o verifique su estructura ❌');
    resultado = false;
}

if(regexTelefono.test(telefono.value)){
    mensajes.push('Buena estructura del telefono ✔️');
}else{
    mensajes.push('Agregue un telefono o verifique su estructura ❌');
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

function LimpiarAgregar(){
    document.getElementById("razonAgregar").value = "";
    document.getElementById("direccionAgregar").value = "";
    document.getElementById("telefonoAgregar").value = "";
}
document.getElementById("eliminarProveedor").addEventListener("submit", function(event) {
    event.preventDefault(); // Detener la recarga automática de la página
    var mensajes = []; // Usamos un array para almacenar los mensajes
    var resultado = true;
    var razonEliminar = document.getElementById("razonEliminar");
    
if(razonEliminar.value.length<1){
    mensajes.push('Agregue una razon o verifique su estructura ❌');
    resultado = false;
}else{
    mensajes.push('Buena estructura de la razón ✔️');
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

function LimpiarEliminar(){
    document.getElementById("razonEliminar").value = "";
}

document.getElementById("actualizarProveedor").addEventListener("submit", function(event) {
    event.preventDefault(); // Detener la recarga automática de la página
    var mensajes = []; // Usamos un array para almacenar los mensajes
    var resultado = true;
    var razonActualizar = document.getElementById("razonActualizar");
    var direccionActualizar = document.getElementById("direccionActualizar");
    var telefonoActualizar = document.getElementById("telefonoActualizar");
    const regexDireccion = /^[a-zA-Z0-9\s.,#-]+$/;
    const regexTelefono = /^(?:\+?502|00502)?[1-9]\d{7}$/;

if(razonActualizar.value.length<1){
    mensajes.push('Agregue una razon o verifique su estructura ❌');
    resultado = false;
}else{
    mensajes.push('Buena estructura de la razón ✔️');
}
if(regexDireccion.test(direccionActualizar.value)){
    mensajes.push('Buena estructura de la dirección ✔️');
}else{
    mensajes.push('Agregue una dirección o verifique su estructura ❌');
    resultado = false;
}

if(regexTelefono.test(telefonoActualizar.value)){
    mensajes.push('Buena estructura del telefono ✔️');
}else{
    mensajes.push('Agregue un telefono o verifique su estructura ❌');
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

function LimpiarActualizar(){
    document.getElementById("razonActualizar").value = "";
    document.getElementById("direccionActualizar").value = "";
    document.getElementById("telefonoActualziar").value = "";
}