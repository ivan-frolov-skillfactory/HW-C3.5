'use strict';

function createObjWithoutProto() {
    return Object.create(null);
}

console.log(createObjWithoutProto());