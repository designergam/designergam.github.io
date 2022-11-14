// BD de Computador////////////////////////////////////
const Url = new URLSearchParams(window.location.search);
const TipoURL = Url.get('t');
const PaginaURL = Url.get('p');

//Ocultar menu abc se estiver em programas
console.log(TipoURL)
if(TipoURL == "programa"){
let close = document.getElementById("AlfabeticoBTN").style.display="none"
}


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
        let RemoverEspacos = jogo.Nome.replace(/\s/g, '+');

        if(novonome.indexOf(pesquisa.toLowerCase()) > -1 || novadesc.indexOf(pesquisa.toLowerCase()) > -1){
            
            acriarLI.innerHTML+=`
            <a href="Download.html?id=`+jogo.id+`&amp;s=`+RemoverEspacos+`">
                <li>
                    <img src="`+jogo.Capa+`" alt="`+jogo.Nome+`" class="gallery-items" rel="nofollow" >
                    <h2>`+jogo.Nome+`</h2>
                </li>
            </a>`;
        }}
        )

        PassarPagina.style.display = "none"

        // loading
        let loading = document.getElementById("loading").style.display="block"
        
        //PARAR LOADING
        setTimeout(function() {
            let loading = document.getElementById("loading").style.display="none"
        }, 500)
}

//Filtrar pro Letra
function carregarJogosAlfabeto(letra){
 let Minusculo = BD.filter(item => item.Nome.toLowerCase().substr(0, 1) == letra & item.Tipo=="jogo")
 acriarLI.innerHTML="";
 Minusculo.map((i) => {
    acriarLI.innerHTML+=`
    <a href="Download.html?id=`+i.id+`&amp;s=teste">
        <li>
            <img src="`+i.Capa+`" alt="`+i.Nome+`" class="gallery-items" rel="nofollow" >
            <h2>`+i.Nome+`</h2>
        </li>
    </a>`;    
    
 })
 let todosbotoes = document.querySelectorAll('.btn')
 todosbotoes.forEach(element => {
     element.setAttribute('style', 'background-color:#3e5269; border: none; width: 30px; height: 30px; border-radius: 50%; color: white; font-weight: 200; margin: auto; align-items: center; justify-content: center;')
 })
 

 let botaoselecionado = document.getElementById(letra)
 botaoselecionado.setAttribute('style', 'background-color:#3e5269; border: 2px solid white; width: 30px; height: 30px; border-radius: 50%; color: white; font-weight: 200; margin: auto; align-items: center; justify-content: center;')

 let PaginasNone = document.getElementById("PaginasNone").style.display="none"
}

// Tipo: Jogos - Pagina: 1
if(TipoURL == null & PaginaURL == null || TipoURL == "jogo" & PaginaURL == 1){
   
    for(let i=0; i<30; i++){

        let RemoverEspacos = jogosPC[i].Nome.replace(/\s/g, '+');

        acriarLI.innerHTML+=`
        <a href="Download.html?id=`+jogosPC[i].id+`&amp;s=`+RemoverEspacos+`" title="`+jogosPC[i].Nome+`">
            <li>
                <img src="`+jogosPC[i].Capa+`" alt="`+jogosPC[i].Nome+`" class="gallery-items" rel="nofollow">
                <h2>`+jogosPC[i].Nome+`</h2>
            </li>
        </a>`;
    }

    PassarPagina.innerHTML =`
    <ul class="ls-pagination">
    <p id="textPaginas">Páginas >>></p>
          <a href="?t=jogo&amp;p=1"><li id="pg1">1</li></a>
          <a href="?t=jogo&amp;p=2"><li id="pg2">2</li></a>
          <a href="?t=jogo&amp;p=3"><li id="pg3">3</li></a>
          <a href="?t=jogo&amp;p=4"><li id="pg4">4</li></a>
          <a href="?t=jogo&amp;p=5"><li id="pg5">5</li></a>
          <a href="?t=jogo&amp;p=6"><li id="pg6">6</li></a>
          <a href="?t=jogo&amp;p=7"><li id="pg7">7</li></a>
          <a href="?t=jogo&amp;p=8"><li id="pg8">8</li></a>
          <a href="?t=jogo&amp;p=9"><li id="pg9">9</li></a>
    </ul>
    `
}
// Tipo: Jogos - Pagina: 2
else if(TipoURL == "jogo" & PaginaURL == 2){
   
    for(let i=30; i<60; i++){
        let RemoverEspacos = jogosPC[i].Nome.replace(/\s/g, '+');

        acriarLI.innerHTML+=`
        <a href="Download.html?id=`+jogosPC[i].id+`&amp;s=`+RemoverEspacos+`">
            <li>
                <img src="`+jogosPC[i].Capa+`" alt="`+jogosPC[i].Nome+`" class="gallery-items" rel="nofollow">
                <h2>`+jogosPC[i].Nome+`</h2>
            </li>
        </a>`;
    }

    PassarPagina.innerHTML =`

    <ul class="ls-pagination">
    <p id="textPaginas">Paginas >>></p>
    <a href="?t=jogo&amp;p=1"><li id="pg1">1</li></a>
    <a href="?t=jogo&amp;p=2"><li id="pg2">2</li></a>
    <a href="?t=jogo&amp;p=3"><li id="pg3">3</li></a>
    <a href="?t=jogo&amp;p=4"><li id="pg4">4</li></a>
    <a href="?t=jogo&amp;p=5"><li id="pg5">5</li></a>
    <a href="?t=jogo&amp;p=6"><li id="pg6">6</li></a>
    <a href="?t=jogo&amp;p=7"><li id="pg7">7</li></a>
    <a href="?t=jogo&amp;p=8"><li id="pg8">8</li></a>
    <a href="?t=jogo&amp;p=9"><li id="pg9">9</li></a>
    
          
    </ul>
    `
   
}
// Tipo: Jogos - Pagina: 3
else if(TipoURL == "jogo" & PaginaURL == 3){
   
    for(let i=60; i<90; i++){
        let RemoverEspacos = jogosPC[i].Nome.replace(/\s/g, '+');
        acriarLI.innerHTML+=`
        <a href="Download.html?id=`+jogosPC[i].id+`&amp;s=`+RemoverEspacos+`">
            <li>
                <img src="`+jogosPC[i].Capa+`" alt="`+jogosPC[i].Nome+`" class="gallery-items" rel="nofollow">
                <h2>`+jogosPC[i].Nome+`</h2>
            </li>
        </a>`;
    }

    PassarPagina.innerHTML =`

    <ul class="ls-pagination">
    <p id="textPaginas">Paginas >>></p>
          <a href="?t=jogo&amp;p=1"><li id="pg1">1</li></a>
          <a href="?t=jogo&amp;p=2"><li id="pg2">2</li></a>
          <a href="?t=jogo&amp;p=3"><li id="pg3">3</li></a>
          <a href="?t=jogo&amp;p=4"><li id="pg4">4</li></a>
          <a href="?t=jogo&amp;p=5"><li id="pg5">5</li></a>
          <a href="?t=jogo&amp;p=6"><li id="pg6">6</li></a>
          <a href="?t=jogo&amp;p=7"><li id="pg7">7</li></a>
          <a href="?t=jogo&amp;p=8"><li id="pg8">8</li></a>
          <a href="?t=jogo&amp;p=9"><li id="pg9">9</li></a>
          
          
    </ul>
    `
   
}
// Tipo: Jogos - Pagina: 4
else if(TipoURL == "jogo" & PaginaURL == 4){
   
    for(let i=90; i<120; i++){
        let RemoverEspacos = jogosPC[i].Nome.replace(/\s/g, '+');
        acriarLI.innerHTML+=`
        <a href="Download.html?id=`+jogosPC[i].id+`&amp;s=`+RemoverEspacos+`">
            <li>
                <img src="`+jogosPC[i].Capa+`" alt="`+jogosPC[i].Nome+`" class="gallery-items" rel="nofollow">
                <h2>`+jogosPC[i].Nome+`</h2>
            </li>
        </a>`;
    }

    PassarPagina.innerHTML =`

    <ul class="ls-pagination">
    <p id="textPaginas">Paginas >>></p>
    <a href="?t=jogo&amp;p=1"><li id="pg1">1</li></a>
    <a href="?t=jogo&amp;p=2"><li id="pg2">2</li></a>
    <a href="?t=jogo&amp;p=3"><li id="pg3">3</li></a>
    <a href="?t=jogo&amp;p=4"><li id="pg4">4</li></a>
    <a href="?t=jogo&amp;p=5"><li id="pg5">5</li></a>
    <a href="?t=jogo&amp;p=6"><li id="pg6">6</li></a>
    <a href="?t=jogo&amp;p=7"><li id="pg7">7</li></a>
    <a href="?t=jogo&amp;p=8"><li id="pg8">8</li></a>
    <a href="?t=jogo&amp;p=9"><li id="pg9">9</li></a>
    
          
    </ul>
    `
   
}
// Tipo: Jogos - Pagina: 5
else if(TipoURL == "jogo" & PaginaURL == 5){
   
    for(let i=120; i<150; i++){
        let RemoverEspacos = jogosPC[i].Nome.replace(/\s/g, '+');
        acriarLI.innerHTML+=`
        <a href="Download.html?id=`+jogosPC[i].id+`&amp;s=`+RemoverEspacos+`">
            <li>
                <img src="`+jogosPC[i].Capa+`" alt="`+jogosPC[i].Nome+`" class="gallery-items" rel="nofollow">
                <h2>`+jogosPC[i].Nome+`</h2>
            </li>
        </a>`;
    }

    PassarPagina.innerHTML =`

    <ul class="ls-pagination">
    <p id="textPaginas">Paginas >>></p>
          <a href="?t=jogo&amp;p=1"><li id="pg1">1</li></a>
          <a href="?t=jogo&amp;p=2"><li id="pg2">2</li></a>
          <a href="?t=jogo&amp;p=3"><li id="pg3">3</li></a>
          <a href="?t=jogo&amp;p=4"><li id="pg4">4</li></a>
          <a href="?t=jogo&amp;p=5"><li id="pg5">5</li></a>
          <a href="?t=jogo&amp;p=6"><li id="pg6">6</li></a>
          <a href="?t=jogo&amp;p=7"><li id="pg7">7</li></a>
          <a href="?t=jogo&amp;p=8"><li id="pg8">8</li></a>
          <a href="?t=jogo&amp;p=9"><li id="pg9">9</li></a>
          
          
    </ul>
    `
   
}
// Tipo: Jogos - Pagina: 6
else if(TipoURL == "jogo" & PaginaURL == 6){
   
    for(let i=150; i<180; i++){
        let RemoverEspacos = jogosPC[i].Nome.replace(/\s/g, '+');
        acriarLI.innerHTML+=`
        <a href="Download.html?id=`+jogosPC[i].id+`&amp;s=`+RemoverEspacos+`">
            <li>
                <img src="`+jogosPC[i].Capa+`" alt="`+jogosPC[i].Nome+`" class="gallery-items" rel="nofollow">
                <h2>`+jogosPC[i].Nome+`</h2>
            </li>
        </a>`;
    }

    PassarPagina.innerHTML =`

    <ul class="ls-pagination">
    <p id="textPaginas">Paginas >>></p>
          <a href="?t=jogo&amp;p=1"><li id="pg1">1</li></a>
          <a href="?t=jogo&amp;p=2"><li id="pg2">2</li></a>
          <a href="?t=jogo&amp;p=3"><li id="pg3">3</li></a>
          <a href="?t=jogo&amp;p=4"><li id="pg4">4</li></a>
          <a href="?t=jogo&amp;p=5"><li id="pg5">5</li></a>
          <a href="?t=jogo&amp;p=6"><li id="pg6">6</li></a>
          <a href="?t=jogo&amp;p=7"><li id="pg7">7</li></a>
          <a href="?t=jogo&amp;p=8"><li id="pg8">8</li></a>
          <a href="?t=jogo&amp;p=9"><li id="pg9">9</li></a>
          
          
    </ul>
    `
   
}
// Tipo: Jogos - Pagina: 7
else if(TipoURL == "jogo" & PaginaURL == 7){
   
    for(let i=180; i<210; i++){
        let RemoverEspacos = jogosPC[i].Nome.replace(/\s/g, '+');
        acriarLI.innerHTML+=`
        <a href="Download.html?id=`+jogosPC[i].id+`&amp;s=`+RemoverEspacos+`">
            <li>
                <img src="`+jogosPC[i].Capa+`" alt="`+jogosPC[i].Nome+`" class="gallery-items" rel="nofollow">
                <h2>`+jogosPC[i].Nome+`</h2>
            </li>
        </a>`;
    }

    PassarPagina.innerHTML =`

    <ul class="ls-pagination">
    <p id="textPaginas">Paginas >>></p>
          <a href="?t=jogo&amp;p=1"><li id="pg1">1</li></a>
          <a href="?t=jogo&amp;p=2"><li id="pg2">2</li></a>
          <a href="?t=jogo&amp;p=3"><li id="pg3">3</li></a>
          <a href="?t=jogo&amp;p=4"><li id="pg4">4</li></a>
          <a href="?t=jogo&amp;p=5"><li id="pg5">5</li></a>
          <a href="?t=jogo&amp;p=6"><li id="pg6">6</li></a>
          <a href="?t=jogo&amp;p=7"><li id="pg7">7</li></a>
          <a href="?t=jogo&amp;p=8"><li id="pg8">8</li></a>
          <a href="?t=jogo&amp;p=9"><li id="pg9">9</li></a>
          
    </ul>
    `
   
}
// Tipo: Jogos - Pagina: 8
else if(TipoURL == "jogo" & PaginaURL == 8){
   
    for(let i=240; i<270; i++){
        let RemoverEspacos = jogosPC[i].Nome.replace(/\s/g, '+');
        acriarLI.innerHTML+=`
        <a href="Download.html?id=`+jogosPC[i].id+`&amp;s=`+RemoverEspacos+`">
            <li>
                <img src="`+jogosPC[i].Capa+`" alt="`+jogosPC[i].Nome+`" class="gallery-items" rel="nofollow">
                <h2>`+jogosPC[i].Nome+`</h2>
            </li>
        </a>`;
    }

    PassarPagina.innerHTML =`

    <ul class="ls-pagination">
    <p id="textPaginas">Paginas >>></p>
    <a href="?t=jogo&amp;p=1"><li id="pg1">1</li></a>
    <a href="?t=jogo&amp;p=2"><li id="pg2">2</li></a>
    <a href="?t=jogo&amp;p=3"><li id="pg3">3</li></a>
    <a href="?t=jogo&amp;p=4"><li id="pg4">4</li></a>
    <a href="?t=jogo&amp;p=5"><li id="pg5">5</li></a>
    <a href="?t=jogo&amp;p=6"><li id="pg6">6</li></a>
    <a href="?t=jogo&amp;p=7"><li id="pg7">7</li></a>
    <a href="?t=jogo&amp;p=8"><li id="pg8">8</li></a>
    <a href="?t=jogo&amp;p=9"><li id="pg9">9</li></a>
    
          
    </ul>
    `
   
}
// Tipo: Jogos - Pagina: 9
else if(TipoURL == "jogo" & PaginaURL == 9){
   
    for(let i=270; i<300; i++){
        let RemoverEspacos = jogosPC[i].Nome.replace(/\s/g, '+');
        acriarLI.innerHTML+=`
        <a href="Download.html?id=`+jogosPC[i].id+`&amp;s=`+RemoverEspacos+`">
            <li>
                <img src="`+jogosPC[i].Capa+`" alt="`+jogosPC[i].Nome+`" class="gallery-items" rel="nofollow">
                <h2>`+jogosPC[i].Nome+`</h2>
            </li>
        </a>`;
    }

    PassarPagina.innerHTML =`

    <ul class="ls-pagination">
    <p id="textPaginas">Paginas >>></p>
    <a href="?t=jogo&amp;p=1"><li id="pg1">1</li></a>
    <a href="?t=jogo&amp;p=2"><li id="pg2">2</li></a>
    <a href="?t=jogo&amp;p=3"><li id="pg3">3</li></a>
    <a href="?t=jogo&amp;p=4"><li id="pg4">4</li></a>
    <a href="?t=jogo&amp;p=5"><li id="pg5">5</li></a>
    <a href="?t=jogo&amp;p=6"><li id="pg6">6</li></a>
    <a href="?t=jogo&amp;p=7"><li id="pg7">7</li></a>
    <a href="?t=jogo&amp;p=8"><li id="pg8">8</li></a>
    <a href="?t=jogo&amp;p=9"><li id="pg9">9</li></a>
    
          
    </ul>
    `
   
}



// Tipo: Programas - Pagina: 1
else if(TipoURL == "programa" & PaginaURL == 1){
    for(let i=0; i<5; i++){ 

        let RemoverEspacos = Programas[i].Nome.replace(/\s/g, '+');
        acriarLI.innerHTML+=`
        <a href="Download.html?id=`+Programas[i].id+`&amp;s=`+RemoverEspacos+`">
            <li>
                <img src="`+Programas[i].Capa+`" alt="`+Programas[i].Nome+`" class="gallery-items" rel="nofollow">
                <h2>`+Programas[i].Nome+`</h2>
            </li>
        </a>`;
    }

    PassarPagina.innerHTML =`

    <ul class="ls-pagination">
    <p id="textPaginas">Paginas >>></p>
         
    <a href="?t=programa&amp;p=1"><li id="pg1">1</li></a>
               
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
else if(PaginaURL == 3){
   
    let itempagina = document.getElementById("pg3")
    itempagina.style.background = "#263241"
    itempagina.style.color = "white"
}
else if(PaginaURL == 4){
   
    let itempagina = document.getElementById("pg4")
    itempagina.style.background = "#263241"
    itempagina.style.color = "white"
}
else if(PaginaURL == 5){
   
    let itempagina = document.getElementById("pg5")
    itempagina.style.background = "#263241"
    itempagina.style.color = "white"
}
else if(PaginaURL == 6){
   
    let itempagina = document.getElementById("pg6")
    itempagina.style.background = "#263241"
    itempagina.style.color = "white"
}
else if(PaginaURL == 7){
   
    let itempagina = document.getElementById("pg7")
    itempagina.style.background = "#263241"
    itempagina.style.color = "white"
}
else if(PaginaURL == 8){
   
    let itempagina = document.getElementById("pg8")
    itempagina.style.background = "#263241"
    itempagina.style.color = "white"
}
else if(PaginaURL == 9){
   
    let itempagina = document.getElementById("pg9")
    itempagina.style.background = "#263241"
    itempagina.style.color = "white"
}
else if(PaginaURL == 10){
   
    let itempagina = document.getElementById("pg10")
    itempagina.style.background = "#263241"
    itempagina.style.color = "white"
}

function goBack() {
    window.history.back()
}


//Ocultar o voltar na pagina inicial
if(PaginaURL == null){
    let voltar = document.getElementById("inicio").style.display="none"
}
