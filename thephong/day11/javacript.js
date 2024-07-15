// Câu 7 :  lấy một ví dụ về tạo một hàm nhận vào 3 tham số và trả về tích của chúng, nếu không được truyền đủ 3 tham số khi thực  thi , tham số đầu nếu k được truyền sẽ mặc định bằng 0, 2 tham số sau nếu k được truyền sẽ mặc định bằng 1


function accumulation(a=0, b=1, c=1){
    return a*b*c;
}
console.log(accumulation(2,5));


// Câu 8:  Viết một hàm nhận vào 2 số và trả về tích của chúng, tạo ra một biến lưu trữ tổng của 2 lần gọi hàm đó với các tham số khác nhau

const ham1 = tich2so(4,6);
const ham2 = tich2so(5,6);
const sumham = ham1 +ham2 ;

function tich2so(tich1,tich2){
    return tich1 * tich2;
}
console.log(ham1);
console.log(ham2);
console.log(sumham);


// Câu 9: Viết Hàm nhận vào 2 số, TRẢ VỀ số Lớn hơn

function maxnumber(number1, number2){
    if(number1>number2){
        return number1;
    }
    if(number1<number2){
        return number2;
    }
    return "2 số bẳng nhau";
}
console.log(maxnumber(10,5));

// Câu 10: Viết Hàm nhận vào một object chứa thông tin một người bao gồm rank có thể là A,B,C,D , tính toán và trả về số tiền thưởng của người này , nếu Rank A là 100000, B là 50000, C là 10000, D là 5000

const object = [
    {
        rank : "B",
    }
]

function bonus(rank){
    if(rank === A){
        return 100000;
    }
    if(rank === B){
        return 50000;
    }
    if(rank === c){
        return 10000;
    }
    if(rank === D){
        return 5000;
    }
}

// Câu 11: Viết Hàm tính và trả về diện tích hình  Thang, trả về giá trị tính toán được

function HinhThang (day1, day2, h) {
    return ((day1 + day2) /2)* h ;
 }
console.log(HinhThang(1, 2, 3)); 

// Câu 12: Viết Hàm tính và thông báo ra kết quả của phương trình bậc 2

var a = prompt("Nhập số a:")
var b = prompt("Nhập số b:")
var c = prompt("Nhập số c:")
var delta = a*a - 4*b*c;

if (delta < 0){
    alert ("Phương trình vô nghiệm!")
}
if (delta == 0){
    alert ("Phương trình có nghiệm kép" )
}
else if (delta > 0){
    alert ("Phương trình có hai nghiệm phân biệt")
}

// Câu 13:  Viết hàm myFunA, nhận vào một tham số và chỉ thực hiện console.log số đó ra,   Viết hàm myFuncB , nhận vào một 2 tham số, tham số thứ nhất là một đoạn text bất kỳ,  tham số thứ 2 là một hàm callback, hàm  myFuncB này thực hiện 2 dòng console.log với dữ liệu là tham số thứ nhất. thực hiện gọi hàm callback với tham số là 100 ở giữa 2 dòng  console.log  này

function myFuncA(a){
    console.log(a);
}

function myFuncB(text, callback){
    console.log(text);
    callback(100);
    console.log(text);
}


