// console.log(4);

var x = document.getElementById("myAudio");

function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
}

// var audio = new Audio("music/Alan Walker - Tired (Instrumental).mp3");
// audio.play();

document.querySelector(".btn").addEventListener("click", function () {
  if (document.querySelector(".btn").innerHTML === "Next") {
    document.querySelector(".card").remove();
    document.querySelector(".box").insertAdjacentHTML(
      "afterbegin",
      `<div class="card">
        <h2>But you have good friends.</h2>
        <img src="img/ants1.jpg" alt="">
    </div>`
    );
  }
});
