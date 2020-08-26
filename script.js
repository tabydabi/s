"use strict";

let expenses = [];

let money;

let start = function(){
    do {
    money = prompt("Ваш месячный доход?", 50000);
    } while(isNaN(money) || money.trim() === '' || money === null);
      //money = prompt("Ваш месячный доход?");
    
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
      for (let key in appData){
          console.log('Ключ: ' + key + ' Значени: ' + expenses[key]);
          //console.log(appData.expensesCash[key]);
      }
      },



//    getExpensesMonth: function(){
//     let sum = 0;
    
//     for (let i = 0; i < 2; i++){
//     expenses[i] = prompt("Введите обязательную статью расходов?");
//     let value
//         do {
//         value = +prompt("Во сколько это обойдется?");
//         } while(!parseInt(value));
//      sum += value
//      }
//      return sum;
//    },




   getAccumulatedMonth: function(a, b){
    return a - b;
   },


    getTargetMonth : function(a, b){
        return a/b
     }
}


appData.asking();
console.log(appData.addExpenses);
console.log(appData.deposit);
console.log(appData.expenses);
//console.log('getExpensesMonth();: ', getExpensesMonth());
appData.getExpensesMonth();


//console.log(appData.getExpensesMonth);

// let expensesAmount = appData.getExpensesMonth();
// let accumulatedMonth = appData.getAccumulatedMonth(money, expensesAmount);
// let cash = +prompt("Цель сколько заработать");
// let TargetMonth = appData.getTargetMonth(cash, accumulatedMonth);
// console.log('Накопления за месяц : ' + accumulatedMonth);
// console.log('Расход :' + ' ' + +expensesAmount);
// console.log(appData.addExpenses);
// console.log(appData.deposit);

if (TargetMonth > 0){
    console.log('Вы достигните цели за : ', Math.ceil(TargetMonth), "месяцев");
} else console.log('Вы не достигните цели ');







// let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
// addExpenses.split(', ');

//let deposit = confirm("Есть ли у вас депозит в банке?");


//let expenses = [];

// let getExpensesMonth = function() {
//     let sum = 0;
    
//     for (let i = 0; i < 2; i++){
//     expenses[i] = prompt("Введите обязательную статью расходов?");
//     let value
//         do {
//         value = +prompt("Во сколько это обойдется?");
//         } while(!parseInt(value));
//      sum += value
// }
// return sum;
// }





// let getAccumulatedMonth = function(a, b){
//     return a - b;
// }
// console.log('Накопления за месяц : ' + getAccumulatedMonth(money, expensesAmount));


//let accumulatedMonth = getAccumulatedMonth(money, expensesAmount);
//console.log('www ' + accumulatedMonth);





// let getTargetMonth = function(a, b){
//     return a/b;
// }
// if (getTargetMonth(cash, accumulatedMonth) > 0){
//     console.log('Вы достигните цели за : ', Math.ceil(getTargetMonth(cash, accumulatedMonth)), "месяцев");
// } else console.log('Вы не достигните цели ');


let budgetDay = (accumulatedMonth * 12)/365;
console.log('Ваш дневной бюджет ' + Math.round(budgetDay));


if (budgetDay >= 1200) console.log("У вас высокий уровень дохода");
else if (budgetDay >= 600 && budgetDay < 1200) console.log("У вас средний уровень дохода");
else if(budgetDay < 600) console.log("К сожалению у вас уровень дохода ниже среднего");
else if(budgetDay < 0) console.log("Что то пошло не так");




