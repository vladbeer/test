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
    savings: true,
    chooseExspenses: function() {
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
    },

    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },

    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay >= 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },

    checkSaving: function() {
        if (appData.savings) {
            let save = +prompt('Какова сумма накоплений?', '');
            let percent = +prompt('Под какой процент?', '');
    
            appData.monthIncom = (save / 100 / 12 * percent).toFixed();
            alert('Ваш доход в месяц: ' + appData.monthIncom);
        }
    },

    chooseOptExspenses: function() {
        for (let i = 1; i < 3; i++) {
            let opt = prompt('Статья необязательных расходов?', '');
            appData.optionalExpensis[i] = opt;
        }
    },

    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        appData.income = items.split(', ');
        appData.push(prompt('Может что-то еще?', ''));
        appData.sort();
    }
};

