const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const option = document.querySelector('select');
const button = document.querySelector('#calculate');
const result = document.querySelector('#result');

let selectType = 'add';

option.addEventListener("input", function () {
    selectType = this.value;
});

button.addEventListener("click", function () {
    const num1 = parseFloat(number1.value); //I use parseFloat() instead of Number() to return NaN not 0
    const num2 = parseFloat(number2.value);

    if (isNaN(num1) || isNaN(num2)) { //Checking that inputs are not empty
        result.innerHTML = 'Please enter the numbers';
    } else {
        switch (selectType) {
            case 'add':
                result.innerHTML = num1 + num2;
                break;
            case 'subtract':
                result.innerHTML = num1 - num2;
                break;
            case 'multiply':
                result.innerHTML = num1 * num2;
                break;
            case 'divide':
                if (num2 !== 0) {
                    result.innerHTML = num1 / num2;
                } else {
                    result.innerHTML = 'You can not divide by zero';
                }
                break;
            default:
                result.innerHTML = 'Invalid operation';
        }
    }
});