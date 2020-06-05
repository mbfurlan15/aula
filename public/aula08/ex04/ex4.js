class Lista{
    constructor (lista){
        this.lista=lista;
    }
    adicionarProduto(prod){
        this.lista.push(prod)
}
    calcularMedia(){
        var total = 0;        
    for(var i = 0; i < this.lista.length; i++) {
    total += this.lista[i].valor;
}
    let mm = total / this.lista.length
    return mm
    }
    calcularMaior(){
        var max = this.lista[0].valor;
        var posimax = 0
        for(var i = 0; i < this.lista.length; i++) {
            if (max <= this.lista[i].valor){
                max = this.lista[i].valor
            posimax = i } else{max=max; posimax=posimax}
        }
            return posimax
    }
    calcularMenor(){
        var min = this.lista[0].valor;
        var posimin = 0
        for(var i = 0; i < this.lista.length; i++) {
            if (min >= this.lista[i].valor){
                min = this.lista[i].valor 
            posimin = i } else{min=min; posimin = posimin}
        }
            return posimin
    }
}

class Produto{
    constructor(produto,valor){
        this.produto=produto;
        this.valor=valor;
    }
}
var m = new Lista([])


function clique(){
    //Cria o produto e o adiciona na classe Produto
    let nome = document.getElementById("prod").value
    let reais = parseFloat(document.getElementById("custo").value)
    let p = new Produto (nome, reais)
    //Adiciona o produto no array da classe Lista (única Lista é a "m" que foi declarada anteriormente)
    m.adicionarProduto(p)
    //verifica a quantidade de produtos cadastrados
    let quantprod = m.lista.length
    // Imprime a quantidade de produtos e a lista
    quant.innerHTML = `<div>Produtos cadastrados (${quantprod})</div>`
    tabela.innerHTML += `<div>${p.produto} | ${p.valor}</div>`
    
    // Calcula a média dos produtos cadastrados
    let mm = m.calcularMedia()
    med.innerHTML = `<div>O valor médio é de R$ <b>${mm.toFixed(2)}</b></div>`

    //Verifica qual é o maior e qual é o menor valor cadastrado
    let max = m.lista[m.calcularMaior()].valor
    maior.innerHTML = `<div>O produto mais caro é o <b>${m.lista[m.calcularMaior()].produto}</b>, no valor de R$ <b>${max}</b></div>`

    let min = m.lista[m.calcularMenor()].valor
    menor.innerHTML = `<div>O produto mais barato é o <b>${m.lista[m.calcularMenor()].produto}</b>, no valor de R$ <b>${min}</b></div>`
}

