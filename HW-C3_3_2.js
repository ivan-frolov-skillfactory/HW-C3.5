'use strict';

function checkPropInObj (str, obj) {    
    return (str in obj);         
}

const nPhone = {   
    name: "Iphone",
    brand: 'Apple',
    length: 226,
}


console.log(checkPropInObj ("name", nPhone));   
console.log(checkPropInObj ("width", nPhone));    

