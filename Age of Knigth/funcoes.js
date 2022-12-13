




    

//===Funções de gameplay=======================================================
function esconder_btn_play(){
    play.style.display="none" 
}

function mostrar_cartas(){
    
    //esconder mensagem de vitoria
    setTimeout(function(){
        mensagem.innerText=""
    }, 2000)
       
    
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
        }, 2000)
    //espalhar na tela
        setInterval(function(){
            card2.style.left="80%"
            card3.style.left="20%"
        }, 2500)

}
function fechar_cards(){
    //esconder cartas
    document.querySelector("#container_cards").style.display="none"

    localStorage.play = true
    //window.location.reload() 

    setTimeout(function(){
        jogar()
    },1000)

    //mostar melhorias
    atributos_player.innerHTML =`<span>XP: ${parseInt(localStorage.xp)}/${parseInt(localStorage.next_level)}<br> HP: ${parseInt(localStorage.HP_player)}<br>DEF: ${parseInt(localStorage.DEF_player)}<br>ATK: ${parseInt(localStorage.ATK_player)}</span>`

}
function mostrarlevel(){
    document.getElementById("level").innerText = `LEVEL:  ${localStorage.vitorias}`
}
function resetar(){
    localStorage.clear();
    window.location.reload()
}
async function vitoria(){
    
    localStorage.vitorias ++
    esconder_controle()
                    
    setTimeout(function(){
        vitoria_som()
    },800)

    setTimeout(function(){
        mostrar_cartas()
        habilitar_ataque_do_player()
    },800)      

    mensagem_ganhou()             
    mostrarlevel()
    inimigo_mais_forte()            
    inimigo_cair_para_traz()
    esconder_atributos_do_inimigo()
    ganhar_xp()

    
   
}
async function mensagem_ganhou(){
    
    
    mensagem.innerHTML=`
    <h2>VICTORY!</h2> 
    `
}
function mensagem_derrota(){
    mensagem.innerText="YOU LOST!"
}
async function player_parado(){
    player.style.background="url(https://cdn.domestika.org/c_limit,dpr_1.0,f_auto,q_auto,w_820/v1586415165/content-items/004/129/278/personaje-parada-original.gif?1586415165"
    player.style.backgroundPositionY="7px"
    player.style.backgroundPositionX="center"
    player.style.backgroundRepeat="no-repeat"
    player.style.backgroundSize="130%"
}  
function som_golpe_espada(){
    som.src="audios/Golpe com espada.mp3"
    audio.volume = 0.3;
    audio.play()
}
function vitoria_som(){
    som.src="audios/vitoria.wav"
    audio.volume = 0.09;
    audio.play()
}
function musica_fundo(){
    audio.volume = 0.1;
    audio.play()
}
function abrir_mochila(){
    document.getElementById("bag").style.display="block"
}
function fechar_bag(){
    document.getElementById("bag").style.display="none"
}
function mostrar_controles(){
    document.getElementById("controle").style.display= "block"
}
function esconder_controle(){
    document.getElementById("controle").style.display= "none"

}
function ganhar_xp(){
    localStorage.xp = parseInt(localStorage.xp)+2 
}

//===Funções inimigo=======================================================
function mostrar_atributos_inimigo(){
    atributos_inimigo.style.display="block"
    
        
}  
function atualizar_atributos_inimigo(){
        document.getElementById("atributos_inimigo").style.background = "url(img/pergaminho.png)"
        document.getElementById("atributos_inimigo").style.backgroundPosition="center"
        document.getElementById("atributos_inimigo").style.backgroundSize="cover"
        atributos_inimigo.innerHTML =`<span> HP: ${ parseInt(localStorage.HP_inimigo) }<br>DEF: ${parseInt(localStorage.DEF_inimigo)}<br>ATK: ${parseInt(localStorage.ATK_inimigo)}</span>`

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

    setTimeout(function(){
        
        localStorage.inimigo = Math.floor(6* Math.random()) //INIMIGO ALEATORIO
        escolher_inimigo()
    },900) 

    
}
function adicional_aleatorio(){
    //+0 a +3 aos atributos do inimigo
        localStorage.adicional_aleatorio = Math.floor(4* Math.random())
}
function trazer_inimigo_pro_cenario(){
    document.getElementById("inimigo_img").style.display="block"
    setTimeout(function(){
        document.getElementById("inimigo_img").style.right="15%"



        mostrar_atributos_inimigo()
        atualizar_atributos_inimigo()
    },300)
}




//===Funções do jogador=======================================================
async function trocar_cor_player(){
    
    player_cor.style.transition="200ms"
    player_cor.style.filter="opacity(0.6) drop-shadow(0 0 0 red)"
    setTimeout(function(){
        player_cor.style.transition="400ms"
        player_cor.style.filter="none"
    },180)


}
async function trocar_img_player_golpe(){
    player.style.background="url(https://cdn.domestika.org/c_limit,dpr_1.0,f_auto,q_auto,w_820/v1586415892/content-items/004/129/334/personaje_Ataque-original.gif?1586415892"
    player.style.backgroundPositionY="7px"
    player.style.backgroundPositionX="center"
    player.style.backgroundRepeat="no-repeat"
    player.style.backgroundSize="130%"
    
    
}  
function dano_do_player(){
    dano_player = (localStorage.ATK_player - localStorage.DEF_inimigo)
    if(dano_player<=0){dano_player = 1}

    localStorage.HP_inimigo = parseInt(Number(localStorage.HP_inimigo - dano_player))

    setTimeout(function(){
        atualizar_atributos_inimigo()
    }, 500)
    
    //evitar dano negativo
    
}
function desabilitar_ataque_do_player(){
    button_atk.setAttribute('onclick', "");
}
function habilitar_ataque_do_player(){
    button_atk.setAttribute('onclick', "atacar()");
}
function atributos_do_player(){
    atributos_player.innerHTML =`<span>XP: ${parseInt(localStorage.xp)}/${parseInt(localStorage.next_level)}<br> HP: ${parseInt(localStorage.HP_player)}<br>DEF: ${parseInt(localStorage.DEF_player)}<br>ATK: ${parseInt(localStorage.ATK_player)}</span>`
}