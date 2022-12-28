
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
        localStorage.gold = 10
        
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
    localStorage.card_ATK =  Math.floor(500* Math.random())
    localStorage.card_DEF = Math.floor(4* Math.random())
    localStorage.card_HP = Math.floor(5* Math.random())
}

//cenario inicial
function verificarCenario(){
    if(localStorage.vitorias>=1 & localStorage.vitorias<=10 ){
        cenario.style.backgroundImage =`url(img/cenarios/backgroud.gif)`
    }
    if(localStorage.vitorias>=10 & localStorage.vitorias<=20 ){
        cenario.style.backgroundImage =`url(img/cenarios/cenario2.gif)`
    }
    if(localStorage.vitorias>=30 & localStorage.vitorias<=200 ){
        cenario.style.backgroundImage =`url(img/cenarios/cenario3.gif)`
    }
    
}

if(localStorage.vitorias>=1 & localStorage.vitorias<=10 ){
    cenario.style.backgroundImage =`url(img/cenarios/backgroud.gif)`
}
if(localStorage.vitorias>=10 & localStorage.vitorias<=20 ){
    cenario.style.backgroundImage =`url(img/cenarios/cenario2.gif)`
}
if(localStorage.vitorias>=30 & localStorage.vitorias<=200 ){
    cenario.style.backgroundImage =`url(img/cenarios/cenario3.gif)`
}