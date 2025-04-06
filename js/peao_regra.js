"use strict";

const arrayPeao = [];

for (const i of casasNomeArray){
    arrayPeao.push[document.getElementById(i+2)];
}

for(const i of casasNomeArray){
    arrayPeao.push[document.getElementById(i+7)]; 
}

for(const i of arrayPeao){
    i.addEventListener('click',()=>{
        const elementoPrecionado = i;
        const atualID = i.getAttribute("id");

        let mudanca=parseInt(atualID[1]);

        const casaQuadrado=[];

        for (let i =0; i <2 ; i++){
            mudanca++;
            casaQuadrado.push(document.getElementById(atualID[0] + mudanca));
        }
        
        circuloBrilhante(casaQuadrado,elementoPrecionado);
    });
}

const circuloIncerido=[];

const circuloBrilhante = function([adicionarCirculos,elementoPrecionado]){
let circulo = document.createElement("div");

if (circuloIncerido.length != 0) removeMyCircle(circuloIncerido);

adicionarCirculos.forEach((i) => {
i.classList.add("flex");

i.addEventListener("click", function () {
    i.innerHTML = elementoPrecionado.innerHTML;
    const removerCirculo = adicionarCirculos.filter((el) => el !== i);
    removeMyCircle(removerCirculo);
    elementoPrecionado.innerHTML = "";
  });
  
  i.innerHTML = `<div class="circle"></div>`;

  
  circuloIncerido.push(i);
});
};

const removeMyCircle = function (removeArray) {
    removeArray.forEach((i) => {
      i.innerHTML = "";
      i.classList.remove("flex");
      
    });
  };
