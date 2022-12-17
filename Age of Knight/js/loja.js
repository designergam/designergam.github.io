const itens_da_loja = [
    {
        "id": 1,
        "nome": "Cura Pequena",
        "img": "https://img.freepik.com/vetores-premium/vetor-de-pocao-de-pixel-art_553915-36.jpg?w=2000",
        "custo": 20,
        "efeito": "HP +50",
        "incremento_atk": 0,
        "incremento_def": 0,
        "incremento_hp": 30,
        "tipo": "hp"
        

    },
    {
        "id": 2,
        "nome": "Cura Media",
        "img": "https://img.elo7.com.br/product/zoom/2C06625/pocao-vermelha-pocao.jpg",
        "custo": 60,
        "efeito": "HP +100",
        "incremento_atk": 0,
        "incremento_def": 0,
        "incremento_hp": 50,
        "tipo": "hp"
    },
    {
        "id": 3,
        "nome": "Pote da Vida",
        "img": "http://pm1.narvii.com/6875/291b677bd62b7e1cd5ba07bb549a0afe0bee0703r1-650-650v2_uhq.jpg",
        "custo": 100,
        "efeito": "HP +150",
        "incremento_atk": 0,
        "incremento_def": 0,
        "incremento_hp": 150,
        "tipo": "hp"
    },
    {
        "id": 4,
        "nome": "Pistola do Crime",
        "img": `https://static.vecteezy.com/ti/vetor-gratis/p3/5450168-black-pistol-pixel-art-gratis-vetor.jpg`,
        "custo": 100,
        "efeito": "ATK +50",
        "incremento_atk": 50,
        "incremento_def": 0,
        "incremento_hp": 0,
        "tipo": "atk"
    },
    {
        "id": 5,
        "nome": "Escudo Medio",
        "img": `https://img.freepik.com/vetores-premium/escudo-medieval-de-pixel-art-de-ferro-e-item-de-jogo-de-madeira-em-fundo-branco_360488-14.jpg?w=2000`,
        "custo": 100,
        "efeito": "DEF +30",
        "incremento_atk": 0,
        "incremento_def": 30,
        "incremento_hp": 0,
        "tipo": "def"
    },
    {
        "id": 6,
        "nome": "Elixir de Energia",
        "img": `img/loja/ElixirdeEnergiaMisteriosa.jpg`,
        "custo": 100,
        "efeito": "DEF +30",
        "incremento_atk": 0,
        "incremento_def": 30,
        "incremento_hp": 0,
        "tipo": "def"
    },
    {
        "id": 7,
        "nome": "Espada de Bronze",
        "img": `img/loja/EspadaMédiadeBronze.png`,
        "custo": 100,
        "efeito": "ATK +50",
        "incremento_atk": 50,
        "incremento_def": 0,
        "incremento_hp": 0,
        "tipo": "atk"
    },
    {
        "id": 8,
        "nome": "Escudo de Ouro",
        "img": `img/loja/EscudodeOuro.png`,
        "custo": 50,
        "efeito": "DEF +50",
        "incremento_atk": 0,
        "incremento_def": 50,
        "incremento_hp": 0,
        "tipo": "def"
    },
    {
        "id": 9,
        "nome": "Medalhão de Vigor",
        "img": `img/loja/MedalhãodeVigor.png`,
        "custo": 10,
        "efeito": "HP +5 & DEF +50",
        "incremento_atk": 0,
        "incremento_def": 50,
        "incremento_hp": 5,
        "tipo": "hp"
    },
    {
        "id": 10,
        "nome": "Grugumelo",
        "img": `img/loja/GrugumelodaCabeçona.png`,
        "custo": 40,
        "efeito": "HP +40 & ATK -15",
        "incremento_atk": -15,
        "incremento_def": 0,
        "incremento_hp": 10,
        "tipo": "hp"
    }

]



//itens filtrados de hp
    itens_hp = itens_da_loja.filter(i => (i.tipo == "hp"));
    itens_def = itens_da_loja.filter(i => (i.tipo == "def"));
    itens_atk = itens_da_loja.filter(i => (i.tipo == "atk"));


//mochila
    container_bag_1 = document.getElementById("container_bag_1")
    container_bag_2 = document.getElementById("container_bag_2")
    container_bag_3 = document.getElementById("container_bag_3")

    let item_selecionado = ""
    
//abrir popup
    function item(x){
        document.getElementById("alerta_loja").style.display="grid" 
        item_selecionado = itens_da_loja.filter(i => (i.id == x));
        document.getElementById("gold_atual").innerText =`GOLD $${localStorage.gold}`
        document.getElementById("nome_item_loja").innerText =`${item_selecionado[0].nome}`
        document.getElementById("custo").innerText =`Custo: $${item_selecionado[0].custo}`
        document.getElementById("efeito").innerText =`Efeito:  ${item_selecionado[0].efeito}`
        document.getElementById("img_item_loja").style.backgroundImage=`url(${item_selecionado[0].img})`
    }
//fechar popup
    function sair_para_loja(){
        document.getElementById("alerta_loja").style.display="none" 
        document.querySelector(".item_loja").style.border="none"
       
    }


//validar transação de compra
function comprar_item(){
    if(Number(item_selecionado[0].custo)<= localStorage.gold){ //verifica se tem gold
       
        localStorage.gold = Number(localStorage.gold) - Number(item_selecionado[0].custo)//descontar gold
        mostrar_gold()
        Atualizar_atributos_do_player()
        sair_para_loja()

        document.getElementById("alerta_loja_stts").style.display="block"
    
        setTimeout(function(){
            document.getElementById("alerta_loja_stts").style.display="none"
        },800)

        //let item_comprado = {id: item_selecionado[0].id, img: item_selecionado[0].img, custo: item_selecionado[0].custo,  efeito: item_selecionado[0].efeito, incremento_atk: item_selecionado[0].incremento_atk, incremento_def: item_selecionado[0].incremento_def, incremento_hp: item_selecionado[0].incremento_hp, tipo: item_selecionado[0].tipo} 


        //itens a serem salvos
        let id = item_selecionado[0].id
        let img =  item_selecionado[0].img
        let custo =  item_selecionado[0].custo
        let efeito =  item_selecionado[0].efeito
        let incremento_atk =  item_selecionado[0].incremento_atk
        let incremento_def =  item_selecionado[0].incremento_def
        let incremento_hp =  item_selecionado[0].incremento_hp
        let tipo =  item_selecionado[0].tipo

        let item = new Array()
       
        //verificar se ja existem item - recuperar e converter pata objeto
        if(localStorage.bag){
            item = JSON.parse(localStorage.getItem("bag"))
        }
        
        //adicionar um novo objeto no array criado
        item.push({id, img, custo, efeito, incremento_atk, incremento_def, incremento_hp, tipo})

        //salvar no local storage
        localStorage.setItem("bag", JSON.stringify(item))
        
 

    }
    else{
        sair_para_loja()

        document.getElementById("alerta_loja_ERRO").style.display="block"
       
        setTimeout(function(){
            
            document.getElementById("alerta_loja_ERRO").style.display="none"
        },800)

    }
}



//carregar itens nos containes da loja=========================================================================


function carrecar_itens_loja_container(){
    //itens de hp
        let container_1 = document.getElementById("container_loja_1")
        let hp_randon = itens_hp
        hp_randon.slice(0,6)//limitador

        //Randomizar 
        function shuffleArray(itens_hp){
            itens_hp.sort(()=> Math.random() - 0.5);
        }shuffleArray(hp_randon);
    
        hp_randon.filter((i)=>{
            container_1.innerHTML+=`
            <div style="background-image: url(${i.img});" class="item_loja"  onclick="item(${i.id})"></div>
            `
        })


    //itens de atk
        let container_2 = document.getElementById("container_loja_2")
        let atk_randon = itens_atk
        atk_randon.slice(0,6)//limitador

        //Randomizar 
        function shuffleArray(itens_atk){
            itens_atk.sort(()=> Math.random() - 0.5);
        }shuffleArray(atk_randon);
    
        atk_randon.filter((i)=>{
            container_2.innerHTML+=`
            <div style="background-image: url(${i.img});" class="item_loja"  onclick="item(${i.id})"></div>
            `
        })


    //itens de def
        let container_3 = document.getElementById("container_loja_3")
        let def_randon = itens_def
        def_randon.slice(0,6)//limitador

        //Randomizar 
        function shuffleArray(itens_def){
            itens_def.sort(()=> Math.random() - 0.5);
        }shuffleArray(def_randon);
       
        def_randon.filter((i)=>{
            container_3.innerHTML+=`
            <div style="background-image: url(${i.img});" class="item_loja"  onclick="item(${i.id})"></div>
            `
        })

}


       
    
    

   

    







  
