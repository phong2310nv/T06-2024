const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array4 = [7, 8, 9];
// // Ghép 3 array thành một 
// cau1:
const arr_new = [...array1, ...array2, ...array4];
console.log(arr_new);

const originalObject = { a: 1, b: 2, c: 3 };
// Tạo một object mới với những data cũ, thay đổi key b lên gấp đôi, thêm key d với dữ liệu bất kỳ
//cau2:
const ob2 ={
    ...originalObject,
    d: "any",
    b: originalObject.b*2,
}
console.log(ob2);

const numbers = [1, 2, 3, 4, 5];
// Sử dụng destructuring để lấy ra số 3 và số 5
//cau3:
const [,,n3,,n5] = numbers;
console.log(n3, n5);

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];
// Sử dụng destructuring, spread, và arrow functions để tạo một array mới với age thêm 1
//cau4:
const result = people.map((inf) => {
    const newarr = [];
    newarr.name = inf.name;
    newarr.age = inf.age + 1;
    return newarr
});
console.log(result);

// Viết một hàm nhận vào danh sách các chuỗi với số lượng bất kỳ, trả ra một chuỗi mới được ghép bởi các
// chuỗi thứ 2 trở đi, cách nhau bởi chuỗi đầu tiên
// VD: myFun('-','1','2')  => "1-2"

const person = {
    name: "Jane",
    age: 28,
    address: {
    city: "San Francisco",
    state: "CA",
    },
};
// Viết một function in ra dòng chữ `Name: Jane, City: San Francisco`
//cau5:
const p5 = (ob)=>{
    const name = ob.name;
    const address = ob.address.city;
    console.log(`Name: ${name}, City: ${address}`);
}
console.log(p5(person));
const numbers1 = [1, 2, 3, 4, 5, 6];
// Viết code tạo ra mảng mới với các thành phần chẵn
//cau6:
const find_even = numbers1.filter(num => {
    if(num % 2 === 0){
        return true
    }
    return false
});
console.log(find_even);