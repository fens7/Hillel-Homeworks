function firstTask() {
    const typeValue = 575;
    let value = String(typeValue);
    console.log(`Число: ${value}`);

    // console.log(typeof value);
    // "Верно ли, что все цифры одинаковы?"
    if (value[0] === value[1] && value[1] === value[2] && value[0] === value[2]) {
        console.log('Цифри одинакові');
    } else {
        console.log('Цифри не одинакові');
    }

    // "Есть ли среди цифр одинаковые цифры?"
    if (
        value[0] === value[1] ||
        value[1] === value[2] ||
        value[0] === value[2]
    ) {
        console.log('В числі є одинакові цифри');
    } else {
        console.log('Немає одинакових цифр');
    }

    value = Number(typeValue);
}
