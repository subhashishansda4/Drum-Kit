var drum_buttons = document.querySelectorAll(".drum").length;

var i=0;
while (i < drum_buttons) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var audio = new Audio("assets/sounds/kick-bass.mp3");
        audio.play();
    });
    i++;
}