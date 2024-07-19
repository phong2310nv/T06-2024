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
        if(isprime(i)){
            largestPrime = i;
        }
    }
    return largestPrime;
}

const input = 20;
const output = largestPrimeUpTo(input);

console.log(`so nguyen to lon nhat trong khoang tu 1 den ${input} la: ${output}`);

//cau 2
function isPrime(a){
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
        if(isPrime(a) && isPrime(b)){
            pairs.push([a,b]);
        }
    }
    return pairs;
}

const input2 = 10;
const output2 = findPrimePairs(input2);

console.log(`cac cap so nguyen to co tong bang ${input2} la:`);
output.forEach(pair => console>log(`(${pair[0]}, ${pair[1]})`));

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
    while(n>0){
        sum += n1%10;
        n1 = Math.floor(n / 10); 
    }
    return sum;
}

function isPrime(num){
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
    let isPrimeSum = isPrime(sum);
    console.log(`tong cac chu so : ${sum}, ${isPrimeSum ? "la so nguyen to" : "khong phai so nguyen to"}`);
}

let n1 = 123;
checkSumAndPrime(n1);
