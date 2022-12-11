

//iniciar inimigo 
    if(!localStorage.inimigo){
        localStorage.inimigo = Math.floor(4* Math.random())
    }
//vitorias
    if(!localStorage.vitorias){
        localStorage.vitorias = 0
    }
//atributo player
    if(!localStorage.HP_player){localStorage.HP_player = 10}
    if(!localStorage.DEF_player){localStorage.DEF_player = 5}
    if(!localStorage.ATK_player){localStorage.ATK_player = 5}

//atributo inimigo
    if(!localStorage.HP_inimigo){localStorage.HP_inimigo = 10}
    if(!localStorage.DEF_inimigo){localStorage.DEF_inimigo = 2}
    if(!localStorage.ATK_inimigo){localStorage.ATK_inimigo = 6}

//mudar senario
    if(localStorage.vitorias >= 10){
        localStorage.backgroud=10
    }

    if(localStorage.backgroud>=10){
        cenario.style.background="url(https://i.pinimg.com/originals/c0/25/94/c02594845d2a9bb78543136132d12b96.gif)"
        cenario.style.backgroundRepeat="no-repeat"
        cenario.style.backgroundSize="cover"
        cenario.style.backgroundPosition="ceneter"
    }

    
        
    






    if(localStorage.play == "false"){
        play.style.display="none"

    }
    if(localStorage.play == "true"){
        setTimeout(function(){
            jogar()
        }, 500)
        play.style.display="none"

    }

