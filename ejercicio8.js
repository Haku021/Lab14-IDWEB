let entrada= prompt("Ingrese las calificaciones separadas por comas:");
let calificaciones= entrada.split(",").map(Number);

let maximo=Math.max(...calificaciones);
let normalizadas=calificaciones.map(nota =>nota/maximo);

console.log("Calificaciones normalizadas:",normalizadas);
