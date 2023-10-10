'use strict';

function receivingObject (obj) {    //Создаю функцию, принимающую объект
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {    //Вывожу собственные свойства объекта
            console.log(prop, obj[prop]);
        }
    }
}

const phone = {    //Создаю объект (нитки для вязания)
    name: "Iphone",
    brand: 'Apple',
    model: '15 Pro Max',
}   

const pad = {    //Создаю объект (спицы для вязания)
    name: "Pad",
    brand: "Samsung",
    model: 'S8 Ultra',
}

receivingObject(phone);    //Выводим собственные свойства объекта - нитки
receivingObject(pad);    //Выводим собственные свойства объекта - спицы
