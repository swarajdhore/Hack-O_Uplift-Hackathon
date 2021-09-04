exports.drum= function (){
    
// Detecting Button Press
var noOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfDrumButtons; i++) {
  // here we haven't used handleClick() bcoz we are waiting for the button to be clicked and passing the function name rather than calling a function without any button being clicked.
  // passing a function as an input so that it can be called at later time

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });

}
// Detecting keyboard press which means Keydown
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {

    case "w":
      var d1 = new Audio("sounds/crash.mp3");
      d1.play();
      break;

    case "a":
      var d2 = new Audio("sounds/tom-1.mp3");
      d2.play();
      break;

    case "s":
      var d3 = new Audio("sounds/tom-2.mp3");
      d3.play();
      break;

    case "d":
      var d4 = new Audio("sounds/tom-3.mp3");
      d4.play();
      break;

    case "j":
      var d5 = new Audio("sounds/snare.mp3");
      d5.play();
      break;

    case "k":
      var d6 = new Audio("sounds/kick-bass.mp3");
      d6.play();
      break;

    case "l":
      var d7 = new Audio("sounds/tom-4.mp3");
      d7.play();
      break;

    default: console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
}