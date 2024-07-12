//document.querySelector('button').addEventListener('click', getFetch)

/**********THE RADIO***************
 *                                *
 *                                *
 *                                *
 *********************************/

let currentAudio = null
let currentAudioIndex = Math.floor(Math.random() * 4) 




let radioStation = [
new Audio("music/Newspaper.mp3"),
new Audio("music/Lovely.mp3"),
new Audio("music/Confuso.mp3"),
new Audio("music/Star Guitar.mp3")

]

function playMusic() {

if (currentAudio) {
  currentAudio.removeEventListener('ended', playNextSong);
  currentAudio.pause()
}

if (currentAudioIndex < radioStation.length) {
  radioStation[currentAudioIndex].play()
} else {
  console.log("end of track list")
}

}

function playNextSong() {
currentAudioIndex++
if(currentAudioIndex < radioStation.length) {
  radioStation[currentAudioIndex].play()
}
else {
  currentAudioIndex = (currentAudioIndex + 1) % radioStation.length;
  playMusic()
}
}

radioStation[currentAudioIndex].addEventListener('ended', playNextSong);

function stopMusic() {
if(radioStation[currentAudioIndex]) {
  radioStation[currentAudioIndex].pause()
}
}


