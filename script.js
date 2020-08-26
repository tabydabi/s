"use strict";

let expenses = [];

let money;

let start = function(){
    do {
    money = prompt("Ваш месячный доход?", 50000);
    } while(isNaN(money) || money.trim() === '' || money === null);
    
};
start();



let appData = {
   income: {},
   addIncome: [],
   expenses: {},
   addExpenses: [],
   deposit: false,
   budget : money ,
   budgetDay: 0,
   budgetMonth: 0,
   expensesMonth: 0,

   asking: function(){
    let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
      appData.addExpenses = addExpenses.toLowerCase().split(',');
      appData.deposit = confirm("Есть ли у вас депозит в банке?");
        
            let expensesItem, expensesCash;
            for (let i = 0; i < 2; i++){
                 expensesItem = prompt('Введите обязательную статью расходов', 'Покупки');
                 expensesCash = prompt('Во сколько это обойдется?', 10000)
             appData.expenses[expensesItem] = expensesCash;
            
         
             }
    },
   
   
     getExpensesMonth: function(){     
        for (let key in appData.expenses) {
            appData.expensesMonth += Number(appData.expenses[key]);
            }
            return appData.expensesMonth;
      },


      getBudget: function(){
        appData.budgetMonth += Math.round(money - appData.expensesMonth);
        appData.budgetDay +=  Math.round((appData.budgetMonth * 12) / 365);
       },


    getTargetMonth : function(){
       let aim = +prompt('Цель сколько заработать');
       let period = aim / appData.budgetMonth;
     
        if (period > 0){
        console.log('Вы достигните цели за : ', Math.ceil(period), "месяцев");
         } else console.log('Вы не достигните цели ')
        },


        getStatusIncome: function () {
            if (appData.budgetDay >= 1200) {
            return ('У вас высокий доход');
            } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
            return ('У вас средний уровень дохода');
            } else if (appData.budgetDay <= 600 && appData.budgetDay >= 0) {
            return ('К сожалению у вас уровень дохода ниже среднего');
            } else {
            return ('Что то пошло не так');
            }
    }
}





appData.asking();
console.log('Возможные затраты ' + appData.addExpenses);
console.log('Имеете ли вы депозит в банке ' + appData.deposit);
console.log(appData.expenses);
console.log('Рассходы в месяц ' + appData.getExpensesMonth());
appData.getBudget();
console.log('Месячный бюджет ' + appData.budgetMonth);
console.log('Дневной бюджет ' + appData.budgetDay);
appData.getTargetMonth();
console.log(appData.getStatusIncome());


for (let key in appData) {
    console.log('Ключь ' + key + ' Значение ' + appData[key]);
    }
    





