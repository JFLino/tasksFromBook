//Название задачи: Проверка на пустоту
function isEmpty(obj) {
    for (let key in obj) return false;
    
    return true;
}