//Название задачи: Вывести простые числа
let num = 25;

first:
for (let i = 2; i <= num; i++) {
    for (let j = 2; j < i; j++)
        if (i % j == 0) continue first;

  console.log(i); 
}