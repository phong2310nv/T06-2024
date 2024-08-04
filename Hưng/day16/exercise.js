const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const mergArrays = [...array1, ...array2, ...array3];
console.log(mergArrays);

const originalObject = {
  a: 1,
  b: 2,
  c: 3,
};
const newObj = {
  ...originalObject,
  b: originalObject.b * 2,
  d: "something",
};
const numbers = [1, 2, 3, 4, 5];
const [, , a, b] = numbers;

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
// const newPeople = people.map(oldItem);

const person = {
  name: "Jane",
  age: 28,
  address: {
    city: "San Franciso",
    state: "CA",
  },
};

const myFun2 = (param) => {
  const {
    name,
    address: { city, srare },
  } = param;
  console.log(myFun2);
};
