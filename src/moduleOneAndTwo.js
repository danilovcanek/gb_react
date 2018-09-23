let userName = 'Anna Ivanova';

function showInfo(user)
{
    console.log('Информация о пользователе:', user);
}

export {userName, showInfo};
export {userName as name, showInfo as show};