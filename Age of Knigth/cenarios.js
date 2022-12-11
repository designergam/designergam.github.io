let cenario_1 = "img/backgroud.gif"
let cenario_2 = "https://i.pinimg.com/originals/7d/09/5a/7d095ae81e099c20e7db776ea1a6e2ea.gif"
let cenario_3 = "https://i.pinimg.com/originals/c0/25/94/c02594845d2a9bb78543136132d12b96.gif"


if(localStorage.vitorias>=1 & localStorage.vitorias<=10 ){
    cenario.style.background=`url(${cenario_1})`
    cenario.style.backgroundRepeat="no-repeat"
    cenario.style.backgroundSize="cover"
    cenario.style.backgroundPosition="ceneter"
}
if(localStorage.vitorias>=10 &  localStorage.vitorias<=20){
    cenario.style.background=`url(${cenario_2})`
    cenario.style.backgroundRepeat="no-repeat"
    cenario.style.backgroundSize="cover"
    cenario.style.backgroundPosition="ceneter"
}
if(localStorage.vitorias>=20 &  localStorage.vitorias<=30){
    cenario.style.background=`url(${cenario_3})`
    cenario.style.backgroundRepeat="no-repeat"
    cenario.style.backgroundSize="cover"
    cenario.style.backgroundPosition="ceneter"
}

//Ultimo cenario
if(localStorage.vitorias>=30 &  localStorage.vitorias<=99){
    cenario.style.background=`url(${cenario_3})`
    cenario.style.backgroundRepeat="no-repeat"
    cenario.style.backgroundSize="cover"
    cenario.style.backgroundPosition="ceneter"
}