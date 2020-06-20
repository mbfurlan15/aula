class Ordem{
    constructor (numbers){
        this.numbers=numbers;
    }
ordenar() {
    return this.numbers.sort((a,b)=> a- b)
    }
}

function clique() {
    var vetor = new Ordem ([parseFloat(document.getElementById("num01").value), 
    parseFloat(document.getElementById("num02").value), 
    parseFloat(document.getElementById("num03").value), 
    parseFloat(document.getElementById("num04").value)])
    document.getElementById("ordenado").innerHTML = vetor.ordenar()
    
}