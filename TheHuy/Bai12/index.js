// Câu 1: Tìm số nguyên tố lớn nhất đến n
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function largestPrimeUpTo(n) {
    let largestPrime = -1;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            largestPrime = i;
        }
    }
    return largestPrime;
}

const input = 100;
const output = largestPrimeUpTo(input);

console.log(`Số nguyên tố lớn nhất trong khoảng từ 1 đến ${input} là: ${output}`);

// Câu 2: Tìm các cặp số nguyên tố có tổng bằng n
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function findPrimePairs(n) {
    let pairs = [];
    for (let a = 2; a <= n / 2; a++) {
        let b = n - a;
        if (isPrime(a) && isPrime(b)) {
            pairs.push([a, b]);
        }
    }
    return pairs;
}

const input2 = 20;
const output2 = findPrimePairs(input2);

console.log(`Các cặp số nguyên tố có tổng bằng ${input2} là:`);
output2.forEach(pair => console.log(`(${pair[0]}, ${pair[1]})`));

// Câu 3: Tìm các số chia hết cho 7 nhưng không chia hết cho 5 trong khoảng từ m đến n
function findNumbers(m, n) {
    let result = [];
    for (let i = m; i <= n; i++) {
        if (i % 7 === 0 && i % 5 !== 0) {
            result.push(i);
        }
    }
    return result;
}

let m = 100;
let n = 200;
let output3 = findNumbers(m, n);
console.log(`Các số chia hết cho 7 nhưng không chia hết cho 5 trong khoảng từ ${m} đến ${n} là: ${output3}`);

// Câu 4: Kiểm tra tổng các chữ số của n có phải là số nguyên tố không
function sumOfDigits(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function checkSumAndPrime(n) {
    let sum = sumOfDigits(n);
    let isPrimeSum = isPrime(sum);
    console.log(`Tổng các chữ số: ${sum}, ${isPrimeSum ? "là số nguyên tố" : "không phải số nguyên tố"}`);
}

let n1 = 123456;
checkSumAndPrime(n1);
