import readline from "node:readline";

// Paso 2
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Paso 3 - Solicitar datos al usuario
rl.question("Ingrese el precio del producto: ", function(precioProducto) {
    rl.question("Ingrese el porcentaje de descuento: ", function(porcentajeDescuento) {

        // Proceso
        let precio = parseFloat(precioProducto);
        let descuentoPorcentaje = parseFloat(porcentajeDescuento);

        let descuento = precio * descuentoPorcentaje / 100;
        let precioFinal = precio - descuento;

        // Salida
        console.log(`*** DESCUENTO DEL PRODUCTO .***\n el precio del producto es   :${precio}\n el porcentaje de descuento  es: ${descuentoPorcentaje}\n el valor del descuento es: ${descuento}\n el precio final es:${precioFinal}
           `);


        rl.close();

    });
});