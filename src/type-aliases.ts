// Type Aliases
type stringOrNumber = string | number // union

type stringOrNumberArray = (string|number)[] // array

type Guiterist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type userId = stringOrNumber;

// Literal types
let myName1: 'Dev'
// myName1 = 'Max' // error


let userName: 'Dev' | 'John' | 'Amy'
userName = 'Amy'
// userName = 'Rachel' // error
