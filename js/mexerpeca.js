const todosQuadrados = document.getElementsByClassName("quadrado");
const elementoSelecionado = []

for (const x of todosQuadrados){
    x.addEventListener('click',function(){
       
        console.log(elementoSelecionado); 

        const idDoElemento  = x.getAttribute("id");
        const innerHtmlofElement= document.getElementById(idDoElemento).innerHTML;

        if(elementoSelecionado.length > 0){
            elementoSelecionado[0].removeAttribute("style");
            elementoSelecionado.length=0;
            
        }


     
      if (innerHtmlofElement.includes("pretas") || innerHtmlofElement.includes("brancas")){
        document.getElementById(idDoElemento).style.backgroundColor= "#000000";
        elementoSelecionado.push(x);
      } 
    })
}