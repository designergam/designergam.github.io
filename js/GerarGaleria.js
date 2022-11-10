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
                <a href="Download.html?id=`+jogo.id+`&s=`+jogo.Nome+`">
                    <img src="`+jogo.Capa+`" alt="`+jogo.Nome+`" class="gallery-items" rel="nofollow" >
                </a>
                <a href="Download.html?id=`+jogo.id+`" rel="stylesheet">
                    <h2>`+jogo.Nome+`</h2>
                </a>
            </li>`;
        }}
        )

        PassarPagina.style.display = "none"
   
}




// Tipo: Jogos - Pagina: 1
if(TipoURL == null & PaginaURL == null || TipoURL == "jogo" & PaginaURL == 1){
   
    for(let i=0; i<30; i++){

        acriarLI.innerHTML+=`
        <li>
            <a href="Download.html?id=`+jogosPC[i].id+`&s=`+jogosPC[i].Nome+`" rel="stylesheet">
                <img src="`+jogosPC[i].Capa+`" alt="`+jogosPC[i].Nome+`" class="gallery-items" rel="nofollow">
            </a>
            <a href="Download.html?id=`+jogosPC[i].id+`" rel="stylesheet">
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
          <a href="?t=jogo&p=4"><li id="pg4">4</li></a>
          <a href="?t=jogo&p=5"><li id="pg5">5</li></a>
          <a href="?t=jogo&p=6"><li id="pg6">6</li></a>
          <a href="?t=jogo&p=7"><li id="pg7">7</li></a>
          <a href="?t=jogo&p=8"><li id="pg8">8</li></a>
          <a href="?t=jogo&p=9"><li id="pg9">9</li></a>
          
          
    </ul>
    `
}
// Tipo: Jogos - Pagina: 2
else if(TipoURL == "jogo" & PaginaURL == 2){
   
    for(let i=30; i<60; i++){

        acriarLI.innerHTML+=`
        <li>
            <a href="Download.html?id=`+jogosPC[i].id+`&s=`+jogosPC[i].Nome+`" rel="stylesheet">
                <img src="`+jogosPC[i].Capa+`" alt="`+jogosPC[i].Nome+`" class="gallery-items" rel="nofollow">
            </a>
            <a href="Download.html?id=`+jogosPC[i].id+`" rel="stylesheet">
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
    <a href="?t=jogo&p=4"><li id="pg4">4</li></a>
    <a href="?t=jogo&p=5"><li id="pg5">5</li></a>
    <a href="?t=jogo&p=6"><li id="pg6">6</li></a>
    <a href="?t=jogo&p=7"><li id="pg7">7</li></a>
    <a href="?t=jogo&p=8"><li id="pg8">8</li></a>
    <a href="?t=jogo&p=9"><li id="pg9">9</li></a>
    
          
    </ul>
    `
   
}
// Tipo: Jogos - Pagina: 3
else if(TipoURL == "jogo" & PaginaURL == 3){
   
    for(let i=60; i<90; i++){

        acriarLI.innerHTML+=`
        <li>
            <a href="Download.html?id=`+jogosPC[i].id+`&s=`+jogosPC[i].Nome+`" rel="stylesheet">
                <img src="`+jogosPC[i].Capa+`" alt="`+jogosPC[i].Nome+`" class="gallery-items" rel="nofollow">
            </a>
            <a href="Download.html?id=`+jogosPC[i].id+`" rel="stylesheet">
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
          <a href="?t=jogo&p=4"><li id="pg4">4</li></a>
          <a href="?t=jogo&p=5"><li id="pg5">5</li></a>
          <a href="?t=jogo&p=6"><li id="pg6">6</li></a>
          <a href="?t=jogo&p=7"><li id="pg7">7</li></a>
          <a href="?t=jogo&p=8"><li id="pg8">8</li></a>
          <a href="?t=jogo&p=9"><li id="pg9">9</li></a>
          
          
    </ul>
    `
   
}
// Tipo: Jogos - Pagina: 4
else if(TipoURL == "jogo" & PaginaURL == 4){
   
    for(let i=90; i<120; i++){

        acriarLI.innerHTML+=`
        <li>
            <a href="Download.html?id=`+jogosPC[i].id+`&s=`+jogosPC[i].Nome+`" rel="stylesheet" >
                <img src="`+jogosPC[i].Capa+`" alt="`+jogosPC[i].Nome+`" class="gallery-items" rel="nofollow">
            </a>
            <a href="Download.html?id=`+jogosPC[i].id+`" rel="stylesheet">
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
    <a href="?t=jogo&p=4"><li id="pg4">4</li></a>
    <a href="?t=jogo&p=5"><li id="pg5">5</li></a>
    <a href="?t=jogo&p=6"><li id="pg6">6</li></a>
    <a href="?t=jogo&p=7"><li id="pg7">7</li></a>
    <a href="?t=jogo&p=8"><li id="pg8">8</li></a>
    <a href="?t=jogo&p=9"><li id="pg9">9</li></a>
    
          
    </ul>
    `
   
}
// Tipo: Jogos - Pagina: 5
else if(TipoURL == "jogo" & PaginaURL == 5){
   
    for(let i=120; i<150; i++){

        acriarLI.innerHTML+=`
        <li>
            <a href="Download.html?id=`+jogosPC[i].id+`&s=`+jogosPC[i].Nome+`" rel="stylesheet" >
                <img src="`+jogosPC[i].Capa+`" alt="`+jogosPC[i].Nome+`" class="gallery-items" rel="nofollow">
            </a>
            <a href="Download.html?id=`+jogosPC[i].id+`" rel="stylesheet">
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
          <a href="?t=jogo&p=4"><li id="pg4">4</li></a>
          <a href="?t=jogo&p=5"><li id="pg5">5</li></a>
          <a href="?t=jogo&p=6"><li id="pg6">6</li></a>
          <a href="?t=jogo&p=7"><li id="pg7">7</li></a>
          <a href="?t=jogo&p=8"><li id="pg8">8</li></a>
          <a href="?t=jogo&p=9"><li id="pg9">9</li></a>
          
          
    </ul>
    `
   
}
// Tipo: Jogos - Pagina: 6
else if(TipoURL == "jogo" & PaginaURL == 6){
   
    for(let i=150; i<180; i++){

        acriarLI.innerHTML+=`
        <li>
            <a href="Download.html?id=`+jogosPC[i].id+`&s=`+jogosPC[i].Nome+`" rel="stylesheet" >
                <img src="`+jogosPC[i].Capa+`" alt="`+jogosPC[i].Nome+`" class="gallery-items" rel="nofollow">
            </a>
            <a href="Download.html?id=`+jogosPC[i].id+`" rel="stylesheet">
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
          <a href="?t=jogo&p=4"><li id="pg4">4</li></a>
          <a href="?t=jogo&p=5"><li id="pg5">5</li></a>
          <a href="?t=jogo&p=6"><li id="pg6">6</li></a>
          <a href="?t=jogo&p=7"><li id="pg7">7</li></a>
          <a href="?t=jogo&p=8"><li id="pg8">8</li></a>
          <a href="?t=jogo&p=9"><li id="pg9">9</li></a>
          
          
    </ul>
    `
   
}
// Tipo: Jogos - Pagina: 7
else if(TipoURL == "jogo" & PaginaURL == 7){
   
    for(let i=180; i<210; i++){

        acriarLI.innerHTML+=`
        <li>
            <a href="Download.html?id=`+jogosPC[i].id+`&s=`+jogosPC[i].Nome+`" rel="stylesheet" >
                <img src="`+jogosPC[i].Capa+`" alt="`+jogosPC[i].Nome+`" class="gallery-items" rel="nofollow">
            </a>
            <a href="Download.html?id=`+jogosPC[i].id+`" rel="stylesheet">
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
          <a href="?t=jogo&p=4"><li id="pg4">4</li></a>
          <a href="?t=jogo&p=5"><li id="pg5">5</li></a>
          <a href="?t=jogo&p=6"><li id="pg6">6</li></a>
          <a href="?t=jogo&p=7"><li id="pg7">7</li></a>
          <a href="?t=jogo&p=8"><li id="pg8">8</li></a>
          <a href="?t=jogo&p=9"><li id="pg9">9</li></a>
          
    </ul>
    `
   
}
// Tipo: Jogos - Pagina: 8
else if(TipoURL == "jogo" & PaginaURL == 8){
   
    for(let i=240; i<270; i++){

        acriarLI.innerHTML+=`
        <li>
            <a href="Download.html?id=`+jogosPC[i].id+`&s=`+jogosPC[i].Nome+`" rel="stylesheet" >
                <img src="`+jogosPC[i].Capa+`" alt="`+jogosPC[i].Nome+`" class="gallery-items" rel="nofollow">
            </a>
            <a href="Download.html?id=`+jogosPC[i].id+`" rel="stylesheet">
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
    <a href="?t=jogo&p=4"><li id="pg4">4</li></a>
    <a href="?t=jogo&p=5"><li id="pg5">5</li></a>
    <a href="?t=jogo&p=6"><li id="pg6">6</li></a>
    <a href="?t=jogo&p=7"><li id="pg7">7</li></a>
    <a href="?t=jogo&p=8"><li id="pg8">8</li></a>
    <a href="?t=jogo&p=9"><li id="pg9">9</li></a>
    
          
    </ul>
    `
   
}
// Tipo: Jogos - Pagina: 9
else if(TipoURL == "jogo" & PaginaURL == 9){
   
    for(let i=270; i<300; i++){

        acriarLI.innerHTML+=`
        <li>
            <a href="Download.html?id=`+jogosPC[i].id+`&s=`+jogosPC[i].Nome+`" rel="stylesheet" >
                <img src="`+jogosPC[i].Capa+`" alt="`+jogosPC[i].Nome+`" class="gallery-items" rel="nofollow">
            </a>
            <a href="Download.html?id=`+jogosPC[i].id+`" rel="stylesheet">
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
    <a href="?t=jogo&p=4"><li id="pg4">4</li></a>
    <a href="?t=jogo&p=5"><li id="pg5">5</li></a>
    <a href="?t=jogo&p=6"><li id="pg6">6</li></a>
    <a href="?t=jogo&p=7"><li id="pg7">7</li></a>
    <a href="?t=jogo&p=8"><li id="pg8">8</li></a>
    <a href="?t=jogo&p=9"><li id="pg9">9</li></a>
    
          
    </ul>
    `
   
}



// Tipo: Programas - Pagina: 1
else if(TipoURL == "programa" & PaginaURL == 1){
    for(let i=0; i<1; i++){ 

        acriarLI.innerHTML+=`
        <li>
            <a href="Download.html?id=`+Programas[i].id+`&s=`+Programas[i].Nome+`" rel="stylesheet">
                <img src="`+Programas[i].Capa+`" alt="`+Programas[i].Nome+`" class="gallery-items" rel="nofollow">
            </a>
            <a href="Download.html?id=`+Programas[i].id+`" rel="stylesheet">
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


