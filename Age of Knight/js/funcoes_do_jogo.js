//===Funções de gameplay=======================================================
function dropar_moeda_inimigo(){
    let moeda = document.getElementById("drop_moeda_inimigo")
    moeda.style.display="block"
    moeda.style.transform="translate(-50%, -50%)"

    setTimeout(() => {
        moeda.style.display="none"
        moeda.style.transform="translate(300%, -400%)"
    }, 1000);
}
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
function derrota(){
    recuperar_vida_player()
    inimigo_mais_forte()
    atualizar_atributos_inimigo()
    
    posicao_inicial_player()
    trazer_player()
    esconder_mensagem()
    habilitar_loja()
    mostrar_controles()
    player.style.left = "-15%"
    habilitar_ataque_do_player()
    
}
function adicionar_vitoria(){
    localStorage.vitorias ++
}
function adicionar_level(){
    localStorage.xp = Number(localStorage.xp) + 2
}
async function mensagem_vitoria(){
    mensagem.style.backgroundImage = "url(img/victory.png)"
    mensagem.style.display="block"
    
   
   
}
function mensagem_derrota(){
    mensagem.style.backgroundImage = "url(img/defeat.png)"
    mensagem.style.display="block"
   
    
} 
function esconder_mensagem(){
    mensagem.style.backgroundImage = "url()"
    mensagem.style.display="none"
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
    musica.src="audios/musica_de_fundo.mp3"
    musica.volume = 0.1;
    musica.play()
}
function abrir_bag(){
    atualizar_bag()
    
    document.getElementById("bag_container").style.display="grid"
    setTimeout(function(){
        document.getElementById("bag_container").style.width ="100%"
        document.getElementById("bag_container").style.height ="100%"
    }, 30)
    
}
function fechar_bag(){
    document.getElementById("bag_container").style.width ="40px"
    document.getElementById("bag_container").style.height ="40px"
setTimeout(function(){
    document.getElementById("bag_container").style.display="none"
    
}, 100)
}
function abrir_loja(){
    
    carrecar_itens_loja_container()
   

    document.getElementById("loja_container").style.display="grid"
    setTimeout(function(){
        document.getElementById("loja_container").style.width ="100%"
        document.getElementById("loja_container").style.height ="100%"
    }, 30)
    
}
function fechar_loja(){
        document.getElementById("loja_container").style.width ="40px"
        document.getElementById("loja_container").style.height ="40px"
    setTimeout(function(){
        document.getElementById("loja_container").style.display="none"
        document.getElementById("alerta_loja").style.display="none"
      
        
    }, 100)
    zerar_loja()
}
function zerar_loja(){
    document.getElementById("container_loja_1").innerHTML=""
    document.getElementById("container_loja_2").innerHTML=""
    document.getElementById("container_loja_3").innerHTML=""
}
function mostrar_controles(){
    document.getElementById("controle").style.display= "grid"
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
    esconder_controle()
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

}
function mensagem_de_levelup(){

    document.querySelector(".atributos_player").style.color="green"
    
    

    mensagem.style.backgroundImage = "url(img/levelup.png)"
    mensagem.style.display="block"
    mensagem.innerHTML=`
    
    <p style="text-align: center;">HP: +${parseInt(Number(localStorage.HP_player) *0.3) } &nbsp;&nbsp;&nbsp; DEF:+ ${parseInt(Number(localStorage.DEF_player) *0.3)} &nbsp;&nbsp;&nbsp; ATK: +${parseInt(Number(localStorage.ATK_player) *0.3)} </p>
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
    document.getElementById("level").innerText = `LEVEL:  ${localStorage.vitorias}`
}
function esconder_nomes(){
    document.getElementById("container_nome").style.display="none"
}
function mostrar_nome_do_jogador(){
    document.getElementById("nome_personagem").innerText=`O ${localStorage.nome} ${localStorage.sobrenome}`
}
function esconder_nome_do_jogador(){
    document.getElementById("nome_personagem").display="none"
}
function desabilitar_loja(){
    document.getElementById("loja").setAttribute('onclick', "");
    document.getElementById("loja").style.border="3px solid red"
}
function habilitar_loja(){
    document.getElementById("loja").setAttribute('onclick', "abrir_loja()");
    document.getElementById("loja").style.border="3px solid green"
}
function toggleFullScreen() {
if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
    (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
    document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
    document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
    document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
} else {  
    if (document.cancelFullScreen) {  
    document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
    document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
    document.webkitCancelFullScreen();  
    }  
}  
} 
function sairchat(){
    let chat = document.getElementById("chat")
    chat.style.transition="500ms"
    chat.style.left="-200%"
    chat.style.display="none"
}
function chamarchat(){
   
    let chat = document.getElementById("chat")
    chat.style.display="block"
    chat.style.left="0%"
   
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
        atributos_inimigo.innerHTML =`<span> <span class="atributoInimigoHp">HP: ${ parseInt(localStorage.HP_inimigo) }</span><br>DEF: ${parseInt(localStorage.DEF_inimigo)}<br>ATK: ${parseInt(localStorage.ATK_inimigo)}</span>`

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
    // incremento aleatorio
        let incremento_ATK = Number(Math.random() * (1.2 - 0.7) + 0.7) // -30% a 20%
        let incremento_DEF = Number(Math.random() * (1.3 - 0.7) + 0.7) // -30% a 10%
        let incremento_HP = Number(Math.random() * (1.2 - 0.7) + 0.7) // -30% a 10%
 
    //  vida do inimigo
        localStorage.HP_inimigo = parseInt((Number(localStorage.HP_player) * Number(incremento_ATK))) 
        localStorage.ATK_inimigo = parseInt((Number(localStorage.ATK_player) * Number(incremento_DEF)))
        localStorage.DEF_inimigo = parseInt((Number(localStorage.DEF_player) * Number(incremento_HP)))
   
    
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

    document.querySelector(".atributoPlayerHp").style.color="red"
   
}
function recuar_inimigo(){
    inimigo.style.right = "15%"
}
function dano_do_inimigo(){
    let dano_inimigo = (localStorage.ATK_inimigo - localStorage.DEF_player)
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
function recuperar_vida_player(){
    localStorage.HP_player = (Number(localStorage.HP_player) - Number(localStorage.HP_player)) //zerar ho do player
    localStorage.HP_player = (Number(localStorage.vitorias) * 30)
    Atualizar_atributos_do_player()
}
function posicao_inicial_player(){
    player.style.transform = "translate(0%, 0%)"
    
}
async function player_parado(){
    player.style.backgroundImage="url(img/personaje-parada-original.webp)"
} 
async function trocar_img_player_golpe(){
    player.style.backgroundImage ="url(img/personaje_Ataque-original.webp)" 
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
function desabilitar_batalha_rapida(){
    let br = document.getElementById("batalha_rapida")
    br.setAttribute('onclick', "");
    document.getElementById("batalha_rapida").style.border="3px solid red"
}
function habilitar_batalha_rapida(){
    let br = document.getElementById("batalha_rapida")
    
    br.setAttribute('onclick', "batalha_rapida()");
    br.style.border="3px solid green"
}
function habilitar_ataque_do_player(){
    button_atk.setAttribute('onclick', "ataque_player()");
    document.getElementById("atacar").style.border="3px solid green"
}
function Atualizar_atributos_do_player(){
    atributos_player.innerHTML =`<span class="atributos_player">XP: ${parseInt(localStorage.xp)}/${parseInt(localStorage.next_level)}<br> MANA: ${parseInt(localStorage.mana)}<br> <span class="atributoPlayerHp">HP: ${parseInt(localStorage.HP_player)}</span><br>DEF: ${parseInt(localStorage.DEF_player)}<br>ATK: ${parseInt(localStorage.ATK_player)}</span>`
}
function habilitar_atributos_player(){
    atributos_player.style.display="block"
}
function avancar_player(){
    player.style.left = "60%"
    player.style.zIndex = 3
    inimigo.style.zIndex = 1

    document.querySelector(".atributoInimigoHp").style.color="red"
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
function mostrar_dano_player(){
    let dano_pa = localStorage.ATK_player - localStorage.DEF_inimigo
    if(dano_pa<=0){dano_pa = 1}
    let dano_p = document.getElementById("mostrar_dano_player")
    dano_p.style.display="block"
    
    dano_p.innerText=`${dano_pa}`

    setTimeout(function(){
        dano_p.innerText=""
        dano_p.style.display="none"

    }, 500)
}
function mostrar_dano_inimigo(){
    let dano_in = localStorage.ATK_inimigo - localStorage.DEF_player
    if(dano_in<=0){dano_in = 1}
    let dano_i = document.getElementById("mostrar_dano_inimigo")
    dano_i.style.display="block"
    dano_i.innerText=`${dano_in}`

    setTimeout(function(){
        dano_i.innerText=""
        dano_i.style.display="none"
    }, 500)
}