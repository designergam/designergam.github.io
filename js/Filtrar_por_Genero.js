//AÇÃO"
const AÇÃO= BD.filter(item => item.Genero1 == "AÇÃO" || item.Genero2 == "AÇÃO" || item.Genero3 == "AÇÃO" || item.Genero4 == "AÇÃO" )
if (TipoURL == "jogo" & PaginaURL == "AÇÃO") {
    for (let i = 0; i < 200; i++) {
        let RemoverEspacos = AÇÃO[i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+AÇÃO[i].id+`&amp;type=`+AÇÃO[i].Tipo+`">
            <li>
                <img src="`+ AÇÃO[i].Capa + `" alt="` + AÇÃO[i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ AÇÃO[i].Nome + `</h2>
            </li>
        </a>`;
    }
}

//RPG"
const RPG= BD.filter(item => item.Genero1 == "RPG" || item.Genero2 == "RPG" || item.Genero3 == "RPG" || item.Genero4 == "RPG" )
if (TipoURL == "jogo" & PaginaURL == "RPG") {
    for (let i = 0; i < 200; i++) {
        let RemoverEspacos = RPG[i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+RPG[i].id+`&amp;type=`+RPG[i].Tipo+`">
            <li>
                <img src="`+ RPG[i].Capa + `" alt="` + RPG[i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ RPG[i].Nome + `</h2>
            </li>
        </a>`;
    }
}

//INDIE"
const INDIE= BD.filter(item => item.Genero1 == "INDIE" || item.Genero2 == "INDIE" || item.Genero3 == "INDIE" || item.Genero4 == "INDIE" )
if (TipoURL == "jogo" & PaginaURL == "INDIE") {
    for (let i = 0; i < 200; i++) {
        let RemoverEspacos = INDIE[i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+INDIE[i].id+`&amp;type=`+INDIE[i].Tipo+`">
            <li>
                <img src="`+ INDIE[i].Capa + `" alt="` + INDIE[i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ INDIE[i].Nome + `</h2>
            </li>
        </a>`;
    }
}

//AVENTURA"
const AVENTURA= BD.filter(item =>  item.Genero1 == "AVENTURA" || item.Genero2 == "AVENTURA" || item.Genero3 == "AVENTURA" || item.Genero4 == "AVENTURA" )
if (TipoURL == "jogo" & PaginaURL == "AVENTURA") {
    for (let i = 0; i < 200; i++) {
        let RemoverEspacos = AVENTURA[i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+AVENTURA[i].id+`&amp;type=`+AVENTURA[i].Tipo+`">
            <li>
                <img src="`+ AVENTURA[i].Capa + `" alt="` + AVENTURA[i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ AVENTURA[i].Nome + `</h2>
            </li>
        </a>`;
    }
}

//FPS"
const FPS= BD.filter(item =>  item.Genero1 == "FPS" || item.Genero2 == "FPS" || item.Genero3 == "FPS" || item.Genero4 == "FPS" )
if (TipoURL == "jogo" & PaginaURL == "FPS") {
    for (let i = 0; i < 200; i++) {
        let RemoverEspacos = FPS[i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+FPS[i].id+`&amp;type=`+FPS[i].Tipo+`">
            <li>
                <img src="`+ FPS[i].Capa + `" alt="` + FPS[i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ FPS[i].Nome + `</h2>
            </li>
        </a>`;
    }
}

//MUNDO_ABERTO"
const MUNDO_ABERTO= BD.filter(item =>  item.Genero1 == "MUNDO_ABERTO" || item.Genero2 == "FPS" || item.Genero3 == "MUNDO_ABERTO" || item.Genero4 == "MUNDO_ABERTO" )
if (TipoURL == "jogo" & PaginaURL == "MUNDO_ABERTO") {
    for (let i = 0; i < 200; i++) {
        let RemoverEspacos = MUNDO_ABERTO[i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+MUNDO_ABERTO[i].id+`&amp;type=`+MUNDO_ABERTO[i].Tipo+`">
            <li>
                <img src="`+ MUNDO_ABERTO[i].Capa + `" alt="` + MUNDO_ABERTO[i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ MUNDO_ABERTO[i].Nome + `</h2>
            </li>
        </a>`;
    }
}
//LUTA"
const LUTA= BD.filter(item =>  item.Genero1 == "LUTA" || item.Genero2 == "LUTA" || item.Genero3 == "LUTA" || item.Genero4 == "LUTA" )
if (TipoURL == "jogo" & PaginaURL == "LUTA") {
    for (let i = 0; i < 200; i++) {
        let RemoverEspacos = LUTA[i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+LUTA[i].id+`&amp;type=`+LUTA[i].Tipo+`">
            <li>
                <img src="`+ LUTA[i].Capa + `" alt="` + LUTA[i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ LUTA[i].Nome + `</h2>
            </li>
        </a>`;
    }
}
//ANIME"
const ANIME= BD.filter(item =>  item.Genero1 == "ANIME" || item.Genero2 == "ANIME" || item.Genero3 == "ANIME" || item.Genero4 == "ANIME" )
if (TipoURL == "jogo" & PaginaURL == "ANIME") {
    for (let i = 0; i < 200; i++) {
        let RemoverEspacos = ANIME[i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+ANIME[i].id+`&amp;type=`+ANIME[i].Tipo+`">
            <li>
                <img src="`+ ANIME[i].Capa + `" alt="` + ANIME[i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ ANIME[i].Nome + `</h2>
            </li>
        </a>`;
    }
}
//FANTASIA "
const FANTASIA = BD.filter(item =>  item.Genero1 == "FANTASIA" || item.Genero2 == "FANTASIA" || item.Genero3 == "FANTASIA" || item.Genero4 == "FANTASIA" )
if (TipoURL == "jogo" & PaginaURL == "FANTASIA") {
    for (let i = 0; i < 200; i++) {
        let RemoverEspacos = FANTASIA [i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+FANTASIA [i].id+`&amp;type=`+FANTASIA [i].Tipo+`">
            <li>
                <img src="`+ FANTASIA [i].Capa + `" alt="` + FANTASIA [i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ FANTASIA [i].Nome + `</h2>
            </li>
        </a>`;
    }
}
//ARCADE "
const ARCADE = BD.filter(item =>  item.Genero1 == "ARCADE" || item.Genero2 == "ARCADE" || item.Genero3 == "ARCADE" || item.Genero4 == "ARCADE" )
if (TipoURL == "jogo" & PaginaURL == "ARCADE") {
    for (let i = 0; i < 200; i++) {
        let RemoverEspacos = ARCADE [i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+ARCADE [i].id+`&amp;type=`+ARCADE [i].Tipo+`">
            <li>
                <img src="`+ ARCADE [i].Capa + `" alt="` + ARCADE [i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ ARCADE [i].Nome + `</h2>
            </li>
        </a>`;
    }
}
//GUERRA "
const GUERRA = BD.filter(item =>  item.Genero1 == "GUERRA" || item.Genero2 == "GUERRA" || item.Genero3 == "GUERRA" || item.Genero4 == "GUERRA" )
if (TipoURL == "jogo" & PaginaURL == "GUERRA") {
    for (let i = 0; i < 200; i++) {
        let RemoverEspacos = GUERRA [i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+GUERRA [i].id+`&amp;type=`+GUERRA [i].Tipo+`">
            <li>
                <img src="`+ GUERRA [i].Capa + `" alt="` + GUERRA [i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ GUERRA [i].Nome + `</h2>
            </li>
        </a>`;
    }
}
//ESTRATÉGIA "
const ESTRATÉGIA = BD.filter(item =>  item.Genero1 == "ESTRATÉGIA" || item.Genero2 == "ESTRATÉGIA" || item.Genero3 == "ESTRATÉGIA" || item.Genero4 == "ESTRATÉGIA" )
if (TipoURL == "jogo" & PaginaURL == "ESTRATÉGIA") {
    for (let i = 0; i < 200; i++) {
        let RemoverEspacos = ESTRATÉGIA [i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+ESTRATÉGIA [i].id+`&amp;type=`+ESTRATÉGIA [i].Tipo+`">
            <li>
                <img src="`+ ESTRATÉGIA [i].Capa + `" alt="` + ESTRATÉGIA [i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ ESTRATÉGIA [i].Nome + `</h2>
            </li>
        </a>`;
    }
}
//SIMULAÇÃO
const SIMULAÇÃO = BD.filter(item =>  item.Genero1 == "SIMULAÇÃO" || item.Genero2 == "SIMULAÇÃO" || item.Genero3 == "SIMULAÇÃO" || item.Genero4 == "SIMULAÇÃO" )
if (TipoURL == "jogo" & PaginaURL == "SIMULAÇÃO") {
    for (let i = 0; i < 200; i++) {
        let RemoverEspacos = SIMULAÇÃO [i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+SIMULAÇÃO [i].id+`&amp;type=`+SIMULAÇÃO [i].Tipo+`">
            <li>
                <img src="`+ SIMULAÇÃO [i].Capa + `" alt="` + SIMULAÇÃO [i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ SIMULAÇÃO [i].Nome + `</h2>
            </li>
        </a>`;
    }
}
//SIMULAÇÃO
const EXPLORAÇÃO = BD.filter(item =>  item.Genero1 == "EXPLORAÇÃO" || item.Genero2 == "EXPLORAÇÃO" || item.Genero3 == "EXPLORAÇÃO" || item.Genero4 == "EXPLORAÇÃO" )
if (TipoURL == "jogo" & PaginaURL == "ESTRATÉGIA") {
    for (let i = 0; i < 200; i++) {
        let RemoverEspacos = EXPLORAÇÃO [i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+EXPLORAÇÃO [i].id+`&amp;type=`+EXPLORAÇÃO [i].Tipo+`">
            <li>
                <img src="`+ EXPLORAÇÃO [i].Capa + `" alt="` + EXPLORAÇÃO [i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ EXPLORAÇÃO [i].Nome + `</h2>
            </li>
        </a>`;
    }
}
//CORRIDA
const CORRIDA = BD.filter(item =>  item.Genero1 == "CORRIDA" || item.Genero2 == "CORRIDA" || item.Genero3 == "CORRIDA" || item.Genero4 == "CORRIDA" )
if (TipoURL == "jogo" & PaginaURL == "CORRIDA") {
    for (let i = 0; i < 200; i++) {
        let RemoverEspacos = CORRIDA [i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+CORRIDA [i].id+`&amp;type=`+CORRIDA [i].Tipo+`">
            <li>
                <img src="`+ CORRIDA [i].Capa + `" alt="` + CORRIDA [i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ CORRIDA [i].Nome + `</h2>
            </li>
        </a>`;
    }
}
//ATMOSFÉRICO
const ATMOSFÉRICO = BD.filter(item =>  item.Genero1 == "ATMOSFÉRICO" || item.Genero2 == "ATMOSFÉRICO" || item.Genero3 == "ATMOSFÉRICO" || item.Genero4 == "ATMOSFÉRICO" )
if (TipoURL == "jogo" & PaginaURL == "ATMOSFÉRICO") {
    for (let i = 0; i < 200; i++) {
        let RemoverEspacos = ATMOSFÉRICO [i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+ATMOSFÉRICO [i].id+`&amp;type=`+ATMOSFÉRICO [i].Tipo+`">
            <li>
                <img src="`+ ATMOSFÉRICO [i].Capa + `" alt="` + ATMOSFÉRICO [i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ ATMOSFÉRICO [i].Nome + `</h2>
            </li>
        </a>`;
    }
}
//HISTÓRIA
const HISTÓRIA = BD.filter(item =>  item.Genero1 == "HISTÓRIA" || item.Genero2 == "HISTÓRIA" || item.Genero3 == "HISTÓRIA" || item.Genero4 == "HISTÓRIA" )
if (TipoURL == "jogo" & PaginaURL == "HISTÓRIA") {
    for (let i = 0; i < 200; i++) {
        let RemoverEspacos = HISTÓRIA [i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+HISTÓRIA [i].id+`&amp;type=`+HISTÓRIA [i].Tipo+`">
            <li>
                <img src="`+ HISTÓRIA [i].Capa + `" alt="` + HISTÓRIA [i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ HISTÓRIA [i].Nome + `</h2>
            </li>
        </a>`;
    }
}
//CRIME
const CRIME = BD.filter(item =>  item.Genero1 == "CRIME" || item.Genero2 == "CRIME" || item.Genero3 == "CRIME" || item.Genero4 == "CRIME" )
if (TipoURL == "jogo" & PaginaURL == "CRIME") {
    for (let i = 0; i < 200; i++) {
        let RemoverEspacos = CRIME [i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+CRIME [i].id+`&amp;type=`+CRIME [i].Tipo+`">
            <li>
                <img src="`+ CRIME [i].Capa + `" alt="` + CRIME [i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ CRIME [i].Nome + `</h2>
            </li>
        </a>`;
    }
}
//MEMES
const MEMES = BD.filter(item =>  item.Genero1 == "MEMES" || item.Genero2 == "MEMES" || item.Genero3 == "MEMES" || item.Genero4 == "MEMES" )
if (TipoURL == "jogo" & PaginaURL == "MEMES") {
    for (let i = 0; i < 200; i++) {
        let RemoverEspacos = MEMES [i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+MEMES [i].id+`&amp;type=`+MEMES [i].Tipo+`">
            <li>
                <img src="`+ MEMES [i].Capa + `" alt="` + MEMES [i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ MEMES [i].Nome + `</h2>
            </li>
        </a>`;
    }
}
//ESPACIAL
const ESPACIAL = BD.filter(item =>  item.Genero1 == "ESPACIAL" || item.Genero2 == "ESPACIAL" || item.Genero3 == "ESPACIAL" || item.Genero4 == "ESPACIAL" )
if (TipoURL == "jogo" & PaginaURL == "ESPACIAL") {
    for (let i = 0; i < 200; i++) {
        let RemoverEspacos = ESPACIAL [i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+ESPACIAL [i].id+`&amp;type=`+ESPACIAL [i].Tipo+`">
            <li>
                <img src="`+ ESPACIAL [i].Capa + `" alt="` + ESPACIAL [i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ ESPACIAL [i].Nome + `</h2>
            </li>
        </a>`;
    }
}
//ESPORTES
const ESPORTES = BD.filter(item =>  item.Genero1 == "ESPORTES" || item.Genero2 == "ESPORTES" || item.Genero3 == "ESPORTES" || item.Genero4 == "ESPORTES" )
if (TipoURL == "jogo" & PaginaURL == "ESPORTES") {
    for (let i = 0; i < 200; i++) {
        let RemoverEspacos = ESPORTES [i].Nome.replace(/\s/g, '-').toUpperCase();;
        acriarLI.innerHTML += `
        <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+ESPORTES [i].id+`&amp;type=`+ESPORTES [i].Tipo+`">
            <li>
                <img src="`+ ESPORTES [i].Capa + `" alt="` + ESPORTES [i].Nome + `" class="gallery-items" rel="nofollow">
                <h2>`+ ESPORTES [i].Nome + `</h2>
            </li>
        </a>`;
    }
}

