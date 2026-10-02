class CuentaCorriente {
  // Creo el constructor con parámetros
  constructor(nombreCliente, numeroCuenta, tipoInteres, saldo) {
    // Los nombres que van con this.var no pueden ser iguales // Ejemplo this.var = var es por eso que les añado un _ pq si no da fallo
    this._nombreCliente = nombreCliente;
    this._numeroCuenta = numeroCuenta;
    this._tipoInteres = tipoInteres;
    this._saldo = saldo;
  }

  // LO HAGO ASI PARA VERLO MÁS CLARO al final se hacen como en java, solo hay q tener en cuenta el guion bajo
  get nombreCliente() {
    return this._nombreCliente;
  }
  set nombreCliente(nombreNuevo) {
    this._nombreCliente = nombreNuevo;
  }

  // Número de Cuenta
  get numeroCuenta() {
    return this._numeroCuenta;
  }
  set numeroCuenta(numeroNuevo) {
    this._numeroCuenta = numeroNuevo;
  }

  // Tipo de Interes
  get tipoInteres() {
    return this._tipoInteres;
  }
  set tipoInteres(nuevoInteres) {
    this._tipoInteres = nuevoInteres;
  }

  // Saldo
  get saldo() {
    return this._saldo;
  }
  set saldo(saldoNuevo) {
    this._saldo = saldoNuevo;
  }

  // MÉTODOS DE OPERACIÓN 

  // Sumar dinero
  ingreso(cantidad) {
    if (cantidad < 0) {
      return false;
    }
    // Esto sirve para actualizar la contraseña, aqui se usa sin guión pq estamos llamando a los metodos get y set
    this.saldo += cantidad;
    return true;
  }
  // Quitar Dinero
  reintegro(cantidad) {
    // Aqui pasa lo mismo q en el anterior
    if (cantidad < 0 || this.saldo < cantidad) {
      return false;
    }
    // -= lee con el GET y actualiza con el SET automáticamente
    this.saldo -= cantidad;
    return true;
  }
  // Esto lo explico poco a poco
  // Creo el metodo transferencia, que recibe un objeto cuentaDestino y un importe
  transferencia(cuentaDestino, importe) {
    // Primero hacemos un reintegro en nuestra cuentaCorriente es por eso q pone this.reintegro
    if (this.reintegro(importe)) {
        // Si es true entramos aquí, entonces nuestro objeto cuentaDestino activara el metodo ingreso con el importe que recibia el metodo,
        // es por eso que es importante mandar un objeto para poder activar el metodo
      cuentaDestino.ingreso(importe);
      return true;
    }
    return false;
  }
}

// Creamos nuestro objeto cuentaCorriente
var cuentaCorriente = new CuentaCorriente();
// Le añado sus datos
cuentaCorriente.nombreClienteNuevo = "Paco";
cuentaCorriente.numeroCuentaNuevo = "ABC123";
cuentaCorriente.tipoInteresNUevo = 12.5;
cuentaCorriente.saldoNuevo = 3500.76;

// Muestro los datos por pantalla
console.log(
  `Cuenta: Nombre: ${cuentaCorriente.nombreCliente} Número Cuenta: ${cuentaCorriente.numeroCuenta} 
  Interes: ${cuentaCorriente.tipoInteres} Saldo = ${cuentaCorriente.saldo}`
);

// Hago un ingreso positivo para comprobar si funciona
cuentaCorriente.ingreso(1000);
console.log(
  `Saldo Nuevo en la cuenta después del ingreso: ${cuentaCorriente.saldo}`,
);
// Hago un ingreso negativo
console.log(`Ingreso Negativo: ${cuentaCorriente.ingreso(-5000)}`);

// Hago un reintrego positivo
cuentaCorriente.reintegro(1000);
console.log(
  `Saldo Nuevo en la cuenta después del reintegro: ${cuentaCorriente.saldo}`,
);
// Hago un reintegro negativo y con un sueldo superior al saldo
console.log(`Reintegro superior al saldo: ${cuentaCorriente.reintegro(6000)}`);
console.log(`Reintengro Negativo: ${cuentaCorriente.reintegro(-5000)}`);

// Creo el objeto cuentaDestino, en este caso he creado el objeto directamente
var cuentaDestino = new CuentaCorriente("Gema", "DEF456", 10, 0);

// Muestro por pantalla los datos de la cuentaDestino
console.log(
  `Cuenta Destino Antes Ingreso: Nombre: ${cuentaDestino.nombreCliente} Número Cuenta: ${cuentaDestino.numeroCuenta} 
  Interes: ${cuentaDestino.tipoInteres} Saldo = ${cuentaDestino.saldo}`
);

// Pruebo a hacer una transferencia con todos correctos
cuentaCorriente.transferencia(cuentaDestino, 1000);

// Muestro los datos de la cuentaDestino depsues de la transferencia
console.log(
  `Cuenta Destino Después Ingreso: Nombre: ${cuentaDestino.nombreCliente} Número Cuenta: ${cuentaDestino.numeroCuenta} 
  Interes: ${cuentaDestino.tipoInteres} Saldo = ${cuentaDestino.saldo}`
);

// Muestro el saldo de la cuentaCorriente depsues de la transferencia
console.log(
  `Saldo Nuevo en la cuenta correinte después del reintegro: ${cuentaCorriente.saldo}`
);

// Compruebo si falla al poner un importe mayor que el saldo
console.log(cuentaCorriente.transferencia(cuentaDestino, 3000));
