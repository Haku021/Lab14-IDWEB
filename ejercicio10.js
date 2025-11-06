class Producto {
  #nombre;
  #precio;
  #stock;

  constructor(nombre, precio, stock) {
    this.#nombre = nombre;
    this.precio = precio; 
    this.#stock = stock;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(valor) {
    this.#nombre = valor;
  }
  get precio() {
    return "$" + this.#precio.toFixed(2);
  }

  set precio(valor) {
    this.#precio = Number(valor);
  }
  get stock() {
    return this.#stock;
  }
  set stock(valor) {
    this.#stock = valor;
  }
  vender(cantidad) {
    if (cantidad <= this.#stock) {
      this.#stock -= cantidad;
      console.log("Venta realizada:", cantidad, "unidades de", this.#nombre, ". Stock restante:", this.#stock);
    } else {
      console.log("No hay suficiente stock para vender", cantidad, "unidades.");
    }
  }
}

const producto1 = new Producto("Laptop", "1200.5", 10);
console.log("Producto:", producto1.nombre);
console.log("Precio:", producto1.precio); 
console.log("Stock:", producto1.stock);
producto1.vender(3);
producto1.precio = 1500;
console.log("Nuevo precio:", producto1.precio);
