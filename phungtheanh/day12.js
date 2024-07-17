// cau 1
function isprime(num){
    if(num <= 1 ) return false;
    if(num === 2) return true;
    if (num % 2 === 0) return false;
    for(let i=0; i<= Math.sqrt(num); i+=2){
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
    for(let i=2; i<=n/2; i++){
        let b = n - i;
        if(isPrime(a) && isPrime(b)){
            pairs.push([a,b]);
        }
    }
    return pairs;
}

const input = 10;
const output = fidPrimePairs(input);

console.log(`cac cap so nguyen to co tong bang ${input} la:`);
output.forEach(pair => console>log(`(${pair[0]}, ${pair[1]})`));


