
let numero = prompt("Ingresa un número:");

// Verificar si el dato de entrada es un número
while (isNaN(numero)) {
  alert("Error: Debes ingresar un número válido.");
  numero = prompt("Ingresa un número:");
}

let factorial = 1;
for (let i = 1; i <= numero; i++) {
  factorial *= i;
}

document.getElementById("resultado").innerHTML = "El factorial de " + numero + " es: " + factorial;
