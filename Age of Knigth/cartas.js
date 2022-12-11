//Carta aleatorio
localStorage.card_ATK = Math.floor(5* Math.random())
localStorage.card_DEF = Math.floor(4* Math.random())
localStorage.card_HP = Math.floor(4* Math.random())

//carta de atk
if(localStorage.card_ATK == 0){
    card1.style.background="url(https://img.freepik.com/vetores-premium/espada-de-ferro-com-estilo-pixel-art_475147-440.jpg)"
    card1.style.backgroundPosition="center"
    card1.style.backgroundSize="cover"

    h1_atk.innerText="ATK +1"
    card1.addEventListener("click", function () {
    
    localStorage.ATK_player = parseInt(localStorage.ATK_player) +1
    fechar_cards()                
});
}
if(localStorage.card_ATK == 1){
    card1.style.background="url(https://static.vecteezy.com/system/resources/previews/007/816/861/original/pixel-art-iron-broadsword-vector.jpg)"
    card1.style.backgroundPosition="center"
    card1.style.backgroundSize="cover"
    h1_atk.innerText="ATK +2"
    card1.addEventListener("click", function () {
    
    localStorage.ATK_player = parseInt(localStorage.ATK_player) +2
    fechar_cards()
    
});
}
if(localStorage.card_ATK == 2){
    card1.style.background="url(https://img.freepik.com/vetores-premium/espada-pirata-com-estilo-pixel-art_475147-456.jpg)"
    card1.style.backgroundPosition="center"
    card1.style.backgroundSize="cover"
    h1_atk.innerText="ATK +3"
    card1.addEventListener("click", function () {
    
    localStorage.ATK_player = parseInt(localStorage.ATK_player) +3
    fechar_cards()
    
});
}
if(localStorage.card_ATK == 3){
    card1.style.background="url(https://img.freepik.com/vetores-premium/grande-espada-em-estilo-pixel-art_475147-1940.jpg)"
    card1.style.backgroundPosition="center"
    card1.style.backgroundSize="cover"
    h1_atk.innerText="ATK +5 & HP -1"
    card1.addEventListener("click", function () {
    
    localStorage.ATK_player = parseInt(localStorage.ATK_player) +5
    localStorage.HP_player = parseInt(localStorage.HP_player) -1
    fechar_cards()
    
});
}
if(localStorage.card_ATK == 4){
    card1.style.background="url(https://img.freepik.com/vetores-premium/shuriken-em-estilo-pixel-art_475147-1411.jpg)"
    card1.style.backgroundPosition="center"
    card1.style.backgroundSize="cover"
    h1_atk.innerText="ATK +7 & DEF -2"
    card1.addEventListener("click", function () {
    
    localStorage.ATK_player = parseInt(localStorage.ATK_player) +7
    localStorage.DEF_player = parseInt(localStorage.DEF_player) -2

    fechar_cards()
    
});
}



//card de DEF
if(localStorage.card_DEF == 0){
    card2.style.background="url(https://img.freepik.com/vetores-premium/escudo-de-ferro-com-estilo-pixel-art_475147-439.jpg)"
    card2.style.backgroundPosition="center"
    card2.style.backgroundSize="cover"
    h1_def.innerText="DEF +2"
    card2.addEventListener("click", function () {
    
    localStorage.DEF_player = parseInt(localStorage.DEF_player) +2 

    fechar_cards()
    
});
}
if(localStorage.card_DEF == 1){
    card2.style.background="url(https://img.freepik.com/vetores-premium/escudo-de-madeira-em-estilo-pixel_475147-1861.jpg)"
    card2.style.backgroundPosition="center"
    card2.style.backgroundSize="cover"
    h1_def.innerText="DEF +3"
    card2.addEventListener("click", function () {
    
    localStorage.DEF_player = parseInt(localStorage.DEF_player) +3

    fechar_cards()
    
});
}
if(localStorage.card_DEF == 2){
    card2.style.background="url(https://img.freepik.com/vetores-premium/escudo-branco-vermelho-com-estilo-pixel-art_475147-494.jpg)"
    card2.style.backgroundPosition="center"
    card2.style.backgroundSize="cover"

    h1_def.innerText="DEF +1"
    card2.addEventListener("click", function () {
    
    localStorage.DEF_player = parseInt(localStorage.DEF_player) +1

    fechar_cards()
    
});
}
if(localStorage.card_DEF == 3){
    card2.style.background="url(https://img.myloview.com.br/quadros/pixel-art-game-item-icon-and-objects-for-the-design-vector-illustration-fantasy-world-old-game-console-700-179505573.jpg)"
    card2.style.backgroundPosition="center"
    card2.style.backgroundSize="cover"

    h1_def.innerText="DEF +5"
    card2.addEventListener("click", function () {
    
    localStorage.DEF_player = parseInt(localStorage.DEF_player) +5

    fechar_cards()
    
});
}



//card de HP
if(localStorage.card_HP == 0){
    card3.style.background="url(https://static.vecteezy.com/ti/vetor-gratis/p3/5644880-vermelho-coracao-em-pixel-estilo-arte-icone-de-8-bit-simbolo-dia-dos-namorados-gratis-vetor.jpg)"
    card3.style.backgroundPosition="center"
    card3.style.backgroundSize="cover"
    card3.style.backgroundRepeat = "no-repeat"
    

    h1_hp.innerText="HP +1"
    card3.addEventListener("click", function () {

    localStorage.HP_player = parseInt(localStorage.HP_player) +1
    fechar_cards()
    
});
}
if(localStorage.card_HP == 1){
    card3.style.background="url(https://static.vecteezy.com/ti/vetor-gratis/p3/5644880-vermelho-coracao-em-pixel-estilo-arte-icone-de-8-bit-simbolo-dia-dos-namorados-gratis-vetor.jpg)"
    card3.style.backgroundPosition="center"
    card3.style.backgroundSize="cover"
    card3.style.backgroundRepeat = "no-repeat"
    

    h1_hp.innerText="HP +2"
    card3.addEventListener("click", function () {

    localStorage.HP_player = parseInt(localStorage.HP_player) +2
    fechar_cards()
    
});
}
if(localStorage.card_HP == 2){
    card3.style.background="url(https://static.vecteezy.com/ti/vetor-gratis/p3/5644880-vermelho-coracao-em-pixel-estilo-arte-icone-de-8-bit-simbolo-dia-dos-namorados-gratis-vetor.jpg)"
    card3.style.backgroundPosition="center"
    card3.style.backgroundSize="cover"
    card3.style.backgroundRepeat = "no-repeat"


    h1_hp.innerText="HP +3"
    card3.addEventListener("click", function () {
    
    localStorage.HP_player = parseInt(localStorage.HP_player) +3
    fechar_cards()
    
});
}
if(localStorage.card_HP == 3){
    card3.style.background="url(https://img.freepik.com/vetores-premium/caixao-com-estilo-pixel-art_475147-670.jpg)"
    card3.style.backgroundPosition="center"
    card3.style.backgroundSize="cover"
    card3.style.backgroundRepeat = "no-repeat"


    h1_hp.innerText="HP +6 & DEF -1"
    card3.addEventListener("click", function () {

    localStorage.HP_player = parseInt(localStorage.HP_player) +6
    localStorage.DEF_player = parseInt(localStorage.DEF_player) -1

    fechar_cards()
    
});
}