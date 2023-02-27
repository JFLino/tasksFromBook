//Название задачи: Случайное целое число от min до max
function randomInteger(min, max) {
    return Math.round(min + Math.random() * (max - min));
}