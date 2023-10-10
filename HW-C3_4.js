'use strict';

function powerConsumingDevices(title, current) {    //Создаем функцию энергопотребляющих устройств (и задаем им параметры - наименование и количество тока берущего данным устройством)
    this.title = title;    //переназначаем
    this.current = current;
    this.isPlugged = false;
}

//Метод - определяющий подключено ли устройство к сети
powerConsumingDevices.prototype.plugIn = function() {
    console.log(this.title + " is plugged!");
    this.isPlugged = true;
}

//Метод - определяющий отключено ли устройство от сети
powerConsumingDevices.prototype.unplug = function() {
    console.log(this.title + " is unplugged!");
    this.isPlugged = false;
}

//Прибор № 1
function Telephone(title, brand, model, camera) {
    this.title = title;
    this.brand = brand;
    this.model = model;
    this.camera = camera; 
    this.isPlugged = true;
}

Telephone.prototype = new powerConsumingDevices();

//Прибор № 2
function PAD(title, brand, model, display) {
    this.title = title;
    this.brand = brand;
    this.model = model;
    this.display = display; 
    this.isPlugged = false;
}

PAD.prototype = new powerConsumingDevices();

//Создаем экземпяры устройств
const NewPhone = new Telephone('Apple', 'Iphone', '15 Pro Max', '50 Mp');
const homePad = new PAD('Samsung', 'Pad', 'S8', 'UHD');

// отключить TV от сети
homePad.unplug();
//console.log(NewPad);

// подключить телефон к сети
NewPhone.plugIn();

//console.log(NewPhone);

// включить TV к сети
homePad.plugIn();

//console.log(NewPad);

// отключить телефон от сети
NewPhone.unplug();
//console.log(NewPhone);