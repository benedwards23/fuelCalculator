function getValues() {
  var theForm = document.forms["JourneyCost"];
  var miles = theForm.elements["Distance"];
  var numberOfMiles = 0;
  if (miles.value!=""){
  	numberOfMiles = parseInt(miles.value);
  }
  alert("You entered " + numberOfMiles + " into the calculator.");
   }