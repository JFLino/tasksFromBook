//Название задачи: Переведите текст вида border-left-width в borderLeftWidth

function camelize(str){
    let arr = str.split('-');
    for(let i = 1; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join('');
}

alert(camelize("background-color"))
alert(camelize("list-style-image"))
alert(camelize("-webkit-transition"))