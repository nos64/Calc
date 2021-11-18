{
let a = ''; //First number
let b = ''; // Second number
let sign = ''; // sign operation
let finish = false;

const digit = ['Digit0', 'Numpad0', 'Digit1', 'Numpad1', 'Digit2','Numpad2', 'Digit3', 'Numpad3', 'Digit4', 'Numpad4', 'Digit5', 'Numpad5', 'Digit6', 'Numpad6', 'Digit7', 'Numpad7', 'Digit8', 'Numpad8', 'Digit9', 'Numpad9', 'NumpadDecimal', 'Comma', 'Period', 'Slash'];
const action = ['Minus', 'NumpadSubtract', 'NumpadAdd', 'NumpadDivide', 'NumpadMultiply'];
const special = ['+/-', '%', 'Escape'];
const equal = ['Equal', 'Enter', 'NumpadEnter']

const allBtn = digit.concat(action, equal, special);
    // console.log(allBtn)

//Display
const out = document.querySelector('.calc-screen p');

//Function "Clear All" ('ac' - button)
function clearAll () {
 a = ''; //First number and result
 b = ''; // Second number
 sign = ''; //Sign
 finish = false;
 out.textContent = 0;
}

document.addEventListener('keydown', (event) => {

    let key = event.code;
    //Исключение нажатия клавишь букв
    if (!allBtn.includes(key)) return;
        
    out.textContent = '';

    if (event.code === 'Escape') {
        clearAll(event.code)
    }

    // Если нажата цифровая кнопка 0-9 b .
    if (digit.includes(key)) {
        switch(key){
        case 'Digit0':
            key = '0';
            break;
        case 'Numpad0':
            key = '0';
            break;
        case 'Digit1':
            key = '1';
            break;
        case 'Numpad1':
            key = '1';
            break;
        case 'Digit2':
            key = '2';
            break;
        case 'Numpad2':
            key = '2';
            break;
        case 'Digit3':
            key = '3';
            break;
        case 'Numpad3':
            key = '3';
            break;
        case 'Digit4':
            key = '4';
            break;
        case 'Numpad4':
            key = '4';
            break;
        case 'Digit5':
            key = '5';
            break;
        case 'Numpad5':
            key = '5';
            break;
        case 'Digit6':
            key = '6';
            break;
        case 'Numpad6':
            key = '6';
            break;
        case 'Digit7':
            key = '7';
            break;
        case 'Numpad7':
            key = '7';
            break;
        case 'Digit8':
            key = '8';
            break;
        case 'Numpad8':
            key = '8';
            break;
        case 'Digit9':
            key = '9';
            break;
        case 'Numpad9':     
            key = '9';
            break;
        case 'NumpadDecimal':
            key = '.';
            break;
        case 'Comma':
            key = '.';
            break;
        case 'Period':
            key = '.';
            break;
        case 'Slash':
            key = '.';
            break;
        }

        if (b === '' && sign === ''){
            a += key;
            out.textContent = a;
        } else if (a !== '' && b !== '' && finish) { // Продолжение вычислений после нажатия равно
            b = key; // Обнуляем переменную а
            finish = false; // Обнуляем финишь
            out.textContent = b; // Выводим на экран переменную b
        } else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign)
        return;
        }

    // Если нажат знак +, -, /, *,
    if (action.includes(key)) {
        switch(key){
            case 'Minus':
                key = '-';
                break;
            case 'NumpadSubtract':
                key = '-';
                break;
            case 'NumpadAdd':
                key = '+';
                break;
            case 'NumpadDivide':
                    key = '/';
                    break;
            case 'NumpadMultiply':
                    key = 'X';
                    break;
        }
    
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
    }
        
    // Нажата клавиша равно
    if (equal.includes(key)) {
        switch(key) {
            case 'Equal':     
                key = '=';
                break;
            case 'Enter':
                key = '=';
                break;
            case 'NumpadEnter':
                key = '=';
                break;
        }
        if (b === '') b = a; // Для подсчета квадратов (например 5*=)
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case 'X':
                a = a * b;
                break;
            case '/':
                if (b === '0') { // Проверка деления на ноль
                out.textContent = 'Error';
                a = '';
                b = '';
                sign = '';
                return
                }
                a = a / b;
                break; 
        }
        finish = true; // Окончание вычислений
        out.textContent = a;
        // console.log(a, b, sign);
    }

    })

}
