function jogar(){
    //atribuir aleatoriamente incremento no inimigo
        adicional_aleatorio()

    play.style.display="none" //ocutar botão de play
    
    //trazer inimigo pro cenario
        setTimeout(function(){
            escolher_inimigo()
            inimigo.style.display="block" //trazer inimigo pro cenario
            atributos_inimigo.style.display="block"//esconder atributos inimigo
        },10)
        
        setTimeout(function(){
            inimigo.style.right="15%"
        },300)
        

    //==============================ataque do jogador==============================
        golpe_player = setInterval(function(){
            
            //evitar dano negativo
                dano_player = (localStorage.ATK_player - localStorage.DEF_inimigo)
                if(dano_player<=0){dano_player = 1}
                
            //atacar
            setTimeout(function(){
                trocar_img_player_golpe()
                som_golpe_espada()
                player.style.left="35%"
            },1000)

            setTimeout(function(){
                //calcular dano no inimigo
                localStorage.HP_inimigo = localStorage.HP_inimigo - dano_player
            },1050)
                
            //recuar
                setTimeout(function(){
                    player_parado()
                    player.style.left="15%"
                    trocar_cor_inimigo()
                    se_ganharar()
                },1500)

            //atributos de batalha do player
            
            document.getElementById("atributos_inimigo").style.background = "url(img/pergaminho.png)"
            document.getElementById("atributos_inimigo").style.backgroundPosition="center"
            document.getElementById("atributos_inimigo").style.backgroundSize="cover"
            atributos_inimigo.innerHTML =`<span> HP: ${ parseInt(localStorage.HP_inimigo) }<br>DEF: ${parseInt(localStorage.DEF_inimigo)}<br>ATK: ${parseInt(localStorage.ATK_inimigo)}</span>`  
            
                
        }, 1700)

        

    //==============================ataque do inimigo==============================
        golpe_inimigo = setInterval(function(){
            //evitar dano negativo
                dano_inimigo = (localStorage.ATK_inimigo - localStorage.DEF_player)
                if(dano_inimigo<=0){dano_inimigo = 1}
            
            //atacar
                setTimeout(function(){
                    inimigo.style.right="35%"
                    
                },1000)

                setTimeout(function(){
                    //calcular dano no jogador
                    localStorage.HP_player = (localStorage.HP_player - dano_inimigo)
                },1050)

            //recuar
                setTimeout(function(){
                    inimigo.style.right="15%"
                    trocar_cor_player()
                    se_perder()
                },1500)

            //atributos de batalha do player
                atributos_player.innerHTML =`<span>XP: ${parseInt(localStorage.xp)}/${parseInt(localStorage.next_level)}<br> HP: ${parseInt(localStorage.HP_player)}<br>DEF: ${parseInt(localStorage.DEF_player)}<br>ATK: ${parseInt(localStorage.ATK_player)}</span>`

        }, 1700)






        function se_ganharar(){
            if(localStorage.HP_inimigo <= 0){
                    clearInterval(golpe_player)//parar golpe do player
                    clearInterval(golpe_inimigo)//parar golpe do inimigo
                    
                    setTimeout(function(){//tocar som de vitoria
                        vitoria_som()
                    },800)

                    setTimeout(function(){//mostar cartas
                        mostrar_cartas()
                    },800)      

                    mensagem_ganhou()//mensagem de vitoria                 
                    vitoria()//atribuir vitoria  
                    mostrarlevel()//mostrar level
                    inimigo_mais_forte()//tornar inimigo mais forte               
                    inimigo_cair_para_traz() //deitar inimigo e esconder

                    atributos_inimigo.style.display="none"//esconder atributos inimigo
                    localStorage.xp = parseInt(localStorage.xp)+2  //recebe xp
            }
        }

        function se_perder(){
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
        }
  
}