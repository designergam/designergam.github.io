let xp = parseInt(localStorage.HP_player) + parseInt(localStorage.DEF_player) + parseInt(localStorage.ATK_player) /3

if(!localStorage.xp){
    localStorage.xp = parseInt(xp)
}

let next_level = (parseInt(localStorage.xp) *1.4)

console.log(`priximo: ${next_level}`)
console.log(`atual: ${parseInt(xp)}`)


if(parseInt(xp) >= next_level){
    reset_vida_e_levelUp()
    mensagem.innerHTML=`
    <h2>LEVEL UP!</h2> 
    <p style="font-size: 18px; text-align: center;">HP: ${parseInt(localStorage.vitorias)} - DEF:${parseInt(localStorage.vitorias)} - ATK: ${parseInt(localStorage.vitorias)} </p>
    `
    console.log("passou!")
    localStorage.xp = parseInt(xp)
}
