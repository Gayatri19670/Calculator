const screen = document.getElementById('screen');
let value1 = '';
false;
let value2 = '';
false;
let operation = '+';
let operPressed = false;
let total = 0;


function onNumClick(value) {
    value = value.toString();
    if (operPressed) {
        if (!value2) value2 = '';
        value2 = value2 + value;
        screen.innerHTML = value1 + operation + value2;
    } else {
        if (!value1) value1 = '';
        value1 = value1 + value;
        screen.innerHTML = value1;
    }
    value1 = value1 + value;
    screen.innerHTML = value1;
    console.log(value);
}

function onOprationClick(value) {
    operPressed = true;
    operation = value;
    let privousValue = screen.innerHTML.toString();
    screen.innerHTML = privousValue + value;
    console.log(value);
}

function totalValue() {
    if (value1 && value2) {
        total = calculateTotalValue(parseInt(value1), parseInt(value2), operation);
    }
    total = total.toString();
    screen.innerHTML = total;
    console.log(value1, value2, operation);
}

function calculateTotalValue(value1, value2, operation) {
    switch (operation) {
        case '+':
            total = value1 + value2;
            break;
        case '-':
            total = value1 - value2;
            break;
        case '/':
            total = value1 / value2;
            break;
        case '*':
            total = value1 * value2;
            break;
        default:
            return false;
    }
    return total;
}

//function that clear the display 
function onOprationClick1() {
    document.getElementById("screen").innerHTML = ""
}