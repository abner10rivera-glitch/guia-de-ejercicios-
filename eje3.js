import readline from "node:readline";

// Paso 2
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Paso 3 - Solicitar datos al usuario
rl.question("Ingrese la cantidad de horas: ", function(horas) {

    // Proceso
    let h = parseFloat(horas);

    let minutos = h * 60;

    // Salida
    console.log(`*** CONVERSIÓN DE HORAS A MINUTOS.***\n la horas es   :${h}\n lo minutos es: ${minutos}}
           `);

    rl.close();


});