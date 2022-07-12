var numberofDrumButton = document.querySelectorAll(".drum").length;
for(var i = 0; i<numberofDrumButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML)
    });
}
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    
});
function makeSound(key){
    switch (key) {
        case "w":
            var sud = new Audio("./sounds/sound1.wav");
             sud.play();
            break;
         case "a":
                var sud = new Audio("./sounds/sounds_tom-2.mp3");
                 sud.play();
                break;
                case "s":
                    var sud = new Audio("./sounds/sounds_tom-3.mp3");
                     sud.play();
                    break;
                    case "d":
                        var sud = new Audio("./sounds/sounds_tom-4.mp3");
                         sud.play();
                        break;
                        
                        case "j":
                            var sud = new Audio("./sounds/sound.wav");
                             sud.play();
                            break;
                            case "k":
                        var sud = new Audio("./sounds/sounds.mp3");
                         sud.play();
                        break;
                        case "l":
                        var sud = new Audio("./sounds/sounds_crash.mp3");
                         sud.play();
                        break;
    
        default: console.log(buttonInnerHTML);
}

}
document.addEventListener("keypress",function(event){
    keyPress(event.key);
});
function keyPress(key){

}