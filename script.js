// Background Music
let bgMusic = new Audio('assets/we-are.mp3');
bgMusic.loop = true;

function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play();
  } else {
    bgMusic.pause();
  }
}

function changeMusic(track) {
  bgMusic.pause();
  bgMusic = new Audio(`assets/${track}`);
  bgMusic.loop = true;
  bgMusic.play();
}

// Intro Sounds
function playDrumroll() {
  const drumroll = new Audio('assets/drumroll.mp3');
  drumroll.play();
  drumroll.onended = () => {
    const horn = new Audio('assets/ship-horn.mp3');
    horn.play();
  };
}

window.onload = function() {
  playDrumroll();
  setTimeout(() => {
    const intro = document.getElementById("intro");
    if (intro) intro.remove();
    changeMusic('binks-sake.mp3'); // switch to poster theme
  }, 4000);
};

// RC Race
function startRace() {
  const car = document.getElementById("rcCar");
  car.style.left = "80%";
  document.getElementById("raceMessage").innerHTML =
    "🏆 You’ve won the ultimate pirate‑driver trophy, Captain!";
  playSound('car');
  change