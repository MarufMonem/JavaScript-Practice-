// alert("connected");
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// for x button
$("ul").on("click", "span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stoppropagation();
})

// Handling the user input
$("input[type='text']").keypress(function(event){
    // event reponds to the current keypress event
    //checking for enter key
    if(event.which === 13){

        //if the user presses enter get the value in the input
        var userValue= $(this).val();

        //add the input value to the unordered list
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> </span>" + userValue + "</li>");

        // Clear out the input space
        $(this).val("");
    }
});
    
$(".fa-pencil-alt").click(function(){
    $("input[type='text']").fadeToggle(400);
});
