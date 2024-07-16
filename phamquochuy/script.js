/* 
Câu 7 : lấy một ví dụ về tạo một hàm nhận vào 3 
tham số và trả về tích của chúng, nếu không được truyền đủ 3 
tham số khi thực  thi , tham số đầu nếu k được truyền sẽ mặc định bằng 0, 2 
tham số sau nếu k được truyền sẽ mặc định bằng 1
*/

function bai7(a = 0, b = 1, c = 1) {
  return a * b * c;
}
console.log(bai7());

/*
Câu 8: Viết một hàm nhận vào 2 số và trả về tích của chúng, tạo ra một biến 
lưu trữ tổng của 2 lần gọi hàm đó với các tham số khác nhau
*/

function bai8(a, b) {
  return a * b;
}
let tongTich = 0;

let ketQua1 = bai8(5, 3);
tongTich += ketQua1;

let ketQua2 = bai8(2, 4);
tongTich += ketQua2;

console.log(tongTich);

/*
Bài 9: Viết Hàm nhận vào 2 số, TRẢ VỀ số Lớn hơn
*/

function bai9(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(bai9(5, 1));

/*
Bài 10: Viết Hàm nhận vào một object chứa thông tin một người bao 
gồm rank có thể là A,B,C,D , tính toán và trả về số tiền thưởng của người này , 
nếu Rank A là 100000, B là 50000, C là 10000, D là 5000
*/

const obj = [
  {
    rank: "A",
  }
];

function bai10(rank) {
  if (rank === "A") {
    return 100000;
  } else if (rank === "B") {
    return 50000;
  } else if (rank === "C") {
    return 10000;
  } else if (rank === "D") {
    return 5000;
  }
}

console.log(bai10(obj[0].rank));

/*
Bài 11 : Viết Hàm tính và trả về diện tích hình  Thang, trả về giá trị tính toán được
*/

function bai11(a,b,h){
    if(a <= 0 || b <= 0 || h <= 0){
        return 'a , b , h phải lớn hơn 0';
    }
    return (a+b)*h/2
}

console.log(bai11(10,15,5))

/*
Bài 12 : Viết Hàm tính và thông báo ra kết quả của phương trình bậc 2
*/

function bai12(a,b,c){
    let delta = b*b - 4*a*c;
    if(delta < 0){
        return 'Phương trình vô nghiệm';
    }else if(delta == 0){
        return `Phương trình có nghiệm kép: x1 = x2 = ${-b/2*a}`;
    }
    let x1 = (-b + Math.sqrt(delta))/(2*a);
    let x2 = (-b - Math.sqrt(delta))/(2*a);
    return `Phuong trình có hai nghiệm phan biệt: x1 = ${x1} , x2 = ${x2}`
}

console.log(bai12(2,-4,4))

/*
Bài 13 : 
*/

function myFuncA(a){
    console.log(a);
}

function myFuncB(text, callback){
    console.log(text);
    callback(100);
    console.log(text);
}