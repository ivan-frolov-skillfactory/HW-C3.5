'use strict';

function powerConsumingDevices(title, current) {   
    this.title = title;   
    this.current = current;
    this.isPlugged = false;
}


powerConsumingDevices.prototype.plugIn = function() {
    console.log(this.title + " is plugged!");
    this.isPlugged = true;
}


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


homePad.unplug();

NewPhone.plugIn();

homePad.plugIn();

NewPhone.unplug();
