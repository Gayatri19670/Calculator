const screen = document.getElementById('screen');
let value1 = ''; // false;
let value2 = ''; //false;
let operation = '+';
let operPressed = false;
let total = false;
let count = 0;


function onNumClick(value) {
    value = value.toString();
    count++;
    if (count <= 10) {
        if (operPressed) {
            value2 = value2 + value;
            screen.innerHTML = value1 + operation + value2;
        } else {
            value1 = value1 + value;
            screen.innerHTML = value1;
        }
        console.log(value);
    }

}

function onOprationClick(value) {
    count++;
    if (total !== false) {
        value = value.toString();
        operPressed = true;
        operation = value;
        value1 = total;
        value2 = '';
        let privousValue = screen.innerHTML.toString();
        screen.innerHTML = privousValue + value;
        console.log('onOprationClick =>', total);
    } else if (operPressed === false) {
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

        case '%':
            total = parseInt(value1) / 100;
            console.log("total=>", value1);
            break;
        default:
            return false;
    }
    total = total.toString();
    screen.innerHTML = total;
}

//function that clear the display 
function onClearScreen() {
    value1 = ''; // false;
    value2 = ''; //false;
    operation = '+';
    operPressed = false;
    total = false;
    screen.innerHTML = "";
}

function onDeleteClick() {
    count--;
    let privousValue = screen.innerHTML.toString();
    if (!operPressed && value1 !== '') {
        const value = privousValue.substring(0, privousValue.length - 1);
        value1 = value;
        screen.innerHTML = value;
    } else if (operPressed && value2 !== '') {
        const value = privousValue.substring(0, privousValue.length - 1);
        value2 = value2.substring(0, value2.length - 1);
        screen.innerHTML = value;
    } else {
        const value = privousValue.substring(0, privousValue.length - 1);
        operPressed = '';
        screen.innerHTML = value;
    }
    console.log('else if =>', privousValue);
}