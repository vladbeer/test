'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    if (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

let appData = {
    budget: money,
    expensis: {},
    optionalExpensis: {},
    income: [],
    timeData: time,
    savings: true
};

function chooseExspenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце.', '');
        let b = prompt('Во сколько обойдется?', '');
    
        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
            a != '' && b != '' && a.length < 50) {
            appData.expensis[a] = b;
            console.log('done');
    
        } else {
            i = i - 1;
        }
    }
}

chooseExspenses();

appData.moneyPerDay = (appData.budget / 30).toFixed();

alert('Ежедневный бюджет: ' + appData.moneyPerDay);
console.log(appData);


if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay >= 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}

function checkSaving() {
    if (appData.savings) {
        let save = +prompt('Какова сумма накоплений?', '');
        let percent = +prompt('Под какой процент?', '');

        appData.monthIncom = (save / 100 / 12 * percent).toFixed();
        alert('Ваш доход в месяц: ' + appData.monthIncom);
    }
}

checkSaving();