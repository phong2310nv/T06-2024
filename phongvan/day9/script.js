// Global Scope
console.log("Hello my friend");
const first_name = "nghiem";
let age;
age = 10;
var score = 100;
console.log(first_name, "first_name");
console.log(age, "age");
console.log(score, "score");

// first_name = "phong";
age = 20;
console.log(age, "age");
score = 50;
console.log(score, "score");

// Block scope
// if (true) {
//     const last_name = 'nguyen'
//     let year = 1999
//     console.log(first_name);
//     console.log(last_name);
//     console.log(year);

//   if (true) {
//     console.log(first_name);
//     console.log(last_name);
//     console.log(year);
//   }
// }
// var city = "HCM";
// var country = "VN";

// if (true) {
//   var city = "HCM";
//   console.log(city);
//   if (true) {
//     var country = "VN";
//   }
// }
// console.log(city);
// console.log(country);

for (let index = 0; index < 1; index++) {}

// Function Scope
// function DoST() {
//   var zipCode;
//   console.log("Do something");
//   var town = "HN";
//   console.log(town);
//   console.log(zipCode);
//   if (true) {
//     zipCode = "001";
//     // some code
//     let zipCode2 = "002";
//     console.log(zipCode);
//     console.log(zipCode2);
//   }
//   console.log(zipCode);
// }
// DoST();

// let home = 'HN';
// let home;
// home = "Hn";

let numberOne = 50;
let numberTwo = 100;

console.log(numberOne, "numberOne");
console.log(numberTwo, "numberTwo");
numberOne = 150;
console.log(numberOne, "numberOne");
console.log(numberTwo, "numberTwo");
numberOne = numberTwo;
console.log(numberOne, "numberOne");
console.log(numberTwo, "numberTwo");

let person1 = {
  name: "jack",
  age: 16,
  address: {
    city: "HN",
    postCode: "111",
  },
};

console.log(person1);
let person2 = person1;
console.log(person1);
person2.age = 18;
console.log(person2);
console.log(person1);

// const person3 = {
//   name: "john",
//   age: 18,
// };
// console.log(person3);
// person3.name = "john1";
// console.log(person3);

const address = "22 ' Jumpstr gerge gerg erg "; // String
const address1 = '22 " Jumpstreet'; // String
const address3 = `22 Jumpstreet`; // String
const discount = 99.99; // Number
const married = true; // Boolean
const data = null;
let data2 = null;
data2 = "xxx";

const list = [1, "2", true, {}, []];