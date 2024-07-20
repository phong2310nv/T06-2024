// Câu 7
function multiply(a, b, c) {
    return a * b * c;
}
// Gọi hàm với đủ 3 tham số
console.log(multiply(2, 3, 4));  // Output: 24 (2 * 3 * 4)
// Gọi hàm với 2 tham số
console.log(multiply(2, 3));     // Output: NaN (2 * 3 * undefined)
// Gọi hàm với 1 tham số
console.log(multiply(2));        // Output: NaN (2 * undefined * undefined)
// Gọi hàm không truyền tham số nào
console.log(multiply());         // Output: NaN (undefined * undefined * undefined)

// câu 8
function multiplied (a, b){
    return a * b;
}

let result1 = multiplied(2,3); 
let result2 = multiplied(4,5);

let sumResult = result1 + result2;

console.log(result1);
console.log(result2);
console.log(sumResult);

// câu 9
function getMax(a,b){
    if (a > b)
        return a;
    else if (a < b)
        return b;
    else 
    return a = b;
}
let max1 = getMax(3,10);
console.log(max1);

// câu 10

const person1 = {
    name: "Nguyen van A",
    rank: "A"
};
const person2 = {
    name: "Nguyen van B",
    rank: "B"
};
const person3 = {
    name: "Nguyen van C",
    rank: "C"
}
const person4 = {
    name: "Nguyen van D",
    rank: "D"
};
const person5 ={
    name: "Nguyen van E",
    rank: "E"
};

function calculateKPI(person){
    let bonus = 0;
    switch (person.rank) {
        case 'A':
            bonus = 100000;
            break;
        case 'B':
            bonus = 50000;
            break;
        case 'C':
            bonus = 10000;
            break;
        case 'D':
            bonus = 5000;
            break;
        default:
            console.log("Rank không hợp lệ");
    }
    return bonus;
}
console.log(calculateKPI(person1));
console.log(calculateKPI(person2));
console.log(calculateKPI(person3));
console.log(calculateKPI(person4));
console.log(calculateKPI(person5));

// Câu 11
function dienTichHinhThang (a, b, h) {
    return ((a + b) * h ) / 2; // công thức tính hình thang
}
console.log(dienTichHinhThang(5, 3, 4)); //tham số truyền vào

// Câu 12

function phuongTrinhBac2(a, b, c) {
    let delta = b * b - 4 * a * c;
    let result;
    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        result = `Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`;
    }
    else if (delta === 0){
        let x = -b / (2 * a);
        result = `Phương trình có nghiệm kép: x = ${x}`;
    } else {
        result = "Phương trình vô nghiệm";
    }
    return result;
}
let a = 6, b = 12, c = 6;
let area1 = phuongTrinhBac2(a, b, c);
a = 1, b = -3, c = 2;
let area2 = phuongTrinhBac2(a, b, c);
console.log(area1);
console.log(area2);

// Caau 13
// Định nghĩa hàm myFuncA
function myFuncA(number) {
    console.log(number);
}

// Định nghĩa hàm myFuncB
function myFuncB(text, callback) {
    console.log(text);      // Dòng console.log thứ nhất
    callback(100);          // Gọi hàm callback với tham số là 100
    console.log(text);      // Dòng console.log thứ hai
}

// Sử dụng các hàm
myFuncB("Đây là đoạn text", myFuncA);

