function ariph() {
    const numFirst = Number(
        prompt('Середнє арифметичне трьох чисел. Введіть перше число')
    );
    const numSecond = Number(prompt('Введіть друге число'));
    const numThird = Number(prompt('Введіть останнє число'));

    console.log((numFirst + numSecond + numThird) / 3);
    return alert(
        `Середнє арифметичне: ${(numFirst + numSecond + numThird) / 3}`
    );
}
