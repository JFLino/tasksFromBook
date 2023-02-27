//Название задачи: Создать расширяемый калькулятор

function Calculator() {
    this.methods = { "+": (a, b) => a + b, "-": (a, b) => a - b };
  
    this.calculate = function(str) {
        let split = str.split(' ');
        let a = +split[0];
        let m = split[1];
        let b = +split[2];
  
      if (!this.methods[m] || isNaN(a) || isNaN(b)) return undefined;
  
      return this.methods[m](a, b);
    }
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
}