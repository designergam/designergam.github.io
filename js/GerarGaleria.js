const pagina = new URLSearchParams(window.location.search);
const paginaAtual = pagina.get('pagina');
console.log(paginaAtual)


// criar galeria de jogos
if(paginaAtual == null){
    var acriarLI = document.getElementById('ul')
    acriarLI.innerHTML = "";
    for(let i=0; i<30; i++){
        acriarLI.innerHTML+=`
        <li>
            <a href="Download.html?escolhido=`+pc[i].id+`&tipo=pc">
            <img src="`+pc[i].src+`" alt="`+pc[i].id+pc[i].tit+`" class="gallery-items">
            </a>
            <h2>`+pc[i].tit+`</h2>
        </li>`;
    }
}
else if(paginaAtual == 2){
    var acriarLI = document.getElementById('ul')
    acriarLI.innerHTML = "";
    for(let i=31; i<61; i++){
        acriarLI.innerHTML+=`
        <li>
            <a href="Download.html?escolhido=`+pc[i].id+`&tipo=pc">
            <img src="`+pc[i].src+`" alt="`+pc[i].id+pc[i].tit+`" class="gallery-items">
            </a>
            <h2>`+pc[i].tit+`</h2>
        </li>`;
    }
}

else if(paginaAtual == 3){
    var acriarLI = document.getElementById('ul')
    acriarLI.innerHTML = "";
    for(let i=62; i<92; i++){
        acriarLI.innerHTML+=`
        <li>
            <a href="Download.html?escolhido=`+pc[i].id+`&tipo=pc">
            <img src="`+pc[i].src+`" alt="`+pc[i].id+pc[i].tit+`" class="gallery-items">
            </a>
            <h2>`+pc[i].tit+`</h2>
        </li>`;
    }
}

else if(paginaAtual == 4){
    var acriarLI = document.getElementById('ul')
    acriarLI.innerHTML = "";
    for(let i=93; i<123; i++){
        acriarLI.innerHTML+=`
        <li>
            <a href="Download.html?escolhido=`+pc[i].id+`&tipo=pc">
            <img src="`+pc[i].src+`" alt="`+pc[i].id+pc[i].tit+`" class="gallery-items">
            </a>
            <h2>`+pc[i].tit+`</h2>
        </li>`;
    }
}

else if(paginaAtual == 5){
    var acriarLI = document.getElementById('ul')
    acriarLI.innerHTML = "";
    for(let i=124; i<154; i++){
        acriarLI.innerHTML+=`
        <li>
            <a href="Download.html?escolhido=`+pc[i].id+`&tipo=pc">
            <img src="`+pc[i].src+`" alt="`+pc[i].id+pc[i].tit+`" class="gallery-items">
            </a>
            <h2>`+pc[i].tit+`</h2>
        </li>`;
    }
}
    