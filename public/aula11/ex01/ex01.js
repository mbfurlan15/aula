class Cliente{
    constructor (id, nome){
        this.id=id;
        this.nome=nome;

    }
    adicionar(cliente){
        this.carros.push(cliente)
    }
}

class Carro{
    constructor (marca, modelo, ano, idCliente){
        this.marca=marca;
        this.modelo=modelo;
        this.ano=ano;
        this.idCliente=idCliente;
    }
}

class GerenciadorCarro{
    constructor(){
        this.carros=[]
    }
    adicionar(carro){
        this.carros.push(carro)
    }
}

class GerenciadorCliente{
    constructor(){
        this.clientes=[]
        this.adicionar(new Cliente(null,"Selecione..."));
        this.adicionar(new Cliente(100,"João"));
        this.adicionar(new Cliente(101,"José"));
        this.adicionar(new Cliente(102,"Maria"));
        this.adicionar(new Cliente(103,"Juliana"));
    }
    adicionar(cliente){
        this.clientes.push(cliente)
    }
}
1
class CarroController{
    constructor(){
        this.gerenciadorCarro= new GerenciadorCarro();
        this.gerenciadorCliente =new GerenciadorCliente();
        this.carregarClientes()
    }
cliqueCadasCarro(){
let carro = new Carro(
    document.getElementById("marca").value,
    document.getElementById("modelo").value,
    document.getElementById("ano").value,
    parseFloat(document.getElementById("lista-clientes").value))
    this.gerenciadorCarro.adicionar(carro)
}
listarCadasCarro(){
    let arr = this.gerenciadorCarro.carros;
       let divLista = document.getElementById("lista-carros");
       divLista.innerHTML = "<tr><th>Marca</th><th>Modelo</th><th>Ano</th><th>Nº Cliente</th></tr>"
        for(let i =0; i<arr.length;i++){
            
        divLista.innerHTML +=`<tr><td height="40" align="center">${arr[i].marca}</td><td align="center">${arr[i].modelo}</td><td align="center">${arr[i].ano}</td><td align="center">${arr[i].idCliente}</tr>`
}
}
carregarClientes(){
    let arr = this.gerenciadorCliente.clientes;
       let divLista = document.getElementById("lista-clientes");
       divLista.innerHTML = ""
        for(let i =0; i<arr.length;i++){
        divLista.innerHTML += `<option value="${arr[i].id}">  ${arr[i].nome} </option>`
        }
}
cliqueCadasCliente(){
    let arr = this.gerenciadorCliente.clientes;
    //verificar maior id
    let maior =0
    maior = arr[1].id
    for(let i =0; i<arr.length;i++){
        if (maior< arr[i].id){
            maior=arr[i].id
        } else {maior=maior}
        }
    let id=maior+1;
    let cliente = new Cliente (id,
    document.getElementById("nome").value);
    this.gerenciadorCliente.adicionar(cliente);

}

}