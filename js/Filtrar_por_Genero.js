let Genero =""

if(PaginaURL == "AÇÃO"){
     Genero = BD.filter(item => item.Genero1 == "AÇÃO" || item.Genero2 == "AÇÃO" || item.Genero3 == "AÇÃO" || item.Genero4 == "AÇÃO" )
}
else if(PaginaURL == "RPG"){
     Genero = BD.filter(item => item.Genero1 == "RPG" || item.Genero2 == "RPG" || item.Genero3 == "RPG" || item.Genero4 == "RPG" )
}
else if(PaginaURL == "INDIE"){
    Genero = BD.filter(item => item.Genero1 == "INDIE" || item.Genero2 == "INDIE" || item.Genero3 == "INDIE" || item.Genero4 == "INDIE" )
}
else if(PaginaURL == "AVENTURA"){
    Genero = BD.filter(item =>  item.Genero1 == "AVENTURA" || item.Genero2 == "AVENTURA" || item.Genero3 == "AVENTURA" || item.Genero4 == "AVENTURA" )
}
else if(PaginaURL == "FPS"){
    Genero = BD.filter(item =>  item.Genero1 == "FPS" || item.Genero2 == "FPS" || item.Genero3 == "FPS" || item.Genero4 == "FPS" )
}
else if(PaginaURL == "MUNDO_ABERTO"){
    Genero = BD.filter(item =>  item.Genero1 == "MUNDO_ABERTO" || item.Genero2 == "MUNDO_ABERTO" || item.Genero3 == "MUNDO_ABERTO" || item.Genero4 == "MUNDO_ABERTO" )
}
else if(PaginaURL == "LUTA"){
    Genero = BD.filter(item =>  item.Genero1 == "LUTA" || item.Genero2 == "LUTA" || item.Genero3 == "LUTA" || item.Genero4 == "LUTA" )
}
else if(PaginaURL == "ANIME"){
    Genero = BD.filter(item =>  item.Genero1 == "ANIME" || item.Genero2 == "ANIME" || item.Genero3 == "ANIME" || item.Genero4 == "ANIME" )
}
else if(PaginaURL == "FANTASIA"){
    Genero = BD.filter(item =>  item.Genero1 == "FANTASIA" || item.Genero2 == "FANTASIA" || item.Genero3 == "FANTASIA" || item.Genero4 == "FANTASIA" )
}
else if(PaginaURL == "ARCADE"){
    Genero = BD.filter(item =>  item.Genero1 == "ARCADE" || item.Genero2 == "ARCADE" || item.Genero3 == "ARCADE" || item.Genero4 == "ARCADE" )
}
else if(PaginaURL == "GUERRA"){
    Genero = BD.filter(item =>  item.Genero1 == "GUERRA" || item.Genero2 == "GUERRA" || item.Genero3 == "GUERRA" || item.Genero4 == "GUERRA" )
}
else if(PaginaURL == "ESTRATÉGIA"){
    Genero = BD.filter(item =>  item.Genero1 == "ESTRATÉGIA" || item.Genero2 == "ESTRATÉGIA" || item.Genero3 == "ESTRATÉGIA" || item.Genero4 == "ESTRATÉGIA" )
}
else if(PaginaURL == "SIMULAÇÃO"){
    Genero = BD.filter(item =>  item.Genero1 == "SIMULAÇÃO" || item.Genero2 == "SIMULAÇÃO" || item.Genero3 == "SIMULAÇÃO" || item.Genero4 == "SIMULAÇÃO" )
}
else if(PaginaURL == "EXPLORAÇÃO"){
    Genero = BD.filter(item =>  item.Genero1 == "EXPLORAÇÃO" || item.Genero2 == "EXPLORAÇÃO" || item.Genero3 == "EXPLORAÇÃO" || item.Genero4 == "EXPLORAÇÃO" )
}
else if(PaginaURL == "CORRIDA"){
    Genero = BD.filter(item =>  item.Genero1 == "CORRIDA" || item.Genero2 == "CORRIDA" || item.Genero3 == "CORRIDA" || item.Genero4 == "CORRIDA" )
}
else if(PaginaURL == "ATMOSFÉRICO"){
    Genero = BD.filter(item =>  item.Genero1 == "ATMOSFÉRICO" || item.Genero2 == "ATMOSFÉRICO" || item.Genero3 == "ATMOSFÉRICO" || item.Genero4 == "ATMOSFÉRICO" )
}
else if(PaginaURL == "HISTÓRIA"){
    Genero = BD.filter(item =>  item.Genero1 == "HISTÓRIA" || item.Genero2 == "HISTÓRIA" || item.Genero3 == "HISTÓRIA" || item.Genero4 == "HISTÓRIA" )
}
else if(PaginaURL == "CRIME"){
    Genero = BD.filter(item =>  item.Genero1 == "CRIME" || item.Genero2 == "CRIME" || item.Genero3 == "CRIME" || item.Genero4 == "CRIME" )
}
else if(PaginaURL == "MEMES"){
    Genero = BD.filter(item =>  item.Genero1 == "MEMES" || item.Genero2 == "MEMES" || item.Genero3 == "MEMES" || item.Genero4 == "MEMES" )
}
else if(PaginaURL == "ESPACIAL"){
    Genero = BD.filter(item =>  item.Genero1 == "ESPACIAL" || item.Genero2 == "ESPACIAL" || item.Genero3 == "ESPACIAL" || item.Genero4 == "ESPACIAL" )
}
else if(PaginaURL == "ESPORTES"){
    Genero = BD.filter(item =>  item.Genero1 == "ESPORTES" || item.Genero2 == "ESPORTES" || item.Genero3 == "ESPORTES" || item.Genero4 == "ESPORTES" )
}
else if(PaginaURL == "PSP"){
    Genero = BD.filter(item =>  item.Plataforma == "psp"  )
}
else if(PaginaURL == "PS2"){
    Genero = BD.filter(item =>  item.Plataforma == "ps2"  )
}
else if(PaginaURL == "PS3"){
    Genero = BD.filter(item =>  item.Plataforma == "ps3"  )
}
else if(PaginaURL == "XBOX360"){
    Genero = BD.filter(item =>  item.Plataforma == "xbox360"  )
}

    for (let i = 0; i < 6; i++) {
        let RemoverEspacos = Genero[i].Nome.replace(/\s/g, '-').toUpperCase();
        acriarLI.innerHTML += `
            <li id="containerjg">
                <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+Genero[i].id+`&amp;type=`+Genero[i].Tipo+`">
                    <img src="`+Genero[i].Capa +`" alt="`+Genero[i].Nome+`" class="gallery-items" rel="nofollow">
                </a>
                <a href="Download.html?search=`+RemoverEspacos+`&amp;id=`+Genero[i].id+`&amp;type=`+Genero[i].Tipo+`">
                    <h2>`+Genero[i].Nome+`</h2>
                </a>
                <img src="img/favorito_Off.png" alt="favorito" id="${Genero[i].id}" class="favor" onclick="t('${Genero[i].id}' )"
            </li>`;

            if(ArryFavoritos.find(element => element == `${Genero[i].id}`)){
                document.getElementById(`${Genero[i].id}`).src="img/favorito_On.png"
                document.getElementById(`${Genero[i].id}`).setAttribute("onclick",`f(${Genero[i].id});`);
            }
    }   





