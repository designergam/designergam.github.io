
mostrarlevel()
function mostrarlevel(){
    document.getElementById("level").innerText += `${localStorage.vitorias}`
}

function recarregar(){
    window.location.reload()
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
    localStorage.HP_player = 10 + parseInt(localStorage.vitorias)
    localStorage.ATK_player = 6 + parseInt(localStorage.vitorias) 
    localStorage.DEF_player = 5 + parseInt(localStorage.vitorias) 
}

async function vitoria (){
    localStorage.vitorias ++
    localStorage.boleano = true
}

async function mensagem_ganhou(){
    mensagem.innerHTML=`
    <h2>VICTORY!</h2> <br>
    <p style="font-size:15px; text-align:center;">HP: +1 &nbsp; &nbsp;  ATK: +1  &nbsp; &nbsp; DEF: +1</p>
    `
}
async function trocar_cor_inimigo(){
    let inimigo_cor = document.getElementById("inimigo_img")
    inimigo_cor.style.transition="200ms"
    inimigo_cor.style.filter="opacity(0.6) drop-shadow(0 0 0 red)"
    setTimeout(function(){
        inimigo_cor.style.transition="400ms"
        inimigo_cor.style.filter="none"
    },180)


}
async function trocar_cor_player(){
    let player_cor = document.getElementById("player_img")
    player_cor.style.transition="200ms"
    player_cor.style.filter="opacity(0.6) drop-shadow(0 0 0 red)"
    setTimeout(function(){
        player_cor.style.transition="400ms"
        player_cor.style.filter="none"
    },180)


}

function inimigo_morre(){
    
    document.getElementById("inimigo_img").style.transform="translate(20%, 40%) rotate(90deg)"

    setTimeout(function(){
        document.getElementById("inimigo_img").style.display="none"
    },1000)

    
        
   
}

function mensagem_derrota(){
    mensagem.innerText="YOU LOST!"
}


//movimentação player================================================================
function player_parado(){
    player.src="https://cdn.domestika.org/c_limit,dpr_1.0,f_auto,q_auto,w_820/v1586415165/content-items/004/129/278/personaje-parada-original.gif?1586415165"
}  

function player_golpe(){
    player.src="https://cdn.domestika.org/c_limit,dpr_1.0,f_auto,q_auto,w_820/v1586415892/content-items/004/129/334/personaje_Ataque-original.gif?1586415892"
}  


if(localStorage.vitorias == 0){
    localStorage.boleano = "true"
    
}

if(localStorage.boleano == "false"){
    play()
}


function play(){
   //INIMIGO ALEATORIO
    localStorage.inimigo = Math.floor(4* Math.random())
    

    //movimentar inimigo
    document.getElementById("inimigo_img").style.display="block"
    setTimeout(function(){
        document.getElementById("inimigo_img").style.transition="1000ms"
    
        document.getElementById("inimigo_img").style.right="-20px"
    },30)
    
    //ocutarplayer
    localStorage.play="off"
    setTimeout(function(){
        document.getElementById("play").style.display="none"
    },500)

    
    
//player==================================
    let golpe_player = setInterval(function(){

        //evitar dano negativo
        let dano_player = (localStorage.ATK_player - localStorage.DEF_inimigo)
        if(dano_player<=0){dano_player = 0}

        localStorage.HP_inimigo = localStorage.HP_inimigo - dano_player

        //movimentação
        player_golpe()
        golpe_espada()
        player.style.left="280px"

        setTimeout(function(){
            player_parado()
            player.style.left="0px"
            trocar_cor_inimigo()
        },700)
        
        //se ganhar=====================
        if(localStorage.HP_inimigo <= 0){
            //parar batalha
            clearInterval(golpe_inimigo)
            clearInterval(golpe_player)

            setTimeout(function(){
                vitoria_som()
            },800)

            
            
            mensagem_ganhou()
            vitoria ()
    
            inimigo_mais_forte()
            reset_vida_e_levelUp()
            inimigo_morre()
            setTimeout(function(){
                recarregar()
            },3000)

            atributos_inimigo.style.display="none"
        }

        atributos_inimigo.innerHTML =`
        <p> HP: ${localStorage.HP_inimigo}</p>
        <p> DEF: ${localStorage.DEF_inimigo}</p>
        <p> ATK: ${localStorage.ATK_inimigo}</p>
        `
        
         
    }, 2000)







//inimigo=================================
    let golpe_inimigo = setInterval(function(){

        //evitar dano negativo
        let dano_inimigo = (localStorage.ATK_inimigo - localStorage.DEF_player)
        if(dano_inimigo<=0){dano_inimigo = 0}
        
        localStorage.HP_player = (localStorage.HP_player - dano_inimigo)

        //movimentação
        
        golpe_espada()
        inimigo.style.right="400px"

        setTimeout(function(){
            
            inimigo.style.right="100px"
            trocar_cor_player()
        },700)

        //se perder===
        if(localStorage.HP_player <= 0){
            //parar batalha
            clearInterval(golpe_player)
            clearInterval(golpe_inimigo)

            mensagem_derrota()
    
            setTimeout(function(){
                resetar()
            }, 3000)
             
        }

        atributos_player.innerHTML =`
            <p> HP: ${localStorage.HP_player}</p>
            <p> DEF: ${localStorage.DEF_player}</p>
            <p> ATK: ${localStorage.ATK_player}</p>
            `

    }, 3000)
  
}