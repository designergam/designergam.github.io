//iniciar musica
setTimeout(function(){
    musica_fundo()
},500)

function jogar(){
    cartas_aleatorias()
    mostrar_controles()
    esconder_nomes()
    inimigo_mais_forte()
    mostrar_chao()
    esconder_btn_play()
    inimigo_aleatorio()
    atualizar_atributos_inimigo()
    posicao_inicial_inimigo()
    mostrar_inimigo()
    Atualizar_atributos_do_player()
    
    
    setTimeout(function(){
        mostrar_inimigo_escolhido()
        trazer_player()
        mostrar_level()
        mostrar_gold()
        habilitar_atributos_player()
        
        mostrar_atributos_inimigo()
        habilitar_ataque_do_player()
        atualizar_atributos_inimigo()
        mostrar_nome_do_jogador()
       
        
        
        
        
    }, 300)
    
}  

function ataque_player(){
    if(localStorage.HP_player > 0 ){
        //golpe player
        avancar_player()
        trocar_img_player_golpe()
        som_golpe_1()
        mostrar_dano_player()
        desabilitar_ataque_do_player()
        desabilitar_loja()
        golpe_final_player()

        //recuada player
        setTimeout(function(){
            recuar_player()
            piscar_inimigo()
            player_parado()
            dano_do_player()
            atualizar_atributos_inimigo()
        },500)
        
    }


    setTimeout(function(){     
        if(localStorage.HP_inimigo > 0 ){
            //golpe inimigo
            setTimeout(function(){
                avancar_inimigo()
                som_golpe_1()
                mostrar_dano_inimigo()
                golpe_final_inimigo()
            },1000)
            
            //recuo inimigo
            setTimeout(function(){
                dano_do_inimigo()
                Atualizar_atributos_do_player()
                recuar_inimigo()
                piscar_player()
                habilitar_ataque_do_player()
            }, 1500)

           

        }else(
            //se ganhar
            setTimeout(function(){
                
                passar_de_level()
               
            })  
        )
    },500)
}

function batalha_rapida(){

desabilitar_ataque_do_player()
desabilitar_batalha_rapida()



    let batalha_rapida = setInterval(function(){
        if(localStorage.HP_player > 0 ){
            //golpe player
            avancar_player()
            trocar_img_player_golpe()
            som_golpe_1()
            mostrar_dano_player()
           
           
            desabilitar_loja()


            let golpe_Final_player =   Number(localStorage.HP_inimigo)  + Number(localStorage.DEF_inimigo )- Number(localStorage.ATK_player)
            if(golpe_Final_player <=0){
                clearInterval(batalha_rapida)
            }

            setTimeout(function(){
                if(golpe_Final_player <= 0){
                    morte_inimigo()
                    setTimeout(function(){
                    esconder_inimigo()
                    }, 200)

                    //se ganhar
                    setTimeout(function(){
                        passar_de_level()
                        
                        
                        setTimeout(function(){
                            
                           jogar()
                            
                        }, 2000)
                    },600) 
                }
            }, 300)
           
    
            //recuada player
            setTimeout(function(){
                recuar_player()
                piscar_inimigo()
                player_parado()
                dano_do_player()
                atualizar_atributos_inimigo()
            },250)
            
        }
         
        //ataque inimigo
            if(localStorage.HP_inimigo > 0 ){
                //golpe inimigo
                setTimeout(function(){
                    avancar_inimigo()
                    som_golpe_1()
                    mostrar_dano_inimigo()


                    // Se perder - Golpe final do inimigo
                    let golpe_Final_inimigo = Number(localStorage.HP_player)  + Number(localStorage.DEF_player )- Number(localStorage.ATK_inimigo)

                    if(golpe_Final_inimigo <=0){
                        clearInterval(batalha_rapida)
                     
                      
                    }
                    setTimeout(function(){

                        if(golpe_Final_inimigo <= 0){

                            
                            
                            morte_player()
                            setTimeout(function(){
                                esconder_player()
                            }, 200)

                            
                            
                            setTimeout(function(){
                                esconder_controle()
                                mensagem_derrota()
                                esconder_nome_do_jogador()
                            }, 300)

                            setTimeout(function(){
                                // resetar()
                                habilitar_loja()
                                derrota()
                                habilitar_ataque_do_player()
                                habilitar_batalha_rapida()
                            },3500)

                            
                            
                        }
                    }, 300)
                    
                },500)
                
                //recuo inimigo
                setTimeout(function(){
                    dano_do_inimigo()
                    Atualizar_atributos_do_player()
                    recuar_inimigo()
                    piscar_player()
                   
                }, 750)
    
               
    
            }
        

       
    },1000)

    
    
    


    
}

function golpe_final_player(){
    let golpe_Final_player =   Number(localStorage.HP_inimigo)  + Number(localStorage.DEF_inimigo )- Number(localStorage.ATK_player)
    setTimeout(function(){
        if(golpe_Final_player <= 0){
            morte_inimigo()
            setTimeout(function(){
            esconder_inimigo()
            }, 200)
        }
    }, 300)
}

function golpe_final_inimigo(){
    
    // Se perder - Golpe final do inimigo
    let golpe_Final_inimigo = Number(localStorage.HP_player)  + Number(localStorage.DEF_player )- Number(localStorage.ATK_inimigo)
    setTimeout(function(){
        if(golpe_Final_inimigo <= 0){
            morte_player()
            setTimeout(function(){
                esconder_player()
            }, 200)

            
            
            setTimeout(function(){
                esconder_controle()
                mensagem_derrota()
                esconder_nome_do_jogador()
            }, 300)

            setTimeout(function(){
                // resetar()
                habilitar_loja()
                derrota()
            },3500)

            
            
        }
    }, 300)
}






function passar_de_level(){
    //levelUP
    if(localStorage.xp == localStorage.next_level){
        mensagem_de_levelup()
        esconder_nome_do_jogador()
        levelup()
        console.log("passou de level")
        associar_carta()
        
        setTimeout(function(){
            esconder_mensagem()
            mostrar_cartas()
            esconder_controle()
        }, 2010)
      
    }
    //vitoria
    else{
        mensagem_vitoria()
        habilitar_batalha_rapida()
        esconder_nome_do_jogador()
        ganhar_gold()
        mostrar_gold()
        esconder_atributos_do_inimigo()
        vitoria_som()
        esconder_controle()
        adicionar_vitoria()
        posicao_inicial_inimigo()
        adicionar_level()
        
        
        setTimeout(function(){
            Atualizar_atributos_do_player()
            mostrarlevel()
            esconder_mensagem()
            
        }, 2000)
    }
}