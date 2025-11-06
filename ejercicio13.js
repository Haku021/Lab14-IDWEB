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

const usuarios = [
  new Cliente("Jazmin Gonzales", "jgonza@gmail.com", 4),
  new Administrador("Carlos Alcantara", "carlos@gmail.com", ["crear", "editar", "eliminar"]),
  new Cliente("Luis Torres", "luis@example.com", 2)
];

usuarios.forEach(function(usuario) {
  console.log(usuario.mostrarInfo());
});

