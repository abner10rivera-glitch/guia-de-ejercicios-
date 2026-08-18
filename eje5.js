import readline from "node:readline";

// Paso 2
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Paso 3 - Solicitar datos al usuario
rl.question("Ingrese el nombre del empleado: ", function(nombreEmpleado) {
    rl.question("Ingrese la cantidad de horas trabajadas: ", function(horasTrabajadas) {
        rl.question("Ingrese el pago por cada hora: ", function(pagoHora) {

            // Proceso
            let horas = parseFloat(horasTrabajadas);
            let pago = parseFloat(pagoHora);

            let salario = horas * pago;

            // Salida
            console.log(`*** SALARIO SEMANAL .***\n el nombre del empleado es   :${nombreEmpleado}\n las horas trabajadas es: ${horas}\n el pago por hora  es: ${pago}\n el salario total es ${salario}
           `);

            rl.close();

        });
    });
});