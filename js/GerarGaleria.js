// BD de Computador////////////////////////////////////
const Url = new URLSearchParams(window.location.search);
const TipoURL = Url.get('t');
const PaginaURL = Url.get('p');


let acriarLI = document.getElementById('ul')

let PassarPagina = document.querySelector(".ls-pagination-filter")

//Filtrar por Objetos que são do tipo "jogo"
const jogosPC = BD.filter(item => item.Tipo == "jogo")

//Filtrar por Objetos que são do tipo "programa"
const Programas = BD.filter(item2 => item2.Tipo == "programa")


//Ordenar Jogos em orgem alfabetica
jogosPC.sort(function(a, b){
    if(a.Nome < b.Nome){
        return -1;
    }
    else{
        return true;
    }

})

BD.sort(function(a, b){
    if(a.Nome < b.Nome){
        return -1;
    }
    else{
        return true;
    }

})

//pesquisa
function pesquisar(){

    let pesquisa = document.getElementById("input").value
    acriarLI.innerHTML="";
    BD.map((jogo) => {
        let novonome = jogo.Nome.toLowerCase()
        let novadesc = jogo.Descricao.toLocaleLowerCase()
        if(novonome.indexOf(pesquisa.toLowerCase()) > -1 || novadesc.indexOf(pesquisa.toLowerCase()) > -1){
            acriarLI.innerHTML+=`
            <li>
                <a href="Download.html?id=`+jogo.id+`">
                    <img src="`+jogo.Capa+`" alt="`+jogo.Nome+`" class="gallery-items">
                </a>
                <a href="Download.html?id=`+jogo.id+`">
                    <h2>`+jogo.Nome+`</h2>
                </a>
            </li>`;
        }}
        )

        PassarPagina.style.display = "none"
   
}




// Tipo: Jogos - Pagina: 1
if(TipoURL == null & PaginaURL == null || TipoURL == "jogo" & PaginaURL == 1){
   
    for(let i=0; i<18; i++){

        acriarLI.innerHTML+=`
        <li>
            <a href="Download.html?id=`+jogosPC[i].id+`">
                <img src="`+jogosPC[i].Capa+`" alt="`+jogosPC[i].Nome+`" class="gallery-items">
            </a>
            <a href="Download.html?id=`+jogosPC[i].id+`">
                <h2>`+jogosPC[i].Nome+`</h2>
            </a>
        </li>`;
    }

    PassarPagina.innerHTML =`

    <ul class="ls-pagination">
    <p id="textPaginas">Paginas >>></p>
    <a href="?t=jogo&p=1"><li id="pg1">1</li></a>
    <a href="?t=jogo&p=2"><li id="pg2">2</li></a>
    <a href="?t=jogo&p=3"><li id="pg3">3</li></a>
          
    </ul>
    `
}
// Tipo: Jogos - Pagina: 2
else if(TipoURL == "jogo" & PaginaURL == 2){
   
    for(let i=18; i<36; i++){

        acriarLI.innerHTML+=`
        <li>
            <a href="Download.html?id=`+jogosPC[i].id+`">
                <img src="`+jogosPC[i].Capa+`" alt="`+jogosPC[i].Nome+`" class="gallery-items">
            </a>
            <a href="Download.html?id=`+jogosPC[i].id+`">
                <h2>`+jogosPC[i].Nome+`</h2>
            </a>
        </li>`;
    }

    PassarPagina.innerHTML =`

    <ul class="ls-pagination">
          <p id="textPaginas">Paginas >>></p>
          <a href="?t=jogo&p=1"><li id="pg1">1</li></a>
          <a href="?t=jogo&p=2"><li id="pg2">2</li></a>
          <a href="?t=jogo&p=3"><li id="pg3">3</li></a>
          
    </ul>
    `
   
}
// Tipo: Jogos - Pagina: 3
else if(TipoURL == "jogo" & PaginaURL == 3){
   
    for(let i=36; i<54; i++){

        acriarLI.innerHTML+=`
        <li>
            <a href="Download.html?id=`+jogosPC[i].id+`">
                <img src="`+jogosPC[i].Capa+`" alt="`+jogosPC[i].Nome+`" class="gallery-items">
            </a>
            <a href="Download.html?id=`+jogosPC[i].id+`">
                <h2>`+jogosPC[i].Nome+`</h2>
            </a>
        </li>`;
    }

    PassarPagina.innerHTML =`

    <ul class="ls-pagination">
          <p id="textPaginas">Paginas >>></p>
          <a href="?t=jogo&p=1"><li id="pg1">1</li></a>
          <a href="?t=jogo&p=2"><li id="pg2">2</li></a>
          <a href="?t=jogo&p=3"><li id="pg3">3</li></a>
          
    </ul>
    `
   
}



// Tipo: Programas - Pagina: 1
else if(TipoURL == "programa" & PaginaURL == 1){
    for(let i=0; i<1; i++){

        acriarLI.innerHTML+=`
        <li>
            <a href="Download.html?id=`+Programas[i].id+`">
                <img src="`+Programas[i].Capa+`" alt="`+Programas[i].Nome+`" class="gallery-items">
            </a>
            <a href="Download.html?id=`+Programas[i].id+`">
                <h2>`+Programas[i].Nome+`</h2>
            </a>
        </li>`;
    }

    PassarPagina.innerHTML =`

    <ul class="ls-pagination">
    <p id="textPaginas">Paginas >>></p>
         
    <a href="?t=programa&p=1"><li id="pg1">1</li></a>
               
    </ul>
    `

}

//Mostar Pagina Selecionada
if(PaginaURL == 1){
   

    let itempagina = document.getElementById("pg1")
    itempagina.style.background = "#263241"
    itempagina.style.color = "white"
}
else if(PaginaURL == 2){
   
    let itempagina = document.getElementById("pg2")
    itempagina.style.background = "#263241"
    itempagina.style.color = "white"
}

function goBack() {
    window.history.back()
}
