import readline from "node:readline";

// Paso 2
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Paso 3 - Solicitar datos al usuario
rl.question("Ingrese la primera nota: ", function(nota1) {
    rl.question("Ingrese la segunda nota: ", function(nota2) {
        rl.question("Ingrese la tercera nota: ", function(nota3) {

            // Proceso
            let n1 = parseFloat(nota1);
            let n2 = parseFloat(nota2);
            let n3 = parseFloat(nota3);

            let promedio = (n1 + n2 + n3) / 3;

            // Salida
            console.log(`*** PROMEDIO DEL ESTUDIANTE .***\n primera nota es   :${n1}\n segunda nota es: ${n2}\n tercera nota es: ${n3}\n El promedio del estudiante es:${promedio}
           `);


            rl.close();
        });
    });
});