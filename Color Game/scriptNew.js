//All the global varibles
var boxes = document.getElementsByClassName("box");
var newColorButton = document.getElementById("newColor");
var rgbVal = document.getElementById("rgbValue");
var heading = document.getElementById("header");
var prompt = document.getElementById("msg");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var hardLevel = document.getElementById("hardLevel");
var myScore = document.getElementById("myScore");
var gamesPlayed = document.getElementById("gamesPlayed");
var score = document.getElementById("score");
var info = document.getElementById("info");
var selectedDifficulty = 6;
var played = 0;
var totalGame = 0;
var totalPoints = 0;
var attempts = 0;
var alreadySelectedWinner = false;
var randomR;
var randomG;
var randomB;

easy.addEventListener("click", function () {
    selectedDifficulty = 3;
    easy.classList.toggle("active");
    hard.classList.toggle("active");
    colorGenerator(3);
});

hard.addEventListener("click", function () {
    selectedDifficulty = 6;
    easy.classList.toggle("active");
    hard.classList.toggle("active");
    colorGenerator(7);
});

newColorButton.addEventListener("click", colorGenerator);

//Assigning random colors to buttons
function colorGenerator() {
    makeInvisible();
    makeVisible(selectedDifficulty, boxes);
    prompt.textContent = "Good Luck";
    info.style.visibility = "visible";
    // score.style.visibility = "visible";
    alreadySelectedWinner = false;
    played = played + 1;
    //every new color generation increases the total game.
    totalGame = totalGame + selectedDifficulty;
    //attempts
    attempts = 0;
    //Generating random colors
    randomR = Math.floor(Math.random() * 256);
    randomG = Math.floor(Math.random() * 256);
    randomB = Math.floor(Math.random() * 256);
    //RGB value is
    rgbVal.textContent = "RGB (" + randomR + ", " + randomG + ", " + randomB + ")";
    // console.log("The difficulty is : " + selectedDifficulty);
    selectedBox = Math.floor(Math.random() * selectedDifficulty);
    // console.log("The selected box is: " + selectedBox);
    boxes[selectedBox].style.backgroundColor = "rgb(" + randomR + ", " + randomG + ", " + randomB + ")";


    $("#boxes button").click(function(){
        if (this.style.backgroundColor == boxes[selectedBox].style.backgroundColor) {
            prompt.textContent = "Correct";
            Win(selectedDifficulty, attempts);
        }
        else {
            prompt.textContent = "Try Again";
            $(this).fadeOut("slow");
            
        }
        });

    for (let i = 0; i < selectedDifficulty; i++) {
        //Assigining click features
        // boxes.item(i).addEventListener("click", function () {
        //     if (this.style.backgroundColor == boxes[selectedBox].style.backgroundColor) {
        //         prompt.textContent = "Correct";
        //         Win(selectedDifficulty, attempts);
        //     }
        //     else {
        //         prompt.textContent = "Try Again";
        //         attempts = (attempts + 1);
        //         console.log("Inside : " + attempts);
        //         console.log("i value  : " + i);
        //         this.classList.add("d-none");
        //     }

        // });
        //Assigning colors to the other boxes
        if (i != selectedBox) {
            var randomNewR = Math.floor(Math.random() * 256);
            var randomNewG = Math.floor(Math.random() * 256);
            var randomNewB = Math.floor(Math.random() * 256);
            boxes[i].style.backgroundColor = "rgb(" + randomNewR + ", " + randomNewG + ", " + randomNewB + ")";
        }
    }
}

//Function to be called when correct box is selected
function Win(selectedDifficulty, attempts) {
    info.style.visibility = "hidden";

    if (alreadySelectedWinner == false) {
        //point generation
        console.log("attempts: " + attempts + " selectedDifficulty " + selectedDifficulty);
        totalPoints = totalPoints + (selectedDifficulty - attempts);
        myScore.textContent = totalPoints;
        gamesPlayed.textContent = totalGame;
        alreadySelectedWinner = true;
    }
    for (let j = 0; j < selectedDifficulty; j++) {
        //showing all the hidden boxes based on difficulty
        boxes[j].classList.remove("d-none");
        //boxes have the selected RGB
        boxes[j].style.backgroundColor = "rgb(" + randomR + ", " + randomG + ", " + randomB + ")";
        //Heading has the selected RGB
        heading.style.backgroundColor = "rgb(" + randomR + ", " + randomG + ", " + randomB + ")";
    }
}

function makeVisible(selectedDifficulty, boxes) {
    for (let k = 0; k < selectedDifficulty; k++) {
        boxes[k].style.visibility = "visible";
    }
}
function makeInvisible() {
    for (let k = 0; k < 6; k++) {
        boxes[k].classList.remove("d-none");
        boxes[k].style.visibility = "hidden";
    }
}
