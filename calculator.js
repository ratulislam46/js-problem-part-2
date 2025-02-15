function add (num1, num2){
    const sum = num1 + num2;
    return sum;
}
function subtraction (num1, num2){
    const subtractor = num1 - num2;
    return subtractor;
}
function multiply (num1, num2){
    return num1 * num2;
}
function divide (num1, num2){
   return num1 / num2;
}
// const addNumber = add(4, 3);
// const subtractorNumber = subtractor(4, 3);
// const multiplyNumber = multiply(4, 3);
// const divideNumber = divide(15, 3);
// console.log(addNumber, subtractorNumber, multiplyNumber, divideNumber)

function calculator (a, b, operation){
    if(operation === 'add'){
        const result = add(a,b);
        return result;
    }
    else if (operation === 'subtractor'){
        const result = subtractor(a, b);
        return result;
    }
    else if (operation === 'multiply'){
        const result = multiply(a, b);
        return result;
        // return multiply(a, b)
    }
    else if(operation ==='divide'){
        const result = divide(a, b);
        return result;
    }
    else {
        return "only 'add', 'subtractor', 'multiply', 'divide' operation is allowed."
    }
}
const result = calculator(5, 7, 'add');
console.log(result)