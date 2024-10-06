// Напишите функцию, которая запускает цикл. Цикл на каждой итерации предлагает через prompt ввести число, большее 100 (но максимум 10 итераций цикла). Если посетитель ввёл число меньше ста – попросить ввести ещё раз, и так далее. Если пользователь вводит число больше ста, текст или цикл заканчивает все итерации, то функция выводит в консоль последний ввод пользователя и завершает функцию.

function typeNum() {
    let num = 0;
    let i = 0;

    while (i < 10 && num <= 100 && num !== null) {
        num = prompt('Введіть число більше 100', '0');
        i++;
    }

    return console.log(num);
}
// typeNum();

// Дан массив объектов. Вывести массив телефонных номеров активных пользователей, у которых баланс более 2000

let users = [
    {
        isActive: true,
        balance: '226.60',
        name: 'Eugenia Sawyer',
        phone: '+1 (840) 583-3207',
    },
    {
        isActive: true,
        balance: '2613.77',
        name: 'Pauline Gallegos',
        phone: '+1 (985) 593-3328',
    },
    {
        isActive: false,
        balance: '3976.41',
        name: 'Middleton Chaney',
        phone: '+1 (995) 591-2478',
    },
    {
        isActive: false,
        balance: '1934.58',
        name: 'Burns Poole',
        phone: '+1 (885) 559-3422',
    },
    {
        isActive: true,
        balance: '3261.65',
        name: 'Mcfadden Horne',
        gender: 'male',
        phone: '+1 (942) 565-3988',
    },
];

let sortedArr = [];

users.forEach((user) => {
    if (user.isActive && user.balance > 2000) {
        sortedArr.push(user.phone);
    }
});

console.log(users);
console.log(sortedArr);
