// Función constructora sencilla
function Tiempo(año, mes, dia, hora, minuto, segundo) {
    // 1. Si todos los parámetros son 0, usamos la fecha y hora actual
    if (año === 0 && mes === 0 && dia === 0 && hora === 0 && minuto === 0 && segundo === 0) {
        let fechaActual = new Date();
        this.año = fechaActual.getFullYear();
        this.mes = fechaActual.getMonth() + 1; // +1 porque JS cuenta los meses de 0 a 11
        this.dia = fechaActual.getDate();
        this.hora = fechaActual.getHours();
        this.minuto = fechaActual.getMinutes();
        this.segundo = fechaActual.getSeconds();
    } else {
        // Si nos dan valores, los guardamos directamente en las propiedades
        this.año = año;
        this.mes = mes;
        this.dia = dia;
        this.hora = hora;
        this.minuto = minuto;
        this.segundo = segundo;
    }

    // --- GETTERS ---
    this.getAño = function() { return this.año; };
    this.getMes = function() { return this.mes; };
    this.getDia = function() { return this.dia; };
    this.getHora = function() { return this.hora; };
    this.getMinuto = function() { return this.minuto; };
    this.getSegundo = function() { return this.segundo; };

    // --- SETTERS ---
    this.setAño = function(nuevoAño) { this.año = nuevoAño; };
    this.setMes = function(nuevoMes) { this.mes = nuevoMes; };
    this.setDia = function(nuevoDia) { this.dia = nuevoDia; };
    this.setHora = function(nuevaHora) { this.hora = nuevaHora; };
    this.setMinuto = function(nuevoMinuto) { this.minuto = nuevoMinuto; };
    this.setSegundo = function(nuevoSegundo) { this.segundo = nuevoSegundo; };

    // --- FORMATOS COMPLETOS ---
    this.getFechaCompleta = function() {
        return this.dia + "/" + this.mes + "/" + this.año;
    };

    this.getHoraCompleta = function() {
        return this.hora + ":" + this.minuto + ":" + this.segundo;
    };

    // --- BISIESTO ---
    this.esBisiesto = function() {
        // Un año es bisiesto si es divisible por 4 y no por 100, o si es divisible por 400
        return (this.año % 4 === 0 && this.año % 100 !== 0) || (this.año % 400 === 0);
    };

    // --- COMPARACIONES ---
    // Usamos el objeto Date internamente solo para comparar fácilmente
    this.obtenerMilisegundos = function() {
        return new Date(this.año, this.mes - 1, this.dia, this.hora, this.minuto, this.segundo).getTime();
    };

    this.esMayor = function(otroTiempo) {
        return this.obtenerMilisegundos() > otroTiempo.obtenerMilisegundos();
    };

    this.esMenor = function(otroTiempo) {
        return this.obtenerMilisegundos() < otroTiempo.obtenerMilisegundos();
    };

    this.esIgual = function(otroTiempo) {
        return this.obtenerMilisegundos() === otroTiempo.obtenerMilisegundos();
    };

    // --- SUMAR HORA ---
    this.sumaHora = function(otroTiempo) {
        this.hora += otroTiempo.getHora();
        this.minuto += otroTiempo.getMinuto();
        this.segundo += otroTiempo.getSegundo();

        // Si los segundos superan 59, sumamos un minuto
        if (this.segundo >= 60) {
            this.minuto += Math.floor(this.segundo / 60);
            this.segundo = this.segundo % 60;
        }

        // Si los minutos superan 59, sumamos una hora
        if (this.minuto >= 60) {
            this.hora += Math.floor(this.minuto / 60);
            this.minuto = this.minuto % 60;
        }

        // Si las horas superan 23, sumamos días
        if (this.hora >= 24) {
            this.dia += Math.floor(this.hora / 24);
            this.hora = this.hora % 24;
        }
    };
}

// ==========================================
// EJEMPLOS DE USO
// ==========================================

console.log("--- Crear con fecha actual ---");
let tiempoActual = new Tiempo(0, 0, 0, 0, 0, 0);
console.log("Fecha actual:", tiempoActual.getFechaCompleta());
console.log("Hora actual:", tiempoActual.getHoraCompleta());

console.log("\n--- Crear fechas personalizadas ---");
let t1 = new Tiempo(2024, 2, 28, 23, 30, 0);
let t2 = new Tiempo(2023, 10, 15, 12, 0, 0);

console.log("t1:", t1.getFechaCompleta(), t1.getHoraCompleta());
console.log("t2:", t2.getFechaCompleta(), t2.getHoraCompleta());

console.log("\n--- Comprobar si es bisiesto ---");
console.log("¿2024 es bisiesto?:", t1.esBisiesto()); // true
console.log("¿2023 es bisiesto?:", t2.esBisiesto()); // false

console.log("\n--- Comparar tiempos ---");
console.log("¿t1 es mayor que t2?:", t1.esMayor(t2)); // true
console.log("¿t1 es menor que t2?:", t1.esMenor(t2)); // false
console.log("¿t1 es igual a t2?:", t1.esIgual(t2));   // false

console.log("\n--- Sumar horas ---");
let tiempoASumar = new Tiempo(0, 0, 0, 2, 40, 0); // 2 horas y 40 minutos

console.log("t1 antes de sumar:", t1.getFechaCompleta(), t1.getHoraCompleta());
t1.sumaHora(tiempoASumar);
console.log("t1 después de sumar 2h 40m:", t1.getFechaCompleta(), t1.getHoraCompleta());