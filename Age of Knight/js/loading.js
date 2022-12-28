let loaling = document.getElementById("loaling")
let progresso_barra = document.getElementById("progresso_barra")
let mensagem_load = document.getElementById("mensagem_load")
let esconder_loading = document.getElementById("esconder_loading")

let arryImg = [
    {
        "img": "img/loja/CuraMedia.png"
    },
    {
        "img": "img/loja/PotedaVida.png"
    },
    {
        "img": `img/loja/PistoladoCrime.png`
    },
    {
        "img": `img/loja/EscudoMedio.png`
    },
    {
        "img": "img/cenarios/cenario2.gif"
    },
    {
        "img": "img/cenarios/cenario3.gif"
    },
    {
        "img": "img/inimigos/inimigo1.gif"
    },
    {
        "img": "img/inimigos/inimigo2.gif"
    },
    {
        "img": "img/inimigos/inimigo3.gif"
    },
    {
        "img": "img/inimigos/inimigo4.gif"
    },
    {
        "img": "img/cenarios/cenario1.gif"
    },
    {
        "img": "img/bag_img.png"
    },
    {
        "img": "img/loja/CuraPequena.png"
    },
    {
        "img": "img/banner_vitoria.png"
    },
    {
        "img": "img/batalha_rapida.jpg"
    },
    {
        "img": "img/btn_play.png"
    },
    {
        "img": "img/chao.jpg"
    },
    {
        "img": "img/download.png"
    },
    {
        "img": "img/icone_ateque_basico.jpg"
    },
    {
        "img": "img/inimigo_1.gif"
    },
    {
        "img": "img/inimigo_2.gif"
    },
    {
        "img": "img/inimigo_3.gif"
    },
    {
        "img": "img/inimigo_4.gif"
    },
    {
        "img": "img/inimigo_5.gif"
    },
    {
        "img": "img/inimigo_6.gif"
    },
    {
        "img": "img/inimigo_7.gif"
    },
    {
        "img": "img/inimigo_8.gif"
    },
    {
        "img": "img/inimigo_9.gif"
    },
    {
        "img": "img/loja.png"
    },
    {
        "img": "img/loja.png"
    },
    {
        "img": "img/pergaminho.png"
    },
    {
        "img": "img/player.gif"
    },
    {
        "img": "img/POW.png"
    },
    {
        "img": "img/Sem título.png"
    },
    {
        "img": "img/som_img.png"
    },
    {
        "img": "img/cartas/atk1-compressed.jpg"
    },
    {
        "img": "img/cartas/atk2-compressed.jpg"
    },
    {
        "img": "img/cartas/atk3-compressed.jpg"
    },
    {
        "img": "img/cartas/atk4-compressed.jpg"
    },
    {
        "img": "img/cartas/atk5-compressed.jpg"
    },
    {
        "img": "img/cartas/def1-compressed.jpg"
    },
    {
        "img": "img/cartas/def2-compressed.jpg"
    },
    {
        "img": "img/cartas/def3-compressed.jpg"
    },
    {
        "img": "img/cartas/def4-compressed.jpg"
    },
    {
        "img": "img/cartas/hp1-compressed.jpg"
    },
    {
        "img": "img/cartas/hp2-compressed.jpg"
    },
    {
        "img": "img/cartas/hp3-compressed.jpg"
    },
    {
        "img": "img/loja/ElixirdeEnergiaMisteriosa.jpg"
    },
    {
        "img": "img/loja/EscudodeOuro.png"
    },
    {
        "img": "img/loja/EspadaMédiadeBronze.png"
    },
    {
        "img": "img/loja/GrugumelodaCabeçona.png"
    },
    {
        "img": "img/loja/MedalhãodeVigor.png"
    },
    {
        "img": "img/personaje-parada-original.webp"
    },
    {
        "img": "img/personaje_Ataque-original.webp"
    },
    {
        "img": "img/iconechat.png"
    },
    
]

    function loading(){
        
        let i=0
        let loop = setInterval(() => {
            loaling.style.backgroundImage = `url(${arryImg[i].img})`

            if(i<arryImg.length){i++}
            if(i>=arryImg.length){
                clearInterval(loop)
                loaling.style.display="none"
                mensagem_load.innerText="COMPLETO!"

                setTimeout(() => {abrir_bag()}, 1);
                setTimeout(() => {fechar_bag()}, 500);
                setTimeout(() => {abrir_loja()}, 1000);
                setTimeout(() => {fechar_loja()}, 1500);
                setTimeout(() => {esconder_loading.style.display="none"}, 2000);
                
            }
            
            let cemporcento = arryImg.length
            let atual = i*100
            let p = atual/cemporcento

            progresso_barra.style.width = `${p}%`
            

        }, 100);

       
    }loading()