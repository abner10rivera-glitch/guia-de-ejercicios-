import readline from "node:readline";

// Paso 2
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Paso 3 - Solicitar datos al usuario
rl.question("Ingrese la base del rectángulo: ", function(base) {
    rl.question("Ingrese la altura del rectángulo: ", function(altura) {

        // Proceso
        let b = parseFloat(base);
        let h = parseFloat(altura);

        let area = b * h;

        // Salida
        console.log(`*** ÁREA DEL RECTÁNGULO .***\n la base es   :${b}\n la altuura es: ${h}\n el area  es: ${area}}
           `);


        rl.close();
    });
});