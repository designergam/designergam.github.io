 
            let container_nome = document.getElementById("container_nome")
            
            
            
            //nomes Aleatorios
            const N1 = nomes[Math.floor(Math.random() * nomes.length)];
            const N2 = nomes[Math.floor(Math.random() * nomes.length)];
            const N3 = nomes[Math.floor(Math.random() * nomes.length)];

            //sobrenomes Aleatorios
            const S1 = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
            const S2 = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
            const S3 = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];


            nomes.map((i)=>{
                
                container_nome.innerHTML =`
                <button class="btn_nome" id="nome_1" value="${N1.nome}" onclick="Nome_1()">${N1.nome}</button>
                <button class="btn_nome" id="nome_2" value="${N2.nome}" onclick="Nome_2()">${N2.nome}</button>
                <button class="btn_nome" id="nome_3" value="${N3.nome}" onclick="Nome_3()">${N3.nome}</button>
                <button class="btn_sobrenome" id="sobrenome_1" value="${S1.sobrenome}" onclick="Sobrenome_1()">${S1.sobrenome}</button>
                <button class="btn_sobrenome" id="sobrenome_2" value="${S2.sobrenome}" onclick="Sobrenome_2()">${S2.sobrenome}</button>
                <button class="btn_sobrenome" id="sobrenome_3" value="${S3.sobrenome}" onclick="Sobrenome_3()">${S3.sobrenome}</button>
                `
                
            })
                
        
            


            if(!localStorage.nome){
                localStorage.nome = "ze_ninguem"
            }
            if(!localStorage.sobrenome){
                localStorage.sobrenome = "solitario"
            }
            //nomes
            let nome_1 = document.getElementById("nome_1")
            let nome_2 = document.getElementById("nome_2")
            let nome_3 = document.getElementById("nome_3")

            //sobrenomes
            let sobrenome_1 = document.getElementById("sobrenome_1")
            let sobrenome_2 = document.getElementById("sobrenome_2")
            let sobrenome_3 = document.getElementById("sobrenome_3")

            function Nome_1(){
                nome_1.style.background = "green"
                nome_1.style.color = "white"
                nome_2.setAttribute('onclick', "");
                nome_3.setAttribute('onclick', "");
                localStorage.nome = nome_1.value
            }
            function Nome_2(){
                nome_2.style.background = "green"
                nome_2.style.color = "white"
                nome_1.setAttribute('onclick', "");
                nome_3.setAttribute('onclick', "");
                localStorage.nome = nome_2.value
            }
            function Nome_3(){
                nome_3.style.background = "green"
                nome_3.style.color = "white"
                nome_2.setAttribute('onclick', "");
                nome_1.setAttribute('onclick', "");
                localStorage.nome = nome_3.value
            }

            function Sobrenome_1(){
                sobrenome_1.style.background = "green"
                sobrenome_1.style.color = "white"
                sobrenome_2.setAttribute('onclick', "");
                sobrenome_3.setAttribute('onclick', "");
                localStorage.sobrenome = sobrenome_1.value
            }
            function Sobrenome_2(){
                sobrenome_2.style.background = "green"
                sobrenome_2.style.color = "white"
                sobrenome_1.setAttribute('onclick', "");
                sobrenome_3.setAttribute('onclick', "");
                localStorage.sobrenome = sobrenome_2.value
            }
            function Sobrenome_3(){
                sobrenome_3.style.background = "green"
                sobrenome_3.style.color = "white"
                sobrenome_2.setAttribute('onclick', "");
                sobrenome_1.setAttribute('onclick', "");
                localStorage.sobrenome = sobrenome_3.value
            }



