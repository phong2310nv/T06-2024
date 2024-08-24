//Bài 4 silde Thực hành vòng lặp
const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
const chiaMang = (arr) =>{
  let oddNumber =[];
  let evenNumber =[];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
      evenNumber.push(arr[i]);
    }else{
      oddNumber.push(arr[i]);
    }
  }
  return (`Số lẻ: ${oddNumber}, số chẵn : ${evenNumber}`); 
}

console.log(chiaMang(arrNumber));



// Bài 1:
const isPrimeNum = (num) => {
  if (num < 2) {
    return false;
  } else {
    let count = 0;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        count++;
      }
    }
    if (count === 0) {
      return true;
    } else {
      return false;
    }
  }
};

const biggerPrimeNum = (number) => {
  if (isPrimeNum(number)) {
    return number;
  } else {
    let max = 1;
    for (let i = 1; i <= number; i++) {
      if (isPrimeNum(i)) {
        if (i > max) {
          max = i;
        }
      }
    }
    return max;
  }
};

console.log("Bài 1: Kết quả :",biggerPrimeNum(20));

//Bài 2:

const findSumHandleIsPrime = (num) => {
    let result = [];
    for(let a = 2; a < num/2; a++){
      if(isPrimeNum(a)){
          let b = num - a;
          if(isPrimeNum(b)){
              result.push(`(${a}, ${b})`);
          }
      }
    }
    return result;
    }
  console.log("Bài 2:",findSumHandleIsPrime(20));

  // Bài 3: 
  const findNumbers = (m, n) =>{
    const result = [];
    for(let i = m; i <= n; i++){
        if(i % 7 === 0 && i % 5 !== 0){
            result.push(i);
        }
    }
    return result;
  }

  console.log("Bài 3:",findNumbers(10, 30));

  //Bài 4:
  const sumNumbersIsPrime = (num) =>{
    const numString = num.toString();
    let max = 0;
    for(let i = 0; i < numString.length; i++){
        max += +numString[i];
    }
    
    return ` Tổng của ${num} là ${max}, ${isPrimeNum(max) ? "là Số nguyên tố" : "Không phải là số nguyên tố."} `
}

console.log("Bài 4:",sumNumbersIsPrime(379));

//Bài 5 : 
const students = [
  { name: "Alice", scores: [85, 90, 80] },
  { name: "Bob", scores: [90, 95, 85] },
  { name: "Carol", scores: [75, 80, 70] },
  { name: "David", scores: [80, 85, 75] },
  { name: "Eve", scores: [95, 100, 90] },
];
const handleGPA = (students) => {
  let sumGPA = [];
  let GPA = 0;
  let doDaiChuoi = [];
  for (let value of students) {
    doDaiChuoi.push(value.scores.length);
    for (let i = 0; i < value.scores.length; i++) {
      GPA += value.scores[i];
    }
    sumGPA.push(GPA);
    GPA = 0;
  }
  for (let i = 0; i < sumGPA.length; i++) {
    sumGPA[i] /= doDaiChuoi[i];
  }
  return sumGPA;
};

let GPA = handleGPA(students);
for (let i = 0; i < GPA.length; i++) {
  console.log(` Điểm Môn ${i + 1} : ${GPA[i]}`);
}


