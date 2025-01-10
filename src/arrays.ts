let stringArr = ['one', 'hey', 'dev'];

let guitars = ['Strat', 'Les paul', 5151];

let mixedData = ['EVH', 1984, true];


stringArr[0] = 'John';
stringArr.push('Joe');

guitars[0] = 1984
guitars.unshift('Jim')

// stringArr = guitars 
guitars = stringArr
// guitars = mixedData
mixedData = guitars

let test = []
let bands: string[] = []
bands.push('Dev Craftz')

// Tuple
let myTuple: [string, number, boolean] = ['Dev', 42, true]
// Union
let mixed = ["John", 1, false]

mixed = myTuple
myTuple[1] = 51

