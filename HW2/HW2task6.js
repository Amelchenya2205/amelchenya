let newLogin = prompt('Введите имя пользователя.',);
    let newPassword = prompt('Придумайте ваш пароль.',);




let Authenticator = function() {
    let login = prompt('Введите имя пользователя.',);
    let password = prompt('Введите пароль.',);


    if(login == newLogin && password == newPassword) {
        alert('Добро пожаловать' + ' ' + login);
    }
    else {
        alert('Неправильно введено имя пользователя или пароль')
    }
}