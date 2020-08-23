"use strict";
// let isNumber = function(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n)
//}

let money;

let start = function(){
    do {
    money = prompt("Ваш месячный доход?");
    } while(isNaN(money) || money.trim() === '' || money === null);
      //money = prompt("Ваш месячный доход?");
    
};
start();


let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
addExpenses.split(', ');

let deposit = confirm("Есть ли у вас депозит в банке?");
// let exp1 = prompt("Введите обязательную статью расходов?");
// let am1 = +prompt("Во сколько это обойдется?");
// let exp2 = prompt("Введите обязательную статью расходов?");
// let am2 = +prompt("Во сколько это обойдется?");

let expenses = [];

let getExpensesMonth = function(){
    let sum = 0;
    

    for (let i = 0; i < 2; i++){
        expenses[i] = prompt("Введите обязательную статью расходов?");
        do{
        sum += +prompt("Во сколько это обойдется?");}
        while(isNaN(sum) || sum.trim() === '' || sum === null);
    }
    //return a+b;
    console.log(expenses);
    return sum;
};



let expensesAmount = getExpensesMonth();
console.log('Расход' + ' ' + +expensesAmount);


let getAccumulatedMonth = function(a, b){
    return a - b;
}
console.log('Накопления за месяц : ' + getAccumulatedMonth(money, expensesAmount));


let accumulatedMonth = getAccumulatedMonth(money, expensesAmount);
//console.log('www ' + accumulatedMonth);


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




