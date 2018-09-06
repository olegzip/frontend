let ZODIACSIGNS = [
    [1, ''],
    [19, 'Козерог (22.12–19.1)'],
    [18, 'Водолей (20.1–18.2)'],
    [20, 'Рыбы (19.2–20.3)'],
    [19, 'Овен (21.3–19.4)'],
    [20, 'Телец (20.4–20.5)'],
    [21, 'Близнецы (21.5–21.6)'],
    [22, 'Рак (22.6–22.7)'],
    [22, 'Лев (23.7–22.8)'],
    [22, 'Дева (23.8–22.9)'],
    [22, 'Весы (23.9–22.10)'],
    [22, 'Скорпион (23.10–22.11)'],
    [21, 'Стрелец (23.11–21.12)']
];

let userDate = prompt("Введите дату рождения в формате dd.mm.yyyy:", "");
let parsedDate = userDate.split(".");


// console.log(Number.valueOf(parsedDate[2]));
// console.log(+parsedDate[2]);

let currentDate = new Date();
let parsedCurrentDate = [
    currentDate.getDay(),
    currentDate.getMonth()+1,
    currentDate.getFullYear()];

function yearDistinction(date1, date2) {
    if (date1[0]-date2[0] < 0) {
        --date1[1];
    } if (date1[1]-date2[1] < 0){
        --date1[2];
    }
    return date1[2] - date2[2];
}

function horoscope(day, month) {
    if (day > ZODIACSIGNS[month][0]){
        month += 1;
    }
    if (month > 12) {
        month = 1;
    }
    return (ZODIACSIGNS[month][1]);
}

console.log(yearDistinction(parsedCurrentDate[2], parsedDate[2]));
console.log(horoscope(parsedDate[0], parsedDate[1]));

