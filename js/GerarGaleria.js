//Pegar Parametros URL
const Url = new URLSearchParams(window.location.search);
const TipoURL = Url.get('type');
const PaginaURL = Url.get('page');

//ligar Lista
let acriarLI = document.getElementById('ul')
let PassarPagina = document.querySelector(".ls-pagination-filter")

//Filtrar por Objetos que são do tipo "jogo"
const jogosPC = BD.filter(item => item.Tipo == "jogo")

//Favoritos
let ArryFavoritos =[]
    if(localStorage.meuArr){
        ArryFavoritos = JSON.parse(localStorage.getItem('meuArr'))
    }else{localStorage.meuArr}

//===Pesquisar======================================================================================
function pesquisar() {

    let pesquisa = document.getElementById("input").value
    acriarLI.innerHTML = "";
    BD.map((jogo) => {
        let novonome = jogo.Nome.toLowerCase()
        let RemoverEspacos = jogo.Nome.replace(/\s/g, '-').toUpperCase();
        
        if (novonome.indexOf(pesquisa.toLowerCase()) > -1) {

            acriarLI.innerHTML += `
            <li id="containerjg">
                <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+jogo.id+`&amp;type=`+jogo.Tipo+`">
                    <img src="`+jogo.Capa + `" alt="` +jogo.Nome + `" class="gallery-items" rel="nofollow">
                </a>
                <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+jogo.id+`&amp;type=`+jogo.Tipo+`">
                    <h2>`+jogo.Nome + `</h2>
                </a>
                <img src="img/favorito_Off.png" alt="favorito" id="${jogo.id}" class="favor" onclick="t('${jogo.id}' )"
            </li>`;

            if(ArryFavoritos.find(element => element == `${jogo.id}`)){
                document.getElementById(`${jogo.id}`).src="img/favorito_On.png"
                document.getElementById(`${jogo.id}`).setAttribute("onclick",`f(${jogo.id});`);
            }
        }
    })
    PassarPagina.style.display = "none"
}
//===============================================================================================

//===Filtrar pro Letra==============================================================================
function carregarJogosAlfabeto(letra) {
   
    let Minusculo = BD.filter(item => item.Nome.toLowerCase().substr(0, 1) == letra & item.Tipo == "jogo")
    acriarLI.innerHTML = "";
    Minusculo.map((i) => {
        let RemoverEspacos = i.Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
            <li id="containerjg">
                <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+i.id+`&amp;type=`+i.Tipo+`">
                    <img src="`+i.Capa + `" alt="` +i.Nome + `" class="gallery-items" rel="nofollow">
                </a>
                <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+i.id+`&amp;type=`+i.Tipo+`">
                    <h2>`+i.Nome + `</h2>
                </a>
                <img src="img/favorito_Off.png" alt="favorito" id="${i.id}" class="favor" onclick="t('${i.id}' )"
            </li>`;
            if(ArryFavoritos.find(element => element == `${i.id}`)){
                document.getElementById(`${i.id}`).src="img/favorito_On.png"
                document.getElementById(`${i.id}`).setAttribute("onclick",`f(${i.id});`);
            }
    })

    let todosbotoes = document.querySelectorAll('.btn')
    todosbotoes.forEach(element => {
        element.setAttribute('style', 'background-color:#3e5269; border: none; width: 30px; height: 30px; border-radius: 50%; color: white; font-weight: 200; margin: auto; align-items: center; justify-content: center;')
    })

    let botaoselecionado = document.getElementById(letra)
    botaoselecionado.setAttribute('style', 'background-color:#3e5269; border: 2px solid white; width: 30px; height: 30px; border-radius: 50%; color: white; font-weight: 200; margin: auto; align-items: center; justify-content: center;')

    let PaginasNone = document.getElementById("PaginasNone").style.display = "none"

}
//=============================================================================================

//===Pagina Principal===================================================================
if (TipoURL == null & PaginaURL == null || TipoURL == "jogo" & PaginaURL == 1) {

    for (let i = 0; i < 42; i++) {
        let RemoverEspacos = jogosPC[i].Nome.replace(/\s/g, '-').toUpperCase();       
         acriarLI.innerHTML += `
            <li>
                <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+jogosPC[i].id+`&amp;type=`+jogosPC[i].Tipo+`">
                    <img src="`+ jogosPC[i].Capa + `" alt="` + jogosPC[i].Nome + `" class="gallery-items" rel="nofollow">
                </a>
                <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+jogosPC[i].id+`&amp;type=`+jogosPC[i].Tipo+`">
                    <h2>`+ jogosPC[i].Nome + `</h2>
                </a>
                <img src="img/favorito_Off.png" alt="favorito" id="${jogosPC[i].id}" class="favor" onclick="t('${jogosPC[i].id}' )"
            </li>
        `;

        if(ArryFavoritos.find(element => element == `${jogosPC[i].id}`)){
            document.getElementById(`${jogosPC[i].id}`).src="img/favorito_On.png"
            document.getElementById(`${jogosPC[i].id}`).setAttribute("onclick",`f(${jogosPC[i].id});`);
        }
    }    
}
//============================================================================================

//===Favoritos==========================================================
else if (PaginaURL == "Favoritos") {
    let fav = JSON.parse(localStorage.getItem('meuArr'))

    for (let i = 0; i < fav.length; i++) {
        let item = BD.filter(obg=>(obg.id == fav[i]))
        if(item.length > 0){
            let RemoverEspacos = item[0].Nome.replace(/\s/g, '-').toUpperCase();

            acriarLI.innerHTML += `
            <li id="containerjg">
                <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+item[0].id+`&amp;type=`+item[0].Tipo+`">
                    <img src="`+ item[0].Capa + `" alt="` + item[0].Nome + `" class="gallery-items" rel="nofollow">
                </a>
                <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+item[0].id+`&amp;type=`+item[0].Tipo+`">
                    <h2>`+ item[0].Nome + `</h2>
                </a>
                <img src="img/favorito_On.png" alt="favorito" id="${item[0].id}" class="favor" onclick="f('${item[0].id}' )"
            </li>`;

            
        }   
        
    }   
}
//==============================================================================================
//voltar
function goBack() {
    window.history.back()
}

//Ocultar o voltar na pagina inicial
if (PaginaURL == null) {
    document.getElementById("voltar").style.display = "none"
}
if (PaginaURL == "Favoritos") {
    document.getElementById("Favoritos").style.display = "none"
}

