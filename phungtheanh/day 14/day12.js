// cau 1
function isPrime(num){
    if(num <= 1 ) return false;
    if(num === 2) return true;
    if (num % 2 === 0) return false;
    for(let i=3; i<= Math.sqrt(num); i+=2){
        if(num % i === 0) return false;
    }
    return true;
}

function largestPrimeUpTo(n){
    let largestPrime = -1;
    for(let i=2; i<=n; i++){
        if(isPrime(i)){
            largestPrime = i;
        }
    }
    return largestPrime;
}

const input = 20;
const output = largestPrimeUpTo(input);

console.log(`so nguyen to lon nhat trong khoang tu 1 den ${input} la: ${output}`);

//cau 2
function isPrime2(a){
    if(a <= 1) return false;
    if(a === 2) return true;
    if(a % 2 === 0) return false;
    for(let i=3; i<Math.sqrt(a); i+=2){
        if(a % i === 0)return false;
    }
    return true;
}

function findPrimePair(n) {
    let pairs = [];
    for(let a=2; a<=n/2; a++){
        let b = n - a;
        if(isPrime2(a) && isPrime2(b)){
            pairs.push([a,b]);
        }
    }
    return pairs;
}

const input2 = 10;
const output2 = findPrimePair(input2);

console.log(`cac cap so nguyen to co tong bang ${input2} la:`);
output2.forEach(pair => console.log(`(${pair[0]}, ${pair[1]})`));

//cau 3
function findNumbers(m,n){
    let result = [];
    for(let i=m; i<=n; i++){
        if(i%7 === 0 && i%5 !== 0){
            result.push(i);
        }
    }
    return result;
}

let m = 10;
let n = 30;
let output3 = findNumbers(m,n);
console.log(output3);

//cau 4
function sumOfDigits(n1){
    let sum = 0;
    while(n1>0){
        sum += n1 % 10;
        n1 = Math.floor(n1 / 10); 
    }
    return sum;
}

function isPrime3(num){
    if(num <= 1) return false;
    if(num <= 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false;
    for(let i=5; i*i <= num; i += 6){
        if(num % i === 0 || num % (i+2) === 0) return false;
    } 
    return true;
}

function checkSumAndPrime(n1){
    let sum = sumOfDigits(n1);
    let isPrimeSum = isPrime3(sum);
    console.log(`tong cac chu so : ${sum}, ${isPrimeSum ? "la so nguyen to" : "khong phai so nguyen to"}`);
}

let n1 = 123;
checkSumAndPrime(n1);

//cau 5
const students = [
    { name: "Alice", scores: [85, 90, 80] },
    { name: "Bob", scores: [90, 95, 85] },
    { name: "Carol", scores: [75, 80, 70] },
    { name: "David", scores: [80, 85, 75] },
    { name: "Eve", scores: [95, 100, 90] }
];

function calculateAverageScores(students){
    const numSubjects = students[0].scores.length;
    const totalScores = new Array(numSubjects).fill(0);

    students.forEach(student => {
        student.scores.forEach((score,index) => {
            totalScores[index] += score;
        });
    });

    const averageScores = totalScores.map(totalScore => totalScore / students.length);

    return averageScores;
}

const averageScores = calculateAverageScores(students);

averageScores.forEach((averageScore,index) => {
    console.log(`mon ${index + 1} : ${averageScore}`);
});

//cau 6
function tinh_giai_thua(n2){
    let tong = 1;
    if (n2 < 0) return false;
    if (n2 === 0 || n2 === 1) return 1;
    for(let i=2; i<=n2; i++){
        tong *= i;  
    }
    return tong;
}
    const n2 = 5;
    const output4 = tinh_giai_thua(n2);
    console.log(`giai thua cua ${n2} la: ${output4}`);

//cau 7
const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];

const evenNumbers = [];
const oddNumbers = [];

arrNumber.forEach(number => {
    if(number % 2 === 0){
        evenNumbers.push(number);
    }
    else{
        oddNumbers.push(number);
    }
});

console.log("evenNumbers:",evenNumbers);
console.log("oddNumbers:",oddNumbers);

//cau 8
let sum8 = 0;
for(let i=1; i<1000; i++){
    if(i % 3 === 0 || i % 5 === 0){
        sum8 += i;
    }
}
console.log("tong cac so la boi cua 3 va 5 duoi 1000 la:",sum8);

//cau 9
function sumArray(numbers9){
    let sum9 = 0;
    for(let i=0; i<numbers9.length; i++){
        sum9 += numbers9[i];
    }
    return sum9;
}

const arrNumber9 = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
const total = sumArray(arrNumber9);
console.log("tong cac phan tu trong mang la:",total); 

//cau 10
function findMaxNumber(numbers10){
    let max = numbers10[0];
    for(let i=1; i<numbers10.length; i++){
        if(numbers10[i] > max){
            max = numbers10[i];
        }
    }
    return max;
}

const arrNumber10 = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
const maxNumber10 = findMaxNumber(arrNumber10);
console.log("so lon nhat trong mang la:",maxNumber10);