let numero = 12;
for (i = 0; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + numero * i);
}

var datos = [
  {
    dni: "11111111A",
    nombre: "Pepe",
    apellidos: "Lopez Perez",
    telefono: "66666666666",
    asignaturas: [{ nombre: "DWEC", codigo: 1111 }],
  },
  {
    dni: "222222222B",
    nombre: "María",
    apellidos: "García Gómez",
    telefono: "77777777777",
    asignaturas: [{ nombre: "DWES", codigo: 2222 }],
  },
  {
    dni: "33333333C",
    nombre: "Juan",
    apellidos: "Sánchez Ruíz",
    telefono: "88888888888",
    asignaturas: [{ nombre: "DIW", codigo: 3333 }],
  },
];

// EJERCICIO 1: Listado completo en consola de todos los profesores junto a su asignatura
for (let i = 0; i < datos.length; i++) {
  for (let j = 0; j < datos[i].asignaturas.length; j++) {
    console.log(`Profesor: ${datos[i].nombre} Apellidos: ${datos[i].apellidos} Teléfono: ${datos[i].telefono}- 
                Asignatura: ${datos[i].asignaturas[j].nombre} ${datos[i].asignaturas[j].codigo}`);
  }
}
/*
OTRA FORMA DE RECORRERLO
  for(const i of datos){
      console.log(i);
  } 
*/

// EJERCICIO 2: Dado un código de una asignatura muestra el nombre y el apellido del profe
var codigoBuscado = 4444;

let encontrado = false;

for (let i = 0; i < datos.length; i++) {
  if (datos[i].asignaturas.codigo === codigoBuscado) {
    console.log(`Profesor: ${datos[i].nombre} ${datos[i].apellidos}`);
    encontrado = true;
    break;
  }
}
if (encontrado != true) {
  console.log("No hay ninguna asignatura con ese código");
}

// Crear un formulario para dar de alta profesores introduciendo el DNI nombre apellidos y teléfono
// del mismo

var texto1 = document.getElementById("dni");
var texto2 = document.getElementById("nombre");
var texto3 = document.getElementById("apellido");
var texto4 = document.getElementById("telefono");
var btn1 = document.getElementById("btn");
btn1.addEventListener("click", function () {
  var profe = {
    dni: texto1.value,
    nombre: texto2.value,
    apellidos: texto3.value,
    telefono: texto4.value,
    asignaturas: [],
  };
  datos.push(profe);
  for (const i of datos) {
    console.log(i.dni, i.nombre, i.apellidos, i.telefono);
  }
});

// Más abajo añadir otro formulario para añadir asignaturas a un profesor
// indicando código de la asignatura nombre de la asignatura y DNI del profesor que la imparte
var dniAsignatura = document.getElementById("dniProfesor");
var codigoAsignatura = document.getElementById("codigoAsignatura");
var nombreAsignatura = document.getElementById("nombreAsignatura");
var btn2 = document.getElementById("btn-asignatura");

btn2.addEventListener("click", function () {
  // Buscamos al profesor
  let encontrado = false;
  for (let i = 0; i < datos.length; i++) {
    if (datos[i].dni == dniAsignatura.value) {
      // Creamos la asignatura
      encontrado = true;
      var asignatura = {
        nombre: nombreAsignatura.value,
        codigo: codigoAsignatura.value,
      };

      // La añadimos al profesor
      datos[i].asignaturas.push(asignatura);

      console.log("Asignatura añadida correctamente.");
      break;
    }
  }
  if (!encontrado) {
    // Si no encuentra al profesor
    console.log("No se encontró ningún profesor con ese DNI.");
  }
});
// Añadir un tercer y último formulario donde introduciendo el código de la asignatura
// me indique el profesor que imparte esa asignatura

var codigoBuscado = document.getElementById("codigoBuscar");
var btn3 = document.getElementById("btn-buscar");

btn3.addEventListener("click", function () {
  let encontrado = false;
  for (let i = 0; i < datos.length; i++) {
    for (let j = 0; j < datos[i].asignaturas.length; j++) {
      if (datos[i].asignaturas[j].codigo == codigoBuscado.value) {
        console.log(
          `Profesor: ${datos[i].dni} ${datos[i].nombre} ${datos[i].apellidos} ${datos[i].telefono}`,
        );
      }
    }
  }
});
