//Название задачи: Проверка логина

let login = prompt("Enter your login", undefined);

if(login == 'Админ'){
    let pass = prompt("Enter your passwrod", undefined);
    if(pass == "Я главный"){
        alert("Здравствуйте!");
    }else if(pass == undefined){
        alert("Отменено");
    }else{
        alert("Неверный пароль");
    }
}else if(login == undefined){
    alert("Отменено");
}else{
    alert("Я вас не знаю");
}