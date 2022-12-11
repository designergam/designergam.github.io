

let xp = parseInt(localStorage.xp)
let next_level = parseInt(localStorage.next_level)

console.log(`priximo: ${parseInt(next_level)}`)
console.log(`atual: ${parseInt(xp)}`)



if(xp == next_level){
    reset_vida_e_levelUp()
    mensagem.innerHTML=`
    <h2>LEVEL UP!</h2> 
    <p style="font-size: 18px; text-align: center;">HP: ${parseInt(localStorage.vitorias)} - DEF:${parseInt(localStorage.vitorias)} - ATK: ${parseInt(localStorage.vitorias)} </p>
    `
    setTimeout(function(){
        localStorage.next_level = parseInt(localStorage.next_level)*2
    },1000)
    
}
