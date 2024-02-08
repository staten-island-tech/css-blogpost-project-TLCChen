// console.log(4);

// var x = document.getElementById("myAudio");

// function playAudio() {
//   x.play();
// }

// function pauseAudio() {
//   x.pause();
// }

const audio1 = new Audio(
  "music/Rick Astley - Never Gonna Give You Up (Official Music Video).mp3"
);

audio1.play();

document.querySelector(".btn").addEventListener("click", function () {
  audio1.play();
});
