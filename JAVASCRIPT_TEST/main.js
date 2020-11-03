$(document).ready(function(){

  $("#box").on("click", function(){
      console.log("I was clicked! Fuck.");
      addNumbers(10, 20);
      console.log(10 + 30);
      printHello()
      $('body').css('background', 'purple');
  })

function printHello() {
    console.log("Hello");
}

//Scroll Event

$(document).on('wheel',function(){
 
  let coolBox = '<div id="cool-box"></div>';

  let amountScrolled = $(document).scrollTop()

  console.log("scroll: " + amountScrolled);

  if(amountScrolled > 2500) {
   $('body').css('background', 'yellow');
   let p = '<p>Ok dude thats enough like seriously stop</p>';

  }
 
  $('body').append(coolBox);

})


function addNumbers(num1, num2) {
   console.log(num1 + num2);
}
})