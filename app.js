let carrinho = []
let total = 0

function addCarrinho(nome,preco){

carrinho.push({nome,preco})

total += preco

atualizarCarrinho()

}

function atualizarCarrinho(){

let lista = document.getElementById("listaCarrinho")

lista.innerHTML=""

carrinho.forEach(p=>{

let li = document.createElement("li")

li.innerText = p.nome + " - R$"+p.preco

lista.appendChild(li)

})

document.getElementById("total").innerText = total

}

function aplicarCupom(){

let cupom = document.getElementById("cupom").value

if(cupom=="PIZZA10"){

total = total * 0.9

alert("Cupom aplicado!")

}

atualizarCarrinho()

}

function enviarPedido(){

let texto="Pedido:%0A"

carrinho.forEach(p=>{

texto += p.nome + "%0A"

})

texto += "Total: R$"+total

window.open("https://wa.me/5561998791411?text="+texto)

}