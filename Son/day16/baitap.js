const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array4 = [7, 8, 9];
// Ghép 3 array thành một array

const newArr = [...array1, ...array2, ...array4];
console.log(newArr)

const originalObject = { a: 1, b: 2, c: 3 };
// Tạo một object mới với những data cũ, thay đổi key b lên gấp đôi, thêm key d với dữ liệu bất kỳ

const newObject = {...originalObject , b: originalObject.b * 2, d: 4};
console.log(newObject)

const numbers = [1, 2, 3, 4, 5];
// Sử dụng destructuring để lấy ra số 3 và số 5

third = numbers[2];
fifth = numbers[4];
console.log(third, fifth);

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// Sử dụng destructuring, spread, và arrow functions để tạo một array mới với age thêm 1

const newPeople = people.map(({name, age})=>({name, age: age + 1}));
console.log(newPeople)

// Viết một hàm nhận vào danh sách các chuỗi với số lượng bất kỳ, trả ra một chuỗi mới được ghép bởi các
// chuỗi thứ 2 trở đi, cách nhau bởi chuỗi đầu tiên
// VD: myFun('-','1','2')  => "1-2"

const myFun = (params1, ...params)=>{
  const resutl = params.join(params1);
  return resutl;
};
console.log(myFun("-", "1", "2", "3", "4", "5"));

const person = {
  name: "Jane",
  age: 28,
  address: {
    city: "San Francisco",
    state: "CA",
  },
};

// Viết một function in ra dòng chữ `Name: Jane, City: San Francisco`

function tenMoi(person){
    console.log(`Name : ${person.name} , City: ${person.address.city}`)
}
tenMoi(person)


const numbers1 = [1, 2, 3, 4, 5, 6];

// Viết code tạo ra mảng mới với các thành phần chẵn

const newNum = numbers1.filter(num => num % 2 === 0);
console.log(newNum)