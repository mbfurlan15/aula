import Sacolao from "./sacolao.js";

export default class Controller {
    constructor(){
        this.sacolao = new Sacolao()

    }
buscarPorNome(nome){
let fruta = this.sacolao.indiceFruta(nome);
if (fruta != -1){
imprima.innerHTML = `Encontrado na posição: ${fruta}`
}else {
imprima.innerHTML = "Não encontrado!"
}
}

buscarPorId(id){
let objeto = this.sacolao.objetoFruta(id);
if (objeto != null){
//Exibir na div
imprima.innerHTML = `Fruta encontrada <br> id: ${objeto.id} nome: ${objeto.nome}`;
}else imprima.innerHTML = "Não encontrado!"
}
clicarBuscar(){
if (document.getElementById("lista").value=="id"){
    let id = parseFloat(document.getElementById("buscador").value);
    this.buscarPorId(id);
} if (document.getElementById("lista").value=="fruta") {
    let nome = document.getElementById("buscador").value;
    this.buscarPorNome(nome);
}
}
clicarCadastrar(){
let arr = this.sacolao.arrFrutas;
//verificar maior id
let maior =0
maior = arr[1].id
for(let i =0; i<arr.length;i++){
if (maior< arr[i].id){
    maior=arr[i].id
} else {maior=maior}
}

let fruta = {id: maior+1, nome: document.getElementById("fruta").value};
this.sacolao.adicionarFruta(fruta);
window.alert (`A fruta: ${fruta.nome} foi cadastrada com sucesso!`)
}
clicarExcluirID(){
let excluir = parseInt(document.getElementById("datalistfruta").value)
let arr = this.sacolao.arrFrutas;
for(let i =0; i<arr.length;i++){
if (excluir== arr[i].id){
    this.sacolao.arrFrutas.splice(i,1)
}else{}
}
}
clicarIconeID(idFruta){
    let excluir = idFruta
    let arr = this.sacolao.arrFrutas;
    window.alert('clique')
    for(let i =0; i<arr.length;i++){
    if (excluir== arr[i].id){
        this.sacolao.arrFrutas.splice(i,1)
    }else{}
    }
    ;this.listarFrutas()
    }


listarFrutas(){
let arr = this.sacolao.arrFrutas;
let divLista = document.getElementById("lista-frutas");
divLista.innerHTML = `<tr><th>ID</th><th>Fruta</th></tr>`
for(let i =0; i<arr.length;i++){
    
divLista.innerHTML +=`<tr><td height="40" align="center">${arr[i].id}</td><td align="center">${arr[i].nome}</td>
<td align="center"><img width="20" src="./icon/trash.png" onclick="controller.clicarIconeID(${arr[i].id})"></td></tr>`}

let dataList=document.getElementById("l-frutas");
dataList.innerHTML = ""
for(let i =0; i<arr.length;i++){
    
dataList.innerHTML +=`<option value="${arr[i].id}">	${arr[i].nome}</option>`}
}

}

