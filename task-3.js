const ADMIN_PASSWORD = 'adminpass';
let message;
let password = prompt("Введите пароль");
if (password === ADMIN_PASSWORD)
    {alert (message = 'Добро пожаловать!')}

else if(password == null)
    {alert (message = 'Отменено пользователем')}

else {alert (message = 'Неверный пароль')}