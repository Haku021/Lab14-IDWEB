let x1=23;
let y1=14;
let x2=16;
let y2=-2;

function calcularDistancia(x1,y1,x2,y2){
    let distancia=(Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2)));
    let sumaDistancias=(Math.sqrt(Math.pow(x1,2)+Math.pow(y1,2)))+
    (Math.sqrt(Math.pow(x2,2)+Math.pow(y2,2)));

    return "Distancia entre coordenadas:"+distancia+
    "\nSuma de distancias de cada punto al origen: "+sumaDistancias;
}
console.log(calcularDistancia(x1,y1,x2,y2));

