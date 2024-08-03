// caau7: lấy một ví dụ về tạo một hàm nhận vào 3 tham số và trả về tích của chúng, nếu không được truyền đủ 3 tham số khi thực  thi , tham số đầu nếu k được truyền sẽ mặc định bằng 0, 2 tham số sau nếu k được truyền sẽ mặc định bằng 1
function tich(a = 0, b = 1, c = 1) {
  return a * b * c;
}
console.log(tich());
console.log(tich(2));
console.log(tich(2, 3));

// Câu 8:  Viết một hàm nhận vào 2 số và trả về tích của chúng, tạo ra một biến lưu trữ tổng của 2 lần gọi hàm đó với các tham số khác nhau

function tinhTongThamSo(a, b, c, d) {
  function tinhTong(x, y) {
    return x * y;
  }
  let tich = tinhTong(a, b);
  let tich1 = tinhTong(c, d);
  let tong = tich + tich1;
  return tong;
}
let kq = tinhTongThamSo(2, 3, 4, 5);
console.log("Toong cua 2 laanf goi laf:", kq);

// Câu 9: Viết Hàm nhận vào 2 số, TRẢ VỀ số Lớn hơn

function soLonhon(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
let so1 = 10;
let so2 = 15;
let lonHon = soLonhon(so1, so2);
console.log(`Số lớn hơn giữa ${so1} và ${so2} là: ${lonHon}`);

//  Caau10: Viết Hàm nhận vào một object chứa thông tin một người bao gồm rank có thể là A,B,C,D , tính toán và trả về số tiền thưởng của người này , nếu Rank A là 100000, B là 50000, C là 10000, D là 5000

function tinhTienThuong(nguoi) {
  const { rank } = nguoi;
  let tienThuong = 0;
  if (rank === "A") {
    tienThuong = 100000;
  } else if (rank === "B") {
    tienThuong = 50000;
  } else if (rank === "C") {
    tienThuong = 10000;
  } else if (rank === "D") {
    tienThuong = 5000;
  } else {
    return `Rank ${rank} không hợp lệ!`;
  }
  return tienThuong;
}
const nguoi1 = { rank: "A" };
const nguoi2 = { rank: "B" };
const nguoi3 = { rank: "C" };
const nguoi4 = { rank: "D" };
const nguoi5 = { rank: "E" };

console.log(tinhTienThuong(nguoi1));
console.log(tinhTienThuong(nguoi2));
console.log(tinhTienThuong(nguoi3));
console.log(tinhTienThuong(nguoi4));
console.log(tinhTienThuong(nguoi5));

// Câu 11: Viết Hàm tính và trả về diện tích hình  Thang, trả về giá trị tính toán được
function dienTichHinhThang(a, b, h) {
  const S = ((a + b) * h) / 2;
  return S;
}
const a = 2;
const b = 4;
const h = 5;
const S = dienTichHinhThang(a, b, h);
console.log("Diện tích hình thang là:", S);

//Câu 12: Viết Hàm tính và thông báo ra kết quả của phương trình bậc 2
function ptBac2(a, b, c) {
  const dt = b * b - 4 * a * c;
  let x1, x2;
  if (dt > 0) {
    x1 = (-b + Math.sqrt(dt)) / (2 * a);
    x2 = (-b - Math.sqrt(dt)) / (2 * a);
    return x1, x2;
  } else if (dt === 0) {
    x1 = -b / (2 * a);
    return x1;
  } else {
    console.log("PT vô nghiệm");
  }
}
console.log(ptBac2(1, 2, 3));
// Câu 13:  Viết hàm myFunA, nhận vào một tham số và chỉ thực hiện console.log số đó ra,   Viết hàm myFuncB , nhận vào một 2 tham số, tham số thứ nhất là một đoạn text bất kỳ,  tham số thứ 2 là một hàm callback, hàm  myFuncB này thực hiện 2 dòng console.log với dữ liệu là tham số thứ nhất. thực hiện gọi hàm callback với tham số là 100 ở giữa 2 dòng  console.log  này

