//iniciar inimigo 
    if(!localStorage.inimigo){
        localStorage.inimigo = Math.floor(4* Math.random())
    }
//vitorias
    if(!localStorage.vitorias){
        localStorage.vitorias = 1
    }
//atributo player
    if(!localStorage.HP_player){localStorage.HP_player = 30}
    if(!localStorage.DEF_player){localStorage.DEF_player = 7}
    if(!localStorage.ATK_player){localStorage.ATK_player = 10}



    if(localStorage.play == "false"){
        play.style.display="none"

    }
    if(localStorage.play == "true"){
        play.style.display="none"
    }