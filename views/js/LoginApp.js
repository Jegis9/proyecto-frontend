document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault(); // Detener la recarga automática de la página
    
    var usuario = document.getElementById("usuario");
    var contraseña = document.getElementById("contraseña");
    var mensaje = '';
    var resultado = true;
    /*Expresión regular para validar que la contraseña contenga al menos 1-letra 1-numero 1-caracter especial */
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (usuario.value.length < 3) {
        mensaje += 'Ingrese su usuario o usuario muy corto :(\n';
        resultado = false;
    } else {
        mensaje += 'Estructura del usuario válida :)\n';
        resultado = true;
    }

    if (regexPassword.test(contraseña.value)) {
        mensaje += 'Buena estructura de la contraseña :) \n';
        resultado = true;
    } else {
        mensaje += 'Mala estructura de la contraseña :(\n';
        resultado = false;
    }

    Swal.fire({
        title: 'Validación de Datos',
        text: mensaje,
        icon: resultado ? 'success' : 'error',
        confirmButtonText: 'Ok'
    }).then((result) => {
        if (result.isConfirmed) {
            // Recargar la página manualmente
            location.reload();
        }
    });
});