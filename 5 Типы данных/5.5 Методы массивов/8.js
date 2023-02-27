//Название задачи: Трансформировать в объекты

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };
let users = [ vasya, petya, masha ];

let newUsers = users.map(item=>(
    {id: item.id, fullname: item.name + ' ' + item.surname}
    ));
console.log(newUsers)
