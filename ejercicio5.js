let grado=parseFloat(prompt("Ingrese el ángulo en grados (°):"));
let radianes=parseFloat(prompt("Ingrese otro ángulo en radianes:"));

function gradosARadianes(grados) {
    let radianes = grados*(Math.PI/180);
    console.log("Grados a radianes: "+ radianes.toFixed(4));
    console.log("Seno del ángulo: "+ Math.sin(radianes).toFixed(4));
    console.log("Coseno del ángulo: "+ Math.cos(radianes).toFixed(4));
    return radianes;
}

function radianesAGrados(radianes) {
    let grados = radianes*(180/Math.PI);
    console.log("Radianes a grados: "+grados.toFixed(4));
    return grados;
}

gradosARadianes(grado);
radianesAGrados(radianes);


