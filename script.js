const money = +prompt("Ваш бюджет на месяц?"),
      time = prompt ("Введите дату в формате YYYY-MM-DD");
const appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

    for ( let i = 0; i < 2; i++ ) {

    const a = prompt("Введите обязательную статью расходов в этом месяце"),
          b = prompt("Во сколько обойдеться?");
         
          
      if ((typeof(a) === 'string') && (typeof(a) != null) & (typeof(b) != null
            && a != '' && b!= '' && a.length < 50)) {
        console.log("done");
        appData.expenses[a] = b;
      }
      else {
          i=0;
      }
    };

    appData.moneyPerDay = appData.budget / 30;

    alert("Ежедневный бюджет: " + appData.moneyPerDay);

    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    }
    else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    }
    else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    }
    else {
        console.log("Произошла ошибка")
    }

