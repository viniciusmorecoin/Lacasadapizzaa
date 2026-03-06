let pedidos = localStorage.getItem("pedidos") || 0

pedidos++

localStorage.setItem("pedidos",pedidos)

let contador = document.getElementById("contadorPizza")

contador.innerHTML = ""

for(let i=0;i<10;i++){

let estrela = document.createElement("span")

if(i<pedidos){

estrela.innerHTML="🍕"

}else{

estrela.innerHTML="⚪"

}

contador.appendChild(estrela)

}

if(pedidos==10){

alert("🎉 Você ganhou uma pizza grátis!")

localStorage.setItem("pedidos",0)

}