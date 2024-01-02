//A more common way to see an event listener is like this below. it also shortens the code
//document.querySelector(".drum").addEventListener("click", function (){
    //     alert("Hello World");
    // });

//Below uses a loop to apply an event listener to every element using the "drum" class
var drums = document.querySelectorAll(".drum");

for(var i = 0; i < drums.length; i++){
    drums[i].addEventListener("click", function (){
        alert("Hello World");
    });
}





// document.querySelector("button").addEventListener("click", handleClick);//The handleClick function does not get the "()" as this will call the method right away rather than wait for the click

// function handleClick(){
//     alert("button has been clicked");
// }

