//Название задачи: Фильтрация по диапазону

function filterRange(arr, a, b){
    return arr.filter(el => el >= a && el<=b);
}

console.log(filterRange([1,5,8,3], 1, 4));