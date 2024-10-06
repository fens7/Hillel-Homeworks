// Один доллар стоит 26 гривен. Вывести данные с расчетом стоимости 10, 20, 30... 100 долларов
function firstTask() {
    let oneDollar = 26;
    let i = 0;

    while (i < 100) {
        i += 10;
        console.log(`${i}$ = ${oneDollar * i} гривень`);
    }
}
