var cosa = 3;
console.log(cosa++) // Imprime 3 y luego incremanta el valor a 4
cosa = 3;
console.log(++cosa); // Incrementa a 4 e imprime a 4;
// Al comparar dentro de un if por ejemplo si son 3 iguales significa que tiene el mismo formato y el mismo contenido
// Y si son dos iguales significa que no tiene el mismo formato pero si el mismo contenido. Ej: "3" == 3 // TRUE
switch (cosa){
    case 1:
        console.log(cosa);
        break;
    case 2:
        console.log(cosa);
        break;
    default:
        console.log(cosa);
}