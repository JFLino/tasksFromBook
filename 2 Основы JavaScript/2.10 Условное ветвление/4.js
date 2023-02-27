//Название задачи: Перепишите 'if..else' в '?'

let login = 'Директор';
let message = (login == 'Сотрудник') ? 'Привет' :
                (login == 'Директор') ? 'Здравствуйте' :
                (login == '') ? 'Нет логина' : '';
console.log(message);
