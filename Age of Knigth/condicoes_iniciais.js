//inimigo aleatorio inicial
    if(!localStorage.inimigo){
        localStorage.inimigo = Math.floor(6* Math.random())
    }

//vitorias inicial
    if(!localStorage.vitorias){
        localStorage.vitorias = 1
        
    }

    document.getElementById("level").innerText = `LEVEL:  ${localStorage.vitorias}`

//xp inicial
if(!localStorage.xp){
    localStorage.xp = 0
}
if(!localStorage.next_level){
    localStorage.next_level = 10
}

//atributo iniciais do player
    if(!localStorage.HP_player){localStorage.HP_player = 50}
    if(!localStorage.DEF_player){localStorage.DEF_player = 5}
    if(!localStorage.ATK_player){localStorage.ATK_player = 10}
    
    atributos_player.innerHTML =`<span>XP: ${parseInt(localStorage.xp)}/${parseInt(localStorage.next_level)}<br> HP: ${parseInt(localStorage.HP_player)}<br>DEF: ${parseInt(localStorage.DEF_player)}<br>ATK: ${parseInt(localStorage.ATK_player)}</span>`


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

