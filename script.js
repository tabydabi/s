"use strict";
let money = +prompt("Ваш месячный доход?");


let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
addExpenses.split(', ');


let deposit = confirm("Есть ли у вас депозит в банке?");
let exp1 = prompt("Введите обязательную статью расходов?");
let am1 = +prompt("Во сколько это обойдется?");
let exp2 = prompt("Введите обязательную статью расходов?");
let am2 = +prompt("Во сколько это обойдется?");


let getExpensesMonth = function(a, b){
    return a+b;
}
console.log('Расход' + ' ' + +getExpensesMonth(am1, am2));


let getAccumulatedMonth = function(a, b, c){
    return a-b-c;
}
console.log('Накопления за месяц : ' + getAccumulatedMonth(money, am1, am2));


let accumulatedMonth = getAccumulatedMonth(money, am1, am2);
console.log('www ' + accumulatedMonth);


let cash = +prompt("Цель сколько заработать");


let getTargetMonth = function(a, b){
    return a/b;
}
console.log('Вы достигните цели за : ', Math.ceil(getTargetMonth(cash, accumulatedMonth)), "месяцев")

// let period = cash / budgetMonth;
// console.log('Вы достигните цели за : ', Math.ceil(period), "месяцев");


let budgetDay = (accumulatedMonth * 12)/365;
console.log('Ваш дневной бюджет ' + Math.round(budgetDay));


if (budgetDay >= 1200) console.log("У вас высокий уровень дохода");
else if (budgetDay >= 600 && budgetDay < 1200) console.log("У вас средний уровень дохода");
else if(budgetDay < 600) console.log("К сожалению у вас уровень дохода ниже среднего");
else if(budgetDay < 0) console.log("Что то пошло не так");




