document.getElementById("crearPersonal").addEventListener("submit", function(event) {
    event.preventDefault(); // Detener la recarga automática de la página
    var nombre = document.getElementById("nombreAgregar");
    var apellido = document.getElementById("apellidoAgregar");
    var genero = document.getElementById("generoAgregar");
    var puesto = document.getElementById("puestoAgregar");
    var usuario = document.getElementById("usuarioAgregar");
    var contraseña = document.getElementById("contraseñaAgregar");
    var direccion = document.getElementById("direccionAgregar");
    var telefono = document.getElementById("telefonoAgregar");
    var email = document.getElementById("emailAgregar");
    var sueldo = document.getElementById("sueldoAgregar");
    var rol = document.getElementById("rolAgregar");
    var mensajes = []; // Usamos un array para almacenar los mensajes
    var resultado = true;
    const regexDireccion = /^[a-zA-Z0-9\s.,#-]+$/;
    const regexTelefono = /^(?:\+?502|00502)?[1-9]\d{7}$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexNombre = /^[a-zA-Z]+$/;
    const regexUsuario = /^[a-zA-Z0-9_-]{3,16}$/;
    /*Expresión regular para validar que la contraseña contenga al menos 1-letra 1-numero 1-caracter especial */
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const regexSueldo = /^(?:[^\d]*\d){3,}.*$/;

    if(regexNombre.test(nombre.value)){
        mensajes.push('Buena estructura del nombre ✔️');
    }else{
        mensajes.push('Agregue un nombre o verifique su estructura ❌');
        resultado = false;
    }
    if(regexNombre.test(apellido.value)){
        mensajes.push('Buena estructura del apellido ✔️');
    }else{
        mensajes.push('Agregue un apellido o verifique su estructura ❌');
        resultado = false;
    }
    if (genero.value === "") {
        mensajes.push('Seleccione un genero ❌');
        resultado = false;
    } else {
        mensajes.push('genero seleccionado ✔️');
    }
    if(puesto.value.length<1){
        mensajes.push('Agregue un puesto o verifique su estructura ❌');
        resultado = false;
    }else{
        mensajes.push('Buena estructura del puesto ✔️');
    }
    if(regexUsuario.test(usuario.value)){
        mensajes.push('Buena estructura del usuario ✔️');
    }else{
        mensajes.push('Agregue un usuario o verifique su estructura ❌');
        resultado = false;
    }
    if(regexPassword.test(contraseña.value)){
        mensajes.push('Buena estructura de la contraseña ✔️');
    }else{
        mensajes.push('Agregue una contrseña o verifique su estructura ❌');
        resultado = false;
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
    if(regexEmail.test(email.value)){
        mensajes.push('Buena estructura del email ✔️');
    }else{
        mensajes.push('Agregue un email o verifique su estructura ❌');
        resultado = false;
    }
    if(regexSueldo.test(sueldo.value)){
        mensajes.push('Buena estructura del sueldo ✔️');
    }else{
        mensajes.push('Agregue un sueldo o verifique su estructura ❌');
        resultado = false;
    }
    if (rol.value === "") {
        mensajes.push('Seleccione un rol ❌');
        resultado = false;
    } else {
        mensajes.push('rol seleccionado ✔️');
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

function LimpiarCrear(){
    document.getElementById("nombreAgregar").value = "";
    document.getElementById("apellidoAgregar").value = "";
    document.getElementById("generoAgregar").value = "";
    document.getElementById("puestoAgregar").value = "";
    document.getElementById("usuarioAgregar").value = "";
    document.getElementById("contraseñaAgregar").value = "";
    document.getElementById("direccionAgregar").value = "";
    document.getElementById("telefonoAgregar").value = "";
    document.getElementById("emailAgregar").value = "";
    document.getElementById("sueldoAgregar").value = "";
    document.getElementById("rolAgregar").value = "";
}
document.getElementById("eliminarPersonal").addEventListener("submit", function(event) {
    event.preventDefault(); // Detener la recarga automática de la página
    var nombreEliminar = document.getElementById("nombreEliminar");
    var mensajes = []; // Usamos un array para almacenar los mensajes
    var resultado = true;
    const regexNombre = /^[a-zA-Z]+$/;
    if(regexNombre.test(nombreEliminar.value)){
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

function LimpiarEliminar(){
    document.getElementById("nombreEliminar").value = "";
}
document.getElementById("actualizarPersonal").addEventListener("submit", function(event) {
    event.preventDefault(); // Detener la recarga automática de la página
    var nombreActualizar = document.getElementById("nombreActualizar");
    var apellidoActualizar = document.getElementById("apellidoActualizar");
    var puestoActualizar = document.getElementById("puestoActualizar");
    var usuarioActualizar = document.getElementById("usuarioActualizar");
    var contraseñaActualizar = document.getElementById("contraseñaActualizar");
    var direccionActualizar = document.getElementById("direccionActualizar");
    var telefonoActualizar = document.getElementById("telefonoActualizar");
    var emailActualizar = document.getElementById("emailActualizar");
    var sueldoActualizar = document.getElementById("sueldoActualizar");
    var rolAgctualizar = document.getElementById("rolActualizar");
    var mensajes = []; // Usamos un array para almacenar los mensajes
    var resultado = true;
    const regexDireccion = /^[a-zA-Z0-9\s.,#-]+$/;
    const regexTelefono = /^(?:\+?502|00502)?[1-9]\d{7}$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexNombre = /^[a-zA-Z]+$/;
    const regexUsuario = /^[a-zA-Z0-9_-]{3,16}$/;
    /*Expresión regular para validar que la contraseña contenga al menos 1-letra 1-numero 1-caracter especial */
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const regexSueldo = /^(?:[^\d]*\d){3,}.*$/;

    if(regexNombre.test(nombreActualizar.value)){
        mensajes.push('Buena estructura del nombre ✔️');
    }else{
        mensajes.push('Agregue un nombre o verifique su estructura ❌');
        resultado = false;
    }
    if(regexNombre.test(apellidoActualizar.value)){
        mensajes.push('Buena estructura del apellido ✔️');
    }else{
        mensajes.push('Agregue un apellido o verifique su estructura ❌');
        resultado = false;
    }
    if(puestoActualizar.value.length<1){
        mensajes.push('Agregue un puesto o verifique su estructura ❌');
        resultado = false;
    }else{
        mensajes.push('Buena estructura del puesto ✔️');
    }
    if(regexUsuario.test(usuarioActualizar.value)){
        mensajes.push('Buena estructura del usuario ✔️');
    }else{
        mensajes.push('Agregue un usuario o verifique su estructura ❌');
        resultado = false;
    }
    if(regexPassword.test(contraseñaActualizar.value)){
        mensajes.push('Buena estructura de la contraseña ✔️');
    }else{
        mensajes.push('Agregue una contrseña o verifique su estructura ❌');
        resultado = false;
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
    if(regexEmail.test(emailActualizar.value)){
        mensajes.push('Buena estructura del email ✔️');
    }else{
        mensajes.push('Agregue un email o verifique su estructura ❌');
        resultado = false;
    }
    if(regexSueldo.test(sueldoActualizar.value)){
        mensajes.push('Buena estructura del sueldo ✔️');
    }else{
        mensajes.push('Agregue un sueldo o verifique su estructura ❌');
        resultado = false;
    }
    if (rolAgctualizar.value === "") {
        mensajes.push('Seleccione un rol ❌');
        resultado = false;
    } else {
        mensajes.push('rol seleccionado ✔️');
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
    document.getElementById("nombreActualizar").value="";
    document.getElementById("apellidoActualizar").value="";
    document.getElementById("puestoActualizar").value="";
    document.getElementById("usuarioActualizar").value="";
    document.getElementById("contraseñaActualizar").value="";
    document.getElementById("direccionActualizar").value="";
    document.getElementById("telefonoActualizar").value="";
    document.getElementById("emailActualizar").value="";
    document.getElementById("sueldoActualizar").value="";
    document.getElementById("rolActualizar").value="";
}