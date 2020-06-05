class Numero{
    constructor(numero){
        this.numero=numero;
    }
    confe(){
        if(this.numero%2>0){return "Ímpar"}else{return "Par"}

    }
}
function clique(){
    let n = new Numero(parseFloat(document.getElementById("n1").value))
    console.log(n)
    Texto.innerHTML = `O número é ${n.confe()}`
}