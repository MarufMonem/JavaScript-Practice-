var boxes = document.getElementsByClassName("box");
var newColorButton = document.getElementById("newColor");

newColorButton.addEventListener("click",function(){
    colorGenerator();
})

colorGenerator();

function colorGenerator() {
    var randomR = Math.floor(Math.random() * 256);
    var randomG = Math.floor(Math.random() * 256);
    var randomB = Math.floor(Math.random() * 256);

    var rgbVal = document.getElementById("rgbValue");
    rgbVal.textContent = "RGB (" + randomR + ", " + randomG + ", " + randomB + ")";

    var selectedDifficulty = 7;
    var correctBox = boxes[i];
    var selectedBox = Math.floor(Math.random() * selectedDifficulty);
    console.log("The selected box is: " + selectedBox);

    boxes[selectedBox].style.backgroundColor = "rgb(" + randomR + ", " + randomG + ", " + randomB + ")";
    for (var i = 0; i < selectedDifficulty; i++) {
        if (i != selectedBox) {
            var randomNewR = Math.floor(Math.random() * 256);
            var randomNewG = Math.floor(Math.random() * 256);
            var randomNewB = Math.floor(Math.random() * 256);
            boxes[i].style.backgroundColor = "rgb(" + randomNewR + ", " + randomNewG + ", " + randomNewB + ")";
        }
    }
}

for (var i = 0; i < selectedDifficulty; i++) {
    boxes[i].addEventListener("click", function(){
        // if(this === correctBox){
        //     console.log("Correct");
        // }else{
        //     console.log("Selected " + i);
        //     this.clasList.add("display-none");
        // }
        alert("clicked" + i);
    })
}



