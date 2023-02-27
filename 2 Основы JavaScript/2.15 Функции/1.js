//Название задачи: Перепишите функцию, используя оператор '?' или '||'

//Первый вариант
function checkAge1(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

//Второй вариант
function checkAge2(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

checkAge1(20);
checkAge2(10);