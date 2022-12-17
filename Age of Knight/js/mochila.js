

  let itens_mochila
  let item_selecionado_bag = ""
  let selecionado
function atualizar_bag(){
    let mochila = document.getElementById("container_bag_1")
    mochila.innerHTML = ""
  
    if(localStorage.bag){
        itens_mochila = JSON.parse(localStorage.bag)
        itens_mochila.map(i =>{
            mochila.innerHTML += `
            <div style="background-image: url(${i.img});" class="item_bag"  onclick="item_bag(${i.id})"></div>
            `
        })
    }else{
        mochila.innerHTML = ""
    
    }
    
}



//abrir popup
    function item_bag(x){
        document.getElementById("alerta_bag").style.display="grid" 
        item_selecionado_bag = itens_da_loja.filter(i => (i.id == x));
        selecionado = itens_da_loja.filter(i => (i.id == x));

        document.getElementById("nome_item_bag").innerText=`${item_selecionado_bag[0].nome}`
        document.getElementById("efeito_item_bag").innerText=`${item_selecionado_bag[0].efeito}`
        let previwItem = 
        document.getElementById("img_item").style.backgroundImage=`url(${item_selecionado_bag[0].img})`

        
        
        
    }
    
//fechar popup
    function fechar_alerta_bag(){
        document.getElementById("alerta_bag").style.display="none" 
        item_selecionado_bag = ""
        document.getElementById("nome_item_bag").innerText=""
        document.getElementById("efeito_item_bag").innerText=""
        
        
    }


//usar item
function usar_item(x){
    
    localStorage.HP_player = Number(localStorage.HP_player) + Number(item_selecionado_bag[0].incremento_hp)
    localStorage.DEF_player = Number(localStorage.DEF_player) + Number(item_selecionado_bag[0].incremento_def)
    localStorage.ATK_player = Number(localStorage.ATK_player) + Number(item_selecionado_bag[0].incremento_atk)

    //alerta item usado
    document.getElementById("alerta_bag").style.display="none"

    document.getElementById("alerta_item_usado").style.display="block"
    setTimeout(function(){
        document.getElementById("alerta_item_usado").style.display="none"
    }, 800)

    Atualizar_atributos_do_player() 

    remover_item_da_bag()
}

//descartar item
function descartar_item(){
    remover_item_da_bag()
    //alerta item usado
    document.getElementById("alerta_bag").style.display="none"
    document.getElementById("alerta_item_descartado").style.display="block"
    setTimeout(function(){
        document.getElementById("alerta_item_descartado").style.display="none"
    }, 800)
}


function  remover_item_da_bag(){
   
    for(let i=0; i < itens_mochila.length; i++){
        
        if(itens_mochila[i].id == selecionado[0].id ){
            itens_mochila.splice(i, 1)
        }
    }  

    localStorage.bag = JSON.stringify(itens_mochila)
    
    atualizar_bag()
    fechar_alerta_bag()
}


   
     



