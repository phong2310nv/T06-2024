// // let number = 0;
// // console.log(number++);
// // console.log(++number);
// // console.log(number);

// const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
// const evenNumbers = [];
// const oddNumbers = [];
// arrNumber.forEach((e) => {
//   e % 2 === 0 ? evenNumbers.push(e) : oddNumbers.push(e);
// });
// console.log("Even Numbers:", evenNumbers);
// console.log("Odd Numbers:", oddNumbers);

// const checkNt = (number) => {
//   let count = 0;
//   for (let i = 2; i <= number; i++) {
//     if (number % i === 0) {
//       count++;
//     }
//   }
//   if (count === 1) {
//     return true;
//     console.log(`${number} la so nguyen to.`);
//   } else {
//     return false;
//     console.log(`${number} khong la so nguyen to.`);
//   }
// };

// //   // tìm số nguyên tố max
// function largestPrimeLessThan(n) {
//   for (let i = n - 1; i >= 2; i--) {
//     if (checkNt(i)) {
//       return i;
//     }
//     return -1;
//   }
// }
// function showLargestPrimeLessThan(n) {
//   if (checkNt(n)) {
//     console.log(`${n} là số nguyên tố.`);
//   } else {
//     console.log(`${n} không phải là số nguyên tố.`);
//   }
//   const largestPrime = largestPrimeLessThan(n);
//   console.log(`Số nguyên tố lớn nhất nhỏ hơn ${n} là: ${largestPrime}`);
// }

// showLargestPrimeLessThan(20);

// function findNtPairs(n) {
//   const pairs = [];
//   for (let a = 2; a <= n / 2; a++) {
//     let b = n - a;
//     if (checkNt(a) && checkNt(b)) {
//       pairs.push([a, b]);
//     }
//   }
//   console.log(pairs);
// }
// findNtPairs(10);

// // Hàm kiểm tra số nguyên tố
// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num <= 3) return true;

//   if (num % 2 === 0 || num % 3 === 0) return false;

//   for (let i = 5; i * i <= num; i += 6) {
//     if (num % i === 0 || num % (i + 2) === 0) return false;
//   }

//   return true;
// }

// // Hàm tìm tất cả các cặp số nguyên tố sao cho tổng của chúng bằng n
// function findPrimePairs(n) {
//   const pairs = [];

//   for (let a = 2; a <= n / 2; a++) {
//     let b = n - a;
//     if (isPrime(a) && isPrime(b)) {
//       pairs.push([a, b]);
//     }
//   }

//   if (pairs.length === 0) {
//     console.log(`Không có cặp số nguyên tố nào có tổng bằng ${n}`);
//   } else {
//     pairs.forEach((pair) => {
//       console.log(`(${pair[0]}, ${pair[1]})`);
//     });
//   }
// }

// // Ví dụ kiểm tra
// function findNum(m, n) {
//   for (let i = m; i < n; i++) {
//     if (i % 7 === 0 && i % 5 !== 0) {
//     }
//   }
//   console.log(i);
// }

// console.log("result:", findNum(10, 30));

// const students = [
//     { name: "Alice", scores: [85, 90, 80] },
//     { name: "Bob", scores: [90, 95, 85] },
//     { name: "Carol", scores: [75, 80, 70] },
//     { name: "David", scores: [80, 85, 75] },
//     { name: "Eve", scores: [95, 100, 90] }
// ];
// // Điểm trung bình của mỗi môn học:
// // Môn 1: 85
// // Môn 2: 90
// // Môn 3: 80

// function scoreTb (){
//     const totalScores = [0, 0, 0];
//   const subjectCount = students.length;
  
//   // Tính tổng điểm của mỗi môn học
//   students.forEach(student => {
//       student.scores.forEach((score, index) => {
//           totalScores[index] += score;
//       });
//   });
  
//   // Tạo mảng chứa điểm trung bình của mỗi môn học
//   const averageScores = [];
//   for (let i = 0; i < totalScores.length; i++) {
//       averageScores[i] = totalScores[i] / subjectCount;
//   }
  
//   // In kết quả
//   for (let i = 0; i < averageScores.length; i++) {
//       console.log(`Môn ${i + 1}: ${averageScores[i]}`);
//   }
//   }
//   scoreTb()
//   function searchBoiSo5And3(){
//     let sum = 0;
//     for(let i = 15 ; i < 1000 ;i++){
//       if(i % 3 === 0 && i % 5 === 0){
//           sum +=i;
//       }
//     }console.log(" Tổng bội của số 3 và 5 dưới 1000:" + sum);
// }

// searchBoiSo5And3()


// function arrayNumMax(nums) {
//     let max = nums[0];
//   for( let i = 1; i < nums.length ;i++){
        
//         if(nums[i] > max){
//          max = nums[i]
//         }
//     }return max

// }
// const nums = [1, 2, 3, 4, 5];
// console.log(arrayNumMax(nums)); 


