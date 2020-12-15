let cost;
let message = 'Отменено пользователем';
let isValid = true;


let userInput = prompt ('Введите страну доставки');
if (userInput !== null) {
    switch(userInput.toLocaleLowerCase()) {
    case 'китай':
        cost = 100;
        break;
    
    case 'чили':
        cost = 250;
        break;  
    
    case 'австралия':
        cost = 170;
        break;
        
    case 'индия':
        cost = 80;
        break;
    
    case 'ямайка':
        cost = 120;
        break;
    
        default: 
        isValid = false;
        message = 'В вашей стране доставка не доступна';
    }
} else {
    isValid = false;
}

if (isValid) {
    message = `Доставка в ${userInput} будет стоить ${cost} кредитов`;
}

alert(message);