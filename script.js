var btm = document.querySelector(".btm");
var timer = 60;
var Score = 0;
var hit;

function timeStapm() {
  setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      btm.innerHTML = "<h2>game Over</h2>";
      // document.querySelector(".btm h2").style.display="block"
      // document.querySelector(".btm h2").innerHTML = Score
      document.querySelector(".btm").style.fontSize = "100px";
      document.querySelector(".btm").style.fontWeight = "900";
    }
  }, 1000);
}

function Scorecard() {
  Score += 10;
  document.querySelector("#score").textContent = Score;
}

function Wrong() {
  Score -= 5;
  document.querySelector("#score").textContent = Score;
}
function HitCount() {
  hit = Math.floor(Math.random() * 10);
  document.querySelector("#hits").textContent = hit;
}

function makeboubles() {
  btm.innerHTML = "";
  for (var i = 1; i < 127; i++) {
    var rn = Math.floor(Math.random() * 10);
    btm.innerHTML += `<div class="buble">${rn}</div>`;
  }
}

function hitCheck(dets) {
  btm.addEventListener("click", function (dets) {
    if (Number(dets.target.textContent) === hit) {
      HitCount();
      Scorecard();
      makeboubles();
    } else {
      makeboubles();
      HitCount();
      Wrong();
      // alert(" Wrong! Better luck Next Time");
      // timeStapm();
    }
  });
}

makeboubles();
HitCount();
timeStapm();
hitCheck();
// Scorecard()
