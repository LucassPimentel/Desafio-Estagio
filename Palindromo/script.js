let palavra = prompt("Escreva uma palavra:").toLowerCase();
let palavraAoContrario = palavra.split("").reverse().join("");

if (palavra === palavraAoContrario) {
  alert(`Sua palavra é um palíndromo: ${palavraAoContrario}`);
} else {
  alert(`Sua palavra não é um palíndromo: ${palavraAoContrario}`);
}
