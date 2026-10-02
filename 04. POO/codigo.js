class CuentaCorriente {
    constructor(nombreCliente, numeroCuenta, tipoInteres, saldo){
        this.nombreCliente = nombreCliente;
        this.numeroCuenta = numeroCuenta;
        this.tipoInteres = tipoInteres;
        this.saldo = saldo;
    }

    get nombreCliente(){
        return this.nombreCliente;
    }
    get numeroCuenta(){
        return this.numeroCuenta;
    }
    get tipoInteres(){
        return this.tipoInteres;
    }
    get saldo(){
        return this.saldo;
    }
    set nombreClienteNuevo(nombreNuevo){
        this.nombreCliente = nombreNuevo;
    }
}