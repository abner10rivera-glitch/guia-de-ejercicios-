import readline from "node:readline";

// Paso 2
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Paso 3 - Solicitar datos al usuario
rl.question("Ingrese el nombre del producto: ", function(nombreProducto) {
    rl.question("Ingrese el precio unitario: ", function(precioUnitario) {
        rl.question("Ingrese la cantidad comprada: ", function(cantidadComprada) {

            // Proceso
            let precio = parseFloat(precioUnitario);
            let cantidad = parseInt(cantidadComprada);

            let total = precio * cantidad;

            // Salida
            console.log(`***  TOTAL DE LA COMPRA  .***\n el nombre del producto es   : ${nombreProducto}\n el precio unitario es: ${precio}\n la cantidad comprada es: ${cantidad}\n el total a pagar ${total}
           `);


            rl.close();

        });
    });
});