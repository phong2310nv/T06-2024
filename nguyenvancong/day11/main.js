//Câu 7 :  
// lấy một ví dụ về tạo một hàm nhận vào 3 
// tham số và trả về tích của chúng, nếu không được truyền đủ 3 
// tham số khi thực  thi , tham số đầu nếu k được truyền sẽ mặc định bằng 
// 0, 2 tham số sau nếu k được truyền sẽ mặc định bằng 1


function tich(a,b,c){
    return a * b *c;
}
console.log("tich 3 so la:" + tich(2,3,4));


//Câu 8: 
// Viết một hàm nhận vào 2 số và trả về tích của chúng, 
//tạo ra một biến lưu trữ tổng của 2 lần gọi hàm đó với các tham số khác nhau

function total(d,e){
    let result = d * e;
    return result;
}
console.log("tich 2 so lan 1:" + total(2,3));
console.log("tich 2 so lan 2:" + total(7,3));


// caau9: Viết Hàm nhận vào 2 số, TRẢ VỀ số Lớn hơn

function Serachnum(i,k){
    if(i>k) return i;
    return k;
}
console.log("Số lớn hơn là :" +  Serachnum(5,9));


//Câu 10: Viết Hàm nhận vào một object chứa thông tin một người bao gồm rank 
//có thể là A,B,C,D , tính toán và trả về số tiền thưởng của người này , 
//nếu Rank A là 100000, B là 50000, C là 10000, D là 5000

const Salary = () =>{
    const rank = {
        A:100000,
        B:50000,
        C:10000,
        D:5000
    }
   console.log("Salary of A:" + rank.A);
   console.log("Salary of B:" + rank.B);
   console.log("Salary of C:" + rank.C);
   console.log("Salary of D:" + rank.D);
   
}
console.log(Salary());

//Câu 11: Viết Hàm tính và trả về diện tích hình  Thang, trả về giá trị tính toán được

function tinhDienTichHinhThang(dayLon, dayNho, chieuCao) {
    const dienTich = ((dayLon + dayNho) * chieuCao) / 2;
    return dienTich;
}
console.log(tinhDienTichHinhThang(10, 6, 8)); 

//Câu 12: Viết Hàm tính và thông báo ra kết quả của phương trình bậc 2

function giaiPhuongTrinhBacHai(a, b, c) {
    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                return 'Phương trình có vô số nghiệm';
            } else {
                return 'Phương trình vô nghiệm';
            }
        } else {
            const nghiem = -c / b;
            return `Phương trình có một nghiệm: x = ${nghiem}`;
        }
    }

    const delta = b * b - 4 * a * c;
    if (delta < 0) {
        return 'Phương trình vô nghiệm';
    } else if (delta === 0) {
        const nghiemKep = -b / (2 * a);
        return `Phương trình có nghiệm kép: x1 = x2 = ${nghiemKep}`;
    } else {
        const canDelta = Math.sqrt(delta);
        const x1 = (-b + canDelta) / (2 * a);
        const x2 = (-b - canDelta) / (2 * a);
        return `Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`;
    }
}


const a = 1, b = -3, c = 2;
console.log(giaiPhuongTrinhBacHai(a, b, c));  

//Câu 13:  
//Viết hàm myFunA, nhận vào một tham số và chỉ thực hiện 
//console.log số đó ra,   Viết hàm myFuncB , 
//nhận vào một 2 tham số, tham số thứ nhất là một đoạn text bất kỳ,  
//tham số thứ 2 là một hàm callback, hàm  myFuncB này thực hiện 2 dòng console.log 
//với dữ liệu là tham số thứ nhất. thực hiện gọi hàm callback với tham số là 100 
//ở giữa 2 dòng  console.log  này



// Hàm myFuncA nhận vào một tham số và chỉ thực hiện console.log tham số đó
function myFuncA(num) {
    console.log(num);
}

// Hàm myFuncB nhận vào hai tham số: một đoạn text và một hàm callback
function myFuncB(text, callback) {
    console.log(text);
    callback(100);
    console.log(text);
}


const text = "Đoạn text bất kỳ";
myFuncB(text, myFuncA);

