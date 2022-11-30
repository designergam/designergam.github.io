//Pegar parametro da URL
    const ID0 = window.location.href; 
    const ID1 = new URL(ID0);
    let ID = ID1.searchParams.get("id");

//Filtrar jogo selecionado
    let conteudo = [];
        conteudo = BD.filter(function(item){
        return item.id == ID;
    })

//Associar conteudo
    let Nome = (conteudo[0].Nome);
    let Capa = (conteudo[0].Capa)
    let Descricao = (conteudo[0].Descricao)
    let Trailer = (conteudo[0].Trailer)
    let Imagem= (conteudo[0].Imagem)
    let Gif = (conteudo[0].Gif)
    let cpu_A = (conteudo[0].Requisitos);
    let Informacoes = (conteudo[0].Informacoes);
    let Genero1 = (conteudo[0].Genero1);
    let Genero2 = (conteudo[0].Genero2);
    let Genero3 = (conteudo[0].Genero3);
    let Genero4 = (conteudo[0].Genero4);
   
//Genero nao definido
if(conteudo[0].Genero2 == "undefined"){
    Genero2 = ""
    Genero3 = ""
    Genero4 = ""
   let a = document.getElementById("gen2")
   a.style.background="none"
   a.style.boxShadow="none"
   let b = document.getElementById("gen3")
   b.style.background="none"
   b.style.boxShadow="none"
   let c = document.getElementById("gen4")
   c.style.background="none"
   c.style.boxShadow="none"
    
}else if(conteudo[0].Genero3 == "undefined"){
    Genero3 = ""
    Genero4 = ""
    
   let b = document.getElementById("gen3")
   b.style.background="none"
   b.style.boxShadow="none"
   let c = document.getElementById("gen4")
   c.style.background="none"
   c.style.boxShadow="none"
}else if(conteudo[0].Genero4 == "undefined"){
    Genero4 = ""
    
   let c = document.getElementById("gen4")
   c.style.background="none"
   c.style.boxShadow="none"
}
    
//Escrever Pagina   
    let img_header = document.getElementById("img_header") //Capa
    img_header.style.background = `URL(`+Capa+`)`

    let info_header = document.getElementById("info_header") //Informações
    info_header.innerText = Informacoes

    let previa_header = document.getElementById("previa_header") //Descrição
    previa_header.innerText = Descricao

    let gen1 = document.getElementById("gen1") //Genero1
    gen1.innerHTML = Genero1
    let gen2 = document.getElementById("gen2") //Genero2
    gen2.innerHTML = Genero2
    let gen3 = document.getElementById("gen3") //Genero3
    gen3.innerHTML = Genero3
    let gen4 = document.getElementById("gen4") //Genero4
    gen4.innerHTML = Genero4

    let nome_header = document.getElementById("nome_header") //Nome
    nome_header.innerText = Nome
    
    let trailer_B =  window.document.getElementById("trailer") //Trailer
        trailer_B.src = Trailer

    let baixarbtn = document.getElementById("btnDownloadArea") //Download
        baixarbtn.innerHTML=`
        
        <a href="Redirect.html?id=`+ID+`" id="download">DOWNLOAD</a>`


        let fundo = document.getElementById("fundo")
        fundo.style.background=`URL(`+Capa+`)`
        fundo.style.backgroundRepeat="no-repeat"
        fundo.style.backgroundSize="cover"
        fundo.style.background
        
       
       

//Desligar se nao tiver dado
    if(conteudo[0].Trailer == undefined){
            let ReT = document.getElementById("container4")
            ReT.style.display = "none"
    }
    if(conteudo[0].Requisitos == undefined){
        let ReT = document.getElementById("container5")
        ReT.style.display = "none"
    }
    if(conteudo[0].Imagem == undefined){
        let IeG = document.getElementById("container")
        let IdJ = document.getElementById("TEXTO_H2")
        IeG.style.display = "none"
        IdJ.style.display = "none"
    }
    if(conteudo[0].Descricao == undefined){
        Descricao = `A descrição deste jogo não está disponível no momento porem fique à vontade para baixar o jogo normalmente. Em breve novas atualizações na página obrigado!`
    }

// Titulo da pagina
    let titulo = document.getElementById("title")
    titulo.innerText = conteudo[0].Nome+" Torrent"

    function goBack() {
        window.history.back()
    }

//Meta Tags e SEO
    let description = document.getElementById("description")
        description.content="download jogo x utorrent, baixar jogo x em capitaotorrent.com, baixar o jogo x via torrent "

    let keywords = document.getElementById("keywords")
        keywords.content=`download `+conteudo[0].Nome+`, baixar `+conteudo[0].Nome+`, `+conteudo[0].Nome+` torrent, `+conteudo[0].Nome+` utorrent, `+conteudo[0].Nome+` gratis, download gratis `+conteudo[0].Nome+`, `+conteudo[0].Nome+`, torrent jogos, utorrent download, games torrent, download game`

    let ogUrl = document.getElementById("ogUrl")

    let ogTitle = document.getElementById("ogTitle")
        ogTitle.content=``+conteudo[0].Nome+``

    let ogImage = document.getElementById("ogImage")

    let ogDescription = document.getElementById("ogDescription")


//-------------------------------RECOMENDADOS---------------------------------
//Filtrar por Objetos de mesmo genero e do tipo "jogo"
    const GeneroA = BD.filter(item => item.Genero1 == conteudo[0].Genero1 || item.Genero2 == conteudo[0].Genero2 & item.Tipo == conteudo[0].Tipo)

//Remove Item Atual dos recomendados
    const Genero = GeneroA.filter((item) => item.Nome !== conteudo[0].Nome);

//Randomizar array de recomendados
    function shuffleArray(inputArray){
        inputArray.sort(()=> Math.random() - 0.5);
    }shuffleArray(Genero);

    console.log(Genero)
    
    
    let recomendados = document.getElementById("RecomendadosLi")

//Abrir container3 se tiver Genero     
if(conteudo[0].Genero1){
    if(Genero.length>5){
        for(let i=0; i<6; i++){
    
            let RemoverEspacos = Genero[i].Nome.replace(/\s/g, '+').toUpperCase();
        
            recomendados.innerHTML+=`
            <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+Genero[i].id+`&amp;type=`+Genero[i].Tipo+`">
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
    let close = document.getElementById("container3")
    close.style.display="none"
}


//Mensagem Aleatoria

const mensagem =["Qual quer problema deixe nos comentários abaixo!", "Seja bem vindo meu nobre!", "Pronto para navegar?", "A embarcação ainda não está compatível com dispositivos moveis, e porque estaria?"]
let Aleatoria = mensagem[Math.floor(Math.random() * mensagem.length)]

let MA = document.getElementById("MA")
let MAp = document.getElementById("MAp")
MAp.innerText = Aleatoria

setTimeout(function() {
    MA.style.transform="translate(15px)"
}, 10000)
setTimeout(function() {
    MA.style.transform="translate(-400px)"
}, 13000)

function fecharmensagem(){
    MA.style.transform="translate(-400px)"
}


