console.log("Hello, World!");
const variable2 = "José"; // Vsriable que no cambia, es fija
let nombre = "Paco"; // Esto permite que la variable pueda cambiar, solo se puede usar apartir de donde este declarado
var varibale = 8; // Este tipo de variable sirve para usarlo en todo tu código dando igual donde lo declares

/*
// Con var (comportamiento peligroso)
var edad = 15;
if (true) {
  var edad = 20; // Sobrescribe la variable de afuera
}
console.log(edad); // Imprime 20 (¡se modificó fuera del if!)

// Con let (comportamiento seguro)
let puntos = 15;
if (true) {
  let puntos = 20; // Vive solo dentro del bloque if
}
console.log(puntos); // Imprime 15 (la variable original sigue intacta)
*/

function suma(a,b){
    let suma3 = a+b;
    console.log(suma3);
}
suma(2,3);

// OBJETOS EN JS
var obj1 = {Marca: "Seat", modelo: "ibiza"}; // const obj1, esto lo que haría sería guardar los atributos (Marca, modelo) pero no sus valores
console.log(obj1.Marca);
obj1.Marca = "Ford";
console.log(obj1.Marca);
console.log(obj1);

// ARRAYD
const arrayd = ["HTML", "CSS"];
console.log(arrayd[0]);
arrayd.push("JAVASCRIPT"); // Añade al arraid
console.log(arrayd);

// Conversiones
var x = 1;
console.log(x); // 1
x = "verde";
console.log(x); // verde    console.log(x+1) = verde1
x = "4"
console.log(parseInt(x)); // Pasarlo a numero
x = "8";
console.log(x - 2); // El menos es el único comando capaz de restar un int y un string siempre y cuando sea número los dos valores
                    // y que no sean por ejemplo (b - 7)
// parseInt("101", 2) = 5; el número de la derecha (2) sirve para establecer el sistema numérico (binario, hexadecimal, etc)
