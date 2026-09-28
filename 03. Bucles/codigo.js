function howMany(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    alert(
        "Número de opciones seleccionadas: " + howMany(document.selectForm.musicTypes)
    );
});



function agregarOpcion(selectId, texto, valor) {
  const select = document.getElementById(selectId);
  const nuevaOpcion = document.createElement("option");
  
  nuevaOpcion.value = valor;
  nuevaOpcion.textContent = texto;

  select.appendChild(nuevaOpcion);
}

// Escuchador de clic
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {
  agregarOpcion("TiposCoches", "Esta es la prueba por ver si funciona", 1);
});

let x = 0;
let z = 0;
labelCancelLoops: while (true) { // Normalmente no usaremos el label pero es otro forma de hacer loops usando el breaj
  console.log("Bucles x: ", x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Bucles j: ", z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}

for (let i = 0; i < lentejas.length; i++){
  for (let j = 0; j < lentejas2.length; j++){
    if(lentejas[i] != lentejas2[j]){
      console.log("Los valores cambian a partir del: " + (i +1));
      break;
    }
  }
}

const arr = [3, 5, 7];
arr.foo = "hello"; //  Le estás añadiendo una propiedad personalizada al objeto array llamada "foo".

for (const i in arr) {
  console.log(i);
}
// "0" "1" "2" "foo" ESTO MUESTRO LA POSICION POR ASI DECRILO

for (const i of arr) {
  console.log(i);
}
// Logs: 3 5 7 ESTO MUESTRA EL VALOR DE CADA POSICIÓN