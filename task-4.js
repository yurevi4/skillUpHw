let userCredits = 35500;
let pricePerDroid = 3000;
let sumDroids = prompt('Необходимое количество дроидов?');
let totalPrice = +pricePerDroid * +sumDroids;
let remain = userCredits - totalPrice

if (sumDroids === null) 
        {alert ('Отменено пользователем')}

else if(totalPrice <= userCredits)
    {alert ('Вы купили' + ` ${sumDroids} ` + 'дроидов. ' + 'У Вас на счету осталось' + ` ${remain} ` + 'кредитов')}

else if(totalPrice >= userCredits)
    {alert ('На Вашем счету недостаточно кредитов')}

else {alert ('Введите количество')}