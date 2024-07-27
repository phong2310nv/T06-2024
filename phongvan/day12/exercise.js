//Bài 4: cho mảng number: const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
//nếu phần tử trong mảng chẵn thì cho vào mảng evenNumbers = [] => kết quả evenNumber = [4,44,64,24,32,74,22]
//và ngược lại lấy số lẻ cho vào mảng oddNumbers

const myArray = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23, 99];
const processArr = function (arr) {
  const evenNumbers = [];
  const oddNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    } else {
      oddNumbers.push(arr[i]);
    }
  }
  console.log(evenNumbers);
  console.log(oddNumbers);
};

processArr(myArray);

const isPrimeNumber = function (number) {
  if (number <= 1) {
    return false;
  }
  //   let kt = true;
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      //   kt = false;
      return false;
    }
  }
  return true;
};

// Bài 1: Kiểm tra xem một số có phải là số nguyên tố lớn không. Nếu có, in ra số nguyên tố lớn nhất trong khoảng từ 1 đến số đó.
const findBigPrime = function (number) {
  for (let i = number; i > 1; i--) {
    const check = isPrimeNumber(i);
    if (check) {
      return i;
    }
  }
  //   return undefined
};

// console.log(findBigPrime(100));
// console.log(findBigPrime(97));

//Bài 2: Tìm tất cả các cặp số (a, b) sao cho a và b là số nguyên tố và a + b = n, với n là số nguyên dương cho trước.

const findCouple = function (number) {
  for (let i = 2; i <= number / 2; i++) {
    if (isPrimeNumber(i) && isPrimeNumber(number - i)) {
      console.log(`(${i},${number - i})`);
    }
  }
};

// findCouple(20);
// findCouple(50);
// findCouple(10);
// findCouple(9);

//Bài 3: Tìm tất cả các số chia hết cho 7 nhưng không chia hết cho 5 trong khoảng từ m đến n, với m và n là số nguyên dương cho trước.

const findNumber1 = function (m, n) {
  const arr = [];
  for (let i = m; i <= n; i++) {
    if (i % 7 === 0 && i % 5 !== 0) {
      arr.push(i);
    }
  }
  console.log("So chia het cho 7 ma k chia het cho 5 la: ", arr);
};

findNumber1(10, 30);

//Bài 4: Tính tổng các chữ số của một số nguyên dương n và kiểm tra xem tổng đó có phải là số nguyên tố không.

const calculateSumOfNumber = function (number) {
  let start = number;
  let count = 0;
  while (start > 0) {
    const sodu = start % 10;
    count = count + sodu;
    start = Math.floor(start / 10);
  }
  console.log(count);
};
calculateSumOfNumber(235);

//Bài 5: Tính trung bình điểm của học sinh theo từng môn học
const students = [
  { name: "Alice", scores: [85, 90, 80] },
  { name: "Bob", scores: [90, 95, 85] },
  { name: "Carol", scores: [75, 80, 70] },
  { name: "David", scores: [80, 85, 75] },
  { name: "Eve", scores: [95, 100, 90] },
];

const calculateTB = function (arr) {
  let toan = 0;
  let van = 0;
  let anh = 0;
  for (const student of arr) {
    toan = toan + student.scores[0];
    van = van + student.scores[1];
    anh = anh + student.scores[2];
  }

  console.log("Diem tb toan la: ", toan / arr.length);
  console.log("Diem tb van la: ", van / arr.length);
  console.log("Diem tb anh la: ", anh / arr.length);
};

calculateTB(students);

//Bài 6: Cho 1 số nguyên dương n. Viết hàm tính n giai thừa (n!). Ví dụ: n = 5, kết quả trả về là 5! = 1 * 2 * 3 * 4 * 5 = 120.
const tinhGiaiThua = function (n) {
  let kq = 1;
  for (let i = 1; i <= n; i++) {
    kq *= i;
  }
  return kq;
};

const kqGiaithua = tinhGiaiThua(5);
console.log(kqGiaithua);

console.log(Math.floor(9.9));
console.log(Math.ceil(9.1));
console.log(Math.round(9.5));
console.log(Math.round(9.49));
