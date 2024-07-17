// Bài 1 : Sử dụng console.log để in ra hình tam giác như sau:

function drawTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let str = "";
        for (let j = 1; j <= i; j++) {
            str += "*";
        }
        console.log(str);
    }
}
drawTriangle(7);

// Bài 2: Cho 1 chuỗi số, hãy viết hàm có tác dụng sao chép chuỗi số lên 10 lần,
//  ngăn cách nhau bởi ký tự "-". Ví dụ cho chuỗi "123" thì kết quả sẽ là "123-123-123-123-123-123-123-123-123-123".

copy = (a) => {
    let str = a;
    for (let i = 0; i < 9; i++) {
        str += '-' + a;
    }
    console.log(str);
}
copy('hehehe');

// Bài 3: Cho 1 số nguyên dương n. Viết hàm tính n giai thừa (n!). Ví dụ: n = 5, kết quả trả về là 5! = 1 * 2 * 3 * 4 * 5 = 120.

giaithua = (n) => {
    let kq = 1;
    for (let i = n; i > 1; i--) {
        kq *= i;
    }
    console.log(kq);
}
giaithua(5);

// // Bài 4: cho mảng number: const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
// nếu phần tử trong mảng chẵn thì cho vào mảng evenNumbers = [] => kết quả evenNumber = [4,44,64,24,32,74,22]
// và ngược lại lấy số lẻ cho vào mảng oddNumbers
// Gợi ý: tìm hiểu thuộc tính push()

arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
evenNumber = [];
oddNumber = [];
function check(n) {
    if (n % 2 === 0) {
        evenNumber.push(n);
    } else {
        oddNumber.push(n);
    }
}
for (let i = 0; i < arrNumber.length; i++) {
    check(arrNumber[i]);
}
console.log(evenNumber);
console.log(oddNumber);

// Bài 1: Kiểm tra xem một số có phải là số nguyên tố lớn không. Nếu có, in ra số nguyên tố lớn nhất trong khoảng từ 1 đến số đó.
// Input: 20
// Output: 19

// Input: 15
// Output: 13

let maxPrime = 0;
function checkPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
function getmaxPrime(n) {
    if (n < 2) {
        console.log("So khong thoa man");
    }
    else {
        for (let i = 2; i <= n; i++) {
            if (checkPrime(i)) {
                maxPrime = i;
            }
        }
        console.log(maxPrime);
    }
}
getmaxPrime(20);


// Bài 2: Tìm tất cả các cặp số (a, b) sao cho a và b là số nguyên tố và a + b = n, với n là số nguyên dương cho trước.
// Input: 10
// Output: (3, 7)

// Input: 20
// Output: (3, 17), (7, 13)

function findNumberAdd(n) {
    let str = '';
    let count = 0;
    for (let i = 2; i < (n / 2); i++) {
        for (let j = (n / 2); j < n; j++) {
            if (i + j === n && checkPrime(i) && checkPrime(j)) {
                if (count > 0) {
                    str += ',';
                }
                str += '(' + i + ',' + j + ')';
                count++;
            }
        }
    }
    console.log(str);
}
findNumberAdd(20);

// Bài 3: Tìm tất cả các số chia hết cho 7 nhưng không chia hết cho 5 trong khoảng từ m đến n, với m và n là số nguyên dương cho trước.
// Input: 10, 30
// Output: 14, 21, 28

// Input: 50, 70
// Output: 56, 63

function findNumber(m, n) {
    let str = '';
    let count = 0;
    for (let i = m + 1; i < n; i++) {
        if (i % 7 == 0 && i % 5 != 0) {
            if (count > 0) {
                str += ',';
            }
            str += i;
            count++;
        }
    }
    console.log(str);
}
findNumber(10, 30);
findNumber(50, 70);

// Bài 4: Tính tổng các chữ số của một số nguyên dương n và kiểm tra xem tổng đó có phải là số nguyên tố không.
// Input: 123
// Output: Tổng các chữ số: 6, Không phải số nguyên tố
// Input: 379
// Output: Tổng các chữ số: 19, Số nguyên tố

function checkSumDigitPrime(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    if (checkPrime(sum)) {
        console.log('Tổng các chữ số: ' + sum + ', Số nguyên tố');
    }
    else {
        console.log('Tổng các chữ số: ' + sum + ', Không phải số nguyên tố')
    }
}
checkSumDigitPrime(123);
checkSumDigitPrime(379);

// Bài 5: Tính trung bình điểm của học sinh theo từng môn học
// const students = [
//     { name: "Alice", scores: [85, 90, 80] },
//     { name: "Bob", scores: [90, 95, 85] },
//     { name: "Carol", scores: [75, 80, 70] },
//     { name: "David", scores: [80, 85, 75] },
//     { name: "Eve", scores: [95, 100, 90] }
// ];
// Điểm trung bình của mỗi môn học:
// Môn 1: 85
// Môn 2: 90
// Môn 3: 80

const students = [
    { name: "Alice", scores: [85, 90, 80] },
    { name: "Bob", scores: [90, 95, 85] },
    { name: "Carol", scores: [75, 80, 70] },
    { name: "David", scores: [80, 85, 75] },
    { name: "Eve", scores: [95, 100, 90] }
];

function avgScore(students) {
    let m = [];
    for (let i = 0; i < students[0].scores.length; i++) {
        let sum=0;
        for (let j = 0; j < students.length; j++) {
            sum+=students[j].scores[i];
        }
        m.push(sum);
    }
    for(let i =0;i<m.length;i++){
        console.log('Mon '+(i+1)+': '+(m[i]/students.length));
    }
}
avgScore(students);

// Bài 8: Tính Tổng bội của số 3 và 5 dưới 1000

let sum = 0;
for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}
console.log(sum);

// Bài 9: Viết một hàm nhận vào một tham số là một mảng  các phần tử là số, trả về tổng của các phần tử trong mảng

function sumArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log(sum);
}
const Arrtest = [ 1,2,3,4,5,6];
sumArray(Arrtest);

// Bài 10: Viết một hàm nhận vào một tham số là một mảng  các phần tử là số, trả về số lớn nhất trong mảng

function findNumbermaxArr(arr){
    let maxNumber = arr[0];
    for(let i =1;i<arr.length;i++){
        if(maxNumber<arr[i]){
            maxNumber = arr[i];
        }
    }
    console.log(maxNumber);
}
findNumbermaxArr(Arrtest);

// Bài 11: cho một object  lưu thông tin của một sản phẩm trong cửa hàng , object này lưu trữ các thông tin sau:
// name: tên sp
// code: mã sp, 
// ngoài ra sẽ có các key khác để lưu lượng hàng tồn kho của sản phẩm này, ví dụ
// red: 10   (sản phẩm này còn 10 cái màu đỏ)
// blue: 20 ....
// Giả sử không biết sản phẩm có những màu nào
// Viết hàm nhận vào một object kiểu này, trả về tổng số hàng tồn kho\

const object = {
    name :'abcd' ,
    code : '112s',
    red:10,
    blue:20,
    green:30,
    black:40,
    white:50,
    pink:60,
}

function sumObj(obj){
    let sum=0;
    for(key in obj){
        if(typeof obj[key]==='number'){
            sum+=obj[key];
        }
    }
    console.log(sum);
}
sumObj(object);


// Bài 12: Viết một hàm nhận vào một mảng các học sinh , mỗi học sinh có 2 thông tin là name(tên) và và score (điểm) ,
//  hiển thị ra màn hình console tên của học sinh có điểm cao nhất 

let sts = [
    { name: 'Alice', score: 25 },
    { name: 'Bob', score: 30 },
    { name: 'Charlie', score: 35 },
    { name: 'Felicia', score: 50 },
    { name: 'Diana', score: 40 },
    { name: 'Eve', score: 45 },
    
];


function findStudentMaxScore(arr){
    let maxScore = arr[0].score;
    let nameMaxScore = arr[0].name;
    for(let i = 1;i<sts.length;i++){
        if(maxScore<arr[i].score){
            maxScore=arr[i].score;
            nameMaxScore=arr[i].name;
        }
    }
    console.log(nameMaxScore);
}
findStudentMaxScore(sts);



