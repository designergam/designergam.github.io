// BD de Computador////////////////////////////////////
const Url = new URLSearchParams(window.location.search);
const TipoURL = Url.get('type');
const PaginaURL = Url.get('page');

//Ocultar menu abc se estiver em programas
console.log(TipoURL)
if (TipoURL == "programa") {
    let close = document.getElementById("AlfabeticoBTN").style.display = "none"
}


let acriarLI = document.getElementById('ul')
let PassarPagina = document.querySelector(".ls-pagination-filter")

//Filtrar por Objetos que são do tipo "jogo"
const jogosPC = BD.filter(item => item.Tipo == "jogo")

//Filtrar por Objetos que são do tipo "programa"
const Programas = BD.filter(item2 => item2.Tipo == "programa")

//-----------------Ordenar Jogos em orgem alfabetica
//------------------------------------------------------------------
// jogosPC.sort(function(a, b){
//     if(a.Nome < b.Nome){
//         return -1;
//     }
//     else{
//         return true;
//     }
// })

// BD.sort(function(a, b){
//     if(a.Nome < b.Nome){
//         return -1;
//     }
//     else{
//         return true;
//     }

// })
//------------------------------------------------------------------

//pesquisa
function pesquisar() {
    let pesquisa = document.getElementById("input").value
    acriarLI.innerHTML = "";
    BD.map((jogo) => {
        let novonome = jogo.Nome.toLowerCase()
        let RemoverEspacos = jogo.Nome.replace(/\s/g, '-').toUpperCase();
        
        if (novonome.indexOf(pesquisa.toLowerCase()) > -1) {

            acriarLI.innerHTML += `
            <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+jogo.id+`&amp;type=`+jogo.Tipo+`">
                <li>
                    <img src="`+ jogo.Capa + `" alt="` + jogo.Nome + `" class="gallery-items" rel="nofollow" >
                    <h2>`+ jogo.Nome + `</h2>
                </li>
            </a>`;
        }
    })
    PassarPagina.style.display = "none"
}

//Filtrar pro Letra
function carregarJogosAlfabeto(letra) {
    let Minusculo = BD.filter(item => item.Nome.toLowerCase().substr(0, 1) == letra & item.Tipo == "jogo")
    acriarLI.innerHTML = "";

    

    Minusculo.map((i) => {
        let RemoverEspacos = i.Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?id=`+i.id+`&amp;s=`+RemoverEspacos+`&amp;id=`+i.id+`&amp;type=`+i.Tipo+`">
            <li>
                <img src="`+ i.Capa + `" alt="` + i.Nome + `" class="gallery-items" rel="nofollow" >
                <h2>`+ i.Nome + `</h2>
            </li>
        </a>`;

    })

    let todosbotoes = document.querySelectorAll('.btn')
    todosbotoes.forEach(element => {
        element.setAttribute('style', 'background-color:#3e5269; border: none; width: 30px; height: 30px; border-radius: 50%; color: white; font-weight: 200; margin: auto; align-items: center; justify-content: center;')
    })

    let botaoselecionado = document.getElementById(letra)
    botaoselecionado.setAttribute('style', 'background-color:#3e5269; border: 2px solid white; width: 30px; height: 30px; border-radius: 50%; color: white; font-weight: 200; margin: auto; align-items: center; justify-content: center;')

    let PaginasNone = document.getElementById("PaginasNone").style.display = "none"
}

// Tipo: Jogos - Pagina: 1
if (TipoURL == null & PaginaURL == null || TipoURL == "jogo" & PaginaURL == 1) {

    for (let i = 0; i < 100; i++) {

        let RemoverEspacos = jogosPC[i].Nome.replace(/\s/g, '-').toUpperCase();


        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+jogosPC[i].id+`&amp;type=`+jogosPC[i].Tipo+`">
            <li>
                <img src="`+ jogosPC[i].Capa + `" alt="` + jogosPC[i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ jogosPC[i].Nome + `</h2>
            </li>
        </a>`;
    }

    PassarPagina.innerHTML = `
    <ul class="ls-pagination">
    <p id="textPaginas">Páginas >>></p>
          <a href="?type=jogo&amp;page=1"><li id="pg1">1</li></a>
          <a href="?type=jogo&amp;page=2"><li id="pg2">2</li></a>
          <a href="?type=jogo&amp;page=3"><li id="pg3">3</li></a>
          <a href="?type=jogo&amp;page=4"><li id="pg4">4</li></a>
          <a href="?type=jogo&amp;page=5"><li id="pg5">5</li></a>
          <a href="?type=jogo&amp;page=6"><li id="pg6">6</li></a>
          <a href="?type=jogo&amp;page=7"><li id="pg7">7</li></a>
          <a href="?type=jogo&amp;page=8"><li id="pg8">8</li></a>
          <a href="?type=jogo&amp;page=9"><li id="pg9">9</li></a>
    </ul>
    `
}
// Tipo: Jogos - Pagina: 2
else if (TipoURL == "jogo" & PaginaURL == 2) {

    for (let i = 100; i < 200; i++) {
        let RemoverEspacos = jogosPC[i].Nome.replace(/\s/g, '-').toUpperCase();;

        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+jogosPC[i].id+`&amp;type=`+jogosPC[i].Tipo+`">
            <li>
                <img src="`+ jogosPC[i].Capa + `" alt="` + jogosPC[i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ jogosPC[i].Nome + `</h2>
            </li>
        </a>`;
    }

    PassarPagina.innerHTML = `

    <ul class="ls-pagination">
    <p id="textPaginas">Paginas >>></p>
    <a href="?type=jogo&amp;page=1"><li id="pg1">1</li></a>
    <a href="?type=jogo&amp;page=2"><li id="pg2">2</li></a>
    <a href="?type=jogo&amp;page=3"><li id="pg3">3</li></a>
    <a href="?type=jogo&amp;page=4"><li id="pg4">4</li></a>
    <a href="?type=jogo&amp;page=5"><li id="pg5">5</li></a>
    <a href="?type=jogo&amp;page=6"><li id="pg6">6</li></a>
    <a href="?type=jogo&amp;page=7"><li id="pg7">7</li></a>
    <a href="?type=jogo&amp;page=8"><li id="pg8">8</li></a>
    <a href="?type=jogo&amp;page=9"><li id="pg9">9</li></a>
    
          
    </ul>
    `

}
// Tipo: Jogos - Pagina: 3
else if (TipoURL == "jogo" & PaginaURL == 3) {

    for (let i = 200; i < 300; i++) {
        let RemoverEspacos = jogosPC[i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+jogosPC[i].id+`&amp;type=`+jogosPC[i].Tipo+`">
            <li>
                <img src="`+ jogosPC[i].Capa + `" alt="` + jogosPC[i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ jogosPC[i].Nome + `</h2>
            </li>
        </a>`;
    }

    PassarPagina.innerHTML = `

    <ul class="ls-pagination">
    <p id="textPaginas">Paginas >>></p>
          <a href="?type=jogo&amp;page=1"><li id="pg1">1</li></a>
          <a href="?type=jogo&amp;page=2"><li id="pg2">2</li></a>
          <a href="?type=jogo&amp;page=3"><li id="pg3">3</li></a>
          <a href="?type=jogo&amp;page=4"><li id="pg4">4</li></a>
          <a href="?type=jogo&amp;page=5"><li id="pg5">5</li></a>
          <a href="?type=jogo&amp;page=6"><li id="pg6">6</li></a>
          <a href="?type=jogo&amp;page=7"><li id="pg7">7</li></a>
          <a href="?type=jogo&amp;page=8"><li id="pg8">8</li></a>
          <a href="?type=jogo&amp;page=9"><li id="pg9">9</li></a>
          
          
    </ul>
    `

}
// Tipo: Jogos - Pagina: 4
else if (TipoURL == "jogo" & PaginaURL == 4) {

    for (let i = 400; i < 500; i++) {
        let RemoverEspacos = jogosPC[i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+jogosPC[i].id+`&amp;type=`+jogosPC[i].Tipo+`">
            <li>
                <img src="`+ jogosPC[i].Capa + `" alt="` + jogosPC[i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ jogosPC[i].Nome + `</h2>
            </li>
        </a>`;
    }

    PassarPagina.innerHTML = `

    <ul class="ls-pagination">
    <p id="textPaginas">Paginas >>></p>
    <a href="?type=jogo&amp;page=1"><li id="pg1">1</li></a>
    <a href="?type=jogo&amp;page=2"><li id="pg2">2</li></a>
    <a href="?type=jogo&amp;page=3"><li id="pg3">3</li></a>
    <a href="?type=jogo&amp;page=4"><li id="pg4">4</li></a>
    <a href="?type=jogo&amp;page=5"><li id="pg5">5</li></a>
    <a href="?type=jogo&amp;page=6"><li id="pg6">6</li></a>
    <a href="?type=jogo&amp;page=7"><li id="pg7">7</li></a>
    <a href="?type=jogo&amp;page=8"><li id="pg8">8</li></a>
    <a href="?type=jogo&amp;page=9"><li id="pg9">9</li></a>
    
          
    </ul>
    `

}
// Tipo: Jogos - Pagina: 5
else if (TipoURL == "jogo" & PaginaURL == 5) {

    for (let i = 500; i < 600; i++) {
        let RemoverEspacos = jogosPC[i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+jogosPC[i].id+`&amp;type=`+jogosPC[i].Tipo+`">
            <li>
                <img src="`+ jogosPC[i].Capa + `" alt="` + jogosPC[i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ jogosPC[i].Nome + `</h2>
            </li>
        </a>`;
    }

    PassarPagina.innerHTML = `

    <ul class="ls-pagination">
    <p id="textPaginas">Paginas >>></p>
          <a href="?type=jogo&amp;page=1"><li id="pg1">1</li></a>
          <a href="?type=jogo&amp;page=2"><li id="pg2">2</li></a>
          <a href="?type=jogo&amp;page=3"><li id="pg3">3</li></a>
          <a href="?type=jogo&amp;page=4"><li id="pg4">4</li></a>
          <a href="?type=jogo&amp;page=5"><li id="pg5">5</li></a>
          <a href="?type=jogo&amp;page=6"><li id="pg6">6</li></a>
          <a href="?type=jogo&amp;page=7"><li id="pg7">7</li></a>
          <a href="?type=jogo&amp;page=8"><li id="pg8">8</li></a>
          <a href="?type=jogo&amp;page=9"><li id="pg9">9</li></a>
          
          
    </ul>
    `

}
// Tipo: Jogos - Pagina: 6
else if (TipoURL == "jogo" & PaginaURL == 6) {

    for (let i = 600; i < 700; i++) {
        let RemoverEspacos = jogosPC[i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+jogosPC[i].id+`&amp;type=`+jogosPC[i].Tipo+`">
            <li>
                <img src="`+ jogosPC[i].Capa + `" alt="` + jogosPC[i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ jogosPC[i].Nome + `</h2>
            </li>
        </a>`;
    }

    PassarPagina.innerHTML = `

    <ul class="ls-pagination">
    <p id="textPaginas">Paginas >>></p>
          <a href="?type=jogo&amp;page=1"><li id="pg1">1</li></a>
          <a href="?type=jogo&amp;page=2"><li id="pg2">2</li></a>
          <a href="?type=jogo&amp;page=3"><li id="pg3">3</li></a>
          <a href="?type=jogo&amp;page=4"><li id="pg4">4</li></a>
          <a href="?type=jogo&amp;page=5"><li id="pg5">5</li></a>
          <a href="?type=jogo&amp;page=6"><li id="pg6">6</li></a>
          <a href="?type=jogo&amp;page=7"><li id="pg7">7</li></a>
          <a href="?type=jogo&amp;page=8"><li id="pg8">8</li></a>
          <a href="?type=jogo&amp;page=9"><li id="pg9">9</li></a>
          
          
    </ul>
    `

}
// Tipo: Jogos - Pagina: 7
else if (TipoURL == "jogo" & PaginaURL == 7) {

    for (let i = 700; i < 800; i++) {
        let RemoverEspacos = jogosPC[i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+jogosPC[i].id+`&amp;type=`+jogosPC[i].Tipo+`">
            <li>
                <img src="`+ jogosPC[i].Capa + `" alt="` + jogosPC[i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ jogosPC[i].Nome + `</h2>
            </li>
        </a>`;
    }

    PassarPagina.innerHTML = `

    <ul class="ls-pagination">
    <p id="textPaginas">Paginas >>></p>
          <a href="?type=jogo&amp;page=1"><li id="pg1">1</li></a>
          <a href="?type=jogo&amp;page=2"><li id="pg2">2</li></a>
          <a href="?type=jogo&amp;page=3"><li id="pg3">3</li></a>
          <a href="?type=jogo&amp;page=4"><li id="pg4">4</li></a>
          <a href="?type=jogo&amp;page=5"><li id="pg5">5</li></a>
          <a href="?type=jogo&amp;page=6"><li id="pg6">6</li></a>
          <a href="?type=jogo&amp;page=7"><li id="pg7">7</li></a>
          <a href="?type=jogo&amp;page=8"><li id="pg8">8</li></a>
          <a href="?type=jogo&amp;page=9"><li id="pg9">9</li></a>
          
    </ul>
    `

}
// Tipo: Jogos - Pagina: 8
else if (TipoURL == "jogo" & PaginaURL == 8) {

    for (let i = 800; i < 900; i++) {
        let RemoverEspacos = jogosPC[i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+jogosPC[i].id+`&amp;type=`+jogosPC[i].Tipo+`">
            <li>
                <img src="`+ jogosPC[i].Capa + `" alt="` + jogosPC[i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ jogosPC[i].Nome + `</h2>
            </li>
        </a>`;
    }

    PassarPagina.innerHTML = `

    <ul class="ls-pagination">
    <p id="textPaginas">Paginas >>></p>
    <a href="?type=jogo&amp;page=1"><li id="pg1">1</li></a>
    <a href="?type=jogo&amp;page=2"><li id="pg2">2</li></a>
    <a href="?type=jogo&amp;page=3"><li id="pg3">3</li></a>
    <a href="?type=jogo&amp;page=4"><li id="pg4">4</li></a>
    <a href="?type=jogo&amp;page=5"><li id="pg5">5</li></a>
    <a href="?type=jogo&amp;page=6"><li id="pg6">6</li></a>
    <a href="?type=jogo&amp;page=7"><li id="pg7">7</li></a>
    <a href="?type=jogo&amp;page=8"><li id="pg8">8</li></a>
    <a href="?type=jogo&amp;page=9"><li id="pg9">9</li></a>
    
          
    </ul>
    `

}
// Tipo: Jogos - Pagina: 9
else if (TipoURL == "jogo" & PaginaURL == 9) {

    for (let i = 1000; i < 1100; i++) {
        let RemoverEspacos = jogosPC[i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+jogosPC[i].id+`&amp;type=`+jogosPC[i].Tipo+`">
            <li>
                <img src="`+ jogosPC[i].Capa + `" alt="` + jogosPC[i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ jogosPC[i].Nome + `</h2>
            </li>
        </a>`;
    }

    PassarPagina.innerHTML = `

    <ul class="ls-pagination">
    <p id="textPaginas">Paginas >>></p>
    <a href="?type=jogo&amp;page=1"><li id="pg1">1</li></a>
    <a href="?type=jogo&amp;page=2"><li id="pg2">2</li></a>
    <a href="?type=jogo&amp;page=3"><li id="pg3">3</li></a>
    <a href="?type=jogo&amp;page=4"><li id="pg4">4</li></a>
    <a href="?type=jogo&amp;page=5"><li id="pg5">5</li></a>
    <a href="?type=jogo&amp;page=6"><li id="pg6">6</li></a>
    <a href="?type=jogo&amp;page=7"><li id="pg7">7</li></a>
    <a href="?type=jogo&amp;page=8"><li id="pg8">8</li></a>
    <a href="?type=jogo&amp;page=9"><li id="pg9">9</li></a>
    
          
    </ul>
    `

}


//Mostar Pagina Selecionada
if (PaginaURL == 1) {

    let itempagina = document.getElementById("pg1")
    itempagina.style.background = "#263241"
    itempagina.style.color = "white"
}
else if (PaginaURL == 2) {

    let itempagina = document.getElementById("pg2")
    itempagina.style.background = "#263241"
    itempagina.style.color = "white"
}
else if (PaginaURL == 3) {

    let itempagina = document.getElementById("pg3")
    itempagina.style.background = "#263241"
    itempagina.style.color = "white"
}
else if (PaginaURL == 4) {

    let itempagina = document.getElementById("pg4")
    itempagina.style.background = "#263241"
    itempagina.style.color = "white"
}
else if (PaginaURL == 5) {

    let itempagina = document.getElementById("pg5")
    itempagina.style.background = "#263241"
    itempagina.style.color = "white"
}
else if (PaginaURL == 6) {

    let itempagina = document.getElementById("pg6")
    itempagina.style.background = "#263241"
    itempagina.style.color = "white"
}
else if (PaginaURL == 7) {

    let itempagina = document.getElementById("pg7")
    itempagina.style.background = "#263241"
    itempagina.style.color = "white"
}
else if (PaginaURL == 8) {

    let itempagina = document.getElementById("pg8")
    itempagina.style.background = "#263241"
    itempagina.style.color = "white"
}
else if (PaginaURL == 9) {

    let itempagina = document.getElementById("pg9")
    itempagina.style.background = "#263241"
    itempagina.style.color = "white"
}
else if (PaginaURL == 10) {

    let itempagina = document.getElementById("pg10")
    itempagina.style.background = "#263241"
    itempagina.style.color = "white"
}

function goBack() {
    window.history.back()
}


//Ocultar o voltar na pagina inicial
if (PaginaURL == null) {
    let voltar = document.getElementById("inicio").style.display = "none"
}
