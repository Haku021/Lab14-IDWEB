let min=parseInt(prompt("Ingrese el minimo del rango:"));
let max=parseInt(prompt("Ingrese el maximo del rango:"));
function numeroAleatorio (min, max){
    return ((Math.random()*max-min)+min);
}
console.log("Numero aleatorio generado:",numeroAleatorio(min,max));
