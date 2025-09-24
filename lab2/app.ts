
// 1. Sử dụng number, string, boolean
let number1: number = 5;
let number2: number = 2.8;
let phrase: string = 'Result is ';
let permit: boolean = true;

const result = number1 + number2;
if (permit) {
    console.log(phrase + result);
} else {
    console.log('Not show result');
}

// 2. Type inference
function add(x = 5) {
    let phrase = 'Result is ';

    phrase = 10 as any; 
    x = '2.8' as any;

    return phrase + x;
}

let result2: number = add() as any;
console.log(result2);

// 3. Object
var person: {
    name: string,
    age: number
}

person = {
    name: "Typescript",
    age: 11
}

console.log(person.name);


// Bài 4

// 1. Array, tuple, any, enum
enum Role { ADMIN, READ_ONLY, AUTHOR }

const person2 = {
    name: "Typescript",
    age: 11,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
    roletuple: [2, 'author'] as [number, string]
}

let favouriteActivities: any[];
favouriteActivities = [5, 'Sports', true];

if (person2.role === Role.AUTHOR) {
    console.log('is author');
}

person2.roletuple.push('admin');  

// 2. Literal type & custom type
type Combinable = number | string;

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: 'as-number' | 'as-text'
) {
    let result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') 
        || resultConversion === 'as-number') {
        result = parseFloat(input1 as any) + parseFloat(input2 as any);
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineNumber = combine(30, 26, 'as-number');
console.log(combineNumber);

const combineStringNumber = combine('30', '26', 'as-number');
console.log(combineStringNumber);

const combineText = combine('Typescript Vs ', 'Javascript', 'as-text');
console.log(combineText);

// 3. Null & undefined
var a = null;
console.log(a);
console.log(typeof(a));

var b;
console.log(b);
console.log(typeof(b));

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Typescript';

userName = <string>userInput;

if (typeof userInput === 'string') {
    userName = userInput;
}
