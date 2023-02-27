//Название задачи: Сколько сегодня прошло секунд?

function getSecondsToday() {
    let now = new Date();
    let tod = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - tod;

    return Math.round(diff / 1000);
}
  
alert(getSecondsToday());