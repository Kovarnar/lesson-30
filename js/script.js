// Мінімум

// 1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
let x = 0.1;
let y = 0.2;
console.log((0.1 * 10 + 0.2 * 10) / 10);
console.log(+(0.1 + 0.2).toFixed(1));

// 2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), 
// добийся математично правильної відповіді.
let one = 1;
let twoString = '2';
console.log(one + +twoString)

// 3. Користувач вказує обсяг флешки в Гб. 
// Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
const GB = 1024;
let file = 820;
let sizeFlesh = +prompt('Введіть обсяг флешки в Гб');
let countFiles = Math.floor(sizeFlesh * 1024 / file);
console.log(`На флешкі обсягом ${sizeFlesh} Гб розміститься ${countFiles} файлів розміром ${file} Мб`);


// Норма

// 1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. 
//Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
let userMoney = +prompt('Введіть суму грошей в гаманці');
let priseChocolate = +prompt('Введіть ціну однієї шоколадки');
let amtChocolate = Math.floor((userMoney * 100)/(priseChocolate * 100));
let leftoverMoney = (userMoney * 100) % (priseChocolate * 100) / 100;
console.log(`Грошей в гаманці: ${userMoney}. Ціна шоколадки: ${priseChocolate}.`);
console.log(`Користувач може купити ${amtChocolate} шоколадок. В гаманці залишиться ${leftoverMoney} грошей.`);

// 2. Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
let userNum = prompt('Введіть тризначне число');
let one = userNum % 10;
let two = Math.trunc(userNum / 10) % 10;
let three = Math.trunc(userNum / 100) % 10;
let reverseUserNum = one * 100 + two * 10 + three;
console.log(`Введено число: ${userNum}. Число задом наперед: ${reverseUserNum}`);


// Максимум

// 1. Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. 
// Вивести суму нарахованих відсотків.
let yearPersent = 0.05;
let userDeposit = +prompt('Введіть суму вкладу');
let userDepositPersent = ((userDeposit * 0.05) / 6).toFixed(2);
console.log(userDepositPersent);

// 2. Що повернуть вирази:
// 2 && 0 && 3

//    2 || 0 || 3    => 2
    
//    2 && 0 || 3    => 3