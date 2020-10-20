$(document).ready(function(){

  $("#box").on("click", function(){
      console.log("I was clicked! Fuck.");
  })

})

let myCoolBox = document.
getElementById("box");

myCoolBox.addEventListener("click", function(){

 console.log("I was clicked!");
 printHello()
})

function printHello() {
    console.log("Hello");
}

function addNumbers(num1, num2) {
    console.log(num1+num2);
}