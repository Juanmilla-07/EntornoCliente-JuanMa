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
