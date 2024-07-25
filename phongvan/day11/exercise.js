// Câu 7 :  lấy một ví dụ về tạo một hàm nhận vào 3 tham số và trả về tích của chúng, nếu không được truyền đủ 3 tham số khi thực  thi , tham số đầu nếu k được truyền sẽ mặc định bằng 0, 2 tham số sau nếu k được truyền sẽ mặc định bằng 1

const tickSo = function (num1 = 0, num2 = 1, num3 = 1) {
  return num1 * num2 * num3;
};
// const kq7 = tickSo(1, 2, 3);
// console.log(kq7);
// console.log(tickSo(4, 5, 6));
// console.log(tickSo(4, 5));
// console.log(tickSo(4));
// console.log(tickSo());

// Câu 8:  Viết một hàm nhận vào 2 số và trả về tích của chúng, tạo ra một biến lưu trữ tổng của 2 lần gọi hàm đó với các tham số khác nhau
const kq78 = tickSo(7, 8);
const kq910 = tickSo(9, 10);
const kq8 = kq78 + kq910; //tickSo(7, 8) +  tickSo(9, 10)
console.log(kq8);

//Câu 9:Viết Hàm nhận vào 2 số, TRẢ VỀ số Lớn hơn

const findMax = function (a = 0, b = 0) {
  if (a > b) {
    return a;
  }
  if (a < b) {
    return b;
  }
  if (a === b) {
    return b;
  }
};
const max = findMax(10, 90);
console.log("Max is: ", max);

//Câu 10: Viết Hàm nhận vào một object chứa thông tin một người bao gồm rank có thể là A,B,C,D , tính toán và trả về số tiền thưởng của người này , nếu Rank A là 100000, B là 50000, C là 10000, D là 5000

const obj = {
  rank: "B", // B ,C , D
};
const calculatePrize = function (person) {
  //   let prize = 0;
  //   if (person.rank === "A") {
  //     prize = 100000;
  //   }
  //   if (person.rank === "B") {
  //     prize = 50000;
  //   }
  //   if (person.rank === "C") {
  //     prize = 10000;
  //   }
  //   if (person.rank === "D") {
  //     prize = 5000;
  //   }
  //   return prize;
  switch (person.rank) {
    case "A":
      return 100000;
    case "B":
      return 50000;
    case "C":
      return 10000;
    case "D":
      return 5000;
    default:
      return 0;
  }
};

console.log(calculatePrize(obj));
// Câu 11: Viết Hàm tính và trả về diện tích hình  Thang, trả về giá trị tính toán được

const dientichHinhThang = function (d1, d2, h) {
  const s = ((d1 + d2) * h) / 2;
  return s;
};

console.log(dientichHinhThang(10, 15, 5));

// Câu 11: Viết Hàm tính và thông báo ra kết quả của phương trình bậc 2

const ptB2 = function (A, B = 0, C = 0) {
  const delta = Math.pow(B, 2) - 4 * A * C;
  if (delta < 0) {
    console.log("PT Vo Nghiem");
    return;
  }
  if (delta === 0) {
    const x = -B / (2 * A);
    console.log("PT co nghiem kep la: ", x);
    return;
  }
  if (delta > 0) {
    const x1 = (-B + Math.sqrt(delta)) / (2 * A);
    const x2 = (-B - Math.sqrt(delta)) / (2 * A);
    console.log("PT co 2 nghiem phan biet la");
    console.log("X1= ", x1);
    console.log("X2= ", x2);
  }
};

// ptB2(1, -49, -50);
// ptB2(4, -2, -6);
// ptB2(3, 2, 5);
// ptB2(1, -4);

// Câu 13:  Viết hàm myFunA, nhận vào một tham số và chỉ thực hiện console.log số đó ra,   Viết hàm myFuncB , nhận vào một 2 tham số, tham số thứ nhất là một đoạn text bất kỳ,  tham số thứ 2 là một hàm callback, hàm  myFuncB này thực hiện 2 dòng console.log với dữ liệu là tham số thứ nhất. thực hiện gọi hàm callback với tham số là 100 ở giữa 2 dòng  console.log  này

const myFunA = function (number) {
  console.log(number);
};
const myFunB = function (param1, param2) {
  console.log(param1);
  param2(100);
  console.log(param1);
};

// myFunA(900);
myFunB("Hello", myFunA);
