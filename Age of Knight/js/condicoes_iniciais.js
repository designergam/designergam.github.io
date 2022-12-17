//inimigo aleatorio inicial
    if(!localStorage.inimigo){
        localStorage.inimigo = Math.floor(6* Math.random())
    }

//vitorias inicial
    if(!localStorage.vitorias){
        localStorage.vitorias = 1
        
    }
//gold inicial
    if(!localStorage.gold){
        localStorage.gold = 0
        
    }
    
    if(!localStorage.bag){
        localStorage.bag = []
    }
//xp inicial
if(!localStorage.xp){
    localStorage.xp = 0
}
if(!localStorage.next_level){
    localStorage.next_level = 10
}
if(!localStorage.mana){
    localStorage.mana = 30
}
//atributo iniciais do player
    if(!localStorage.HP_player){localStorage.HP_player = 60}
    if(!localStorage.DEF_player){localStorage.DEF_player = 7}
    if(!localStorage.ATK_player){localStorage.ATK_player = 15}
    
    

//atributos iniciais do inimigo
   


//cartas aleatorias iniciais
if(!localStorage.card_ATK){
    localStorage.card_ATK =  Math.floor(5* Math.random())
    localStorage.card_DEF = Math.floor(4* Math.random())
    localStorage.card_HP = Math.floor(5* Math.random())
}

//cenario inicial
if(localStorage.vitorias>=1 & localStorage.vitorias<=10 ){
    cenario.style.backgroundImage =`url(${cenario_1})`

}

