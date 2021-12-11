const stateDelivery = prompt('Введите название страны для доставки');

switch(stateDelivery) {
    case 'China': alert('Доставка в Вашу страну будет стоить 150 кредитов');
    break
    case 'Chile': alert('Доставка в Вашу страну будет стоить 250 кредитов');
    break
    case 'Australia': alert('Доставка в Вашу страну будет стоить 165 кредитов');
    break
    case 'India': alert('Доставка в Вашу страну будет стоить 90 кредитов');
    break
    case 'Jamaica': alert('Доставка в Вашу страну будет стоить 130 кредитов');
    break
    default: alert('В Вашу страну доставка пока не доступна');
}