// Jogos de Computador////////////////////////////////////
const pagina = new URLSearchParams(window.location.search);
const paginaAtual = pagina.get('pagina');



// criar galeria de jogos
if(paginaAtual == null){
    var acriarLI = document.getElementById('ul')
    acriarLI.innerHTML = "";
    for(let i=0; i<18; i++){

        acriarLI.innerHTML+=`
        
            <a href="Download.html?id=`+Jogos[i].id+`">
                
            </a>

            <a href="Download.html?id=`+Jogos[i].id+`">
                
            </a>
        `;
        
    }
}
else if(paginaAtual == 2){
    var acriarLI = document.getElementById('ul')
    acriarLI.innerHTML = "";
    for(let i=18; i<37; i++){
        
        acriarLI.innerHTML+=`
        
            <a href="Download.html?id=`+Jogos[i].id+`">
                
            </a>

            <a href="Download.html?id=`+Jogos[i].id+`">
                
            </a>
        `;
        
    }
}

// Programas ////////////////////////////////////////////////////////////////////
else if(paginaAtual == "programas"){

    var acriarLI = document.getElementById('ul')
    acriarLI.innerHTML = "";
    for(let i=0; i<30; i++){

        if(Programas[i].Tipo == "programa"){
            acriarLI.innerHTML+=`
            <li>
                <a href="Download.html?id=`+Programas[i].id+`">
                  
                </a>


                <a href="Download.html?id=`+Programas[i].id+`">
                    
                <a>
            </li>`;
        }
    }
}
        
    



