function Funcao() {
let num = Number(prompt("Digite um número:"));
if (isNaN(num)) {
  alert("Permitido somente números");
} else {
  if (num >= 100 && num <= 500) {
    alert("Seu número está entre 100 e 500");
    Funcao()
  } else if (num < 100) {
    alert("Seu numero não está entre 100 e 500, está abaixo de 100..");
    Funcao()
  } else if (num > 500) {
    alert("Seu numero não está entre 100 e 500, está acima de 500..");
    Funcao()
  }
}
}

Funcao()