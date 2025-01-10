// let username = 'Devcraftz'
// console.log(username)

// let a: number = 12;
// let b: string = '6'
// let c: number = 2

// console.log(a / c);


// 1. Basic types
let firstName = 'Dev'
let myName: string;
let meaningOfLife: number;
let isLoading: boolean;
let album: any
let notes: string | number | boolean // union type

firstName = 'Devin'
myName = 'DevCraftz';
meaningOfLife = 42;
isLoading = true;

album = 1984
album = "DevCoder"
album = true

notes = 101
notes = 'DevCoder'

const sum = (a: number, b: number): number => {
    return a + b;
}

let postId: string | number // union types
let isActive: number | boolean // union types

let re: RegExp = /\w+/g
