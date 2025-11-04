let contraseña="";

function crearContraseña(){
    for(let i=0;i<6;i++){
        contraseña+=((Math.random()*10).toFixed(0));
    }
    return contraseña;
}
console.log("Contraseña creada:",crearContraseña());
