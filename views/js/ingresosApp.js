document.getElementById("ingresos").addEventListener("submit", function(event) {
    event.preventDefault(); // Detener la recarga automática de la página
    var proveedor = document.getElementById("proveedor");
    var producto = document.getElementById("producto");
    var mensajes = []; // Usamos un array para almacenar los mensajes
    var resultado = true;

    if(proveedor.value.length>0){
        mensajes.push('Proveedor seleccionado ✔️');
    }else{
        mensajes.push('Seleccione un proveedor ❌');
        resultado = false;
    }
    if(producto.value.length>0){
        mensajes.push('Producto seleccionado ✔️');
    }else{
        mensajes.push('Seleccione un producto ❌');
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