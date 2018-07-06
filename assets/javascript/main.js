

function randomnote() {

  //code to generate random finger
    var fingers = ["1", "2", "3", "4"];
    var finger = fingers[Math.floor(Math.random() * fingers.length)];
  //code to generate random fret
    var frets = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    var fret = frets[Math.floor(Math.random() * frets.length)];
  //code to generate random string # or letter
    var strings = ["1", "2", "3", "4", "5", "6", "e", "A", "D", "G","B", "E"];
    var string = strings[Math.floor(Math.random() * strings.length)];
  //adding generated random items to html page
    document.getElementById("finger").textContent = "Finger #: " + finger;
    document.getElementById("fret").textContent = "Fret #: " + fret;
    document.getElementById("string").textContent = "String # / Name: " + string;
   
  };

  //create sound for on.onclick
  var ClickSound = new Audio();
  ClickSound.src = "assets/sounds/guitar.wav";
  //create function to play sound during on.click
  function PlaySound() {
      ClickSound.play();
  }