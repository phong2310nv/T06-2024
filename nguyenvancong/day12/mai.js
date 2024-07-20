// function tamGiac(rows){
//    for (let index = 1; index <=rows; index++) {
//      let row = ' ';
//      for (let j = 1 ;j <= index ;j++) {
//        row += '*'
//      }
//      console.log(row);

//    }
// }

// let enterNumberRow = prompt("Nhập vào số dòng:");

// tamGiac(Number(enterNumberRow))

function tamGiac(rows) {
  for (let i = rows; i >= 1; i--) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

let enterNumberRow = prompt("Nhập vào số dòng:");

tamGiac(Number(enterNumberRow));

// cho 1 chuỗi số, hãy viết hàm có tác dụng sao chép chuỗi số đó lên 10 lần ngăn cách nhau bơi kí tự "-"

function repeatStringNum(inputString) {
  let result = inputString;
  for (let i = 1; i < 10; i++) {
    result += "-" + inputString;
    console.log(i);
  }

  return result;
}

let numberString = prompt("Nhập vào chuỗi số:");
let repeatedStringNum = repeatStringNum(numberString);
console.log(repeatedStringNum);

//  cho số nguyên dương n , viết hàm tính giai thừa trả về kq

function giaiThua(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * giaiThua(n - 1);
}

let number = prompt("Nhập vào một số nguyên dương:");
number = Number(number);

if (number >= 0 && Number.isInteger(number)) {
  let result = giaiThua(number);
  console.log("Giai thừa của " + number + " là: " + result);
} else {
  console.log("Vui lòng nhập một số nguyên dương.");
}

// // Bài 4: cho mảng number: const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
// nếu phần tử trong mảng chẵn thì cho vào mảng evenNumbers = [] => kết quả evenNumber = [4,44,64,24,32,74,22]
// và ngược lại lấy số lẻ cho vào mảng oddNumbers
// Gợi ý: tìm hiểu thuộc tính push()

const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
const evenNumbers = [];
const oddNumbers = [];
arrNumber.forEach((e) => {
  e % 2 === 0 ? evenNumbers.push(e) : oddNumbers.push(e);
});
console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);

// ----------------BÀI TẬP VỀ NHÀ-----------------

// Bài 1: Kiểm tra xem một số có phải là số nguyên tố lớn không.
//Nếu có, in ra số nguyên tố lớn nhất trong khoảng từ 1 đến số đó.
// Input: 20
// Output: 19

// Input: 15
// Output: 13

const checkNt = (number) => {
  let count = 0;
  for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
      count++;
    }
  }
  if (count === 1) {
    return true;
  } else {
    return false;
  }
};

//   // tìm số nguyên tố max
function largestPrimeLessThan(n) {
  for (let i = n - 1; i >= 2; i--) {
    if (checkNt(i)) {
      return i;
    }
    return -1;
  }
}
function showLargestPrimeLessThan(n) {
  const largestPrime = largestPrimeLessThan(n);
  console.log(`Số nguyên tố lớn nhất nhỏ hơn ${n} là: ${largestPrime}`);
}

showLargestPrimeLessThan(20);
showLargestPrimeLessThan(15);

// Bài 2: Tìm tất cả các cặp số (a, b) sao cho a và b là số nguyên tố và a + b = n, với n là số nguyên dương cho trước.
// Input: 10
// Output: (3, 7)

function findNtPairs(n) {
  const pairs = [];
  for (let a = 2; a <= n / 2; a++) {
    let b = n - a;
    if (checkNt(a) && checkNt(b)) {
      pairs.push([a, b]);
    }
  }
  if (pairs.length === 0) {
    console.log(`Không có cặp số nguyên tố nào có tổng bằng ${n}`);
  } else {
    pairs.forEach((pair) => {
      console.log(`(${pair[0]}, ${pair[1]})`);
    });
  }
}
findNtPairs(20);

// Input: 20
// Output: (3, 17), (7, 13)

// Bài 3: Tìm tất cả các số chia hết cho 7 nhưng không chia hết cho 5
//trong khoảng từ m đến n, với m và n là số nguyên dương cho trước.
// Input: 10, 30
// Output: 14, 21, 28

// Input: 50, 70
// Output: 56, 63
function findNum(m, n) {
  for (let i = m; i < n; i++) {
    if (i % 7 === 0 && i % 5 !== 0) {
      console.log(i);
    }
  }
}
findNum(10, 30);
findNum(50, 70);

// Bài 4: Tính tổng các chữ số của một số nguyên dương n và kiểm tra xem tổng đó có phải là số nguyên tố không.
// Input: 123
// Output: Tổng các chữ số: 6, Không phải số nguyên tố
// Input: 379
// Output: Tổng các chữ số: 19, Số nguyên tố

function sumAllNum(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    sum = Math.floor(num / 10);
  }
  return sum;
}
function showResult(n) {
  const sum = sumAllNum(n);
  const isNt = checkNt(n);
  console.log(
    `Tong cac chu so la:${sum}, ${
      isNt ? "So nguyen to" : "khong la la so nguyen to"
    }`
  );
}
showResult(123);
showResult(379);

// Bài 5: Tính trung bình điểm của học sinh theo từng môn học
const students = [
  { name: "Alice", scores: [85, 90, 80] },
  { name: "Bob", scores: [90, 95, 85] },
  { name: "Carol", scores: [75, 80, 70] },
  { name: "David", scores: [80, 85, 75] },
  { name: "Eve", scores: [95, 100, 90] },
];
// Điểm trung bình của mỗi môn học:
// Môn 1: 85
// Môn 2: 90
// Môn 3: 80

function scoreTb() {
  const totalScores = [0, 0, 0];
  const subjectCount = students.length;

  // Tính tổng điểm của mỗi môn học
  students.forEach((student) => {
    student.scores.forEach((score, index) => {
      totalScores[index] += score;
    });
  });

  // Tạo mảng chứa điểm trung bình của mỗi môn học
  const averageScores = [];
  for (let i = 0; i < totalScores.length; i++) {
    averageScores[i] = totalScores[i] / subjectCount;
  }

  // In kết quả
  for (let i = 0; i < averageScores.length; i++) {
    console.log(`Môn ${i + 1}: ${averageScores[i]}`);
  }
}
scoreTb();
// Bài 8: Tính Tổng bội của số 3 và 5 dưới 1000

function searchBoiSo5And3() {
  let sum = 0;
  for (let i = 3; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  console.log(" Tổng bội của số 3 và 5 dưới 1000:" + sum);
}

searchBoiSo5And3();

//Bài 9: Viết một hàm nhận vào một tham số là một mảng  các phần tử là số, trả về tổng của các phần tử trong mảng
function sumArray(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));

// Bài 10: Viết một hàm nhận vào một tham số là một mảng  các phần tử là số, trả về số lớn nhất trong mảng
function arrayNumMax(nums) {
  for (let i = 1; i < nums.length; i++) {
    let max = nums[0];
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
}
const nums = [1, 2, 3, 4, 5];
console.log(arrayNumMax(nums));

// Bài 11: cho một object  lưu thông tin của một sản phẩm trong cửa hàng , object này lưu trữ các thông tin sau:
// name: tên sp
// code: mã sp,
// ngoài ra sẽ có các key khác để lưu lượng hàng tồn kho của sản phẩm này, ví dụ
// red: 10   (sản phẩm này còn 10 cái màu đỏ)
// blue: 20 ....
// Giả sử không biết sản phẩm có những màu nào
// Viết hàm nhận vào một object kiểu này, trả về tổng số hàng tồn kho\

const inFoSp = {
  name: "IPHONE 15 PRR MAX",
  code: "0001",
  red: 10,
  blue: 20,
  green: 15,
};
function totalInventor(product) {
  let total = 0;
  for (const key in product) {
    if (key != "name" && key != "code") {
      total += product[key];
    }
  }
  return total;
}
totalInventor(inFoSp);

// Bài 12: Viết một hàm nhận vào một mảng các học sinh , mỗi học sinh có 2 thông tin là name(tên) và và score (điểm) ,
//  hiển thị ra màn hình console tên của học sinh có điểm cao nhất



const  arrStudents = [
    {name : 'Nguyen Van cong', score: 9},
    {name : 'Nguyen Van Phu', score: 7}
  ]
function scoreStudentMax (arrst){
  let topStudent  = arrst[0];
    for (const student of arrStudents) {
      if (student.score > topStudent.score) {
        topStudent = student;
    }
    }
    console.log(`Học sinh có điểm cao nhất là: ${topStudent.name}`);
}
scoreStudentMax(arrStudents)