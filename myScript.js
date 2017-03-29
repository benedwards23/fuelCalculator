<<<<<<< HEAD
function getValues() {
  var theForm = document.forms["JourneyCost"];
  var miles = theForm.elements["Distance"];
  var numberOfMiles = 0;
  if (miles.value!=""){
  	numberOfMiles = parseInt(miles.value);
  }
  alert("You entered " + numberOfMiles + " into the calculator.");
   }
=======
function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function getValues()
{
//Assume form with id="theform"
var theForm = document.forms["JourneyCost"];


//Get a reference to the TextBox
var distance = theForm.elements["distance"];
var mpg = theForm.elements["mpg"];
var petrolPrice = theForm.elements["fuelCost"]


var miles = 0;
var milesPerGallon = 0;
var price = 0;


//If the textbox is not blank
if(distance.value!="")
{
miles = parseFloat(distance.value);
}

if(mpg.value!="")
{
milesPerGallon = parseFloat(mpg.value);
}

if(petrolPrice.value!="")
{
price = parseFloat(petrolPrice.value);
}

var numberOfGallonsUsed = (miles / milesPerGallon);
var gallonsIntoLitresConversionRate = 4.54609;
var numberOfLitresUsed = numberOfGallonsUsed * gallonsIntoLitresConversionRate;
var fuelPriceIntoPounds = (price / 100);
var fuelCost = (numberOfLitresUsed * fuelPriceIntoPounds);

var roundedCost = round(fuelCost,2);
alert("This journey has cost \u00A3" + roundedCost+".");

// miles is distance, milesPerGallon is MPG and price is Price per Litre of fuel
}
>>>>>>> origin/master
