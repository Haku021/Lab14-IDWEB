class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
  mostrarInfo() {
    return "Nombre: " + this.nombre + ", Email: " + this.email;
  }
}
class Cliente extends Usuario {
  constructor(nombre, email, nivelFidelidad) {
    super(nombre, email); 
    this.nivelFidelidad = nivelFidelidad;
  }
  mostrarInfo() {
    return "Cliente - " + super.mostrarInfo() + ", Nivel de fidelidad: " + this.nivelFidelidad;
  }
}
class Administrador extends Usuario {
  constructor(nombre, email, permisos) {
    super(nombre, email);
    this.permisos = permisos;
  }
  mostrarInfo() {
    return "Administrador - " + super.mostrarInfo() + ", Permisos: " + this.permisos.join(", ");
  }
}
let cliente1 = new Cliente("Jazmin Gonzales", "jgonza@gmail.com", 4);
console.log(cliente1.mostrarInfo());
let admin1 = new Administrador("Carlos Alcantara", "carlos@gmail.com", ["crear", "editar", "eliminar"]);
console.log(admin1.mostrarInfo());


