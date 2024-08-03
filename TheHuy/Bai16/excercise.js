const arrayA = [10, 20, 30];
const arrayB = [40, 50, 60];
const arrayC = [70, 80, 90];
// Ghép 3 array thành một array
const mergedArray = arrayA.concat(arrayB, arrayC);
console.log(mergedArray);

const initialObject = { x: 10, y: 20, z: 30 };
// Tạo một object mới với những data cũ, thay đổi key y lên gấp đôi, thêm key w với dữ liệu bất kỳ
const updatedObject = {
    ...initialObject,
    y: initialObject.y * 2,
    w: 100
}
console.log(updatedObject);

const digits = [10, 20, 30, 40, 50];
// Sử dụng destructuring để lấy ra số 30 và số 50

const [p, q, r, s, t] = digits;
console.log(r, t);

const users = [
    { name: "John", age: 40 },
    { name: "Jane", age: 45 },
    { name: "Doe", age: 50 },
];

// Sử dụng destructuring, spread, và arrow functions để tạo một array mới với age thêm 1
const updatedUsers = users.map(({ name, age }) => ({
    name,
    age: age + 1
}));
console.log(updatedUsers);

// Viết một hàm nhận vào danh sách các chuỗi với số lượng bất kỳ, trả ra một chuỗi mới được ghép bởi các
function joinStrings(separator, ...strings) {
    return strings.join(separator);
}

const result = joinStrings('/', 'apple', 'banana');
console.log(result);

const individual = {
    name: "Mike",
    age: 35,
    address: {
        city: "New York",
        state: "NY",
    },
};

// Viết một function in ra dòng chữ `Name: Mike, City: New York`
const displayIndividual = (person) => {
    return {
        Name: person.name,
        City: person.address.city,
    }
}
const displayInfo = displayIndividual(individual);
console.log(displayInfo);

const numbersArray = [11, 22, 33, 44, 55, 66];
const evenNumbers = numbersArray.filter((num) => num % 2 === 0);
console.log(evenNumbers);
