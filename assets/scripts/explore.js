// explore.js

window.addEventListener('DOMContentLoaded', init);

var voices = [];
const synth = window.speechSynthesis;

function init() {
  // TODO

  populateVoiceList();
  speech()

}

function populateVoiceList() {
  voices = synth.getVoices();

  for(let i = 0; i < voices.length; i++){ 
    let option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    option.value = i;
    document.querySelector("select").appendChild(option);
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function speech(){

  const button = document.querySelector("button");
  button.addEventListener("click", e => {
    let inputTxt = document.getElementById("text-to-speak");
    let image = document.querySelector("img");
    image.src = "assets/images/smiling-open.png";

    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    let selectedOption = document.getElementById("voice-select");
    utterThis.voice = voices[selectedOption.value];
    speechSynthesis.speak(utterThis);
    utterThis.addEventListener("end", event => {
      image.src = "assets/images/smiling.png";
    });
  });
}

