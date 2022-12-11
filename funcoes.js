//atributos de batalha do player
    atributos_player.innerHTML =`
    <span> HP: ${localStorage.HP_player}<br>DEF: ${localStorage.DEF_player}<br>ATK: ${localStorage.ATK_player}</span>
    `

    mostrarlevel()
    document.getElementById("atributos_inimigo").style.background = "url()"
function jogar(){
    
    
    //ocutar botão de play
        play.style.display="none"
    
    //INIMIGO ALEATORIO
        localStorage.inimigo = Math.floor(4* Math.random()) 

    //trazer inimigo pro cenario
        inimigo.style.display="block"

        setTimeout(function(){
            inimigo.style.transition="600ms"
            inimigo.style.right="15%"
        },30)
    

    //ataque do jogador
    golpe_player = setInterval(function(){

        //evitar dano negativo
            dano_player = (localStorage.ATK_player - localStorage.DEF_inimigo)
            if(dano_player<=0){dano_player = 1}

        //calcular dano no inimigo
            localStorage.HP_inimigo = localStorage.HP_inimigo - dano_player

        //atacar
            setTimeout(function(){
                trocar_img_player_golpe()
                som_golpe_espada()
                player.style.left="35%"
            },100)
            
        //recuar
            setTimeout(function(){
                player_parado()
                player.style.left="15%"
                trocar_cor_inimigo()
            },800)

        //atributos de batalha do player
        document.getElementById("atributos_inimigo").style.background = "url(img/pergaminho.png)"
        document.getElementById("atributos_inimigo").style.backgroundPosition="center"
        document.getElementById("atributos_inimigo").style.backgroundSize="cover"
    
    atributos_inimigo.innerHTML =`
    <span> HP: ${localStorage.HP_inimigo}<br>DEF: ${localStorage.DEF_inimigo}<br>ATK: ${localStorage.ATK_inimigo}</span>
    `
        //se ganhar
            if(localStorage.HP_inimigo <= 0){
                //parar luta
                    clearInterval(golpe_inimigo)
                    clearInterval(golpe_player)

                //tocar som de vitoria
                    setTimeout(function(){
                        vitoria_som()
                    },800)

                //mostar cartas
                    setTimeout(function(){
                        mostrar_cartas()
                    },800)

                //mensagem de vitoria
                    mensagem_ganhou()

                //atribuir vitoria
                    vitoria()

                //mostrar level
                    mostrarlevel()

                //tornar inimigo mais forte
                    inimigo_mais_forte()

                //deitar inimigo e esconder
                    inimigo_cair_para_traz()

                //esconder inimigo morto
                    atributos_inimigo.style.display="none"
                    
            }

    }, 2000)

    //ataque do inimigo
    golpe_inimigo = setInterval(function(){

        //evitar dano negativo
            dano_inimigo = (localStorage.ATK_inimigo - localStorage.DEF_player)
            if(dano_inimigo<=0){dano_inimigo = 1}
        
        //calcular dano no jogador
            localStorage.HP_player = (localStorage.HP_player - dano_inimigo)

        //atacar
            setTimeout(function(){
                som_golpe_espada()
                inimigo.style.right="35%"
            },100)
        
        //recuar
            setTimeout(function(){
                
                inimigo.style.right="15%"
                trocar_cor_player()
            },800)

        //atributos de batalha do player
    atributos_player.innerHTML =`
    <span> HP: ${localStorage.HP_player}<br>DEF: ${localStorage.DEF_player}<br>ATK: ${localStorage.ATK_player}</span>
    `
        //se perder
            if(localStorage.HP_player <= 0){
                //parar luta
                    clearInterval(golpe_player)
                    clearInterval(golpe_inimigo)
                //mostrar mensagem de derrota
                    mensagem_derrota()

                //resetar game over
                    setTimeout(function(){
                        resetar()
                    }, 3000)
         
            }

    }, 2000)
  
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
    window.location.reload() 
 
}
function mostrarlevel(){
    document.getElementById("level").innerText = `LEVEL:  ${localStorage.vitorias}`
}
function resetar(){
    localStorage.clear();
    window.location.reload()
}
async function inimigo_mais_forte(){
    localStorage.HP_inimigo = 10 +  parseInt(localStorage.vitorias) + Math.floor(4* Math.random())
    localStorage.ATK_inimigo = 6 +  parseInt(localStorage.vitorias) + Math.floor(4* Math.random())
    localStorage.DEF_inimigo = 2 +  parseInt(localStorage.vitorias) + Math.floor(4* Math.random())
}
async function reset_vida_e_levelUp(){
    localStorage.HP_player = parseInt(localStorage.HP_player) + parseInt(localStorage.vitorias) 
    localStorage.ATK_player = parseInt(localStorage.ATK_player) + parseInt(localStorage.vitorias) 
    localStorage.DEF_player = parseInt(localStorage.DEF_player) + parseInt(localStorage.vitorias) 
}



async function vitoria(){
    localStorage.vitorias ++
   
}
async function mensagem_ganhou(){
    mensagem.innerHTML=`
    <h2>VICTORY!</h2> 
    `
}
async function trocar_cor_inimigo(){
    inimigo_cor.style.transition="200ms"
    inimigo_cor.style.filter="opacity(0.6) drop-shadow(0 0 0 red)"
    setTimeout(function(){
        inimigo_cor.style.transition="300ms"
        inimigo_cor.style.filter="none"
    },180)


}
async function trocar_cor_player(){
    
    player_cor.style.transition="200ms"
    player_cor.style.filter="opacity(0.6) drop-shadow(0 0 0 red)"
    setTimeout(function(){
        player_cor.style.transition="400ms"
        player_cor.style.filter="none"
    },180)


}
function inimigo_cair_para_traz(){
    //fazer inimigo cair pra traz
    inimigo.style.transform="translate(20%, 40%) rotate(90deg) scaleX(-1)"

    //inimigo volta a posição inicial
    setTimeout(function(){
        inimigo.style.display="none"
        inimigo.style.transform="translate(0%, 0%) rotate(0deg) scaleX(-1)"
    },800)

    
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
async function trocar_img_player_golpe(){
    player.style.background="url(https://cdn.domestika.org/c_limit,dpr_1.0,f_auto,q_auto,w_820/v1586415892/content-items/004/129/334/personaje_Ataque-original.gif?1586415892"
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