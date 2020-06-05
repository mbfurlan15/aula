class Notas{
    constructor (nota1, nota2, nota3,media){
        this.nota1=nota1;
        this.nota2=nota2;
        this.nota3=nota3;
        this.media=(nota1+nota2+nota3)/3
    }
    med(){if(this.media>=7){
        return "aprovado"

    }else{if(this.media>= 4 && this.media<7){
        return "prova final"

    }else{ return "reprovado"
    }    }    }
}
function cadastro(){
    
    let a = new Notas(parseFloat(document.getElementById("n1").value),
    parseFloat(document.getElementById("n2").value),
    parseFloat(document.getElementById("n3").value))
    Texto.innerHTML = `<div>${a.med()}</div>`
}