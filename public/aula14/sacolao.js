export default class Sacolao{
    constructor(){
this.arrFrutas = [{id:1,nome:"Maçã"},{id:2,nome:"Pera"},{id:3,nome:"Melancia"},{id:4,nome:"Uva"}];
}
indiceFruta(fruta){
for (let i=0; i<this.arrFrutas.length; i++){
    if(this.arrFrutas[i].nome.toUpperCase()==fruta.toUpperCase()){
        return i;
    }
} return -1
}


objetoFruta(id){
for (let i=0; i<this.arrFrutas.length; i++){
    if(this.arrFrutas[i].id==id){
        return this.arrFrutas[i];
    }
} return null;
}

adicionarFruta(fruta){
this.arrFrutas.push(fruta)
}
}
