

const fileInput = document.getElementById("fileInput");
const playBtn = document.getElementById("playBtn");
let audio = null;


fileInput.addEventListener("change", (event) => {
    let objUrl = URL.createObjectURL(event.target.files[0])
    audio = new Audio(objUrl)
})


playBtn.addEventListener("click", () => {
    if (audio) {
        if (audio.paused) {
            audio.play();
            playBtn.textContent = "Pause"
        } else {
            audio.pause()
            playBtn.textContent = "Play"
        }
    }
})


volume.addEventListener("change", function (e)  {
    audio.volume = e.currentTarget.value / 100
})