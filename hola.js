function saludo (saludo, nombre, apellido) {
    return saludo + "" + nombre + "" + apellido;
}

let hola = saludo ("Dr.", "Ricardo", "Sanchez");

console.log(hola);

function medallaSegunPuesto(a) {
  if (a > 3)
    return "Seguí participando";
  return ["Oro", "Plata", "Bronce"][a - 1];
}
medallaSegunPuesto(3)
console.log(medallaSegunPuesto(2))

function imprimir5Veces5(){
  for (let i = 0; i < 5; i++)
  console.log(5)
}
console.log(imprimir5Veces5(5))

function sumar5MonedasDe25Centavos(value){
  let totalMonedas = 0;
  for( let i = 0 ; i < value; i++ ){ 
     totalMonedas = totalMonedas + 0.25;
  }
  return totalMonedas;
}
console.log(sumar5MonedasDe25Centavos(10))
