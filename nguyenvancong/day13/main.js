
/// obj
const time = new Date();
console.log(time);
time.setFullYear(2021)
console.log( time.getFullYear());
console.log(time.getDay() + 1);


const person = {
    name:"Cong",
    age:21,
    favorite:["gaming","swimming"]


}

const result = Object.values(person);
console.log(result);
const keys = Object.keys(person);
console.log(keys);
const pair = Object.entries(person);
console.log(pair);