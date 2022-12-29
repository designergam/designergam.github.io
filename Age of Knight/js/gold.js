function mostrar_gold(){
    document.getElementById("gold").style.display="block"
    document.getElementById("gold").innerText = `GOLD:  ${localStorage.gold}`

    document.getElementById("gold").style.color="green"
    setTimeout(() => {document.getElementById("gold").style.color="yellow"}, 700);
}

function ganhar_gold(){
    let ganho_gold =  Number(Math.floor(4* Math.random())) * Number(localStorage.vitorias)
    if(ganho_gold <=0){ganho_gold = 1}
    localStorage.gold = Number(localStorage.gold) + Number(ganho_gold)
}