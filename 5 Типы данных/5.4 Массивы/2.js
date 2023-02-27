//Название задачи: Сумма введённых чисел

function sumInput(){
    let val, sum = 0, arr = [];
    while(true){
        val = prompt("Enter value", "");
        if(isNaN(val) || val == '' || val == null) break;
        arr.push(+val);
    }

    for(let el of arr) sum += el;
    return sum;
}

alert(sumInput())