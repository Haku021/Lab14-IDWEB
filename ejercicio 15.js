class Cuenta {
  #saldo;
  constructor(saldoInicial = 0) {
    this.#saldo = saldoInicial;
  }
  get saldo() {
    return this.#saldo;
  }
  depositar(monto) {
    if (monto > 0) {
      this.#saldo += monto;
      console.log("Depósito de", monto, "realizado. Nuevo saldo:", this.#saldo);
    } else {
      console.log("El monto a depositar debe ser positivo.");
    }
  }
  retirar(monto) {
    if (monto > 0 && monto <= this.#saldo) {
      this.#saldo -= monto;
      console.log("Retiro de", monto, "realizado. Nuevo saldo:", this.#saldo);
    } else {
      console.log("Fondos insuficientes o monto inválido.");
    }
  }
  transferir(monto, otraCuenta) {
    if (monto > 0 && monto <= this.#saldo) {
      this.retirar(monto);
      otraCuenta.depositar(monto);
      console.log("Transferencia de", monto, "realizada.");
    } else {
      console.log("No se puede realizar la transferencia.");
    }
  }
}
class CuentaAhorro extends Cuenta {
  constructor(saldoInicial) {
    super(saldoInicial);
  }
  retirar(monto) {
    if (monto > 0 && monto <= this.saldo) {
      super.retirar(monto);
    } else {
      console.log("Retiro no permitido en Cuenta de Ahorro. Fondos insuficientes.");
    }
  }
}
class CuentaCorriente extends Cuenta {
  #limiteSobregiro;
  constructor(saldoInicial, limiteSobregiro) {
    super(saldoInicial);
    this.#limiteSobregiro = limiteSobregiro;
  }
  retirar(monto) {
    if (monto > 0 && monto <= this.saldo + this.#limiteSobregiro) {
      let saldoFinal = this.saldo - monto;
      super.retirar(Math.min(monto, this.saldo)); 
      if (saldoFinal < 0) {
        console.log("Se ha usado sobregiro de", Math.abs(saldoFinal));
      }
    } else {
      console.log("No se puede retirar esa cantidad. Límite de sobregiro excedido.");
    }
  }
}

let ahorro = new CuentaAhorro(500);
let corriente = new CuentaCorriente(300, 200);
console.log("Saldo inicial Ahorro:", ahorro.saldo);
console.log("Saldo inicial Corriente:", corriente.saldo);
ahorro.retirar(600);
corriente.retirar(450);
ahorro.depositar(200);
ahorro.transferir(400, corriente);
console.log("Saldo final Ahorro:", ahorro.saldo);
console.log("Saldo final Corriente:", corriente.saldo);
