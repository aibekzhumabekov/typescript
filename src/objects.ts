// Object

let myObj: object
myObj = []
console.log(typeof myObj);
myObj = {}
console.log(myObj);

const exampleObj = {
    prop1: "Dev",
    prop2: true
}

exampleObj.prop1 = 'John'
exampleObj.prop2 = false


interface Guitarist {
    name?: string,
    active?: boolean,
    album: (string | number )[]
}

// type Guitarist = {
//     name: string,
//     active?: boolean,
//     album: (string | number )[]
// }

let evh: Guitarist = {
    active: true,
    album: [1984, 5150, 'OU812']
}
let jp: Guitarist = {
    name: 'Jimmy',
    active: false,
    album: ['I', 'II', 'IV']
}

const greetGuitarist = (guitarist: Guitarist) => {
    if(guitarist.name) {
        return `Hello ${guitarist.name.toLocaleUpperCase()}`;
    }
    return `Hello!`
}

console.log(greetGuitarist(jp));
console.log(greetGuitarist(evh));

// Enums

enum Grade {
    U = 1, D, C, B, A
}

console.log(Grade.U)
