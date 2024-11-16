const pianosKeys = document.querySelectorAll(".piano-keys .keys")

let audio = new Audio("./src/tunes/z.mp3")

const playTune = (key) => {
    audio.src = `./src/tunes/${key}.mp3`
    audio.play()
};

pianosKeys.forEach((key) => {
    key.addEventListener('click', ()=> playTune(key.dataset.key))
})

document.addEventListener('keydown', (event) => {
    
    playTune(event.key)
})