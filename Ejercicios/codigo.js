let numero = 12;
for(i = 0; i <= 10; i++){
    console.log(numero + " x " + i + " = " + (numero * i));
}


var datos = [
  {
    nombre: "Pepe",
    apellidos: "Lopez Perez",
    telefono: "66666666666",
    asignaturas: { nombre: "DWEC", codigo: 1111 }
  },
  {
    nombre: "María",
    apellidos: "García Gómez",
    telefono: "77777777777",
    asignaturas: { nombre: "DWES", codigo: 2222 }
  },
  {
    nombre: "Juan",
    apellidos: "Sánchez Ruíz",
    telefono: "88888888888",
    asignaturas: { nombre: "DIW", codigo: 3333 }
  }
];

// EJERCICIO 1: Listado completo en consola de todos los profesores junto a su asignatura
for (let i = 0; i < datos.length; i++) {
  console.log(`Profesor: ${datos[i].nombre} Apellidos: ${datos[i].apellidos} Teléfono: ${datos[i].telefono}- 
                Asignatura: ${datos[i].asignaturas.nombre}`);
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

for(let i = 0; i < datos.length; i++){
    if (datos[i].asignaturas.codigo === codigoBuscado){
        console.log(`Profesor: ${datos[i].nombre} ${datos[i].apellidos}`);
        encontrado = true;
        break;
    }
}
if (encontrado != true){
    console.log("No hay ninguna asignatura con ese código");
}

// VAMOS A HACER QUE LOS DATOS RECOGIDOS EN UN FORMULARIO SE AÑADAN A NUESTRO ARRAYD (CREO)

var texto1 = document.getElementById("nombre");
var btn1 = document.getElementById("btn");
btn.addEventListener("click", function (){
  console.log(texto1.value);
})
