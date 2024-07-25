 /* Câu 7 : lấy một ví dụ về tạo một hàm nhận vào 3 tham số và trả về tích của chúng, nếu không được truyền đủ 3 tham số khi thực  thi, tham số đầu nếu k được truyền 
sẽ mặc định bằng 0, 2 tham số sau nếu k được truyền sẽ mặc định bằng 1*/


function tichc7(a=0,b=1,c=1){
    return a*b*c;
}


// Câu 8:  Viết một hàm nhận vào 2 số và trả về tích của chúng, tạo ra một biến lưu trữ tổng của 2 lần gọi hàm đó với các tham số khác nhau

function tichc8(a,b){
    return a*b;
}
var tong = tichc8(4,5)+tichc8(2,3);


// Câu 9: Viết Hàm nhận vào 2 số, TRẢ VỀ số Lớn hơn

function sosanhc9(a,b){
    if(a===b) return "a=b";
    if(a>b){
        return a;
    }
    return b;
}

// Câu 10: Viết Hàm nhận vào một object chứa thông tin một người bao gồm rank có thể là A,B,C,D ,
//  tính toán và trả về số tiền thưởng của người này , nếu Rank A là 100000, B là 50000, C là 10000, D là 5000

function tienthuong10(object){
    switch(object.rank){
        case 'A':
            return 100000;
        case 'B':
            return 50000;
        case 'C':
            return 10000;
        case 'D':
            return 5000;
        default:
            return;
    }
}

// Câu 11: Viết Hàm tính và trả về diện tích hình  Thang, trả về giá trị tính toán được

function sthangc11(a,b,h){
    return (a+b)*(1/2)*h;
}

// Câu 12: Viết Hàm tính và thông báo ra kết quả của phương trình bậc 2

function ptb2c12(a,b,c){
    var delta=0;
    delta = b*b-4*a*c;
    if(delta<0){
        console.log('Phuong trinh vo nghiem');
    }
    else if(delta>0){
        console.log('Phuong trinh co hai nghiem');
        console.log('x1= '+((-b+Math.sqrt(delta))/(2*a)));
        console.log('x2= '+((-b-Math.sqrt(delta))/(2*a)));
    }
    else{
        console.log('Phuong trinh co nghiem kep');
        console.log('x1=x2= '+((-b)/(2*a)));
    }
}

// Viết hàm myFunA, nhận vào một tham số và chỉ thực hiện console.log số đó ra,
// Viết hàm myFuncB , nhận vào một 2 tham số, tham số thứ nhất là một đoạn text bất kỳ,  
// tham số thứ 2 là một hàm callback, hàm  myFuncB này thực hiện 2 dòng console.log với dữ liệu là tham số thứ nhất.
//  thực hiện gọi hàm callback với tham số là 100 ở giữa 2 dòng  console.log  này

function myFunA(a){
    console.log(a);
}
function myFuncB(a,callback){
    console.log(a);
    callback(100);
    console.log(a);
}
function callback(a){
    console.log(a);
}
