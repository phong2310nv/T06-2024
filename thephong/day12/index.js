const h = 10;

for (let i = 1; i  <= h; i ++){
    for(let j = 1; i  <= i; j ++){
        console.log("*");
    }
    console.log("*");
}

// Bài 1: Kiểm tra xem một số có phải là số nguyên tố lớn không. Nếu có, in ra số nguyên tố lớn nhất trong khoảng từ 1 đến số đó.

const IsPrime = (Number) => {
    if(Number < 2){
        return "false";
    }
    else{
        let songuyento = 0;
        for(let i = 2; i < Number; i++){
            if( Number % i === 0){
                songuyento++;
            }
            if(songuyento === 0){
                return true;
                }
            else {
                return false;
              }
        }
    }
}
console.log(IsPrime(14));

const maxIsPrime = (number2) => {
    if(IsPrime(number2)){
        return number2;
    }
    else{
        let maxnumber = 1;
        for (let i = 1; i<= number2; i++){
            if(IsPrime(i)){
                if(i > maxnumber){
                    maxnumber = i;
                }
            }
        }
        return maxnumber;
    }
}
console.log(maxIsPrime(20));

// Bài 2: Tìm tất cả các cặp số (a, b) sao cho a và b là số nguyên tố và a + b = n, với n là số nguyên dương cho trước.

const capsonumber = (Number) => {
    let result = [];
    for(let numbera = 1; numbera < Number; numbera++){
        if(IsPrime(numbera)){
            let numberb = Number - numbera;
            if(IsPrime(numberb)){
                result.push(`(${numbera}, ${numberb})`);
            }
        }
    }
    return result;
}
console.log("Bài 2:",capsonumber(2));

// Bài 3: Tìm tất cả các số chia hết cho 7 nhưng không chia hết cho 5 trong khoảng từ m đến n, với m và n là số nguyên dương cho trước.
