//Название задачи: Оставить уникальные элементы массива
function unique(arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr.lastIndexOf(arr[i]) != i){
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}
  
let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
  
alert( unique(strings) );