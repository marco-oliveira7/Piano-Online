const pianosKeys = document.querySelectorAll(".piano-keys .keys")
let mapedKeys = []
const volume = document.querySelector(".volume input") 
const keysCheck = document.querySelector(".keys-check input")

let audio = new Audio("./src/tunes/z.mp3")

const playTune = (key) => {
    audio.src = `./src/tunes/${key}.mp3`
    audio.play()

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    
    clickedKey.classList.add("active")
    
    setTimeout(() =>{
        clickedKey.classList.remove("active")
    }, 150)
};


pianosKeys.forEach((key) => {
    key.addEventListener('click', ()=> playTune(key.dataset.key))
    mapedKeys.push(key.dataset.key)
})

document.addEventListener('keydown', (event) => {
    if(mapedKeys.includes(event.key)){
        playTune(event.key)
    }

})

const handleVolume = (event) => {
    audio.volume = event.target.value
    console.log(event.target.value)
}

const hideKeys = () => {
    pianosKeys.forEach((key) => {
        key.classList.toggle("hide")
    })
}

volume.addEventListener("input", handleVolume)

keysCheck.addEventListener("click", hideKeys)

