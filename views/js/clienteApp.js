document.getElementById("agregarCliente").addEventListener("submit", function(event) {
    event.preventDefault(); // Detener la recarga automática de la página
    var nombreCliente = document.getElementById("nombreCrear");
    var apellidoCliente = document.getElementById("apellidoCrear");
    var generoCliente = document.getElementById("generoCrear");
    var nitCliente = document.getElementById("nitCrear");
    var direccionCliente = document.getElementById("direccionCrear");
    var telefonoCliente = document.getElementById("telefonoCrear");
    var emailCliente = document.getElementById("emailCrear");
    var mensajes = []; // Usamos un array para almacenar los mensajes
    var resultado = true;
    //Expresiones regulares para verificar el conseama de clientes
    //Esto estandarisa las entradas
    const regexDireccion = /^[a-zA-Z0-9\s.,#-]+$/;
    const regexNit = /^\d{1,}-?\d{1,}$/;
    const regexTelefono = /^(?:\+?502|00502)?[1-9]\d{7}$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexNombre = /^[a-zA-Z]+$/;

    if(regexNombre.test(nombreCliente.value)){
        mensajes.push('Buena estructura del nombre ✔️');
    } else {
        mensajes.push('Agregue un nombre o verifique su estructura ❌');
        resultado = false;
    }
    if(regexNombre.test(apellidoCliente.value)){
        mensajes.push('Buena estructura del apellido ✔️');
    }else{
        mensajes.push('Agregue un apellido o verifique su estructura ❌');
        resultado = false;
    }
    if(generoCliente.value.length>0){
        mensajes.push('Genero seleccionado ✔️');
    }else{
        mensajes.push('Seleccione un genero ❌');
        resultado = false;
    }
    if(regexNit.test(nitCliente.value)){
        mensajes.push('Buena estructura del NIT ✔️');
    }else{
        mensajes.push('Agregue un NIT o verifique su estructura ❌');
        resultado = false;
    }
    if(regexDireccion.test(direccionCliente.value)){    
        mensajes.push('Buena estructura de la dirección ✔️');
    }else{
        mensajes.push('Agregue una dirección o verifique su estructura ❌');
        resultado = false;
    }
    if(regexTelefono.test(telefonoCliente.value)){
        mensajes.push('Buena estructura del teléfono ✔️');
    }else{
        mensajes.push('Agregue un teléfono o verifique su estructura ❌');
        resultado = false;
    }
    if(regexEmail.test(emailCliente.value)){
        mensajes.push('Buena estructura del email ✔️');
    }else{
        mensajes.push('Agregue un email o verifique su estructura ❌');
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
    document.getElementById("nombreCrear").value = "";
    document.getElementById("apellidoCrear").value = "";
    document.getElementById("generoCrear").value = "";
    document.getElementById("nitCrear").value = "";
    document.getElementById("direccionCrear").value = "";
    document.getElementById("telefonoCrear").value = "";
    document.getElementById("emailCrear").value = "";
}

document.getElementById("eliminarCliente").addEventListener("submit", function(event) {
    event.preventDefault(); // Detener la recarga automática de la página
    var mensajes = []; // Usamos un array para almacenar los mensajes
    var resultado = true;
    var nombreClienteEliminar = document.getElementById("nombreEliminar");
    const regexNombre = /^[a-zA-Z]+$/;


    if(regexNombre.test(nombreClienteEliminar.value)){
        mensajes.push('Buena estructura del nombre ✔️');
    }else{
        mensajes.push('Agregue un nombre o verifique su estructura ❌');
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
    document.getElementById("nombreEliminar").value = "";
}

document.getElementById("actualizarCliente").addEventListener("submit", function(event) {
    event.preventDefault(); // Detener la recarga automática de la página
    var nombreCliente = document.getElementById("nombreActualizar");
    var apellidoCliente = document.getElementById("apellidoActualizar");
    var generoCliente = document.getElementById("generoActualizar");
    var nitCliente = document.getElementById("nitActualizar");
    var direccionCliente = document.getElementById("direccionActualizar");
    var telefonoCliente = document.getElementById("telefonoActualizar");
    var emailCliente = document.getElementById("emailActualizar");
    var mensajes = []; // Usamos un array para almacenar los mensajes
    var resultado = true;
    //Expresiones regulares para verificar el conseama de clientes
    //Esto estandarisa las entradas
    const regexDireccion = /^[a-zA-Z0-9\s.,#-]+$/;
    const regexNit = /^\d{1,}-?\d{1,}$/;
    const regexTelefono = /^(?:\+?502|00502)?[1-9]\d{7}$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexNombre = /^[a-zA-Z]+$/;


    if(regexNombre.test(nombreCliente.value)){
        mensajes.push('Buena estructura del nombre ✔️');
    } else {
        mensajes.push('Agregue un nombre o verifique su estructura ❌');
        resultado = false;
    }
    if(regexNombre.test(apellidoCliente.value)){
        mensajes.push('Buena estructura del apellido ✔️');
    }else{
        mensajes.push('Agregue un apellido o verifique su estructura ❌');
        resultado = false;
    }
    if(generoCliente.value.length>0){
        mensajes.push('Genero seleccionado ✔️');
    }else{
        mensajes.push('Seleccione un genero ❌');
        resultado = false;
    }
    if(regexNit.test(nitCliente.value)){
        mensajes.push('Buena estructura del NIT ✔️');
    }else{
        mensajes.push('Agregue un NIT o verifique su estructura ❌');
        resultado = false;
    }
    if(regexDireccion.test(direccionCliente.value)){    
        mensajes.push('Buena estructura de la dirección ✔️');
    }else{
        mensajes.push('Agregue una dirección o verifique su estructura ❌');
        resultado = false;
    }
    if(regexTelefono.test(telefonoCliente.value)){
        mensajes.push('Buena estructura del teléfono ✔️');
    }else{
        mensajes.push('Agregue un teléfono o verifique su estructura ❌');
        resultado = false;
    }
    if(regexEmail.test(emailCliente.value)){
        mensajes.push('Buena estructura del email ✔️');
    }else{
        mensajes.push('Agregue un email o verifique su estructura ❌');
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
    document.getElementById("nombreActualizar").value = "";
    document.getElementById("apellidoActualizar").value = "";
    document.getElementById("generoActualizar").value = "";
    document.getElementById("nitActualizar").value = "";
    document.getElementById("direccionActualizar").value = "";
    document.getElementById("telefonoActualizar").value = "";
    document.getElementById("emailActualizar").value = "";
}