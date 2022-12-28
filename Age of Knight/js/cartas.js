let a_atk = 0
let a_def = 0
let a_hp = 0

let d_atk = 0
let d_def = 0
let d_hp = 0

let h_atk = 0
let h_def = 0
let h_hp = 0

function atribuir_card1(){
    localStorage.ATK_player = Number(localStorage.ATK_player) + a_atk
    localStorage.DEF_player = Number(localStorage.DEF_player) + a_def
    localStorage.HP_player = Number(localStorage.HP_player) + a_hp
    localStorage.xp = Number(localStorage.xp) + a_xp
    esconder_cartas()
    Atualizar_atributos_do_player()
    mostrar_controles()
    habilitar_batalha_rapida()
}
function atribuir_card2(){
    localStorage.ATK_player = Number(localStorage.ATK_player) + d_atk
    localStorage.DEF_player = Number(localStorage.DEF_player) + d_def
    localStorage.HP_player = Number(localStorage.HP_player) + d_hp
    localStorage.xp = Number(localStorage.xp) + d_xp
    esconder_cartas()
    Atualizar_atributos_do_player()
    mostrar_controles()
    habilitar_batalha_rapida()
}
function atribuir_card3(){
    localStorage.ATK_player = Number(localStorage.ATK_player) + h_atk
    localStorage.DEF_player = Number(localStorage.DEF_player) + h_def
    localStorage.HP_player = Number(localStorage.HP_player) + h_hp
    localStorage.xp = Number(localStorage.xp) + h_xp
    esconder_cartas()
    Atualizar_atributos_do_player()
    mostrar_controles()
    habilitar_batalha_rapida()
}


function associar_carta(){
    //carta de atk
        if(localStorage.card_ATK == 0){
            card1.style.backgroundImage=`url(${carta_ATK_1})`
            h1_atk.innerText="ATK +7"
            a_atk = 7; a_def = 0; a_hp = 0; a_xp = 0 
        }
        if(localStorage.card_ATK == 1){
            card1.style.backgroundImage=`url(${carta_ATK_2})`
            h1_atk.innerText="ATK +5"
            a_atk = 5; a_def = 0; a_hp = 0; a_xp = 0 
        }
        if(localStorage.card_ATK == 2){
            card1.style.backgroundImage=`url(${carta_ATK_3})`
            h1_atk.innerText="ATK +7 & DEF -3"
            a_atk = 7; a_def = -3; a_hp = 0; a_xp = 0 
        }
        if(localStorage.card_ATK == 3){
            card1.style.backgroundImage=`url(${carta_ATK_4})`
            h1_atk.innerText="ATK +10 & HP -10"
            a_atk = 10; a_def = 0; a_hp = -10; a_xp = 0 
        }
        if(localStorage.card_ATK == 4){
            card1.style.backgroundImage=`url(${carta_ATK_5})`
            h1_atk.innerText="ATK +15 & XP -2"
            a_atk = 15; a_def = 0; a_hp = 0; a_xp = -2
        }



    //carta de def
        if(localStorage.card_DEF == 0){
            card2.style.backgroundImage=`url(${carta_DEF_1})`
            h1_def.innerText="DEF +3"
            d_atk = 0; d_def = 3; d_hp = 0; d_xp = 0 
        }
        if(localStorage.card_DEF == 1){
            card2.style.backgroundImage=`url(${carta_DEF_2})`
            h1_def.innerText="DEF +5"
            d_atk = 0; d_def = 5; d_hp = 0; d_xp = 0 
        }
        if(localStorage.card_DEF == 2){
            card2.style.backgroundImage=`url(${carta_DEF_3})`
            h1_def.innerText="DEF +10 & ATK -5"
            d_atk = -5; d_def = 10; d_hp = 0; d_xp = 0 
        }
        if(localStorage.card_DEF == 3){
            card2.style.backgroundImage=`url(${carta_DEF_4})`
            h1_def.innerText="DEF +7 & XP -6"
            d_atk = 0; d_def = 7; d_hp = 0; d_xp = -6
        }



    //carta de hp
        if(localStorage.card_HP == 0){
            card3.style.backgroundImage=`url(${carta_HP_1})`
            h1_hp.innerText="HP +30"
            h_atk = 0; h_def = 0; h_hp = 30; h_xp = 0 
        }
        if(localStorage.card_HP == 1){
            card3.style.backgroundImage=`url(${carta_HP_2})`
            h1_hp.innerText="HP +10 & DEF -3"
            h_atk = 0; h_def = -3; h_hp = 20; h_xp = 0 
        }
        if(localStorage.card_HP == 2){
            card3.style.backgroundImage=`url(${carta_HP_3})`
            h1_hp.innerText="HP +10 & ATK -3"
            h_atk = -2; h_def = 0; h_hp = 10; h_xp = 0 
        }
        
       
    
}