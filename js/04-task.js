const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let totalCredits;
let message;


const userInput = prompt('Введите количество');
if (userInput) {
    totalPrice = userInput + pricePerDroid;
    if (totalPrice > credits) {
        message = 'Недостаточно средств на счету';
    } else {
        totalCredits = credits - totalPrice;
        message = `Вы купили ${userInput} дроидов, на счету осталось ${totalCredits} кредитов`;
    }
} else {
    message = 'Отменено пользователем';
}

alert(message);
    
