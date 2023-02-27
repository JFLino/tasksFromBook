//Название задачи: Создайте объект с ключами из массива
function groupById(arr) {
    return arr.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
}