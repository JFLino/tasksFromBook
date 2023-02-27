//Название задачи: Подсчёт количества свойств объекта

function count(obj){
    return Object.keys(obj).length;
}

let user = {
    name: 'John',
    age: 30,
    salary: 22
  };
  
  alert( count(user) );