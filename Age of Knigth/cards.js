let card1 = document.getElementById("card1")
let card2 = document.getElementById("card2")
let card3 = document.getElementById("card3")


if(localStorage.boleano == "true" & localStorage.vitorias > 0){

    abrir_cards()
    card1.style.display="block"
    card2.style.display="block"
    card3.style.display="block"

    setInterval(function(){
        card1.style.top="50%"
        card2.style.top="50%"
        card3.style.top="50%"
    }, 500)
    
    setInterval(function(){
        card2.style.left="80%"
        card3.style.left="20%"
    }, 1000)

}

function fechar_cards(){
   let fechar_cards = document.querySelector("#container_cards")
   fechar_cards.style.display="block"
}
async function abrir_cards(){
   document.querySelector("#container_cards").style.display="block"
   
}

//texto de exibição da carta
let h1_atk = document.getElementById("h1_atk")
let h1_def = document.getElementById("h1_def")
let h1_hp = document.getElementById("h1_hp")

//item aleatorio
let ATK = Math.floor(5* Math.random())
let DEF = Math.floor(3* Math.random())
let HP = Math.floor(4* Math.random())





//===carta de ATK===========================================================================
let card_atk = document.getElementById("card1")
switch(ATK){
    case 0:
        card_atk.style.background="url(https://img.freepik.com/vetores-premium/espada-de-ferro-com-estilo-pixel-art_475147-440.jpg)"
        card_atk.style.backgroundPosition="center"
        card_atk.style.backgroundSize="cover"
   
    h1_atk.innerText="ATK +1"
    card_atk.addEventListener("click", function () {
        
        localStorage.ATK_player = parseInt(localStorage.ATK_player) +1
        fechar_cards()
        localStorage.boleano = false
        recarregar()
    });
    break
    case 1:
        card_atk.style.background="url(https://static.vecteezy.com/system/resources/previews/007/816/861/original/pixel-art-iron-broadsword-vector.jpg)"
        card_atk.style.backgroundPosition="center"
        card_atk.style.backgroundSize="cover"
    h1_atk.innerText="ATK +2"
    card_atk.addEventListener("click", function () {
        
        localStorage.ATK_player = parseInt(localStorage.ATK_player) +2
        fechar_cards()
        localStorage.boleano = false
        recarregar()
    });
    break
    case 2:
        card_atk.style.background="url(https://img.freepik.com/vetores-premium/espada-pirata-com-estilo-pixel-art_475147-456.jpg)"
        card_atk.style.backgroundPosition="center"
    card_atk.style.backgroundSize="cover"
    h1_atk.innerText="ATK +3"
    card_atk.addEventListener("click", function () {
        
        localStorage.ATK_player = parseInt(localStorage.ATK_player) +3
        fechar_cards()
        localStorage.boleano = false
        recarregar()
    });
    break
    case 3:
        card_atk.style.background="url(https://img.freepik.com/vetores-premium/grande-espada-em-estilo-pixel-art_475147-1940.jpg)"
        card_atk.style.backgroundPosition="center"
    card_atk.style.backgroundSize="cover"
    h1_atk.innerText="ATK +5 & HP -1"
    card_atk.addEventListener("click", function () {
        
        localStorage.ATK_player = parseInt(localStorage.ATK_player) +5
        localStorage.HP_player = parseInt(localStorage.HP_player) -1

        fechar_cards()
        localStorage.boleano = false
        recarregar()
    });
    break
    case 4:
        card_atk.style.background="url(https://img.freepik.com/vetores-premium/shuriken-em-estilo-pixel-art_475147-1411.jpg)"
        card_atk.style.backgroundPosition="center"
    card_atk.style.backgroundSize="cover"
    h1_atk.innerText="ATK +7 & DEF -2"
    card_atk.addEventListener("click", function () {
        
        localStorage.ATK_player = parseInt(localStorage.ATK_player) +7
        localStorage.DEF_player = parseInt(localStorage.DEF_player) -2

        fechar_cards()
        localStorage.boleano = false
        recarregar()
    });
    break
    
}
//========================================================================================





//===card de DEF=========================================================================
let card_def = document.getElementById("card2")
switch(DEF){
   
    case 0:
        card_def.style.background="url(https://img.freepik.com/vetores-premium/escudo-de-ferro-com-estilo-pixel-art_475147-439.jpg)"
        card_def.style.backgroundPosition="center"
        card_def.style.backgroundSize="cover"
        h1_def.innerText="DEF +2"
        card_def.addEventListener("click", function () {
        
        localStorage.DEF_player = parseInt(localStorage.DEF_player) +2 

        fechar_cards()
        localStorage.boleano = false
        recarregar()
    });
    break
    case 1:
        card_def.style.background="url(https://img.freepik.com/vetores-premium/escudo-de-madeira-em-estilo-pixel_475147-1861.jpg)"
        card_def.style.backgroundPosition="center"
        card_def.style.backgroundSize="cover"
        h1_def.innerText="DEF +3"
        card_def.addEventListener("click", function () {
        
        localStorage.DEF_player = parseInt(localStorage.DEF_player) +3

        fechar_cards()
        localStorage.boleano = false
        recarregar()
    });
    break
    case 2:
        card_def.style.background="url(https://img.freepik.com/vetores-premium/escudo-branco-vermelho-com-estilo-pixel-art_475147-494.jpg)"
        card_def.style.backgroundPosition="center"
        card_def.style.backgroundSize="cover"
   
        h1_def.innerText="DEF +1"
        card_def.addEventListener("click", function () {
        
        localStorage.DEF_player = parseInt(localStorage.DEF_player) +1

        fechar_cards()
        localStorage.boleano = false
        recarregar()
    });
    break
    
}
//========================================================================================





//===card de HP===========================================================================
let card_hp = document.getElementById("card3")
switch(HP){
   
    case 0:
        card_hp.style.background="url(https://static.vecteezy.com/ti/vetor-gratis/p3/5644880-vermelho-coracao-em-pixel-estilo-arte-icone-de-8-bit-simbolo-dia-dos-namorados-gratis-vetor.jpg)"
        card_hp.style.backgroundPosition="center"
        card_hp.style.backgroundSize="cover"
        card_hp.style.backgroundRepeat = "no-repeat"
        

        h1_hp.innerText="HP +1"
        card_hp.addEventListener("click", function () {

        localStorage.HP_player = parseInt(localStorage.HP_player) +1
        fechar_cards()
        localStorage.boleano = false
        recarregar()
    });
    break
    case 1:
        card_hp.style.background="url(https://static.vecteezy.com/ti/vetor-gratis/p3/5644880-vermelho-coracao-em-pixel-estilo-arte-icone-de-8-bit-simbolo-dia-dos-namorados-gratis-vetor.jpg)"
        card_hp.style.backgroundPosition="center"
        card_hp.style.backgroundSize="cover"
        card_hp.style.backgroundRepeat = "no-repeat"
        

        h1_hp.innerText="HP +2"
        card_hp.addEventListener("click", function () {

        localStorage.HP_player = parseInt(localStorage.HP_player) +2
        fechar_cards()
        localStorage.boleano = false
        recarregar()
    });
    break
    case 2:
        card_hp.style.background="url(https://static.vecteezy.com/ti/vetor-gratis/p3/5644880-vermelho-coracao-em-pixel-estilo-arte-icone-de-8-bit-simbolo-dia-dos-namorados-gratis-vetor.jpg)"
        card_hp.style.backgroundPosition="center"
        card_hp.style.backgroundSize="cover"
        card_hp.style.backgroundRepeat = "no-repeat"
      

        h1_hp.innerText="HP +3"
        card_hp.addEventListener("click", function () {
        
        localStorage.HP_player = parseInt(localStorage.HP_player) +3
        fechar_cards()
        localStorage.boleano = false
        recarregar()
    });
    break
    case 3:
        card_hp.style.background="url(https://img.freepik.com/vetores-premium/caixao-com-estilo-pixel-art_475147-670.jpg)"
        card_hp.style.backgroundPosition="center"
        card_hp.style.backgroundSize="cover"
        card_hp.style.backgroundRepeat = "no-repeat"
      

        h1_hp.innerText="HP +6 & DEF -1"
        card_hp.addEventListener("click", function () {

        localStorage.HP_player = parseInt(localStorage.HP_player) +6
        localStorage.DEF_player = parseInt(localStorage.DEF_player) -1

        fechar_cards()
        localStorage.boleano = false
        recarregar()
    });
    break
    
}
//========================================================================================
