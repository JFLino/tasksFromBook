//Название задачи: Создайте калькулятор при помощи конструктора, new Calculator

function Calculator(){
    this.read = function(){
        let val1 = prompt("Enter first value: ", '');
        let val2 = prompt("Enter second value", '');
        this.val1 = +val1;
        this.val2 = +val2;
    };

    this.sum = function(){ return this.val1 + this.val2; };
    this.mul = function(){ return this.val1 * this.val2; };
}