const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
// ghép 3 array thành một array
const newArr = [...array1, ...array2, ...array3];
const newArr2 = array1.concat(array2, array3);
console.log(newArr);
console.log(newArr2);
const originalObject = {
  a: 1,
  b: 2,
  c: 3,
};
// Tạo một object mới với những data cũ , thay đổi key b lên gấp đôi, thêm key d với dữ liệu bất kỳ
const newObj = {
  ...originalObject,
  b: originalObject.b * 2,
  d: "something",
};
const numbers = [1, 2, 3, 4, 5];
// sử dụng destructuring để lấy ra  số 3 và số 5
const numbers1 = ([, , a, b] = numbers);
console.log(numbers);
console.log(numbers1);

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// Sử dụng destructruring, spread, và array functions để tạo một  array  mới với age thêm 1
const newPeople = people.map((oldItem) => {
  const { age } = oldItem;
  const newItem = {
    ...oldItem,
    age: age + 1,
  };
  return newItem;
});

const newPeople2 = people.map((oldItem) => ({
  ...oldItem,
  age: oldItem.age + 1,
}));
console.log(newPeople2);

// chuỗi thứ 2 trở đi, cách nhau bởi chuỗi đầu tiên
// VD: myFun('-','1','2')  => "1-2"

const myfun = (parm1, ...params) => {
  const result = params.join(parm1);
  return result;
};
console.log(myfun(" - ", "1", "2", "3", "4", "5"));

const person = {
  name: "Jane",
  age: 28,
  address: {
    city: "San Francisco",
    state: "CA",
  },
};

// Viết một function in ra dòng chữ `Name: Jane, City: San Francisco`

const myFun2 = (param) => {
  const {
    name,
    address: { city },
  } = param;
  console.log(`Name: &{name}, city:&{city}`);
};
myFun2(person);

const numberss = [(1, 2, 3, 4, 5, 6)];
console.log(numberss);
// Viết code tạo ra mảng mới với các thành phần chẵn

const numbers2 = numbers2.filter((item) => item % 2 === 0);
console.log(numbers2);
