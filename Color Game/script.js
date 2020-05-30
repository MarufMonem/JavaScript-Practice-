var boxes = document.getElementsByClassName("box");
var newColorButton = document.getElementById("newColor");
var correctBox;
var selectedDifficulty =7;
var selectedBox;

newColorButton.addEventListener("click",function(){
    colorGenerator();
});

colorGenerator();

for(var i=0; i < 7; i++){
    boxes.item(i).addEventListener("click",function(){
        if(i==selectedBox){
            alert("correct");
        }else{
            alert("Wrong box");
        }
    });
}


function colorGenerator() {
    var randomR = Math.floor(Math.random() * 256);
    var randomG = Math.floor(Math.random() * 256);
    var randomB = Math.floor(Math.random() * 256);

    var rgbVal = document.getElementById("rgbValue");
    rgbVal.textContent = "RGB (" + randomR + ", " + randomG + ", " + randomB + ")";

    selectedBox = Math.floor(Math.random() * selectedDifficulty);
    correctBox = boxes[selectedBox];
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






