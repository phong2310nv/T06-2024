
//bai 7
const tich = function(num1, num2=1, num3=1){
    const kq = num1 * num2 * num3;
    return kq;
}

console.log(tich(1, 2, 3));
//bai 8 
const kq1 = tich(7,8);
const kq2 = tich(9,10);
const sum = kq1 + kq2
console.log(sum);

const max = function(a, b){
    if (a > b){
        return a
    }
    return b
}
console.log(max(1,2));
//bai10
const obj = {
    rank: "B",
};
const gia = function(person){
    let prize = 0
    if (person.rank==="A"){
        prize = 100000
    }if (person.rank==="B"){
        prize = 50000
    }if (person.rank==="C"){
        prize = 10000
    }if (person.rank==="D"){
        prize = 5000
    }
    return prize;
}
console.log(gia(obj));
//bai11
const sthang = function(d1, d2, h){
    const s = (d1+d2)*h/2;
    return s;
}
console.log(sthang(2,2,1));
//bai12
console.log(sthang(10,15,20));
const ptbh = function(a, b=0,c=0){
    const delta = Math.pow(b, 2)-4*a*c;
    if(delta<0){
        console.log("pt vo nghiem");
        return;
    }
    if (delta===0){
        const x = -b/(2*a);
        console.log("pt co nghiem kep la:", x);
        return;
    }
    if (delta>0){
        const x1 = (-b+Math.sqrt(delta))/(2*a);
        const x2 = (-b-Math.sqrt(delta))/(2*a);
        console.log("pt co 2 nghiem phan biet la:");
        console.log("x1=", x1);
        console.log("x2=", x2);
    }
}
ptbh(1,-4,4)
Math.ceil(9.9)