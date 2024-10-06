function thirdTask() {
    const num = +prompt('Введіть якесь число', 0);

    if (num >= 0 && num <= 500) {
        alert('Число входить в діапазон від 0 до 500');
    } else {
        alert('Число не входить в діапазон від 0 до 500');
    }
}
