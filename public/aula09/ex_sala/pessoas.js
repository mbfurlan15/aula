class Cadastro{
    constructor(lista){
        this.lista=lista
    }
}
var m = new Cadastro([])

class Pessoas{
    constructor(nome,sexo,idade){
        this.nome=nome;
        this.sexo=sexo;
        this.idade=idade;
    }
    calcularMasculinos(){
        var masculino = 0
        for(var i = 0; i<this.lista.length; i++){
            if (this.lista[i].sexo=="M"){
                masculino ++
            }else {masculino = masculino}

        } return masculino
    }


}
function cadastrarPessoas(){
    let name = document.getElementById("nome").value
    let genero = document.querySelector("input[type=radio]:checked").value
    let age = document.getElementById("idade").value
    p = new Pessoas (name, genero, age)
    p.lista.push()
    console.log(p)
    masculino.innerHTML = `<div>Masculino: ${m.calcularMasculinos()}</div>`
}
