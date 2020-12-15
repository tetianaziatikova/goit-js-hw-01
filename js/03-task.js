const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const userInput = prompt('Введите пароль');

if (userInput) {
    if (userInput === ADMIN_PASSWORD) {
        message = 'Добро пожаловать!';
    } else {
        message = 'Доступ запрещен, неверный пароль';
    }
    
} else {
    message = 'Отменено пользователем!';
} 

alert(message);