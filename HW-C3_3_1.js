'use strict';

function receivingObject (obj) {   
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {    
            console.log(prop, obj[prop]);
        }
    }
}

const phone = {    
    name: "Iphone",
    brand: 'Apple',
    model: '15 Pro Max',
}   

const pad = {    
    brand: "Samsung",
    model: 'S8 Ultra',
}

receivingObject(phone);    
receivingObject(pad);   
