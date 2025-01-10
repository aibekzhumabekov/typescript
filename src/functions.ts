// Functions

const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Hello, Devz');
logMsg(add(1, 2));

let substract = function(c: number, d: number): number {
    return c - d
}

// type mathFunction = (a: number, b: number) => number
interface mathFunction{ (a: number, b: number): number}

let multiply: mathFunction = function(c, d) {
    return c * d
}

logMsg(multiply(2, 2));


// optional parameters

const addAll = (a: number, b: number, c?: number): number => {
    if(typeof c !== 'undefined'){
        return a + b + c
    }
    return a + b
}

const sumAll = (a: number, b: number, c: number = 2): number => {
    if(typeof c !== 'undefined'){
        return a + b + c
    }
    return a + b
}

logMsg(addAll(2, 5, 2));
logMsg(addAll(2, 5));

logMsg(sumAll(3, 7));

// Rest Parameters

const total = (a: number, ...nums: number[]):number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(`Total: ${total(0, 1, 2, 3, 4, 5)}`)

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while(true) {
        i++
        if( i > 100) break
    }
}

const numberOrString = (value: number | string): string => {
    if(typeof value === 'string') return 'string'
    if(typeof value === 'number') return 'number'
    return createError('This should never happen!');
}