console.log()

const arrayDosQuadrados = document.querySelectorAll('.quadrado');

const casasNomeArray = ["a","b","c","d","e","f","g","h"];

let NumeroCasa = 0;

for (const i of arrayDosQuadrados) {
  let contador = 1;
  for (const x of i.children) {
    x.setAttribute("id", casasNomeArray[NumeroCasa] + contador);
    contador++;
  }
  NumeroCasa++;
}

for (const i of arrayDosQuadrados) {
  //console.log(i.children);
}