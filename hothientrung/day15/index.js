const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array4 = [7, 8, 9];
// Ghép 3 array thành một array
const arr = [...array1, ...array2, ...array4];
console.log(arr);

const originalObject = { a: 1, b: 2, c: 3 };
// Tạo một object mới với những data cũ, thay đổi key b lên gấp đôi, thêm key d với dữ liệu bất kỳ
const newObject = { ...originalObject, b: originalObject.b * 2, d: "xin chao" };
console.log(newObject);

const numbers = [1, 2, 3, 4, 5];
// Sử dụng destructuring để lấy ra số 3 và số 5
const [, , destructuring, , destructurings] = numbers;
console.log(destructuring, destructurings);

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// Sử dụng destructuring, spread, và arrow functions để tạo một array mới với age thêm 1
const newPeople = people.map(({ age, ...update }) => ({
  ...update,
  age: age + 1,
}));
console.log(newPeople);

// Viết một hàm nhận vào danh sách các chuỗi với số lượng bất kỳ, trả ra một chuỗi mới được ghép bởi các
// chuỗi thứ 2 trở đi, cách nhau bởi chuỗi đầu tiên
// VD: myFun('-','1','2')  => "1-2"
function myFun(funny, ...strings) {
  if (strings.length === 0) {
    return "";
  }
  const names = people.slice(1).map((person) => person.name);
  return names.join(funny);
}
console.log(myFun("-", "2", "3"));

const person = {
  name: "Jane",
  age: 28,
  address: {
    city: "San Francisco",
    state: "CA",
  },
};

// Viết một function in ra dòng chữ `Name: Jane, City: San Francisco`
function printPersonInfo() {
  const {
    name,
    address: { city },
  } = person;
  console.log(`Name: ${name}, City: ${city}`);
}
printPersonInfo();

const numbers1 = [1, 2, 3, 4, 5, 6];

// Viết code tạo ra mảng mới với các thành phần chẵn
const [, two, , three, , four = {}] = numbers1;
console.log(two, three, four);

const newNumber = numbers1.filter((number) => number % 2 === 0);
console.log(newNumber);
