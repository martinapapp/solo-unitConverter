/*
what i learnt:
If a value changes and you need to use the new value (like user input), you must read it after the change or inside the function that handles the event.
*/

const convertBtn=document.getElementById('convert-btn');
const lengthBox = document.getElementById('length-box');
const volumeBox = document.getElementById('volume-box');
const massBox = document.getElementById('mass-box');
const meter_feet = 3.281;
const liter_gallon = 0.264;
const kilo_pound = 2.204;

convertBtn.addEventListener('click', function(){
const inputValue = parseFloat(document.getElementById("input-el").value)
if (isNaN(inputValue)) {
lengthBox.textContent = "Please enter a valid number.";
return;
}else{
let metersToFeet = inputValue * meter_feet;
let feetToMeters = inputValue / meter_feet;
lengthBox.textContent = `${inputValue} meters = ${metersToFeet.toFixed(3)} feet | feet ${inputValue} = ${feetToMeters.toFixed(3)} meters`;

let litersToGallons = inputValue * liter_gallon;
let gallonsToLiters = inputValue / liter_gallon;
volumeBox.textContent = `${inputValue} liters = ${litersToGallons.toFixed(3)} gallons | ${inputValue} gallons = ${gallonsToLiters.toFixed(3)} liters`;

let kilosToPounds = inputValue * kilo_pound;
let poundsToKilos = inputValue / kilo_pound;
massBox.textContent = `${inputValue} kilograms = ${kilosToPounds.toFixed(3)} pounds | ${inputValue} pounds = ${poundsToKilos.toFixed(3)} kilograms`;
}

})


 