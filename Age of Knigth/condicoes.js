

//iniciar inimigo 
    if(!localStorage.inimigo){
        localStorage.inimigo = Math.floor(4* Math.random())
    }
//vitorias
    if(!localStorage.vitorias){
        localStorage.vitorias = 1
    }
//atributo player
    if(!localStorage.HP_player){localStorage.HP_player = 40}
    if(!localStorage.DEF_player){localStorage.DEF_player = 7}
    if(!localStorage.ATK_player){localStorage.ATK_player = 8}

//atributo inimigo
    if(!localStorage.HP_inimigo){localStorage.HP_inimigo = 10}
    if(!localStorage.DEF_inimigo){localStorage.DEF_inimigo = 2}
    if(!localStorage.ATK_inimigo){localStorage.ATK_inimigo = 6}

    if(localStorage.play == "false"){
        play.style.display="none"

    }
    if(localStorage.play == "true"){
        setTimeout(function(){
            jogar()
        }, 500)
        play.style.display="none"

    }

