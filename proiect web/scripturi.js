const audio = new Audio("Audio/Forest ambient music.webm");
const pictogramaAudio = document.getElementById("pictograma-audio");
const audioOn = "🔊";
const audioOff = "🔇";

if(localStorage.getItem("estePeMute") == "false") {
    pictogramaAudio.innerHTML = "🔊";
    pornesteAudioInLoop();
} else {
    pictogramaAudio.innerHTML = "🔇";
    audio.muted = true;
}

function deschideNav() {
    document.getElementById("navigatia-laterala").style.width = "250px";
    document.getElementById("deschide-navigatia").style.opacity = "0%";
  }
  
  function inchideNav() {
    document.getElementById("navigatia-laterala").style.width = "0";
    document.getElementById("deschide-navigatia").style.opacity = "100%";
  }

  function pornesteSauOpresteAudio() {
      if(pictogramaAudio.innerHTML == audioOn) {
        document.getElementById("pictograma-audio").innerHTML = audioOff;
        audio.muted = true;
        localStorage.setItem("estePeMute", "true");
      } else {
        document.getElementById("pictograma-audio").innerHTML = audioOn;
        audio.muted = false;
        pornesteAudioInLoop();
        localStorage.setItem("estePeMute", "false");
      }
  }

  function pornesteAudioInLoop() {
    audio.play();
    audio.loop = true;
  }


  const btnFugar = document.getElementById("butonulFugar");
  const fundalDimensiune = document.getElementById("id-fundal-joc");
  const scor = document.getElementById("tabelaScor");
  const pictogrameAnimale = ["&#128058", "&#128046", "&#128047", "&#128052", "&#128053", "&#128059", "&#128038", "&#128048" , "&#128050" , "&#128015"];
  let numarDeClickuri = 0;

  function fuga() {
    let randX = Math.floor(Math.random() * (fundalDimensiune.offsetWidth - 100));
    let randY = Math.floor(Math.random() * (fundalDimensiune.offsetHeight - 100));
    setTimeout(function() {
    btnFugar.setAttribute("style", "left:" + randX + "px; top:" + randY + "px;");
    }, 200);
  }

  function clickButon() {
      numarDeClickuri++;
    let index = numarDeClickuri;
    if(numarDeClickuri < pictogrameAnimale.length) {
      btnFugar.innerHTML = pictogrameAnimale[numarDeClickuri];
      scor.innerText = "Da click pe animal! Scor: " + numarDeClickuri;
    } else {
      let indexToString = index.toString();
      index = parseInt(indexToString.substring(indexToString.length-1));
      btnFugar.innerHTML = pictogrameAnimale[index];
      scor.innerText = "Da click pe animal! Scor: " + numarDeClickuri;
    }
  }