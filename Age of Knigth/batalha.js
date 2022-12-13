function jogar(){
    carta()
    
    if(parseInt(localStorage.xp) == parseInt(localStorage.next_level)){
        levelup()
        
    }
    
     
    
    localStorage.inimigo = Math.floor(6* Math.random()) //INIMIGO ALEATORIO

    mostrar_controles()
    
    //atribuir aleatoriamente incremento no inimigo
        adicional_aleatorio()

    //ocutar botão de play  
        esconder_btn_play()
    
    //trazer inimigo pro cenario
        trazer_inimigo_pro_cenario()

    //escolher inimigo
        escolher_inimigo()     
    
}  

    //==============================ataque do jogador==============================
        
    function atacar(){

        
        dano_do_player()


        
        desabilitar_ataque_do_player()
        

        //atacar
            setTimeout(function(){
                trocar_img_player_golpe()
                som_golpe_espada()
                player.style.left="35%"

                //se ganhar======================
                if(localStorage.HP_inimigo <= 0){           
                     vitoria()  
                     
                } 

                

            },500)
    
        //recuar
            setTimeout(function(){
                player_parado()
                player.style.left="15%"
                trocar_cor_inimigo() 
                atualizar_atributos_inimigo()
            },1000)



            if(localStorage.HP_inimigo > 0){
                setTimeout(function(){
                    inimigo_ataca()
                },1000)
        
            }

        

                      
    }  


    
        
            
            
        

        function se_perder(){
            if(localStorage.HP_player <= 0){
                
                //mostrar mensagem de derrota
                    mensagem_derrota()

                //resetar game over
                    setTimeout(function(){
                        resetar()
                    }, 3000)
        
            }
        }
  
        function inimigo_ataca(){
            //evitar dano negativo

                dano_inimigo = (localStorage.ATK_inimigo - localStorage.DEF_player)
                if(dano_inimigo<=0){dano_inimigo = 1}

                
            
            //atacar
                setTimeout(function(){
                    som_golpe_espada()
                    
                    inimigo.style.right="35%"
                    localStorage.HP_player = (localStorage.HP_player - dano_inimigo)

                    //atributos de batalha do player

                    atributos_do_player()
                    function atributos_do_player(){
                        atributos_player.innerHTML =`<span>XP: ${parseInt(localStorage.xp)}/${parseInt(localStorage.next_level)}<br> HP: ${parseInt(localStorage.HP_player)}<br>DEF: ${parseInt(localStorage.DEF_player)}<br>ATK: ${parseInt(localStorage.ATK_player)}</span>`
                    }
                    
                },500)

                

            //recuar
                setTimeout(function(){
                    inimigo.style.right="15%"
                    trocar_cor_player()
                    se_perder()

            //LIBERA BTN ATK DO PLAYER
                    button_atk.setAttribute('onclick', "atacar()");
                },1000)

            

        }