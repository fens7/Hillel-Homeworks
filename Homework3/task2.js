function secondTask() {
    const number = +prompt('Введіть число від 0 до 3');

    switch (number) {
        case 0:
            console.log('Ви ввели число 0');
            break;

        case 1:
            console.log('Ви ввели число 1');
            break;
        case 2:
        case 3:
            console.log('Ви ввели число 2 або 3');
            break;
    }
}
