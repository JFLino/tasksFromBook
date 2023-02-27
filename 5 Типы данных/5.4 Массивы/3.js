//Название задачи: Подмассив наибольшей суммы

function getMaxSubSum(arr) {
    let sum1 = 0; 
    for (let i = 0; i < arr.length; i++) {
      let sum2 = 0;
      for (let j = i; j < arr.length; j++) {
        sum2 += arr[j];
        sum1 = Math.max(sum1, sum2);
      }
    }
    return sum1;
}
  