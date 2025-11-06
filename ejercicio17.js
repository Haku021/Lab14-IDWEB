class Notificacion {
  constructor(mensaje) {
    this.mensaje = mensaje;
  }
  enviar() {
    console.log("Método enviar() debe ser sobrescrito en la subclase.");
  }
}

class Email extends Notificacion {
  enviar() {
    console.log("Enviando Email con el mensaje:", this.mensaje);
  }
}

class SMS extends Notificacion {
  enviar() {
    console.log("Enviando SMS con el mensaje:", this.mensaje);
  }
}
class Push extends Notificacion {
  enviar() {
    console.log("Enviando Notificación Push con el mensaje:", this.mensaje);
  }
}
function procesarNotificaciones(listaNotificaciones) {
  listaNotificaciones.forEach(notificacion => {
    notificacion.enviar(); 
  });
}

const notificaciones = [
  new Email("Bienvenido a nuestro servicio!"),
  new SMS("Tu código de verificación es 1234"),
  new Push("Tienes una nueva alerta")
];
procesarNotificaciones(notificaciones);
