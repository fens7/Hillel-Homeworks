function first() {
    function sum() {
        const firstNum = Number(prompt('Введіть перше число для суми'));
        const secondNum = Number(prompt('Введіть друге число'));

        console.log(firstNum + secondNum);
        return alert(`Результат додавання: ${firstNum + secondNum}`);
    }
    sum();

    function substraction() {
        const firstNum = Number(prompt('Введіть перше число для віднімання'));
        const secondNum = Number(prompt('Введіть друге число'));

        console.log(firstNum - secondNum);
        return alert(`Результат віднімання: ${firstNum - secondNum}`);
    }
    substraction();

    function division() {
        const firstNum = Number(prompt('Введіть перше число для ділення'));
        const secondNum = Number(prompt('Введіть друге число'));

        console.log(firstNum / secondNum);
        return alert(`Результат ділення: ${firstNum / secondNum}`);
    }
    division();

    function mult() {
        const firstNum = Number(prompt('Введіть перше число для множення'));
        const secondNum = Number(prompt('Введіть друге число'));

        console.log(firstNum * secondNum);
        return alert(`Результат множення: ${firstNum * secondNum}`);
    }
    mult();
}
