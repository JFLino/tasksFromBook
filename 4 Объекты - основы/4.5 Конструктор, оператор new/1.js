//Название задачи: Две функции - один объект

let o = {};

function A() { return o; }
function B() { return o; }

let a = new A();
let b = new B();

alert( a == b );