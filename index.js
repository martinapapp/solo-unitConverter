/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn=document.querySelector(".convert-btn");
const inputEl=document.getElementById("input-el");
const lengthOutput = document.querySelector(".lengthBox");
const volumeOutput = document.querySelector(".volumeBox");
const massOutput = document.querySelector(".massBox");
const meter_feet = 3.281;
const liter_gallon = 0.264;
const kilo_pound = 2.204;
let baseValue = parseFloat(inputEl.value);

// Handling Error
 if (isNaN(baseValue)) {
        alert("Please enter a valid number!");
// Clear all output fields
        lengthOutputEl.textContent = "";
        volumeOutputEl.textContent = "";
        massOutputEl.textContent = "";
 }

function convertLength(value) {
  let feet = value * meter_feet;
  let meters = value / meter_feet;
  lengthOutput.textContent = `${value} meters = ${feet.toFixed(3)} feet = ${meters.toFixed(3)}`
}

function convertVolume(value) {
  let gallons = value * liter_gallon;
  let liters = value / liter_gallon;
  volumeOutput.textContent = `${value} gallons = ${gallons.toFixed(3)} liter = ${liter.toFixed(3)}`
}

function convertMass(value) {
  let pound = value * kilo_pound;
  let kilo = value / kilo_pound;
  lengthOutput.textContent = `${value} meters = ${feet.toFixed(3)} feet = ${meters.toFixed(3)}`
}

convertBtn.addEventListener('click', function () {
    convertLength(baseValue);
    convertVolume(baseValue);
    convertMass(baseValue);
});