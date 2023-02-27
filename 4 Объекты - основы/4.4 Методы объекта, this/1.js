//Название задачи: Создайте калькулятор
let calculator = {
    read(){
        let val1 = prompt("Enter first value: ", '');
        let val2 = prompt("Enter second value", '');
        this.val1 = +val1;
        this.val2 = +val2;
    },

    sum(){ return this.val1 + this.val2; },
    mul(){ return this.val1 * this.val2; },
}