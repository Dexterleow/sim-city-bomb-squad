console.log("javascript,are you there?");

// document.addEventListener("DOMContentLoaded", function() {
// console.log("DOM loaded");

var k = 30; //1. time of the bomb. How long the bomb timer should show at the beginning
function timer()
{
  var x = document.getElementById("timer").innerText = k; //2. how long the timer currently has left. Use innerText instead of HTML
  k --;
}

var m = setInterval(timer,1000);

function timeStop()
{
  clearInterval(m);
}

setTimeout(timeStop,32000);

function stopTimeReset (){

  var k = 30; //1. time of the bomb. How long the bomb timer should show at the beginning
  function timer()
  {
    var x = document.getElementById("timer").innerText = k; //2. how long the timer currently has left. Use innerText instead of HTML
    k --;
  }

  var m = setInterval(timer,1000);

  function timeStop()
  {
    clearInterval(m);
  }
  setTimeout(timeStop,32000);
  console.log("Is timer working?")
  }

document.getElementById("reset").addEventListener("click", stopTimeReset);
// Used to reset the timer

var wires = [0,0,0,0,0];

function fiveLuckyNumbers() {
  for (var i = 0; i < wires.length; i++) {
    wires[i] = Math.random();
  }
  console.log(wires);
}
fiveLuckyNumbers();

var liveWires = 5;

function startingLiveWires() {
  for (var i = 0; i < wires.length; i++) {
    if (wires[i] > 0.5) // >0.5 are live wires that will cause the explosion
    liveWires--;
  }
  console.log(liveWires);
}

startingLiveWires();

// Restart Button
function restartGameNow() {
  //
  document.getElementById("reset").addEventListener("click", (resetGameNowButton));
  // document.location.href "sim-city-bomb-squad/index.html"
  // (console.log("HELLOOOOO"))
  ;}

  restartGameNow();

  // Restarting wires status and number of fused wires in games
  function resetGameNowButton() {

    var wires = [0,0,0,0,0];
    function fiveLuckyNumbers() {
      for (var i = 0; i < wires.length; i++) {
        wires[i] = Math.random();
      }
      console.log(wires);
    }
    fiveLuckyNumbers(); // To determine how many wires will trigger the bomb

    var liveWires = 5;

    function startingLiveWires() {
      for (var i = 0; i < wires.length; i++) {
        if (wires[i] > 0.5) // >0.5 are live wires that will cause the explosion
        liveWires--;
      }
      console.log(liveWires);
    }

    startingLiveWires();

    document.getElementById('backgroundImage').style.backgroundImage= "url('img/simcity.jpg')";
  }

  var imgs = document.getElementsByTagName("img");
  var img;
  for (var i = 0; i < imgs.length; i++) {
    img = imgs[i];
    img.addEventListener("click", changeWire);
  }

  function changeWire(wx) {
    var img = wx.target;
    var id = img.id;

    if (id === "blue-wire") {
      wx.target.src = "img/cut-blue-wire.png";
      if (wires[0] < 0.5) { //&& (img.src !== "img/cut-blue-wire.png")
      liveWires--;
    } else {
      document.getElementById('backgroundImage').style.backgroundImage= "url('img/explosion.jpg')";
      console.log("hello");
    }}
    else if (id === "green-wire") {
      wx.target.src = "img/cut-green-wire.png";
      if (wires[1] < 0.5) {
        liveWires--;
      } else {
        document.getElementById('backgroundImage').style.backgroundImage= "url('img/explosion.jpg')";
      }}
      else if (id === "red-wire") {
        wx.target.src = "img/cut-red-wire.png";
        if (wires[2] < 0.5) {
          liveWires--;
        } else {
          document.getElementById('backgroundImage').style.backgroundImage= "url('img/explosion.jpg')";
        }}  else if (id === "white-wire") {
          wx.target.src = "img/cut-white-wire.png";
          if (wires[3] < 0.5) {
            liveWires--;
          } else {
            document.getElementById('backgroundImage').style.backgroundImage= "url('img/explosion.jpg')";
          }}  else if (id === "yellow-wire") {
            wx.target.src = "img/cut-yellow-wire.png";
            if (wires[4] < 0.5) {
              liveWires--;
            } else {
              document.getElementById('backgroundImage').style.backgroundImage= "url('img/explosion.jpg')";
            }}

            if (liveWires === 0) {
              // liveWires = 0;
              document.getElementById("timer").innerText = "You've Saved the Day!";
              console.log("Congrats, you've saved the day!");
            }
          }
          // });
