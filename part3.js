
function isPrime(num) {
    if (Number.isInteger(num) == false || num <= 0) {
      return false;
    }

    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num !== 1;
}

var numberTextInput =  document.getElementById("numberInput");
var checkPrimeNumberClickEventHandler = function () {

    var isEmptyString = !numberTextInput.value || numberTextInput.value.length === 0;
    var stringContainsOnlyWhitespace = !numberTextInput.value.trim();

    if(isNaN(numberTextInput.value) || isEmptyString || stringContainsOnlyWhitespace){
      alert('Input was not a number!');
      return;
    }

    if(isPrime(parseFloat(numberTextInput.value))){
      alert("Number " + "'" + numberTextInput.value + "' is a prime number");
      return;
    }
    
    alert("Number " + "'" + numberTextInput.value + "' is NOT a prime number");
};


var checkPrimeNumberButton = document.getElementById("checkPrimeNumberButton");
checkPrimeNumberButton.onclick = checkPrimeNumberClickEventHandler;