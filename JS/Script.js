const screen = document.getElementById('screen');
let value1 = ''; // false;
let value2 = ''; //false;
let value3 = ''; // false;
let operation = '+';
let operPressed = false;
let total = 0;


function onNumClick(value) {
    value = value.toString();
    if (operPressed) {
        value2 = value2 + value;
        screen.innerHTML = value1 + operation + value2;
    } else {
        value1 = value1 + value;
        screen.innerHTML = value1;
    }
    console.log(value);
}

function onOprationClick(value) {
    if (operPressed === false) {
        value = value.toString();
        operPressed = true;
        operation = value;
        let privousValue = screen.innerHTML.toString();
        screen.innerHTML = privousValue + value;
        console.log(value, operPressed);
    } else {
        value = value.toString();
        console.log('else', value);
        operPressed = true;
        operation = value;
        let privousValue = screen.innerHTML.toString();
        const newPrivousValue = privousValue.substring(0, privousValue.length - 1);
        screen.innerHTML = newPrivousValue + value;
        console.log(value, operPressed);
    }
}

function totalValue() {
    switch (operation) {
        case '+':
            total = parseInt(value1) + parseInt(value2);
            break;
        case '-':
            total = parseInt(value1) - parseInt(value2);
            break;
        case '/':
            total = parseInt(value1) / parseInt(value2);
            break;
        case '*':
            total = parseInt(value1) * parseInt(value2);
            break;
        default:
            return false;
    }
    total = total.toString();
    screen.innerHTML = total;

    if (operPressed) {
        total = total + value;
        screen.innerHTML = total + operation + value;
    } else {
        total = total + value;
        screen.innerHTML = total;
    }
}



//function that clear the display 
function onOprationClick1() {
    document.getElementById("screen").innerHTML = ""
}