class Figura {
  constructor(nombre) {
    this.nombre = nombre;
  }

  area() {
    console.log("El método area() debe ser sobrescrito por la subclase.");
  }

  perimetro() {
    console.log("El método perimetro() debe ser sobrescrito por la subclase.");
  }
}

class Cuadrado extends Figura {
  constructor(lado) {
    super("Cuadrado"); 
    this.lado = lado;
  }

  area() {
    return this.lado * this.lado;
  }

  perimetro() {
    return 4 * this.lado;
  }
}

class Triangulo extends Figura {
  constructor(base, altura, lado1, lado2, lado3) {
    super("Triángulo");
    this.base = base;
    this.altura = altura;
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
  }

  area() {
    return (this.base * this.altura) / 2;
  }

  perimetro() {
    return this.lado1 + this.lado2 + this.lado3;
  }
}

const cuadrado = new Cuadrado(5);
console.log("Figura:", cuadrado.nombre);
console.log("Área del cuadrado:", cuadrado.area());
console.log("Perímetro del cuadrado:", cuadrado.perimetro());

const triangulo = new Triangulo(4, 3, 4, 3, 5);
console.log("Figura:", triangulo.nombre);
console.log("Área del triángulo:", triangulo.area());
console.log("Perímetro del triángulo:", triangulo.perimetro());
