
function golpe_espada(){
    let som = document.getElementById("audio").src="audios/Golpe com espada.mp3"
    let audio = document.getElementById("audio")
    audio.volume = 0.3;
    audio.play()
}
function vitoria_som(){
    let som = document.getElementById("audio").src="audios/vitoria.wav"
    let audio = document.getElementById("audio")
    audio.volume = 0.3;
    audio.play()
}
function musica_fundo(){
    
    let audio = document.getElementById("audio_fundo")
    audio.volume = 0.1;
    audio.play()
}
musica_fundo()


    
