const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array4 = [7, 8, 9];
// Ghép 3 array thành một array
const concat = array1.concat(array2,array4);
console.log(concat);
const originalObject = { a: 1, b: 2, c: 3 };
// Tạo một object mới với những data cũ, thay đổi key b lên gấp đôi, thêm key d với dữ liệu bất kỳ
 const newOriginalObject = {
    ...originalObject,
    b:originalObject.b * 2,
    d:4
 }
 console.log(newOriginalObject);
const numbers = [1, 2, 3, 4, 5];
// Sử dụng destructuring để lấy ra số 3 và số 5

const [a,b,c,d,e] = numbers;
console.log( c, e);

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// Sử dụng destructuring, spread, và arrow functions để tạo một array mới với age thêm 1
const newpeople = people.map(({name, age})=>({
    name,
    age:age+1
 }));
 console.log(newpeople);
// Viết một hàm nhận vào danh sách các chuỗi với số lượng bất kỳ, trả ra một chuỗi mới được ghép bởi các
// chuỗi thứ 2 trở đi, cách nhau bởi chuỗi đầu tiên
// VD: myFun('-','1','2')  => "1-2"

function myFun(separator, ...strings) {
  return strings.join(separator);
}

const myFuns= myFun('-', '1', '2')
console.log(myFuns);

 

const person = {
  name: "Jane",
  age: 28,
  address: {
    city: "San Francisco",
    state: "CA",
  },
};

// Viết một function in ra dòng chữ `Name: Jane, City: San Francisco`
    const showPerson = (person)=>{
      return {
        Name : person.name,
        City : person.address.city,
      }
    }
const showTT = showPerson(person)
    console.log(showTT);
const numbers1 = [1, 2, 3, 4, 5, 6];
 const newNum1 = numbers1.filter((item)=>item % 2 === 0);
  console.log(newNum1);
// Viết code tạo ra mảng mới với các thành phần chẵn