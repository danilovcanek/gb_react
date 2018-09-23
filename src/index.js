//Подключаем модуль
let message = require('./moduleMessage');
let userObj = require('./moduleOneAndTwo');
let userModule = require('./moduleUserExportBefore');
let aboutDeveloperModule = require('./moduleAboutDeveloper');

//Альтернатива
import {userName as newUserName} from './moduleOneAndTwo';


//Первый модуль
console.log('First webpack project!');
message('Сообщение передано в модуль');

//Модуль './moduleOneAndTwo'
console.log(userObj.userName);
userObj.showInfo(userObj.userName);

//После переименования с помощью as
console.log('После переименования с помощью as');
console.log(userObj.name);
userObj.show(userObj.name);

//Модуль './moduleUserExportBefore'
let user1 = new userModule.User('Olga Petrova');
userModule.showData(user1);

//Вывод полученного значения через import
console.log(newUserName);

let aboutDeveloperInstance = new aboutDeveloperModule.AboutDeveloper('Aleksandr', 'Danolov');
aboutDeveloperInstance.showInfo();