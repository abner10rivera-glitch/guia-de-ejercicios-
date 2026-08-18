import readline from "node:readline";

// Paso 2
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Paso 3 - Solicitar datos al usuario
rl.question("Ingrese el precio unitario del producto: ", function(precioUnitario) {
    rl.question("Ingrese la cantidad que desea comprar: ", function(cantidadCompra) {

        // Proceso
        let precio = parseFloat(precioUnitario);
        let cantidad = parseInt(cantidadCompra);

        let total = precio * cantidad;

        // Salida
        console.log(`***  TOTAL DE LA COMPRA.***\n el precio unitario  es   :${precio}\n la cantidad es: ${cantidad}\n el total a pagar   es: ${total}}
           `);


        rl.close();

    });
});