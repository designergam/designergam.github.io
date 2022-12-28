//cartas
    let card1 = document.getElementById("card1")
    let card2 = document.getElementById("card2")
    let card3 = document.getElementById("card3")

//texto de exibição da carta
    let h1_atk = document.getElementById("h1_atk")
    let h1_def = document.getElementById("h1_def")
    let h1_hp = document.getElementById("h1_hp")

//botão de play
    let play = document.getElementById("play")

//musica de fundo
let musica = document.getElementById("audio_fundo")

//botão de ataque
    let button_atk = document.getElementById("atacar")

//MENSAGEM
    let mensagem = document.getElementById("mensagem")

//cenario
    let cenario = document.getElementById("cenario")

//inimigo
    let inimigo = document.getElementById("inimigo_img")

//jogador
    let player = document.getElementById("player_img")

//atributos do jogador
    let atributos_player = document.getElementById("atributos_player")

//cartas
    let cartas = document.querySelector("#container_cards")

//golpe
    let golpe_player=""
    let golpe_inimigo=""

//evitar dano negativo
    let dano_player=""
    let dano_inimigo=""

//efeitos sonoros
    let som = document.getElementById("audio")




//musica
  

//===CARTAS===
//Cartas de ATK
    let carta_ATK_1 = "img/cartas/atk1-compressed.jpg"
    let carta_ATK_2 = "img/cartas/atk2-compressed.jpg"
    let carta_ATK_3 = "img/cartas/atk3-compressed.jpg"
    let carta_ATK_4 = "img/cartas/atk4-compressed.jpg"
    let carta_ATK_5 = "img/cartas/atk5-compressed.jpg"

//Cartas de DEF
    let carta_DEF_1 = "img/cartas/def1-compressed.jpg"
    let carta_DEF_2 = "img/cartas/def2-compressed.jpg"
    let carta_DEF_3 = "img/cartas/def3-compressed.jpg"
    let carta_DEF_4 = "img/cartas/def4-compressed.jpg"

//Cartas de HP
    let carta_HP_1 = "img/cartas/hp1-compressed.jpg"
    let carta_HP_2 = "img/cartas/hp2-compressed.jpg"
    let carta_HP_3 = "img/cartas/hp3-compressed.jpg"


//Cenarios
    let cenario_1 = "img/cenarios/cenario1.gif"
    let cenario_2 = "img/cenarios/cenario2.gif"
    let cenario_3 = "img/cenarios/cenario3.gif"

//inimigos
    let inimigo_1 = "img/inimigos/inimigo1.gif"
    let inimigo_2 = "img/inimigos/inimigo2.gif"
    let inimigo_3 = "img/inimigos/inimigo3.gif"
    let inimigo_4 = "img/inimigos/inimigo4.gif"
    let inimigo_5 = "img/inimigo_1.gif"
    let inimigo_6 = "img/inimigo_2.gif"
    let inimigo_7 = "img/inimigo_3.gif"
    let inimigo_8 = "img/inimigo_4.gif"
    let inimigo_9 = "img/inimigo_5.gif"
    let inimigo_10 = "img/inimigo_6.gif"
    let inimigo_11 = "img/inimigo_7.gif"
    let inimigo_12 = "img/inimigo_8.gif"
    let inimigo_13 = "img/inimigo_9.gif"