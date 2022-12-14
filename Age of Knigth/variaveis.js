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
    let carta_ATK_1 = "https://img.freepik.com/vetores-premium/espada-de-ferro-com-estilo-pixel-art_475147-440.jpg"
    let carta_ATK_2 = "https://static.vecteezy.com/system/resources/previews/007/816/861/original/pixel-art-iron-broadsword-vector.jpg"
    let carta_ATK_3 = "https://img.freepik.com/vetores-premium/espada-pirata-com-estilo-pixel-art_475147-456.jpg"
    let carta_ATK_4 = "https://img.freepik.com/vetores-premium/grande-espada-em-estilo-pixel-art_475147-1940.jpg"
    let carta_ATK_5 = "https://img.freepik.com/vetores-premium/shuriken-em-estilo-pixel-art_475147-1411.jpg"

//Cartas de DEF
    let carta_DEF_1 = "https://img.freepik.com/vetores-premium/escudo-de-ferro-com-estilo-pixel-art_475147-439.jpg"
    let carta_DEF_2 = "https://img.freepik.com/vetores-premium/escudo-de-madeira-em-estilo-pixel_475147-1861.jpg"
    let carta_DEF_3 = "https://img.freepik.com/vetores-premium/escudo-branco-vermelho-com-estilo-pixel-art_475147-494.jpg"
    let carta_DEF_4 = "https://img.myloview.com.br/quadros/pixel-art-game-item-icon-and-objects-for-the-design-vector-illustration-fantasy-world-old-game-console-700-179505573.jpg"

//Cartas de HP
    let carta_HP_1 = "https://static.vecteezy.com/ti/vetor-gratis/p3/5644880-vermelho-coracao-em-pixel-estilo-arte-icone-de-8-bit-simbolo-dia-dos-namorados-gratis-vetor.jpg"
    let carta_HP_2 = "https://img.freepik.com/vetores-premium/caixao-com-estilo-pixel-art_475147-670.jpg"
    let carta_HP_3 = "https://img.freepik.com/vetores-premium/frasco-de-pocao-mini-vermelho-com-estilo-pixel-art_475147-230.jpg"


//Cenarios
    let cenario_1 = "img/backgroud.gif"
    let cenario_2 = "https://i.pinimg.com/originals/7d/09/5a/7d095ae81e099c20e7db776ea1a6e2ea.gif"
    let cenario_3 = "https://i.pinimg.com/originals/c0/25/94/c02594845d2a9bb78543136132d12b96.gif"

//inimigos
    let inimigo_1 = "https://i.pinimg.com/originals/2a/99/a8/2a99a878e17b7527ea1f72b7730c6be9.gif"
    let inimigo_2 = "https://i.pinimg.com/originals/92/e5/6f/92e56ffb13f7181271c0e4c199250dc3.gif"
    let inimigo_3 = "http://25.media.tumblr.com/tumblr_m4gcm09wPO1qbcqw8o1_400.gif"
    let inimigo_4 = "https://thumbs.gfycat.com/FriendlyLazyEeve-max-1mb.gif"
    let inimigo_5 = "img/inimigo_1.gif"
    let inimigo_6 = "img/inimigo_2.gif"
    let inimigo_7 = "img/inimigo_3.gif"
    let inimigo_8 = "img/inimigo_4.gif"
    let inimigo_9 = "img/inimigo_5.gif"
    let inimigo_10 = "img/inimigo_6.gif"
    let inimigo_11 = "img/inimigo_7.gif"
    let inimigo_12 = "img/inimigo_8.gif"
    let inimigo_13 = "img/inimigo_9.gif"