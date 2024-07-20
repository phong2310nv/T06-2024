// Bài 1: Kiểm tra xem một số có phải là số nguyên tố lớn không. Nếu có, in ra số nguyên tố lớn nhất trong khoảng từ 1 đến số đó.
// Input: 20
// Output: 19

// Input: 15
// Output: 13

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function findLargestPrime(n) {
    let largestPrime = 0;
    for (let i = 1; i <= n; i++) {
      if (isPrime(i)) largestPrime = i;
    }
    return largestPrime;
  }
  
  const n = 20; 
  
  const largestPrime = findLargestPrime(n);
  
  if (largestPrime > 0) {
    console.log( largestPrime);
  } else {
    console.log(n);
  } 

   
// Bài 2: Tìm tất cả các cặp số (a, b) sao cho a và b là số nguyên tố và a + b = n, với n là số nguyên dương cho trước.
// Input: 10
// Output: (3, 7)

// Input: 20
// Output: (3, 17), (7, 13)

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function findPrimePairs(n) {
    const primePairs = [];
    for (let a = 2; a < n; a++) {
      for (let b = a + 1; b <= n; b++) {
        if (isPrime(a) && isPrime(b) && a + b === n) {
          primePairs.push([a, b]);
        }
      }
    }
    return primePairs;
  }
  
  
  const n = 10; 
  
  const primePairs = findPrimePairs(n);
  
  if (primePairs.length > 0) {
    console.log(`Các cặp số nguyên tố (a, b) thỏa mãn là:`);
    for (const pair of primePairs) {
      console.log(pair);
    }
  } else {
    console.log(`Không tìm thấy cặp số nguyên tố nào thỏa mãn.`);
  }
  


// Bài 3: Tìm tất cả các số chia hết cho 7 nhưng không chia hết cho 5 trong khoảng từ m đến n, với m và n là số nguyên dương cho trước.
// Input: 10, 30
// Output: 14, 21, 28

// Input: 50, 70
// Output: 56, 63

function findNumbersDivisibleBy7(m, n) {
    const numbers = [];
    for (let i = m; i <= n; i++) {
      if (i % 7 === 0 && i % 5 !== 0) {
        numbers.push(i);
      }
    }
    return numbers;
  }
  
  
  const m = 10;
  const n = 30; 
  
  const numbers = findNumbersDivisibleBy7(m, n);
  
  if (numbers.length > 0) {
    console.log(`Các số chia hết cho 7 nhưng không chia hết cho 5 trong khoảng từ ${m} đến ${n} là:`);
    for (const number of numbers) {
      console.log(number);
    }
  } else {
    console.log(`Không tìm thấy số nào thỏa mãn.`);
  }
  

//   Bài 4: Tính tổng các chữ số của một số nguyên dương n và kiểm tra xem tổng đó có phải là số nguyên tố không.
//   Input: 123
//   Output: Tổng các chữ số: 6, Không phải số nguyên tố
//   Input: 379
//   Output: Tổng các chữ số: 19, Số nguyên tố

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function sumOfDigits(n) {
    let sum = 0;
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    return sum;
  }
  
  
  const n = 123; 
  
  const sumOfDigits = sumOfDigits(n);
  const isPrimeSum = isPrime(sumOfDigits);
  
  console.log(`Tổng các chữ số của ${n} là: ${sumOfDigits}`);
  
  if (isPrimeSum) {
    console.log(`${sumOfDigits} là số nguyên tố`);
  } else {
    console.log(`${sumOfDigits} không phải là số nguyên tố`);
  }
  
//   Bài 5: Tính trung bình điểm của học sinh theo từng môn học
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
// */

const students = [
    { name: "Alice", scores: [85, 90, 80] },
    { name: "Bob", scores: [90, 95, 85] },
    { name: "Carol", scores: [75, 80, 70] },
    { name: "David", scores: [80, 85, 75] },
    { name: "Eve", scores: [95, 100, 90] },
  ];
  
  function calculateSubjectAverages(students) {
    const subjectAverages = {
      subject1: 0,
      subject2: 0,
      subject3: 0,
    };
  
    // Tính tổng điểm từng môn
    for (const student of students) {
      for (let i = 0; i < student.scores.length; i++) {
        subjectAverages[`subject${i + 1}`] += student.scores[i];
      }
    }
  
    // Tính điểm trung bình từng môn
    const numStudents = students.length;
    for (const subject in subjectAverages) {
      subjectAverages[subject] /= numStudents;
    }
  
    return subjectAverages;
  }
  
  const subjectAverages = calculateSubjectAverages(students);
  
  console.log("Điểm trung bình của mỗi môn học:");
  for (const subject in subjectAverages) {
    console.log(`Môn ${subject.slice(7)}: ${subjectAverages[subject]}`);
  }


//    Bài 6: Cho 1 số nguyên dương n. Viết hàm tính n giai thừa (n!). Ví dụ: n = 5, kết quả trả về là 5! = 1 * 2 * 3 * 4 * 5 = 120.

    function GiaiThua(n){
        if(n<0){
           throw new Error ("ket qua khong hop le");
         }
        if(n === 0){
           return 1;
        }
        let cnt = 1;
        for(let i=1; i<=n; i++){
           cnt *= i;
        }
        return cnt;
       }
      const n = 5;
      const cnt = GiaiThua(n);
      console.log(${n}! = ${cnt});
  
//  Bài 7: Bài 4: cho mảng number: const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
// nếu phần tử trong mảng chẵn thì cho vào mảng evenNumbers = [] => kết quả evenNumber = [4,44,64,24,32,74,22]
// và ngược lại lấy số lẻ cho vào mảng oddNumbers
      

const arrNum= [1,4,44,64,55,24,32,55,19,17,74,22,23];
const evenNums = [];
const oddNum = [];
for(const num of arrNum){
  if(num % 2 === 0){
    evenNums.push(num);
  }
  else{
    oddNum.push(num);
  }
}
console.log(evenNums);
console.log(oddNum);

//Bài 8: Tính Tổng bội của số 3 và 5 dưới 1000

const sumMultiples = (limit) => {
    let sum = 0;
    for (let i = 1; i < limit; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  };
  
  const limit = 1000;
  const totalSum = sumMultiples(limit);
  console.log(`Tổng các bội số của 3 và 5 dưới ${limit} là: ${totalSum}`);
  

// Bài 9: Viết một hàm nhận vào một tham số là một mảng  các phần tử là số, trả về tổng của các phần tử trong mảng

function calculateArraySum(numbers) {
    let sum = 0;
    for (const number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  // Example usage
  const numbers = [10, 20, 30, 40, 50];
  const totalSum = calculateArraySum(numbers);
  console.log(`Tổng của các phần tử trong mảng là: ${totalSum}`); 
  

// Bài 10: Viết một hàm nhận vào một tham số là một mảng  các phần tử là số, trả về số lớn nhất trong mảng

function findLargestNumber(numbers) {
    let largestNumber = numbers[0]; 
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
      }
    }
  
    return largestNumber;
  }
  
  
  const numbers = [10, 25, 32, 7, 90];
  const largest = findLargestNumber(numbers);
  console.log(`Số lớn nhất trong mảng là: ${largest}`);
  
//   Bài 11: cho một object  lưu thông tin của một sản phẩm trong cửa hàng , object này lưu trữ các thông tin sau:
//   name: tên sp
//   code: mã sp, 
//   ngoài ra sẽ có các key khác để lưu lượng hàng tồn kho của sản phẩm này, ví dụ
//   red: 10   (sản phẩm này còn 10 cái màu đỏ)
//   blue: 20 ....
//   Giả sử không biết sản phẩm có những màu nào
//   Viết hàm nhận vào một object kiểu này, trả về tổng số hàng tồn kho
  


function calculateTotalInventory(product) {
    let totalInventory = 0;
    for (const color in product) {
      if (color !== "name" && color !== "code") {
        const inventoryCount = product[color]; 
        totalInventory += inventoryCount; 
      }
    }
    return totalInventory;
  }
  
  const product = {
    name: "T-shirt",
    code: "TSH123",  
    red: 10,
    blue: 20,
    green: 5,
  };
  
  const totalInventory = calculateTotalInventory(product);
  console.log(`Tổng số lượng sản phẩm ${product.name} còn lại trong kho là: ${totalInventory}`); 

  //Bài 12: Viết một hàm nhận vào một mảng các học sinh , mỗi học sinh có 2 thông tin là name(tên) và và score (điểm) , hiển thị ra màn hình console tên của học sinh có điểm cao nhất 

  function findStudentWithHighestScore(students) {
    if (students.length === 0) {
      console.log("Không có học sinh nào trong danh sách.");
      return;
    }
  
    let highestScore = students[0].score; 
    let studentWithHighestScore = students[0].name; 
    for (const student of students) {
      if (student.score > highestScore) {
        highestScore = student.score;
        studentWithHighestScore = student.name;
      }
    }
  
    console.log(`Học sinh có điểm cao nhất là: ${studentWithHighestScore} với điểm ${highestScore}`);
  }
  
  
  const students = [
    { name: "Alice", score: 90 },
    { name: "Bob", score: 85 },
    { name: "Carol", score: 95 },
    { name: "David", score: 80 },
    { name: "Eve", score: 92 },
  ];
  
  findStudentWithHighestScore(students);
  

  
  
