//Alterar Numero aleatorio de inimigo em: funções.js / inimigo_cair_para_traz()

//atributos iniciais
    if(!localStorage.HP_inimigo){
        localStorage.HP_inimigo = 10
    }
    if(!localStorage.ATK_inimigo){
        localStorage.ATK_inimigo = 6
    }
    if(!localStorage.DEF_inimigo){
        localStorage.DEF_inimigo = 2
    }



//atributo iniciais do inimigo
    async function inimigo_mais_forte(){// + incrimento = vitorias         +incremento rando +0 a +3
        localStorage.HP_inimigo = 10 +  parseInt(Number(localStorage.vitorias)*0.3 ) + Math.floor(4* Math.random())
        localStorage.ATK_inimigo = 6 +  parseInt(Number(localStorage.vitorias)*0.3 ) + Math.floor(4* Math.random())
        localStorage.DEF_inimigo = 2 +  parseInt(Number(localStorage.vitorias)*0.3 ) + Math.floor(4* Math.random())
    }





async function escolher_inimigo(){
   
//imagens
    let inimigo_1 = "https://i.pinimg.com/originals/2a/99/a8/2a99a878e17b7527ea1f72b7730c6be9.gif"
    let inimigo_2 = "https://i.pinimg.com/originals/92/e5/6f/92e56ffb13f7181271c0e4c199250dc3.gif"
    let inimigo_3 = "http://25.media.tumblr.com/tumblr_m4gcm09wPO1qbcqw8o1_400.gif"
    let inimigo_4 = "https://thumbs.gfycat.com/FriendlyLazyEeve-max-1mb.gif"
    let inimigo_5 = "img/inimigo_1.gif"
    let inimigo_6 = "img/inimigo_2.gif"
    let inimigo_7 = "img/inimigo_3.gif"
    let inimigo_8 = "img/inimigo_4.gif"
    let inimigo_9 = "img/inimigo_5.gif"
    let inimigo_10 = "img/inimigo_6.gif"
    let inimigo_11 = "img/inimigo_7.gif"
    let inimigo_12 = "img/inimigo_8.gif"
    let inimigo_13 = "img/inimigo_9.gif"

//===INIMIGOS===
    if(localStorage.inimigo == 0 ){
        inimigo.style.background=`url(${inimigo_1})`
        inimigo.style.transform="scaleX(-1)"
        inimigo.style.backgroundSize="60%"
        inimigo.style.backgroundPosition="center"
        inimigo.style.backgroundRepeat="no-repeat"
        inimigo.style.backgroundPositionY="100px"
    }
    if(localStorage.inimigo == 1){
        inimigo.style.transform="scaleX(1)"
        inimigo.style.background=`url(${inimigo_2})`
        inimigo.style.backgroundSize="95%"
        inimigo.style.backgroundPosition="center"
        inimigo.style.backgroundRepeat="no-repeat"
        inimigo.style.backgroundPositionY="18px"
    }
    if(localStorage.inimigo == 2){
        inimigo.style.transform="scaleX(-1)"
        inimigo.style.background=`url(${inimigo_3})`
        inimigo.style.backgroundSize="95%"
        inimigo.style.backgroundPosition="center"
        inimigo.style.backgroundRepeat="no-repeat"
        inimigo.style.backgroundPositionY="10px"
    }
    if(localStorage.inimigo == 3){
        //Caracteristica Pessoal
        localStorage.DEF_inimigo =  parseInt( Number(localStorage.DEF_inimigo) + 2)
        localStorage.HP_inimigo =  parseInt( Number(localStorage.HP_inimigo) + 1)
        localStorage.ATK_inimigo =  parseInt( Number(localStorage.ATK_inimigo) + 2)

        inimigo.style.transform="scaleX(-1)"
        inimigo.style.background=`url(${inimigo_4})`
        inimigo.style.backgroundSize="95%"
        inimigo.style.backgroundPosition="center"
        inimigo.style.backgroundRepeat="no-repeat"
    }
    if(localStorage.inimigo == 4){
        
        //Caracteristica Pessoal
        localStorage.DEF_inimigo =  parseInt( Number(localStorage.DEF_inimigo) + 1)
        localStorage.HP_inimigo =  parseInt( Number(localStorage.HP_inimigo) + 2)
        localStorage.ATK_inimigo =  parseInt( Number(localStorage.ATK_inimigo) + 1)

        inimigo.style.transform="scaleX(-1)"
        inimigo.style.background=`url(${inimigo_9})`
        inimigo.style.backgroundSize="95%"
        inimigo.style.backgroundPosition="center"
        inimigo.style.backgroundRepeat="no-repeat"
        inimigo.style.backgroundPositionY="40px"
    }
    if(localStorage.inimigo == 5){
        
        //Caracteristica Pessoal
        localStorage.DEF_inimigo =  parseInt( Number(localStorage.DEF_inimigo) + 1)
        localStorage.HP_inimigo =  parseInt( Number(localStorage.HP_inimigo) + 2)
        localStorage.ATK_inimigo =  parseInt( Number(localStorage.ATK_inimigo) + 3)

        inimigo.style.transform="scaleX(-1)"
        inimigo.style.background=`url(${inimigo_13})`
        inimigo.style.backgroundSize="95%"
        inimigo.style.backgroundPosition="center"
        inimigo.style.backgroundRepeat="no-repeat"
        inimigo.style.backgroundPositionY="40px"
    }





//BOSS===============================================================================
    if(localStorage.vitorias == 10){
        
        //Caracteristica Pessoal
        localStorage.DEF_inimigo =  parseInt( Number(localStorage.DEF_inimigo) + 5)
        localStorage.HP_inimigo =  parseInt( Number(localStorage.HP_inimigo) + 10)
        localStorage.ATK_inimigo =  parseInt( Number(localStorage.ATK_inimigo) + 5)

        inimigo.style.transform="scaleX(1)"
        inimigo.style.background=`url(${inimigo_5})`
        inimigo.style.backgroundSize="95%"
        inimigo.style.backgroundPosition="center"
        inimigo.style.backgroundRepeat="no-repeat"
        inimigo.style.backgroundPositionY="70px"

    }
}