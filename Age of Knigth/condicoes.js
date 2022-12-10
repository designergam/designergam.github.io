
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

//boleano uma partida sim outra nao
if(!localStorage.boleano){
    localStorage.boleano = false
}

if(!localStorage.play){
    localStorage.play="on"
}
if(localStorage.play == "on"){
    
    document.getElementById("play").style.display="block"
    
}

//mudar senario
if(localStorage.vitorias >= 10){
    localStorage.backgroud=10
    
}

if(localStorage.backgroud>=10){
    let cenario = document.getElementById("cenario")
    cenario.style.background="url(https://i.pinimg.com/originals/c0/25/94/c02594845d2a9bb78543136132d12b96.gif)"
    cenario.style.backgroundRepeat="no-repeat"
    cenario.style.backgroundSize="cover"
    cenario.style.backgroundPosition="ceneter"
}

//trocar inimigo
if(localStorage.vitorias<5){
    let inimigo = document.getElementById("inimigo_img")
    inimigo.style.background="url(https://i.pinimg.com/originals/2a/99/a8/2a99a878e17b7527ea1f72b7730c6be9.gif)"
    inimigo.style.backgroundSize="70%"
    inimigo.style.backgroundPosition="center"
    inimigo.style.backgroundRepeat="no-repeat"
}
if(localStorage.vitorias<2){
    let inimigo = document.getElementById("inimigo_img")
    inimigo.style.transform="scaleX(1)"
    inimigo.style.background="url(https://i.pinimg.com/originals/92/e5/6f/92e56ffb13f7181271c0e4c199250dc3.gif)"
    inimigo.style.backgroundSize="95%"
    inimigo.style.backgroundPosition="center"
    inimigo.style.backgroundRepeat="no-repeat"
    
}
