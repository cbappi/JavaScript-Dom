function addMe(drt){

   alert(drt+100)
}

function say(){

    alert("Are you looking for something")
 }

 var clickme = document.getElementById("clickme");
 var cardtitle = document.getElementById("card-title");
 var cardtext = document.getElementById("card-text");

 function checkAnother(){
    clickme.src = "flowertwo.jpg";
    cardtitle.innerHTML = "<h3>Blue Flower</h3>"
    cardtext.innerHTML = "<p>This flower looking nice, can you tell me from where I can get it</p>"
 }

 
//  var firstNumber = document.getElementById("first-number").value;
//  var newFirstNumber = parseInt(firstNumber);
//  var secondNumber = document.getElementById("second-number").value;
//  var newSecondNumber = parseInt(secondNumber);
//  var result = newFirstNumber + newSecondNumber ;
//  var result = document.getElementById("result");


   console.log("add-number");
   document.getElementById("add-number").addEventListener('click', function(){

      var firstNumberField = document.getElementById("first-number")
      var firstNumberText = firstNumberField.value;
      var firstNumber = parseFloat(firstNumberText);
      //console.log(firstNumber);

      var secondNumberField = document.getElementById("second-number")
      var secondNumberText = secondNumberField.value;
      var secondNumber = parseFloat(secondNumberText);
      //console.log(secondNumber);

      var result = firstNumber + secondNumber;

      var resultField = document.getElementById("result")
      var resultFieldText = resultField.innerText;
      resultField.innerText = result;
   });
  

