function associar_carta(){
    //carta de atk
        if(localStorage.card_ATK == 0){
            card1.style.backgroundImage=`url(${carta_ATK_1})`
            h1_atk.innerText="ATK +1"
            card1.addEventListener("click", function() {
                localStorage.ATK_player = Number(localStorage.ATK_player) + 1
                Atualizar_atributos_do_player()
                esconder_cartas()       
            });
        }
        if(localStorage.card_ATK == 1){
            card1.style.backgroundImage=`url(${carta_ATK_2})`
            h1_atk.innerText="ATK +2"
            card1.addEventListener("click", function() {
                localStorage.ATK_player = Number(localStorage.ATK_player) + 2
                Atualizar_atributos_do_player()
                esconder_cartas()

            });
        }
        if(localStorage.card_ATK == 2){
            card1.style.backgroundImage=`url(${carta_ATK_3})`
            h1_atk.innerText="ATK +3"
            card1.addEventListener("click", function() {
                localStorage.ATK_player = Number(localStorage.ATK_player) + 3 
                Atualizar_atributos_do_player()  
                esconder_cartas()

            });
        }
        if(localStorage.card_ATK == 3){
            card1.style.backgroundImage=`url(${carta_ATK_4})`
            h1_atk.innerText="ATK +5 & HP -1"
            card1.addEventListener("click", function() {
                localStorage.ATK_player = Number(localStorage.ATK_player) + 5
                localStorage.HP_player = Number(localStorage.HP_player) - 1
                Atualizar_atributos_do_player()
                esconder_cartas()
 
            });
        }
        if(localStorage.card_ATK == 4){
            card1.style.backgroundImage=`url(${carta_ATK_5})`
            h1_atk.innerText="ATK +7 & DEF -3"
            card1.addEventListener("click", function() {
                localStorage.ATK_player = Number(localStorage.ATK_player) + 7
                localStorage.DEF_player = Number(localStorage.DEF_player) - 3
                Atualizar_atributos_do_player()
                esconder_cartas()
            });
        }
    
    //card de DEF
        if(localStorage.card_DEF == 0){
            card2.style.backgroundImage=`url(${carta_DEF_1})`
            h1_def.innerText="DEF +2"
            card2.addEventListener("click", function () {
                localStorage.DEF_player = parseInt(Number(localStorage.DEF_player) +2 )
                Atualizar_atributos_do_player()
                esconder_cartas()
     
            });
        }
        if(localStorage.card_DEF == 1){
            card2.style.backgroundImage=`url(${carta_DEF_2})`
            h1_def.innerText="DEF +3"
            card2.addEventListener("click", function () {
                localStorage.DEF_player = parseInt(Number(localStorage.DEF_player) +3)
                Atualizar_atributos_do_player()
                esconder_cartas()  
            });
        }
        if(localStorage.card_DEF == 2){
            card2.style.backgroundImage=`url(${carta_DEF_3})`
            h1_def.innerText="DEF +1"
            card2.addEventListener("click", function () {
                localStorage.DEF_player = parseInt(Number(localStorage.DEF_player) +1)
                Atualizar_atributos_do_player()
                esconder_cartas()
            });
        }
        if(localStorage.card_DEF == 3){
            card2.style.backgroundImage=`url(${carta_DEF_4})`
            h1_def.innerText="DEF +5"
            card2.addEventListener("click", function () {
                localStorage.DEF_player = parseInt(Number(localStorage.DEF_player) +5)
                Atualizar_atributos_do_player()
                esconder_cartas()  
            });
        }
    
    //card de HP
        if(localStorage.card_HP == 0){
            card3.style.backgroundImage=`url(${carta_HP_1})`
            h1_hp.innerText="HP +2"
            card3.addEventListener("click", function () {
                localStorage.HP_player = parseInt(Number(localStorage.HP_player) +2)
                Atualizar_atributos_do_player()
                esconder_cartas()         
            });
        }
        if(localStorage.card_HP == 1){
            card3.style.backgroundImage=`url(${carta_HP_1})`
            h1_hp.innerText="HP +3"
            card3.addEventListener("click", function () {
                localStorage.HP_player = parseInt(Number(localStorage.HP_player) +3)
                Atualizar_atributos_do_player()
                esconder_cartas()
            });
        }
        if(localStorage.card_HP == 2){
            card3.style.backgroundImage=`url(${carta_HP_1})`
            h1_hp.innerText="HP +4"
            card3.addEventListener("click", function () {
                localStorage.HP_player = parseInt(Number(localStorage.HP_player) +4)
                Atualizar_atributos_do_player()
                esconder_cartas()
            });
        }
        if(localStorage.card_HP == 3){
            card3.style.backgroundImage=`url(${carta_HP_2})`
            h1_hp.innerText="HP +7 & DEF -1"
            card3.addEventListener("click", function () {
                localStorage.HP_player = parseInt(Number(localStorage.HP_player) +7)
                localStorage.DEF_player = parseInt(Number(localStorage.DEF_player) -1)
                Atualizar_atributos_do_player()
                esconder_cartas()
            });
        }
        if(localStorage.card_HP == 4){
            card3.style.backgroundImage=`url(${carta_HP_3})`
            h1_hp.innerText="HP +10"
            card3.addEventListener("click", function () {
                localStorage.HP_player = parseInt(Number(localStorage.HP_player) +10)
                Atualizar_atributos_do_player()    
                esconder_cartas()
            });
        }
}