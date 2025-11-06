class Empleado {
  constructor(nombre, sueldoBase) {
    this.nombre = nombre;
    this.sueldoBase = sueldoBase;
  }
  calcularSueldo() {
    return this.sueldoBase;
  }
}

class Programador extends Empleado {
  constructor(nombre, sueldoBase, lenguaje) {
    super(nombre, sueldoBase);
    this.lenguaje = lenguaje;
  }
  calcularSueldo() {
    const sueldoConBono = this.sueldoBase * 1.10;
    return sueldoConBono;
  }
}

class ProgramadorSenior extends Programador {
  constructor(nombre, sueldoBase, lenguaje) {
    super(nombre, sueldoBase, lenguaje);
  }
  calcularSueldo() {
    const sueldoBaseConBono = super.calcularSueldo();
    return this.sueldoBase * 1.25;
  }
}

const empleado1 = new Empleado("María López", 2000);
const programador1 = new Programador("Juan Pérez", 2500, "JavaScript");
const senior1 = new ProgramadorSenior("Laura Gómez", 3000, "Python");
console.log("Empleado:", empleado1.nombre, "Sueldo:", empleado1.calcularSueldo());
console.log("Programador:", programador1.nombre, "Lenguaje:", programador1.lenguaje, "Sueldo:", programador1.calcularSueldo());
console.log("Programador Senior:", senior1.nombre, "Lenguaje:", senior1.lenguaje, "Sueldo:", senior1.calcularSueldo());

