// Jogos de Computador////////////////////////////////////
const pagina = new URLSearchParams(window.location.search);
const paginaAtual = pagina.get('pagina');



// criar galeria de jogos
if(paginaAtual == null){
    var acriarLI = document.getElementById('ul')
    acriarLI.innerHTML = "";
    for(let i=0; i<30; i++){

        if(Jogos[i].Formato == "Iso"){
            acriarLI.innerHTML+=`
            <li>
                <a href="Download.html?id=`+Jogos[i].id+`">
                <img src="`+Jogos[i].Capa+`" alt="`+Jogos[i].Nome+Jogos[i].Descricao+`" class="gallery-items">
                </a>
                <h2>`+Jogos[i].Nome+`</h2>
            </li>`;
        }
    }
}

// Programas ////////////////////////////////////////////////////////////////////
else if(paginaAtual == "programas"){

    var acriarLI = document.getElementById('ul')
    acriarLI.innerHTML = "";
    for(let i=0; i<30; i++){

        if(Jogos[i].Formato == "programa"){
            acriarLI.innerHTML+=`
            <li>
                <a href="Download.html?id=`+Jogos[i].id+`">
                <img src="`+Jogos[i].Capa+`" alt="`+Jogos[i].Nome+Jogos[i].Descricao+`" class="gallery-items">
                </a>
                <h2>`+Jogos[i].Nome+`</h2>
            </li>`;
        }
    }
}
        
    



