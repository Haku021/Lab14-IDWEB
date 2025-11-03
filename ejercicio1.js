let precio = parseFloat(prompt("Ingrese el precio del producto:"));

console.log("Precio original:", precio);
console.log("Redondeo hacia abajo:", Math.floor(precio));
console.log("Redondeo hacia arriba:", Math.ceil(precio));
console.log("Redondeo normal:", Math.round(precio));

