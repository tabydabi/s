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
   percentDeposit: 0,
   moneyDeposit: 0,
   budget: money ,
   budgetDay: 0,
   budgetMonth: 0,
   expensesMonth: 0,
   period: 3,

   asking: function(){

    if (confirm('Есть ли у вас дополнительный заработок?')){
        let cashIncome
       let itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
       do {
        cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', '10000');
       } while (isNaN(cashIncome) || cashIncome.trim() === '' || cashIncome === null);
       appData.income[itemIncome] = cashIncome;
    };
     
    
    function xyi(){
        let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", 'еда, ВОДА, сНиКеРс');
        return addExpenses[0].toUpperCase() + addExpenses.substring(1).toLowerCase();
    }
    appData.addExpenses = xyi();
    appData.deposit = confirm("Есть ли у вас депозит в банке?");
       
 
        
            let expensesItem, expensesCash;
            for (let i = 0; i < 2; i++){
                 expensesItem = prompt('Введите обязательную статью расходов', 'Покупки');
                 do{
                    expensesCash = prompt('Во сколько это обойдется?', 10000);
                 }while (isNaN(expensesCash) || expensesCash.trim() === '' || expensesCash === null);
                    
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
    },
    getInfoDeposit: function(){
        let percentDeposit, moneyDeposit
        if(appData.deposit){
            do{
              percentDeposit = prompt('Какой годовой процент?','10');
            } while(isNaN(percentDeposit) || percentDeposit.trim() === '' || percentDeposit === null);
            appData.percentDeposit = percentDeposit;


            do{
            moneyDeposit = prompt('Какая сумма заложена?', '10000');
            }while(isNaN(moneyDeposit) || moneyDeposit.trim() === '' || moneyDeposit === null);
            appData.moneyDeposit = moneyDeposit;

        }
    },
    calcSavedMoney: function(){
      return appData.budgetMonth * appData.period  ;
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

   appData.getInfoDeposit();
   appData.calcSavedMoney();
   console.log(typeof(appData.addExpenses)) ;
   //console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney() ) 
    





