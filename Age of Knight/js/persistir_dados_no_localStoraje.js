//adicionar um item
localStorage.setItem("Nome", "Gabriel")

//resgatar item
    let nome = localStorage.getItem("Nome")
    console.log(nome)

//tratar item nao existente
    let sobrenome = localStorage.getItem("SobreNome")

    if(!sobrenome){
        console.log("não a sobrenome")
    }

//remover item
    localStorage.removeItem("Nome")

//limpar todos os itens
    localStorage.clear()

//salvar objetos
    const person = {
        nome: "gabriel",
        idade: 25, 
        sexo: "masculino"
    }

    localStorage.setItem("person", JSON.stringify(person))

//resgatar objeto
    const objetos = JSON.parse(localStorage.getItem("person"))
    console.log(objetos)

//adicionar ao objeto

let novo_objeto = []

const obj1 = {
    nome: "amanda",
    idade: 20, 
    sexo: "feminino"
}

const obj2 = {
    nome: "gabriel",
    idade: 25, 
    sexo: "mascolino"
}
novo_objeto.push(obj1)
novo_objeto.push(obj2)

localStorage.person = JSON.stringify(novo_objeto)




//salvando array de objetos no local storage

//itens a serem salvos
let Nome = "gabriel"
let idade =  25
let sexo =  "mascolino"


let pessoa = new Array() 

//verificar se ja existem item - recuperar e converter pata objeto
if(localStorage.pessoas){
    pessoa = JSON.parse(localStorage.getItem("pessoas"))
}

//adicionar um novo objeto no array criado
pessoa.push({id, img, custo, efeito, incremento_atk, incremento_def, incremento_hp, tipo})

//salvar no local storage
localStorage.setItem("pessoas", JSON.stringify(pessoa))
