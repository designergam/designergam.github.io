//===Funções de gameplay=======================================================
function esconder_btn_play(){
    play.style.display="none" 
}
function mostrarlevel(){
    document.getElementById("level").innerText = `LEVEL:  ${localStorage.vitorias}`
}
function resetar(){
    localStorage.clear();
    window.location.reload()
}
function adicionar_vitoria(){
    localStorage.vitorias ++
}
function adicionar_level(){
    localStorage.xp = Number(localStorage.xp) + 2
}
async function mensagem_vitoria(){
    mensagem.innerHTML=`
    <h2>VICTORY!</h2> 
    `
   
   
}
function mensagem_derrota(){
    mensagem.innerText="YOU LOST!"
} 
function esconder_mensagem(){
    mensagem.innerHTML=""
}
function som_golpe_1(){
    som.src="audios/Golpe com espada.mp3"
    som.volume = 0.3;
    som.play()
}
function vitoria_som(){
    som.src="audios/vitoria.wav"
    som.volume = 0.15;
    som.play()
}
function musica_fundo(){
    musica.src="audios/musica_de_fundo.mp3"
    musica.volume = 0.1;
    musica.play()
}
function mutar_musica_de_fundo(){
    let mutar = document.getElementById("mutar_musica")
    mutar.style.border="3px solid red"
    musica.src=""
    musica.volume = 0.1;
    musica.play()
    mutar.setAttribute('onclick', "desmutar()");
}
function desmutar(){
    let desmutar =document.getElementById("mutar_musica")
    desmutar.style.border="3px solid green"
    desmutar.setAttribute('onclick', "mutar_musica_de_fundo()");
    musica.src="audios/Proerdem8Bits.mp3"
    musica.volume = 0.1;
    musica.play()
}
function abrir_bag(){
    document.getElementById("bag").style.display="block"
    setTimeout(function(){
        document.getElementById("bag").style.width ="90%"
        document.getElementById("bag").style.height ="90%"
    }, 30)
    
}
function fechar_bag(){
        document.getElementById("bag").style.width ="40px"
        document.getElementById("bag").style.height ="40px"
    setTimeout(function(){
        document.getElementById("bag").style.display="none"
        
    }, 100)
}
function mostrar_controles(){
    document.getElementById("controle").style.display= "block"
}
function esconder_controle(){
    document.getElementById("controle").style.display= "none"

}
function adicionar_xp(){
    localStorage.xp = parseInt(localStorage.xp)+2 
}
function cartas_aleatorias(){
    //Escolher carta Aleatoriamente
    localStorage.card_ATK =  Math.floor(5* Math.random())
    localStorage.card_DEF = Math.floor(4* Math.random())
    localStorage.card_HP = Math.floor(3* Math.random())
}
function mostrar_cartas(){
    
    //mostrar cartas
    cartas.style.display="block"
    card1.style.display="block"
    card2.style.display="block"
    card3.style.display="block"

    //movimentar ao centro
    setInterval(function(){
        card1.style.top="50%"
        card2.style.top="50%"
        card3.style.top="50%"
    },300)

    //espalhar na tela
    setInterval(function(){
        card2.style.left="80%"
        card3.style.left="20%"
    }, 800)
}
function esconder_cartas(){
    cartas.style.display="none"
    setTimeout(function(){
        jogar()
    },500)

    


}
function mensagem_de_levelup(){
    mensagem.innerHTML=`
    <h2>LEVEL UP!</h2> 
    <p style="font-size: 18px; text-align: center;">HP: +${parseInt(Number(localStorage.HP_player) *0.3) } &nbsp;&nbsp;&nbsp; DEF:+ ${parseInt(Number(localStorage.DEF_player) *0.3)} &nbsp;&nbsp;&nbsp; ATK: +${parseInt(Number(localStorage.ATK_player) *0.3)} </p>
    `
}
function levelup(){

    let levelUp_HP = parseInt(Number(localStorage.HP_player) + Number(localStorage.HP_player) *0.3) 
    let levelUp_ATK = parseInt(Number(localStorage.ATK_player) + Number(localStorage.ATK_player) *0.3)
    let levelUp_DEF = parseInt(Number(localStorage.DEF_player) + Number(localStorage.DEF_player) *0.3)
    
    localStorage.HP_player = levelUp_HP
    localStorage.ATK_player = levelUp_ATK
    localStorage.DEF_player = levelUp_DEF

    
    setTimeout(function(){
        localStorage.next_level = parseInt( Number(localStorage.next_level) *2 )
    },1000)

}
function piscar_player(){

    let piscar_player = setInterval(function(){
        
        player.style.filter=" brightness(200%) saturate(200%) hue-rotate(50deg)"

        setTimeout(function(){
            player.style.filter=" brightness(100%) saturate(100%) hue-rotate(0deg)"
        }, 130)
       
    }, 300)


    setTimeout(function(){
        clearInterval(piscar_player); 
    }, 800)

}
function mostrar_chao(){
    document.getElementById("chao").style.transition = "700ms"
    document.getElementById("chao").style.display="block"

    setTimeout(function(){
        document.getElementById("chao").style.height="50%"
    },50)
    
}
function mostrar_level(){
    document.getElementById("level").style.display="block"
}


//
//
//
//
//
//===Funções inimigo=======================================================
function piscar_inimigo(){

    let piscar_inimigo = setInterval(function(){
        
        inimigo.style.filter=" brightness(200%) saturate(200%) hue-rotate(50deg)"

        setTimeout(function(){
            inimigo.style.filter=" brightness(100%) saturate(100%) hue-rotate(0deg)"
        }, 130)
       
    }, 300)


    setTimeout(function(){
        clearInterval(piscar_inimigo); 
    }, 800)

}
function mostrar_inimigo(){
    document.getElementById("inimigo_img").style.display="block"
}
function esconder_inimigo(){
    document.getElementById("inimigo_img").style.display="none"
}
function inimigo_aleatorio(){
    localStorage.inimigo = Math.floor(6* Math.random())
}
function atualizar_atributos_inimigo(){
        document.getElementById("atributos_inimigo").style.backgroundImage = "url(img/pergaminho.png)"
        atributos_inimigo.innerHTML =`<span> HP: ${ parseInt(localStorage.HP_inimigo) }<br>DEF: ${parseInt(localStorage.DEF_inimigo)}<br>ATK: ${parseInt(localStorage.ATK_inimigo)}</span>`

}
function mostrar_atributos_inimigo(){
    atributos_inimigo.style.display="block"
}
function esconder_atributos_do_inimigo(){
    atributos_inimigo.style.display="none"
}
function inimigo_cair_para_traz(){
    //fazer inimigo cair pra traz
    inimigo.style.transform="translate(20%, 40%) rotate(90deg) scaleX(-1)"

    //inimigo volta a posição inicial
    setTimeout(function(){
        inimigo.style.display="none"
        inimigo.style.transform="translate(0%, 0%) rotate(0deg) scaleX(-1)"
        inimigo.style.right="-15%"
    },800)

   

    
}
function trazer_inimigo(){
    document.getElementById("inimigo_img").style.right="15%"
}
function inimigo_mais_forte(){     
    //incremento aleatorio
        let incremento_ATK = Number(Math.floor(6* Math.random()))
        let incremento_DEF = Number(Math.floor(6* Math.random()))
        let incremento_HP = Number(Math.floor(6* Math.random()))
        console.log(incremento_HP)
        if(incremento_ATK <= 0){incremento_ATK = 1}
        if(incremento_DEF <= 0){incremento_DEF = 1}
        if(incremento_HP <= 0){incremento_HP = 1}

    
     //  vida do inimigo
     localStorage.HP_inimigo =  parseInt( (Number(localStorage.HP_player) *0.1) + (Number(incremento_HP) * Number(localStorage.vitorias)) ) 
     localStorage.ATK_inimigo = parseInt( (Number(localStorage.ATK_player)*0.1) + (Number(incremento_ATK) * Number(localStorage.vitorias)) )
     localStorage.DEF_inimigo = parseInt( (Number(localStorage.DEF_player)*0.1) + (Number(incremento_DEF) * Number(localStorage.vitorias)) )
   
    
}
function mostrar_inimigo_escolhido(){
    if(localStorage.inimigo == 0 ){
        inimigo.style.background=`url(${inimigo_1})`
        inimigo.style.transform="scaleX(-1)"
        inimigo.style.backgroundSize="60%"
        inimigo.style.backgroundPosition="center"
        inimigo.style.backgroundRepeat="no-repeat"
        inimigo.style.backgroundPositionY="100%"
    }
    if(localStorage.inimigo == 1){
        inimigo.style.transform="scaleX(1)"
        inimigo.style.background=`url(${inimigo_2})`
        inimigo.style.backgroundSize="95%"
        inimigo.style.backgroundPosition="center"
        inimigo.style.backgroundRepeat="no-repeat"
        inimigo.style.backgroundPositionY="140%"
    }
    if(localStorage.inimigo == 2){
        inimigo.style.transform="scaleX(-1)"
        inimigo.style.background=`url(${inimigo_3})`
        inimigo.style.backgroundSize="95%"
        inimigo.style.backgroundPosition="center"
        inimigo.style.backgroundRepeat="no-repeat"
        inimigo.style.backgroundPositionY="120%"
    }
    if(localStorage.inimigo == 3){
        inimigo.style.transform="scaleX(-1)"
        inimigo.style.background=`url(${inimigo_4})`
        inimigo.style.backgroundSize="95%"
        inimigo.style.backgroundPosition="center"
        inimigo.style.backgroundRepeat="no-repeat"
    }
    if(localStorage.inimigo == 4){
        inimigo.style.transform="scaleX(-1)"
        inimigo.style.background=`url(${inimigo_9})`
        inimigo.style.backgroundSize="95%"
        inimigo.style.backgroundPosition="center"
        inimigo.style.backgroundRepeat="no-repeat"
        inimigo.style.backgroundPositionY="300%"
    }
    if(localStorage.inimigo == 5){
        
        inimigo.style.transform="scaleX(-1)"
        inimigo.style.background=`url(${inimigo_13})`
        inimigo.style.backgroundSize="95%"
        inimigo.style.backgroundPosition="center"
        inimigo.style.backgroundRepeat="no-repeat"
        inimigo.style.backgroundPositionY="300%"
    }
    if(localStorage.vitorias == 10){
        inimigo.style.transform="scaleX(1)"
        inimigo.style.background=`url(${inimigo_5})`
        inimigo.style.backgroundSize="95%"
        inimigo.style.backgroundPosition="center"
        inimigo.style.backgroundRepeat="no-repeat"
        inimigo.style.backgroundPositionY="100%"
    }
    
}
function avancar_inimigo(){
    inimigo.style.right = "60%"
    player.style.zIndex = 1
    inimigo.style.zIndex = 3
}
function recuar_inimigo(){
    inimigo.style.right = "15%"
}
function dano_do_inimigo(){
    dano_inimigo = (localStorage.ATK_inimigo - localStorage.DEF_player)
    if(dano_inimigo<=0){dano_inimigo = 1}

    localStorage.HP_player = parseInt(Number(localStorage.HP_player - dano_inimigo))
 
}
function posicao_inicial_inimigo(){
    inimigo.style.transition = "500ms"
    inimigo.style.transform = "translateY(0%) translateX(350%)"
    inimigo.style.right = "15%"
}
function morte_inimigo(){
    inimigo.style.transition = "300ms"
    inimigo.style.transform = "translateY(-120%) translateX(120%)"
    
}

//
//
//
//
//
//===Funções do jogador=======================================================
function morte_player(){
    player.style.transform = "translate(-120%, -120%)"
    
}
function posicao_inicial_player(){
    player.style.transform = "translate(0%, 20%)"
    
}
async function player_parado(){
    player.style.backgroundImage="url(https://cdn.domestika.org/c_limit,dpr_1.0,f_auto,q_auto,w_820/v1586415165/content-items/004/129/278/personaje-parada-original.gif?1586415165)"
} 
async function trocar_img_player_golpe(){
    player.style.backgroundImage ="url(https://cdn.domestika.org/c_limit,dpr_1.0,f_auto,q_auto,w_820/v1586415892/content-items/004/129/334/personaje_Ataque-original.gif?1586415892"   
}  
function dano_do_player(){
    dano_player = (localStorage.ATK_player - localStorage.DEF_inimigo)
    if(dano_player<=0){dano_player = 1}

    localStorage.HP_inimigo = parseInt(Number(localStorage.HP_inimigo - dano_player))
 
}
function desabilitar_ataque_do_player(){
    button_atk.setAttribute('onclick', "");
    document.getElementById("atacar").style.border="3px solid red"
}
function habilitar_ataque_do_player(){
    button_atk.setAttribute('onclick', "ataque_player()");
    document.getElementById("atacar").style.border="3px solid green"
}
function Atualizar_atributos_do_player(){
    atributos_player.innerHTML =`<span>XP: ${parseInt(localStorage.xp)}/${parseInt(localStorage.next_level)}<br> HP: ${parseInt(localStorage.HP_player)}<br>DEF: ${parseInt(localStorage.DEF_player)}<br>ATK: ${parseInt(localStorage.ATK_player)}</span>`
}
function habilitar_atributos_player(){
    atributos_player.style.display="block"
}
function avancar_player(){
    player.style.left = "60%"
    player.style.zIndex = 3
    inimigo.style.zIndex = 1
}
function recuar_player(){
    player.style.left = "15%"
}
function esconder_player(){
    document.getElementById("player_img").style.display="none"
}
function mostrar_player(){
    document.getElementById("player_img").style.display="block"
}
function trazer_player(){
    document.getElementById("player_img").style.display = "block"
    setTimeout(function(){
        document.getElementById("player_img").style.left="15%"
    },50)
    
    
}