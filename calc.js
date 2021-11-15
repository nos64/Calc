let a = ''; //First number
let b = ''; // Second number
let sign = ''; // sign operation
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];
const special = ['+/-', '%'];

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

document.querySelector('.ac').addEventListener('click',clearAll);

document.querySelector('.buttons').addEventListener('click', (event) => {
    //Если место клика в блоке с кодом не содержит класс btn, то нужно выйти (клик в промежутке между кнопками)
    if (!event.target.classList.contains('btn')) return;
    //Проверка нажатия кнопки ac 
    if (event.target.classList.contains('ac')) return; 

    out.textContent = '';
    //Получаем нажатую кнопку (считываем нажатую кнопку и заносим в переменную key)
    const key = event.target.textContent;

    // Если нажата цифровая кнопка 0-9 или . (проверка наличия в массиве текста)
    if (digit.includes(key)) {
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
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
    }

    //Смена знака (нажата клавиша +/-)
    if (special.includes(key)) {
        if (key === '+/-') {
            if (b === '' && sign === '') {
                a = -a
                out.textContent = a;
            } else {
                b = -b
                out.textContent = b;
            }
        } else if (key === '%') {
            if (b === '' && sign === '') {
                a = 0;
                out.textContent = a;
            } else {
                b = (a * b) / 100;
                out.textContent = `${(a * b) / 100}%`;
                if (key === '=') {
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
                }
            }
        }
    }

    // Нажата клавиша равно
    if (key === '=') {
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
        console.log(a, b, sign);
    }


})

