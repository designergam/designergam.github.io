const ID0 = window.location.href; 
    const ID1 = new URL(ID0);
    let ID = ID1.searchParams.get("id");
    
        let conteudo = [];

         conteudo = BD.filter(function(item){
            return item.id == ID;
        })

        let Nome = (conteudo[0].Nome);
        let Capa = (conteudo[0].Capa)
        let Descricao = (conteudo[0].Descricao)
        let Trailer = (conteudo[0].Trailer)
        
        let Imagem= (conteudo[0].Imagem)
        let Gif = (conteudo[0].Gif)

//Requisitos Minimos
        let cpu_A = (conteudo[0].Requisitos);
        

        function goBack() {
            window.history.back()
        }
//Se não tiver descrição
        if(conteudo[0].Descricao == `undefined`){
            Descricao = `A descrição deste jogo não está disponível no momento porem fique à vontade para baixar o jogo normalmente. Em breve novas atualizações na página obrigado!`
        }
//Escrever a pagina de download com array   
    let src_B =  window.document.getElementById("img_capa").src = Capa
    let previa_B =  window.document.getElementById("previa").innerText = Descricao
    let tit_B =  window.document.getElementById("tit").innerText = Nome 
    let img_gameplay1_B =  window.document.getElementById("img_gameplay1").src = Imagem
    let img_gameplay2_B =  window.document.getElementById("img_gameplay2").src = Gif
    let cpu_B =  window.document.getElementById("Requisitos").innerText = cpu_A 
    
    let trailer_B =  window.document.getElementById("trailer").src = `https://www.youtube.com/embed/`+Trailer+``
    let baixarbtn = document.getElementById("btnDownloadArea").innerHTML=`<a href="Redirect.html?id=`+ID+`" id="download">DOWNLOAD</a>`

//Trailer, fecha o container se nao tiver nada
    if(conteudo[0].Trailer == "undefined"){
            let ReT = document.getElementById("container4")
            ReT.style.display = "none"
    }

//Requisitos, fecha o container se nao tiver nada
    if(conteudo[0].Requisitos == "undefined"){
        let ReT = document.getElementById("container5")
        ReT.style.display = "none"
    }
    
//Imagem e Gid, fecha o container se nao tiver nada
    if(conteudo[0].Imagem == "undefined"){
        let IeG = document.getElementById("container")
        let IdJ = document.getElementById("TEXTO_H2")
        IeG.style.display = "none"
        IdJ.style.display = "none"
    }

// Titulo da pagina
    let titulo = document.getElementById("title")
    titulo.innerText = conteudo[0].Nome+" Torrent"

//Meta Tags e SEO
    let description = document.getElementById("description")
    description.content="download jogo x utorrent, baixar jogo x em capitaotorrent.com, baixar o jogo x via torrent "

    let keywords = document.getElementById("keywords")
    keywords.content=`download `+conteudo[0].Nome+`, baixar `+conteudo[0].Nome+`, `+conteudo[0].Nome+` torrent, `+conteudo[0].Nome+` utorrent, `+conteudo[0].Nome+` gratis, download gratis `+conteudo[0].Nome+`, `+conteudo[0].Nome+`, torrent jogos, utorrent download, games torrent, download game`

    let ogUrl = document.getElementById("ogUrl").content=``+window.location.href+``
    let ogTitle = document.getElementById("ogTitle").content=``+conteudo[0].Nome+``
    let ogImage = document.getElementById("ogImage").content=``+conteudo[0].Capa+``
    let ogDescription = document.getElementById("ogDescription").content=` Download Grátis de via Torrent`


    let fundo = document.getElementById("container2")
    fundo.style.backgroundImage=`url(`+conteudo[0].Imagem+`)`

//-------------------------------RECOMENDADOS---------------------------------
//Filtrar por Objetos de mesmo genero e do tipo "jogo"
    const GeneroA = BD.filter(item => item.Genero == conteudo[0].Genero & item.Tipo == conteudo[0].Tipo)

//Remove Item Atual dos recomendados
    const Genero = GeneroA.filter((item) => item.Nome !== conteudo[0].Nome);
    
        let recomendados = document.getElementById("RecomendadosLi")

//Abrir container3 se tiver Genero     
if(conteudo[0].Genero){
    if(Genero.length>5){
        for(let i=0; i<6; i++){
    
            let RemoverEspacos = Genero[i].Nome.replace(/\s/g, '+');
        
            recomendados.innerHTML+=`
            <a href="Download.html?id=`+Genero[i].id+`&amp;s=`+RemoverEspacos+`" title="`+Genero[i].Nome+`">
                <li>
                    <img src="`+Genero[i].Capa+`" alt="`+Genero[i].Nome+`" class="gallery-items" rel="nofollow">
                    <h2>`+Genero[i].Nome+`</h2>
                </li>
            </a>`;
    
        }
    }
    
   
}
//Fechar container3 se não tiver Genero
else{
    let close = document.getElementById("container3").style.display="none"
}


//Mensagem Aleatoria

const mensagem =["Qual quer problema deixe nos comentários abaixo!", "Seja bem vindo meu nobre!", "Pronto para navegar?", "A embarcação ainda não está compatível com dispositivos moveis, e porque estaria?"]
let Aleatoria = mensagem[Math.floor(Math.random() * mensagem.length)]

let MA = document.getElementById("MA")
let MAp = document.getElementById("MAp")
MAp.innerText = Aleatoria

setTimeout(function() {
    MA.style.transform="translate(15px)"
}, 1500)
setTimeout(function() {
    MA.style.transform="translate(-400px)"
}, 7000)

function fecharmensagem(){
    MA.style.transform="translate(-400px)"
}

