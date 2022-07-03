var drum_buttons = document.querySelectorAll(".drum").length;

var i=0;
while (i < drum_buttons) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        Sound(this.innerHTML);
        Animate(this.innerHTML);
    });
    i++;
}

document.addEventListener("keydown", function(event) {
    Sound(event.key);
    Animate(event.key);
})

function Animate() {

}

function Sound(key) {
    switch (key) {
        case "1":
            var tom1 = new Audio("assets/sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "2":
            var tom2 = new Audio("assets/sounds/tom-2.mp3");
            tom2.play();
            break;

        case "3":
            var tom2 = new Audio("assets/sounds/tom-3.mp3");
            tom2.play();
            break;

        case "4":
            var tom2 = new Audio("assets/sounds/tom-4.mp3");
            tom2.play();
            break;
        
        case "5":
            var tom2 = new Audio("assets/sounds/snare.mp3");
            tom2.play();
            break;
            
        case "6":
            var tom2 = new Audio("assets/sounds/crash.mp3");
            tom2.play();
            break;

        case "7":
            var tom2 = new Audio("assets/sounds/kick-bass.mp3");
            tom2.play();
            break;

        case "8":
            var tom2 = new Audio("assets/sounds/kick-bass.mp3");
            tom2.play();
            break;

        case "9":
            var tom2 = new Audio("assets/sounds/crash.mp3");
            tom2.play();
            break;

        default:
            alert("bhsodike 1 se 9 mein daba koi number")
    }
}