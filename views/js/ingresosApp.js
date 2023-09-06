document.getElementById("ingresos").addEventListener("submit", function(event) {
    event.preventDefault(); // Detener la recarga automática de la página

    var proveedor = document.getElementById("proveedor");
    var producto = document.getElementById("producto");
    var mensajes = [];
    var resultado = true;

    if (proveedor.value === "") {
        mensajes.push('Seleccione un proveedor ❌');
        resultado = false;
    } else {
        mensajes.push('Proveedor seleccionado ✔️');
    }

    if (producto.value === "") {
        mensajes.push('Seleccione un producto ❌');
        resultado = false;
    } else {
        mensajes.push('Producto seleccionado ✔️');
    }

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

function Limpiar()
{
    document.getElementById("proveedor").value = "";
    document.getElementById("producto").value = "";
}