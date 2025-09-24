// 1. Sử dụng number, string, boolean
var number1 = 5;
var number2 = 2.8;
var phrase = 'Result is ';
var permit = true;
var result = number1 + number2;
if (permit) {
    console.log(phrase + result);
}
else {
    console.log('Not show result');
}
// 2. Type inference
function add(x) {
    if (x === void 0) { x = 5; }
    var phrase = 'Result is ';
    phrase = 10;
    x = '2.8';
    return phrase + x;
}
var result2 = add();
console.log(result2);
// 3. Object
var person;
person = {
    name: "Typescript",
    age: 11
};
console.log(person.name);
// Bài 4
// 1. Array, tuple, any, enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person2 = {
    name: "Typescript",
    age: 11,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
    roletuple: [2, 'author']
};
var favouriteActivities;
favouriteActivities = [5, 'Sports', true];
if (person2.role === Role.AUTHOR) {
    console.log('is author');
}
person2.roletuple.push('admin');
function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === 'number' && typeof input2 === 'number')
        || resultConversion === 'as-number') {
        result = parseFloat(input1) + parseFloat(input2);
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineNumber = combine(30, 26, 'as-number');
console.log(combineNumber);
var combineStringNumber = combine('30', '26', 'as-number');
console.log(combineStringNumber);
var combineText = combine('Typescript Vs ', 'Javascript', 'as-text');
console.log(combineText);
// 3. Null & undefined
var a = null;
console.log(a);
console.log(typeof (a));
var b;
console.log(b);
console.log(typeof (b));
var userInput;
var userName;
userInput = 5;
userInput = 'Typescript';
userName = userInput;
if (typeof userInput === 'string') {
    userName = userInput;
}
