//Дано целое число (ввести через prompt). Выяснить, просто ли оно (простым называется число, больше 1, не имеющее других делителей кроме 1 и себя).
function thirdTask() {
    const typeNum = +prompt('Введіть число');
    let result = typeNum > 1;

    for (let i = 2; i < typeNum; i++) {
        if (typeNum % i === 0) {
            result = false;
            break;
        }
    }

    if (result) {
        console.log('Число просте');
    } else {
        console.log('Число не просте');
    }
}
