//Название задачи: Функция pow(x,n)
let x = prompt("Enter x", '');
let n = prompt("Enter n", '');
alert(pow(x, n));

function pow(a, b){
    if(b < 1) return;
    return a ** b;
}

