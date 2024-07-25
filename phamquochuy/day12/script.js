/*
Bài 1: Kiểm tra xem một số có phải là số nguyên tố lớn không. 
Nếu có, in ra số nguyên tố lớn nhất trong khoảng từ 1 đến số đó.

Input: 20
Output: 19

Input: 15
Output: 13
*/
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function findLargestPrime(n) {
  let largestPrime = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      largestPrime = i;
    }
  }
  return largestPrime;
}

console.log(findLargestPrime(20)); // Output: 19
console.log(findLargestPrime(15)); // Output: 13

/*
Bài 2: Tìm tất cả các cặp số (a, b) sao cho a và b là số 
nguyên tố và a + b = n, với n là số nguyên dương cho trước.

Input: 10
Output: (3, 7)

Input: 20
Output: (3, 17), (7, 13)
*/

function findPrimePairs(n) {
  const primePairs = [];
  for (let a = 2; a < n; a++) {
    let b = n - a;
    if (isPrime(a) && isPrime(b) && a <= b) {
      primePairs.push([a, b]);
    }
  }
  return primePairs;
}

console.log(findPrimePairs(10)); // Output: [[3, 7]] , [[5, 5]]
console.log(findPrimePairs(20)); // Output: [[3, 17], [7, 13]]

/*
Bài 3: Tìm tất cả các số chia hết cho 7 nhưng không chia hết cho 5 trong 
khoảng từ m đến n, với m và n là số nguyên dương cho trước.

Input: 10, 30
Output: 14, 21, 28

Input: 50, 70
Output: 56, 63
*/

function findDivisibleBy7(m, n) {
  const result = [];
  for (let i = m; i <= n; i++) {
    if (i % 7 === 0 && i % 5 !== 0) {
      result.push(i);
    }
  }
  return result;
}

console.log(findDivisibleBy7(10, 30)); // Output: [14, 21, 28]
console.log(findDivisibleBy7(50, 70)); // Output: [56, 63]

/*
Bài 4: Tính tổng các chữ số của một số nguyên dương n và kiểm tra 
xem tổng đó có phải là số nguyên tố không.

Input: 123
Output: Tổng các chữ số: 6, Không phải số nguyên tố

Input: 379
Output: Tổng các chữ số: 19, Số nguyên tố
*/

function checkPrimeSum(n) {
  // Tính tổng các chữ số
  let sum = 0;
  while (n > 0) {
    const digit = n % 10; // Lấy chữ số cuối cùng của n
    sum += digit;
    n = Math.floor(n / 10); // Loại bỏ chữ số cuối cùng của n
  } // Lặp cho đến khi n bằng 0

  const isPrimeSum = isPrime(sum);

  console.log("Tổng các chữ số:", sum);
  console.log(isPrimeSum ? "Số nguyên tố" : "Không phải số nguyên tố");
}

// Input
const n = 123;
checkPrimeSum(n);

/*
Bài 5: Tính trung bình điểm của học sinh theo từng môn học
const students = [
    { name: "Alice", scores: [85, 90, 80] },
    { name: "Bob", scores: [90, 95, 85] },
    { name: "Carol", scores: [75, 80, 70] },
    { name: "David", scores: [80, 85, 75] },
    { name: "Eve", scores: [95, 100, 90] }
];
Điểm trung bình của mỗi môn học:
Môn 1: 85
Môn 2: 90
Môn 3: 80
*/

const students = [
  { name: "Alice", scores: [85, 90, 80] },
  { name: "Bob", scores: [90, 95, 85] },
  { name: "Carol", scores: [75, 80, 70] },
  { name: "David", scores: [80, 85, 75] },
  { name: "Eve", scores: [95, 100, 90] },
];

/*
Bài 6: Cho 1 số nguyên dương n. Viết hàm tính n giai thừa (n!). 
Ví dụ: n = 5, kết quả trả về là 5! = 1 * 2 * 3 * 4 * 5 = 120.
*/

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));

/*
Bài 7: Bài 4: cho mảng number: 
const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];

nếu phần tử trong mảng chẵn thì cho vào 
mảng evenNumbers = [] => kết quả evenNumber = [4,44,64,24,32,74,22]
và ngược lại lấy số lẻ cho vào mảng oddNumbers
*/
const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
const evenNumbers = [];
const oddNumbers = [];

for (const number of arrNumber) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  } else {
    oddNumbers.push(number);
  }
}

console.log("Số chẵn:", evenNumbers);
console.log("Số lẻ:", oddNumbers);

/*
Bài 8: Tính Tổng bội của số 3 và 5 dưới 1000
*/

let sum = 0;
const multiples = [];
for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    multiples.push(i);
    sum += i;
  }
}

console.log(multiples);
console.log(sum);

/*
Bài 9: Viết một hàm nhận vào một tham số là một mảng  các phần tử là số, trả về tổng của các phần tử trong mảng
*/

const numbers = [1, 1, 10, 20, 3];

function sumArray(numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

console.log(sumArray(numbers));

/*
Bài 10: Viết một hàm nhận vào một tham số là một mảng  các phần tử là số, trả về số lớn nhất trong mảng
*/

function findLargest(numbers) {
  let largest = numbers[0];
  for (const number of numbers) {
    if (number > largest) {
      largest = number;
    }
  }
  return largest;
}

console.log(findLargest(numbers));

/*
Bài 11: cho một object  lưu thông tin của một sản phẩm trong cửa hàng , object này lưu trữ các thông tin sau:
name: tên sp
code: mã sp, 
ngoài ra sẽ có các key khác để lưu lượng hàng tồn kho của sản phẩm này, ví dụ
red: 10   (sản phẩm này còn 10 cái màu đỏ)
blue: 20 ....
Giả sử không biết sản phẩm có những màu nào
Viết hàm nhận vào một object kiểu này, trả về tổng số hàng tồn kho
*/

const product = {
  name: "Áo thun",
  code: "SP123",
  red: 10,
  blue: 20,
  pink: 5,
};

function totalInventory(product) {
  let total = 0;
  for (let color in product) {
    if (color !== "name" && color !== "code") {
      total += product[color];
    }
  }

  return total;
}

console.log(totalInventory(product));

/*
Bài 12: Viết một hàm nhận vào một mảng các học sinh , mỗi học sinh có 2 thông tin là name(tên) và và score (điểm) , 
hiển thị ra màn hình console tên của học sinh có điểm cao nhất 
*/

const studentsNew =[
    {name : 'Nguyen Van Cong', score: 9},
    {name : 'Nguyen Van Phu', score: 7},
    {name : 'Nguyen Van Phu', score: 10}
];

function topStudent(studentsNew) {
    let highestScore = 0;
    let topStudentName = '';

    for (const student of studentsNew) {
        const score = student.score;
        if (score > highestScore) {
          highestScore = score;
          topStudentName = student.name;
        }
      }
      console.log("Học sinh có điểm cao nhất:", topStudentName + " - " + highestScore);
}
topStudent(studentsNew);
