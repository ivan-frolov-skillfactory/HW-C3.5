    'use strict';

class PowerConsumingDevices {    
    constructor(title, current) {
        this.title = title;    
        this.current = current;
        this.isPlugged = false;
    }

    plugIn() {
        console.log(this.title + " is plugged!");
        this.isPlugged = true;
    }

    unplug() {
        console.log(this.title + " is unplugged!");
        this.isPlugged = false;
    }
}

//Прибор № 1
class Phone extends PowerConsumingDevices {
    constructor(title, brand, model, camera) {
        super(title);
        this.brand = brand;
        this.model = model;
        this.camera = camera; 
        this.isPlugged = true;
    }
}

//Прибор № 2
class Pad extends PowerConsumingDevices {
    constructor(title, brand, model, display) {
        super(title);    
        this.brand = brand;
        this.model = model;
        this.display = display; 
        this.isPlugged = false;
    }
}

//Экземпляры приборов
const newPhone = new Phone('Apple', 'Iphone', '15 Pro Max', '50 Mp');
const newPad = new Pad('Samsung', 'Pad', 'S8', 'UHD');

newPhone.plugIn();
console.log(newPhone);

newPad.unplug();
console.log(newPad);

