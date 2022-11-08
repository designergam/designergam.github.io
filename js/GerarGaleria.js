// BD de Computador////////////////////////////////////
const Url = new URLSearchParams(window.location.search);
const TipoURL = Url.get('t');
const PaginaURL = Url.get('p');


let acriarLI = document.getElementById('ul')
acriarLI.innerHTML = "";


let PassarPagina = document.querySelector(".ls-pagination-filter")

const jogosPC = BD.filter(item => item.Tipo == "jogo")
const Programas = BD.filter(item2 => item2.Tipo == "programa")

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
          
    </ul>
    `
}
// Tipo: Jogos - Pagina: 2
else if(TipoURL == "jogo" & PaginaURL == 2){
   
    for(let i=18; i<24; i++){

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
    console.log("k")

    let itempagina = document.getElementById("pg1")
    itempagina.style.background = "#263241"
    itempagina.style.color = "white"
}
else if(PaginaURL == 2){
    console.log("k")

    let itempagina = document.getElementById("pg2")
    itempagina.style.background = "#263241"
    itempagina.style.color = "white"
}










function goBack() {
    window.history.back()
}



