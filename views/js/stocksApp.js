document.getElementById("actualizarStocks").addEventListener("submit", function(event) {
    event.preventDefault(); // Detener la recarga automática de la página
    var mensajes = []; // Usamos un array para almacenar los mensajes
    var resultado = true;
    var precioCompra = document.getElementById("precioCompra");
    var precioVenta = document.getElementById("precioVenta");
    var precioMinimo = document.getElementById("precioMinimo");

    if(precioCompra.value.length<1){
        mensajes.push('Agregue un precio venta o verifique su estructura ❌');
        resultado = false;
    }else{
        mensajes.push('Buena estructura del precio venta ✔️');
    }
    if(precioVenta.value.length<1){
        mensajes.push('Agregue un precio compra o verifique su estructura ❌');
        resultado = false;
    }else{
        mensajes.push('Buena estructura del precio compra ✔️');
    }
    if(precioMinimo.value.length<1){
        mensajes.push('Agregue un precio minimo o verifique su estructura ❌');
        resultado = false;
    }else{
        mensajes.push('Buena estructura del precio minimo ✔️');
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

 function Limpiar(){
    document.getElementById("precioCompra").value = "";
    document.getElementById("precioVenta").value="";
    document.getElementById("precioMinimo").value="";
 }