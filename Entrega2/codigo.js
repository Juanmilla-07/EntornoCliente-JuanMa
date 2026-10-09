class Producto {
  constructor(nombre, unidades) {
    this.nombre = nombre;
    this.unidades = unidades;
  }

  get getNombre() {
    return this.nombre;
  }
  set setNombre(nombreNuevo) {
    this.nombre = nombreNuevo;
  }

  get getUnidades() {
    return this.unidades;
  }
  set setUnidades(unidadesNuevas) {
    this.unidades = unidadesNuevas;
  }
  toString() {
    return `Nombre: ${this.nombre} Unidades ${this.unidades}`;
  }
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//FUNCION PARA LEER LA COOKIE
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


var textoProducto = document.getElementById("producto");
var textoUnidades = document.getElementById("unidades");
var btnComprar = document.getElementById("btn-compra");
var cookieGuardada = getCookie("carrito");
var producto = cookieGuardada ? JSON.parse(cookieGuardada) : [];
btnComprar.addEventListener("click", function (event) {
  event.preventDefault();
  if (textoProducto.value !== "" && textoUnidades.value > 0) {
    producto.push(new Producto(textoProducto.value, Number(textoUnidades.value)));

    // Guardamos todo el array en una sola cookie
    setCookie("carrito", JSON.stringify(producto), 30);

    // Leemos la cookie completa
    console.log("Cookie carrito:", getCookie("carrito"));

    textoProducto.value = "";
    textoUnidades.value = "";
  }
});
