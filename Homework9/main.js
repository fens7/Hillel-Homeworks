// Есть блок с текстом на странице и кнопка. При нажатии на кнопку текст изменяет цвет. При повторном нажатии – возвращается предыдущий цвет

const btn = document.querySelector('.btn');
const text = document.querySelector('.p');

btn.addEventListener('click', () => {
    text.style.color ? text.style.color = '' : text.style.color = 'blue';
});

// Вывести таблицу 10×10, заполненную числами от 1 до 100 (таблица создана через js)

let num = 1;

let row, cell;
let table = document.createElement('table');

for (let i = 0; i < 10; i++) {
    row = document.createElement('tr');
    for (let j = 0; j < 10; j++) {
        cell = document.createElement('td');
        cell.innerHTML = num++;

        row.appendChild(cell);
    }
    table.appendChild(row);
}

table.style.border = '1px solid black';
table.style.marginTop = '10px';

document.body.appendChild(table);