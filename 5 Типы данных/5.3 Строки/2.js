//Название задачи: Проверка на спам

function checkSpam(str){
    str = str.toLowerCase();
    return str.includes("viagra") || str.includes("xxx")
}