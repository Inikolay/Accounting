let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpenseValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


    exepensesItem = document.getElementsByClassName('expenses-item'),
    exepensesBtn = document.getElementsByTagName('button')[0],
    optionalExpenseBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalexpensesItem = document.querySelectorAll('optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    montValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    let money, time;

    startBtn.addEventListener('click', function() {
         time = prompt("Введите дату в формате YYYY-MM-DD", "");
         money = +prompt("Ваш бюджет на месяц?", "");
    
    
       while(isNaN(money) || money == "" || money == null) {
             money = +prompt("Ваш бюджет на месяц?", "");
       }
     
       appData.budjet = money;
       appData.timeData = time;
       budgetValue.textContent = money.toFixed();
       let d = new Date(Date.parse(time));
       yearValue.value = new Date(Date.parse(time)).getFullYear();
       montValue.value = new Date(Date.parse(time)).getMonth() +1;
       dayValue.value = new Date(Date.parse(time)).getDate();
    });
    
    exepensesBtn.addEventListener('click', function() {
        let sum = 0; 

        for (let i = 0; i < exepensesItem.length; i++ ) {
            let a = exepensesItem[i].value,
                b =exepensesItem[++i].value;
   
               if ((typeof(a)) === "string" && ((typeof(a)) != null) && ((typeof(b)) != null && a != "" && b != "" && a.length < 50)) {
                    console.log ("done");
                   appData.expenses[a] = b; 
                   sum += +b; 
                  
               } else{
                   i = i - 1;
               }    
       }
       expensesValue.textContent = sum;
    });

    optionalExpenseBtn.addEventListener('click', function() {
        for(let i = 0; i < optionalexpensesItem.length; i++){
            let opt = optionalexpensesItem[i].value;
            appData.optionalExpenses[i] = opt;
            optionalExpenseValue.textContent += appData.optionalExpenses[i] + ' ';
        }
    });


    countBtn.addEventListener('click', function() {

        if (appData.budjet !=undefined) {
            
            appData.moneyPerDay = (appData.budjet / 30).toFixed();  
            dayBudgetValue.textContent = appData.moneyPerDay;
    
            if (appData.moneyPerDay < 100) {
                levelValue.textContent = "Минимальный уровень достатка";
            } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){ 
                levelValue.textContent = "Средний уровень достатка";
            } else if(appData.moneyPerDay > 2000){
                levelValue.textContent = "Высокий уровень достатка";
            } else {
                levelValue.textContent = "Произошла ошибка";
            } 
        } else {
            dayBudgetValue.textContent = "Произошла ошибка";
        }   
    });

    incomeItem.addEventListener('input', function() {
           let items = incomeItem.value;
           appData.budjet.income = items.split(', ');
           incomeValue.textContent = appData.income; 
    });

    checkSavings.addEventListener('click', function() {
        if (appData.sevings == true) {
            appData.sevings = false;
        } else {
            appData.sevings = true;
        }
    });

    sumValue.addEventListener('input', function() {
        if (appData.sevings =d= true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;

                appData.monthIncome = sum/100/12*percent;
                appData.yearIncome = sum/100*percent;


                monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
                yearSavingsValue.textContent = appData.monthIncome.toFixed(1);
        }
    });

    percentValue.addEventListener('input', function() {
        if (appData.sevings =d= true) {
            let sum = +sumValue.value,
            percent = +percentValue.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;


            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.monthIncome.toFixed(1);
    }
        
    });
    
    let appData = {
        budjet: money,
        expenses: {},
        optionalExpenses: {},
        income: [],
        timeData: time,
        sevings: false,
    };
     



