let total = 0;
let input;

do {
    input = prompt ('Введите число');
    input = Number(input);
    total = input + total;
} while(input);
alert("Общая сумма чисел равна [" + total + "]");