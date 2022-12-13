if(!localStorage.xp){
    localStorage.xp = 0
}
if(!localStorage.next_level){
    localStorage.next_level = 10
}

atributos_player.innerHTML =`
    <span>XP: ${parseInt(localStorage.xp)}/${parseInt(localStorage.next_level)}<br> HP: ${parseInt(localStorage.HP_player)}<br>DEF: ${parseInt(localStorage.DEF_player)}<br>ATK: ${parseInt(localStorage.ATK_player)}</span>
    `

let xp = parseInt(localStorage.xp)
let next_level = parseInt(localStorage.next_level)

let levelUp_HP = parseInt(Number(localStorage.HP_player) +Number(localStorage.HP_player) *0.10)
let levelUp_ATK = parseInt(Number(localStorage.ATK_player) + Number(localStorage.ATK_player) *0.10)
let levelUp_DEF = parseInt(Number(localStorage.DEF_player) +Number(localStorage.DEF_player) *0.10)




function levelup(){
    

    localStorage.HP_player = levelUp_HP
    localStorage.ATK_player = levelUp_ATK
    localStorage.DEF_player = levelUp_DEF

    mensagem.innerHTML=`
    <h2>LEVEL UP!</h2> 
    <p style="font-size: 18px; text-align: center;">HP: +${levelUp_HP} &nbsp;&nbsp;&nbsp; DEF:+ ${levelUp_ATK} &nbsp;&nbsp;&nbsp; ATK: +${levelUp_DEF} </p>
    `
    setTimeout(function(){
        localStorage.next_level = parseInt(localStorage.next_level)*2
        
    },1000)

    
    setTimeout(function(){
        mensagem.innerHTML=""
    },3000)
             
    setTimeout(function(){
        vitoria_som()
        atributos_do_player()
    },800)
      
   
}





