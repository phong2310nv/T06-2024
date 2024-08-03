//cau 1
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array4 = [7, 8, 9];

const combinedArray = [...array1, ...array2, ...array4];
console.log(combinedArray);

//cau 2
const originalObject = { a: 1, b: 2, c: 3 };

const newObject = {
    ...originalObject,
    b : originalObject.b * 2,
    d : 'any data' 
};

console.log(newObject);

//cau 3
const numbers =[1, 2, 3, 4, 5];

const[ , , three, , five] = numbers;

console.log(three);
console.log(five);

//cau 4
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];

const updatedPeople = people.map(({name, age}) => ({
    name,
    age: name + 1
}));

console.log(updatedPeople);

function myFun(separator, ...strings){
    return strings.join(separator);
}

console.log(myFun('-', '1', '2'));
console.log(myFun('/', '2024', '08', '03'));

//cau 5
const person = {
    name: "Jane",
    age: 28,
    address:{
        city: "San Francisco",
        state: "CA",
    },
};

function prirntPersonDetails({name, address: { city } }) {
    console.log(`Name: ${name}, City: ${city}`);    
}

prirntPersonDetails(person);

//cau 6
const numbers1 = [1, 2, 3, 4, 5, 6];

const eveNumbers numbers1.filter(number => number % 2 == 0);

console.log(eveNumbers);
