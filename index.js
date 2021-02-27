var numberOfDrumButton = document.querySelectorAll(".drum").length;


for (var i = 0; i < numberOfDrumButton; i++) {


    //we need do it in a manual way so the function get trigger when we click the button
    //addEventListner("input1" depend upon this next one ->> Fired 🔅,"input2"--> this one is my function)

    // object //function      //class      ///function     ///function //call back
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    //this object is called by the call back function when it got clicked---

        //getting the HTML w || a || s || d || j || k || l
        var buttonInnnerHTML = this.innerHTML;

        // button passed ->>
        makeSound(buttonInnnerHTML);

        //animation--
        buttonAnimation(buttonInnnerHTML);

    });

}

document.addEventListener("keypress", function (e) {

    // We are getting the key from user  -->
    makeSound(e.key);

    //animation --
    buttonAnimation(e.key);
});


// making sound in the function
function makeSound(key) {

    switch (key) {
        case "w":

            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "a":
            var kick_bass = new Audio('sounds/kick-bass.mp3');
            kick_bass.play();
            break;
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var tom_1 = new Audio('sounds/tom-1.mp3');
            tom_1.play();
            break;
        case "j":
            var tom_2 = new Audio('sounds/tom-2.mp3');
            tom_2.play();
            break;
        case "k":
            var tom_3 = new Audio('sounds/tom-3.mp3');
            tom_3.play();
            break;
        case "l":
            var tom_4 = new Audio('sounds/tom-4.mp3');
            tom_4.play();
            break;

        default:
            console.log(buttonInnnerHTML);
            break;
    }
}
//   animation ----
function buttonAnimation(currentKey){
    let activeButton = document.querySelector("."+ currentKey);

    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed")
    },100);
}

// var audio = new Audio('sounds/crash.mp3');
//         audio.play();