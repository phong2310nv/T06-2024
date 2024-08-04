//Bài 1: Kiểm tra xem một số có phải là số nguyên tố lớn không. Nếu có, in ra số nguyên tố lớn nhất trong khoảng từ 1 đến số đó.
// Input: 20
// Output: 19

// Input: 15
// Output: 13
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  let maxCheck = Math.sqrt(num);
  for (let i = 3; i <= maxCheck; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function findLargestPrime(num) {
  let largestPrime = null;

  // Tìm số nguyên tố lớn nhất <= num
  for (let i = num; i >= 2; i--) {
    if (isPrime(i)) {
      largestPrime = i;
      break;
    }
  }

  return largestPrime;
}
console.log(findLargestPrime(20));
console.log(findLargestPrime(15));

// Bài 2: Tìm tất cả các cặp số (a, b) sao cho a và b là số nguyên tố và a + b = n, với n là số nguyên dương cho trước.
// Input: 10
// Output: (3, 7)

// Input: 20
// Output: (3, 17), (7, 13)

function findPrime(n) {
  let findPrime = [];
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    if (num === 2) {
      return true;
    }
    if (num % 2 === 0) {
      return false;
    }
    let maxCheck = Math.sqrt(num);
    for (let i = 3; i <= maxCheck; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  for (let a = 2; a <= n; a++) {
    let b = n - a;
    if (isPrime(a) && isPrime(b)) {
      findPrime.push([a, b]);
    }
  }
  return findPrime;
}
let n = 10;
let pairs = findPrime(n);
console.log(`Các cặp số nguyên tố (a, b) sao cho a + b = ${n}:`);
pairs.forEach((pair) => {
  console.log(pair);
});

// Bài 3: Tìm tất cả các số chia hết cho 7 nhưng không chia hết cho 5 trong khoảng từ m đến n, với m và n là số nguyên dương cho trước.
// Input: 10, 30
// Output: 14, 21, 28

// Input: 50, 70
// Output: 56, 63

function findNumber(a, b) {
  let result = [];
  for (let i = a; i <= b; i++) {
    if (i % 7 === 0 && i % 5 !== 0) {
      result.push(i);
    }
  }
  return result;
}
let a = 10;
let b = 30;
let result = findNumber(a, b);
console.log(result);

// Bài 4: Tính tổng các chữ số của một số nguyên dương n và kiểm tra xem tổng đó có phải là số nguyên tố không.
// Input: 123
// Output: Tổng các chữ số: 6, Không phải số nguyên tố
// Input: 379
// Output: Tổng các chữ số: 19, Số nguyên tố

function numPrime(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}
function checkDigitSum(n) {
  const digitSum = numPrime(n);
  const isDigitSumPrime = isPrime(digitSum);
  const primeStatus = isDigitSumPrime
    ? "Số nguyên tố"
    : "Không phải số nguyên tố";

  console.log(`Tổng các chữ số: ${digitSum}, ${primeStatus}`);
}
checkDigitSum(123);
checkDigitSum(379);

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
    alert("hello")