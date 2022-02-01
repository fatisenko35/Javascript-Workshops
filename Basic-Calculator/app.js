let [num1, operator, num2] = prompt("Please enter number1 operator number2 with spaces: ").split(" ");
console.log(num1, operator, num2);

let result;
switch (operator) {
    case "+": 
        result = +num1 + +num2;
        break;
    case "-":
        result = +num1 - +num2;
        break;
    case "*":
        result = +num1 * num2;
        break;
    case "/":
        result = +num1 / num2;
        break;    
}

console.log(result);