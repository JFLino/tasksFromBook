//Название задачи: Последнее число месяца?

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}
  
alert(getLastDayOfMonth(2022, 1));