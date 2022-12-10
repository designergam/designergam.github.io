let player = document.getElementById("player_img")
let inimigo = document.getElementById("inimigo_img")

//mensagem
let mensagem = document.getElementById("mensagem")

//atributos de batalha do player
let atributos_player = document.getElementById("atributos_player")
atributos_player.innerHTML =`
<p> HP: ${localStorage.HP_player}</p>
<p> DEF: ${localStorage.DEF_player}</p>
<p> ATK: ${localStorage.ATK_player}</p>
`
    
 
    