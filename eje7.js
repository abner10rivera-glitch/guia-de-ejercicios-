import readline from "node:readline";

// Paso 2
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Paso 3 - Solicitar datos al usuario
rl.question("Ingrese la longitud en metros: ", function(longitudMetros) {

    // Proceso
    let metros = parseFloat(longitudMetros);

    let centimetros = metros * 100;

    // Salida
    console.log(`*** CONVERSIÓN DE METROS A CENTÍMETROS .***\n la longitud en metros es   :${metros}\n lo equivalente en centimetros es: ${centimetros}
           `);


    rl.close();

});