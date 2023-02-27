//Название задачи: Фильтрация по диапазону "на месте"

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
          arr.splice(i, 1);
          i--;
        }
    }
}
  
let arr = [6, 15, 0, 3, 2];
filterRangeInPlace(arr, 1, 4); 
console.log(arr); 