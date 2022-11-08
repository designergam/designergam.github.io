const ID0 = window.location.href; 
    const ID1 = new URL(ID0);
    let ID = ID1.searchParams.get("id");
        

        let conteudo = [];

         conteudo = BD.filter(function(item){
            return item.id == ID;
        })

       
        let Nome = (conteudo[0].Nome);
        let Capa = (conteudo[0].Capa)
        let Descricao = (conteudo[0].Descricao)
        let Trailer = (conteudo[0].Trailer)
        
        let Imagem= (conteudo[0].Imagem)
        let Gif = (conteudo[0].Gif)

        //Requisitos Minimos
        let cpu_A = (conteudo[0].cpu);
        let gpu_A = (conteudo[0].gpu);
        let ram_A = (conteudo[0].ram);
        let rom_A = (conteudo[0].rom);

        function goBack() {
            window.history.back()
        }

        let src_B =  window.document.getElementById("img_capa") 
                src_B.src = Capa

        let previa_B =  window.document.getElementById("previa") 
        previa_B.innerText = Descricao

        let tit_B =  window.document.getElementById("tit") 
                tit_B.innerText = Nome


        let img_gameplay1_B =  window.document.getElementById("img_gameplay1") 
        img_gameplay1_B.src = Imagem

        let img_gameplay2_B =  window.document.getElementById("img_gameplay2") 
                img_gameplay2_B.src = Gif

        let cpu_B =  window.document.getElementById("cpu") 
            cpu_B.innerText = cpu_A 

        let gpu_B =  window.document.getElementById("gpu") 
                gpu_B.innerText = gpu_A 

        let ram_B =  window.document.getElementById("ram") 
            ram_B.innerText = ram_A 

        let rom_B =  window.document.getElementById("rom") 
                rom_B.innerText = rom_A 

        let trailer_B =  window.document.getElementById("trailer") 
        trailer_B.src = Trailer

        let baixarbtn = document.getElementById("btnDownloadArea")



        BD.map((val)=>{
            if(val.id == ID){
                baixarbtn.innerHTML=`
                <a href="Redirect.html?id=`+val.id+`" id="download">DOWNLOAD</a>`
            }
        })