import readline from "node:readline";

// Paso 2
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Paso 3 - Solicitar dato al usuario
rl.question("Ingrese cualquier dato: ", function(dato) {

    // Proceso
    let resultadoParseFloat = parseFloat(dato);
    let resultadoIsNaN = isNaN(resultadoParseFloat);

    // Salida
    console.log(`*** VERIFICACIÓN DEL DATO .***\n Dato ingresado por el usuario   :${dato}\n Resultado de parseFloat()es: ${resultadoParseFloat}\n Resultado de isNaN()  es: ${resultadoIsNaN}
           `);
    rl.close()
});