console.log("working");

//======Initial Prompt======
var calc = prompt("Welcome to the JS Calculator\nWhich Calculator do you want to use?\nTo use the Basic Calculator (Type Basic to select option)\nTo use the Advanced Calculator (Type Adv to select option) ");
switch (calc) {
    case "basic":
        alert("You are on Basic Calculator Mode");
        break;

    case "adv":
        alert("You are on Advanced Calculator Mode");
        break;

    default:
        alert("you are on Basic Mode");
        break;
}

//======BASIC CALCULATOR======
function operatorFunction(x, y, operator) {
    var z;
    if (operator == '+') {
        z = x + y;
    } else if (operator == '/') {
        z = x / y;
    } else if (operator == '*') {
        z = x * y;
    } else if (operator == '-') {
        z = x - y;
    }
    return z;
}
// ======ADVANCED CALCULATOR======
var adv = "Do you want BMI or Temperature Conversion?";
// ===BMI===

// ===Celcius To Farenheit===
function tempFunction(c){
    var bool = true;
    var f;
    const num1 = 1.8;
    const num2 = 32;
    // const op1 = "*";
    // const op2 = "+";
    while(bool){
        f = (i * num1) + num2;
    }
    return f;
}
//Connecting Switch Statement to either Basic or Advanced
if (calc == "basic") {
    console.log(alert("enter to start calculating"));
    var x, y, operator;
    x = parseFloat(prompt("Type a number"));
    y = parseFloat(prompt("Type a number"));
    operator = prompt("Choose an Operator");
    alert(operatorFunction(x, y, operator));
    prompt("Do you want to continue?")
    // Prompt to choose between BMI & Temperature
} else if (calc == "adv") {
    console.log(prompt(`${adv}`));
}
// BMI
if (adv == "BMI") {

}
// Temperature
else if (adv == "temperature") {
    alert("celcius to farenheit")
    var c, f, num1, num2, op1, op2;
    c = parseFloat(prompt("Temperature Celcius"));
    alert(tempFunction(c));
}


// var bool = true;
// while (bool){
//     // console.log(true);
// }
// var addNumbers = (num1, num2) => num1 + num2
// var divideNumbers = (num1, num2) => num1 / num2;
// var multiplyNumbers = (num1, num2) => num1 * num2;
// var subtractNumbers = (num1, num2) => num1 - num2;



