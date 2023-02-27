//Название задачи: Преобразуйте объект в JSON, а затем обратно в обычный объект

let user = {
    name: "Василий Иванович",
    age: 35
};

let json = JSON.stringify(user);
let res = JSON.parse(json);
console.log(res);