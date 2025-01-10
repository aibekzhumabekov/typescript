"use strict";
// Object
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = {};
console.log(myObj);
const exampleObj = {
    prop1: "Dev",
    prop2: true
};
exampleObj.prop1 = 'John';
exampleObj.prop2 = false;
// type Guitarist = {
//     name: string,
//     active?: boolean,
//     album: (string | number )[]
// }
let evh = {
    active: true,
    album: [1984, 5150, 'OU812']
};
let jp = {
    name: 'Jimmy',
    active: false,
    album: ['I', 'II', 'IV']
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toLocaleUpperCase()}`;
    }
    return `Hello!`;
};
console.log(greetGuitarist(jp));
console.log(greetGuitarist(evh));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
