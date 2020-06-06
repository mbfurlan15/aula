class Triangulo{
    constructor(l1,l2,l3){
        this.l1=l1;
        this.l2=l2;
        this.l3=l3;
    }
Confe(){
    if(this.l1>Math.abs(this.l2-this.l3) && this.l1<this.l2+this.l3 &&
        this.l2>Math.abs(this.l1-this.l3) && this.l2<this.l1+this.l3 &&
        this.l3>Math.abs(this.l2-this.l1) && this.l1<this.l2+this.l1){
            if (this.l1==this.l2 && this.l2==this.l3){
                return "Triângulo Equilátero"
            }else{
                if(this.l!=this.l2 && this.l1!=this.l3 && this.l2!=this.l3){
                    return "Triângulo Escaleno"
        
            }else{
                return "Triângulo Isósceles"}}}else{return "Não é triângulo"}

}
}

function clique() {   
    
    let a = new Triangulo(parseFloat(document.getElementById("n1").value),
    parseFloat(document.getElementById("n2").value),
    parseFloat(document.getElementById("n3").value))
    Texto.innerHTML = a.Confe()}