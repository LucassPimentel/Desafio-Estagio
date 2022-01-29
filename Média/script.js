let notaA = Number(prompt("Qual sua primeira nota?"));
let notaB = Number(prompt("Qual sua segunda nota?"));

let media = (notaA + notaB) / 2;

if (media < 3) {
  alert(`Sua média foi ${media}, você foi reprovado.`);
}
if (media < 7 && media > 3) {
  alert(`Sua média foi ${media}, você precisa realizar a prova final.`);
}
if (media >= 7) {
  alert(`Sua média foi ${media}, você foi aprovado.`);
}
