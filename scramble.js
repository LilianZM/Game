const gameArea = document.querySelector(".gameArea"); // Creamos el contenedor del área del juego
const btn = document.createElement("button"); // Creamos el botón de inicio del juego
const output = document.createElement("div"); // Creamos el contenedor de las palabras
const input = document.createElement("input"); // Creamos un campo de entrada para la respuesta
const result = document.createElement("div"); // Creamos un contenedor para mostrar el resultado

btn.textContent = "Iniciar Juego"; // Texto del botón
output.textContent = "Clic en el botón"; // Texto del contenedor de las palabras
input.placeholder = "Escribe la palabra ordenada"; // Placeholder del campo de entrada
result.textContent = ""; // Inicialmente, no hay resultado

// Agregar a la página del HTML
gameArea.appendChild(output);
gameArea.appendChild(btn);
gameArea.appendChild(input);
gameArea.appendChild(result);

// Valores iniciales del juego
const myWords = ["perro", "gato", "raton", "elefante", "jirafa", "tigre", "león", "cocodrilo"];
const game = {
  sel: "",
  scramble: "",
};

// Evento click del botón
btn.addEventListener("click", function (e) {
  myWords.sort(() => 0.5 - Math.random()); // Ordenamos las palabras de forma aleatoria
  game.sel = myWords[0]; // Seleccionamos la primera palabra
  game.scramble = sorter(game.sel); // Llamamos a la función sorter
  output.textContent = `Ordena la palabra: ${game.scramble}`; // Mostramos la palabra desordenada
  result.textContent = ""; // Limpiamos el resultado anterior
});

// Evento para verificar la respuesta
input.addEventListener("input", function () {
  if (input.value === game.sel) {
    result.textContent = "¡Correcto! La palabra es: " + game.sel; // Mensaje de éxito
  } else {
    result.textContent = "Intenta de nuevo."; // Mensaje de error
  }
});

function sorter(word) {
  let temp = word.split(""); // Separamos la palabra en letras
  temp.sort(() => 0.5 - Math.random()); // Desordenamos las letras
  temp = temp.join(""); // Unimos las letras desordenadas
  return temp; // Retornamos la palabra desordenada
}