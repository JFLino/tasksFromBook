//Название задачи: Максимальная зарплата

function topSalary(salaries) {
    let max = 0;
    let worker = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (max < salary) {
        max = salary;
        worker = name;
      }
    }
  
    return worker;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
alert(topSalary(salaries))