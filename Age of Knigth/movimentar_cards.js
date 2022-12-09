let card1 = document.getElementById("card1")
let card2 = document.getElementById("card2")
let card3 = document.getElementById("card3")


if(localStorage.boleano == "true"){

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


//===MAIS HP=======================================================
function hp_1(){
    localStorage.HP_player = parseInt(localStorage.HP_player) +1
}
function hp_2(){
    localStorage.HP_player = parseInt(localStorage.HP_player) +2
}
function hp_3(){
    localStorage.HP_player = parseInt(localStorage.HP_player) +3
}

//===MAIS ATK======================================================
function atk_1(){
    localStorage.ATK_player = parseInt(localStorage.ATK_player) +1
}
function atk_2(){
    localStorage.ATK_player = parseInt(localStorage.ATK_player) +2
}
function atk_3(){
    localStorage.ATK_player = parseInt(localStorage.ATK_player) +3
}

//==MAIS DEF=======================================================
function def_1(){
    localStorage.DEF_player = parseInt(localStorage.DEF_player) +1
}
function def_2(){
    localStorage.DEF_player = parseInt(localStorage.DEF_player) +2
}
function def_3(){
    localStorage.DEF_player = parseInt(localStorage.DEF_player) +3
}


let h1_atk = document.getElementById("h1_atk")
let h1_def = document.getElementById("h1_def")
let h1_hp = document.getElementById("h1_hp")


let num1 = Math.floor(3* Math.random())
let num2 = Math.floor(3* Math.random())
let num3 = Math.floor(3* Math.random())

//carta de ATK
let card_atk = document.getElementById("card1")
switch(num1){
    case 0:
        card_atk.style.background="url(https://img.freepik.com/vetores-premium/espada-de-ferro-com-estilo-pixel-art_475147-440.jpg)"
        card_atk.style.backgroundPosition="center"
        card_atk.style.backgroundSize="cover"
   
    h1_atk.innerText="ATK +1"
    card_atk.addEventListener("click", function () {
        atk_1()
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
        atk_2()
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
        atk_3()
        fechar_cards()
        localStorage.boleano = false
        recarregar()
    });
    break
    
}

//card de DEF
let card_def = document.getElementById("card2")
switch(num2){
   
    case 0:
        card_def.style.background="url(https://img.freepik.com/vetores-premium/escudo-de-ferro-com-estilo-pixel-art_475147-439.jpg)"
        card_def.style.backgroundPosition="center"
        card_def.style.backgroundSize="cover"
        h1_def.innerText="DEF +2"
        card_def.addEventListener("click", function () {
        def_2()
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
        def_3()
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
        def_1()
        fechar_cards()
        localStorage.boleano = false
        recarregar()
    });
    break
    
}

//card de HP
let card_hp = document.getElementById("card3")
switch(num3){
   
    case 0:
        card_hp.style.background="url(https://static.vecteezy.com/ti/vetor-gratis/p3/5644880-vermelho-coracao-em-pixel-estilo-arte-icone-de-8-bit-simbolo-dia-dos-namorados-gratis-vetor.jpg)"
        card_hp.style.backgroundPosition="center"
        card_hp.style.backgroundSize="cover"
        card_hp.style.backgroundRepeat = "no-repeat"
        

        h1_hp.innerText="HP +1"
        card_hp.addEventListener("click", function () {
        hp_1()
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
        hp_2()
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
        hp_3()
        fechar_cards()
        localStorage.boleano = false
        recarregar()
    });
    break
    
}

