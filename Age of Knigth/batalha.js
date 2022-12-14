//iniciar musica
 musica_fundo()
function jogar(){
    mostrar_chao()
    

    esconder_btn_play()
    
    inimigo_aleatorio()
    inimigo_mais_forte()
    
    atualizar_atributos_inimigo()
    posicao_inicial_inimigo()
    mostrar_inimigo()
    
    
    setTimeout(function(){
        mostrar_inimigo_escolhido()
        trazer_player()
        mostrar_level()
        habilitar_atributos_player()
        mostrar_controles()
        mostrar_atributos_inimigo()
        habilitar_ataque_do_player()
        atualizar_atributos_inimigo()
    }, 500)
    
}  


    function ataque_player(){
        //ataque do player======================================================================== 
        if(localStorage.HP_player > 0 ){
            avancar_player()
            cartas_aleatorias()
            trocar_img_player_golpe()
            som_golpe_1()
            desabilitar_ataque_do_player()

            //Golpe Final do player
            let golpe_Final_player =   Number(localStorage.HP_inimigo)  + Number(localStorage.DEF_inimigo )- Number(localStorage.ATK_player)
            setTimeout(function(){
                if(golpe_Final_player <= 0){
                    morte_inimigo()
                    setTimeout(function(){
                    esconder_inimigo()
                    }, 200)
                }
            }, 300)

            setTimeout(function(){
                recuar_player()
                piscar_inimigo()
                player_parado()
                dano_do_player()
                atualizar_atributos_inimigo()
            },500)
            
        }






        setTimeout(function(){
            //ataque do inimigo========================================================================       
            if(localStorage.HP_inimigo > 0 ){
                setTimeout(function(){
                    avancar_inimigo()
                    
                    som_golpe_1()

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
                            }, 300)

                            setTimeout(function(){
                                resetar()
                            },2500)

                            
                            
                        }
                    }, 300)

                    
                },1000)
                
                setTimeout(function(){
                    dano_do_inimigo()
                    Atualizar_atributos_do_player()
                    recuar_inimigo()
                    piscar_player()
                }, 1500)

                setTimeout(function(){
                    habilitar_ataque_do_player()
                }, 2000)

            }else(
                //se ganhar
                setTimeout(function(){
                    
                    if(localStorage.xp == localStorage.next_level){
                        mensagem_de_levelup()
                        levelup()
                    }else(mensagem_vitoria())

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
                        mostrar_cartas()
                    }, 2000)

                }) 

                

                
            )

        },500)
    }
    
