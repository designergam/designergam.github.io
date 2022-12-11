//imagens dos inimigos
let inimigo_1 = "https://i.pinimg.com/originals/2a/99/a8/2a99a878e17b7527ea1f72b7730c6be9.gif"
let inimigo_2 = "https://i.pinimg.com/originals/92/e5/6f/92e56ffb13f7181271c0e4c199250dc3.gif"
let inimigo_3 = "http://25.media.tumblr.com/tumblr_m4gcm09wPO1qbcqw8o1_400.gif"
let inimigo_4 = "https://thumbs.gfycat.com/FriendlyLazyEeve-max-1mb.gif"

//inimigos
if(localStorage.inimigo == 0 ){
        
        
    setTimeout(function(){
        inimigo.style.background=`url(${inimigo_1})`
        inimigo.style.transform="scaleX(-1)"
        inimigo.style.backgroundSize="60%"
        inimigo.style.backgroundPosition="center"
        inimigo.style.backgroundRepeat="no-repeat"
        inimigo.style.backgroundPositionY="100px"
    },500)
}

if(localStorage.inimigo == 1){
    
    setTimeout(function(){
    inimigo.style.transform="scaleX(1)"
    inimigo.style.background=`url(${inimigo_2})`
    inimigo.style.backgroundSize="95%"
    inimigo.style.backgroundPosition="center"
    inimigo.style.backgroundRepeat="no-repeat"
    inimigo.style.backgroundPositionY="18px"
},500)
}

if(localStorage.inimigo == 2){
    setTimeout(function(){
    inimigo.style.transform="scaleX(-1)"
    inimigo.style.background=`url(${inimigo_3})`
    inimigo.style.backgroundSize="95%"
    inimigo.style.backgroundPosition="center"
    inimigo.style.backgroundRepeat="no-repeat"
    inimigo.style.backgroundPositionY="10px"
    localStorage.HP_inimigo = 10 +  parseInt(localStorage.vitorias) + Math.floor(4* Math.random()) +2
},500) 
}

if(localStorage.inimigo == 3){
    setTimeout(function(){
    inimigo.style.transform="scaleX(-1)"
    inimigo.style.background=`url(${inimigo_4})`
    inimigo.style.backgroundSize="95%"
    inimigo.style.backgroundPosition="center"
    inimigo.style.backgroundRepeat="no-repeat"
    localStorage.ATK_inimigo = 5 +  parseInt(localStorage.vitorias) + Math.floor(4* Math.random()) +1
},500)
}