// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  updateImg();
  playAudio();
  volume();

}
const confetti = new JSConfetti();

function updateImg(){
  const horn = document.getElementById("horn-select");
  const image = document.querySelector("img");
  const audio = document.getElementsByClassName("hidden")[0];

  horn.addEventListener("change", (event) => {
    image.setAttribute("src", "assets/images/" + event.target.value + ".svg");
    audio.setAttribute("src", "assets/audio/" + event.target.value + ".mp3");
  });
}

function playAudio(){
  const button = document.querySelector("button");
  const audio = document.getElementsByClassName("hidden")[0];
  button.addEventListener("click", () => {
    audio.play();
    if(document.getElementById("horn-select").value == 'party-horn'){
      confetti.addConfetti({
        confettiRadius:4,
        confettiNumber:200,
      });
    }
  });
}

function volume(){
  const volumeSlider = document.getElementById("volume");
  const audio = document.getElementsByClassName("hidden")[0];
  
  volumeSlider.addEventListener("change", () => {
    const volumeIcon = document.getElementById("volume-controls").querySelector("img");
    if(volumeSlider.value == 0){
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    }
    else if(volumeSlider.value < 33){
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    }
    else if(volumeSlider.value < 67){
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    }
    else{
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
    audio.volume = volumeSlider.value/100;
  });
}