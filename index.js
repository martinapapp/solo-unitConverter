const convertBtn=document.querySelector(".convert-btn")
const inputNum=document.getElementById("input-number")

convertBtn.addEventListener('click', function () {
    length()
})

function length {
    //get element
    //get string value
    //convert to number
    //check if valid or not
    //calculation
    //display value
}

 //mainConvert()

/*function mainConvert {
    length()
    volume()
    mass()
}



function volume {

}

function mass {

}
*/






/* help
function performCalculation() {
  // 1. Get the Input Element and 2. Get the String Value
  const inputElement = document.getElementById('myNumberInput');
  const inputValueString = inputElement.value;

  // 3. Convert to a Number
  // Using parseFloat() for decimals, or parseInt() for whole numbers
  // The unary plus operator (+) is a concise way for conversion:
  const numberValue = +inputValueString; 

  // Check if the conversion resulted in a valid number (Not a Number - NaN)
  if (isNaN(numberValue)) {
    document.getElementById('result').textContent = 'Please enter a valid number.';
    return; // Stop the function if it's not a number
  }

  // 4. Perform Calculation
  const resultValue = numberValue * 10;

  // 5. Display the Result
  document.getElementById('result').textContent = 'The result is: ' + resultValue;
}*/