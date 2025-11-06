class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

class Carrito {
  constructor() {
    this.productos = [];
  }
  agregarProducto(producto) {
    this.productos.push(producto);
    console.log("Producto agregado:", producto.nombre);
  }
  calcularTotal() {
    return this.productos.reduce((total, producto) => total + producto.precio, 0);
  }
  mostrarResumen() {
    console.log("Resumen del carrito:");
    this.productos.forEach((producto, index) => {
      console.log(`${index + 1}. ${producto.nombre} - $${producto.precio.toFixed(2)}`);
    });
    console.log("Total: $"+ this.calcularTotal().toFixed(2));
  }
}

const producto1 = new Producto("Camisa", 25.5);
const producto2 = new Producto("Pantalón", 40);
const producto3 = new Producto("Zapatos", 60.75);
const carrito = new Carrito();
carrito.agregarProducto(producto1);
carrito.agregarProducto(producto2);
carrito.agregarProducto(producto3);
carrito.mostrarResumen();
