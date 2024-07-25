// // for (let i = 1; i <=3; i++)
// // {
// //     console.log(i);
// // }


// // tìm ra số chẵn
// // for (let i = 1; i <= 10; i++)
// // {
// //     // console.log(i);
// //     if (i % 2 === 0)
// //     {
// //         console.log(i);
// //     }
// // }
// /// Sử dụng console.log để in ra hình tam giác như sau:
// // Số dòng của tam giác

// // Vòng lặp để tạo từng dòng của tam giác
// // for (let i = 1; i <= 5; i++) {
// //   let stars = '';
// //   // Vòng lặp để thêm các dấu sao vào dòng hiện tại
// //   for (let j = 1; j <= i; j++) {
// //     stars += '*';
// //   }
// //   // In ra dòng hiện tại
// //   console.log(stars);
// // }

// // function repeatString(inputString) {
// //     let result = '';
    
// //     // Lặp 10 lần để thêm chuỗi vào kết quả
// //     for (let i = 0; i < 10; i++) {
// //       result += inputString;
      
// //       // Thêm dấu "-" nếu không phải là lần cuối cùng
// //       if (i < 9) {
// //         result += '-';
// //       }
// //     }
    
// //     return result;
// //   }
  
// //   // Ví dụ sử dụng hàm với chuỗi "123"
// //   let input = "456";
// //   let output = repeatString(input);
// //   console.log(output); // Kết quả sẽ là: "123-123-123-123-123-123-123-123-123-123"
  
// // var arr = ['a','b','c','d','e']

// // for (i = 0; i <arr.length; i++){
// //   console.log(arr[0]);
// // }

// // for (let i = 0; i < 5; i++)
// //   {
// //     let start= '';
// //     for (let j = 0; j <= i; j++)
// //     {
// //       start += '*';
// //     }
// //     console.log(start);
// //   }

// // Phương trình bậc 2

// // const PTB2 = function (a, b, c){
// //   const delta = b * b - 4 * a * c;
// //   if (delta > 0){
// //     const x1 = (-b + Math.sqrt(delta)) / (2* a);
// //     const x2 = (-b - Math.sqrt(delta)) / (2* a);
// //     console.log("Phuong trinh co 2 nghiem phan biet");
// //     console.log("X1: ", x1);
// //     console.log("X2: ", x2);
// //     return;
// //   }
// //   if(delta === 0){
// //     const x = -b / (2 * a);
// //     console.log("PT co 1 nghiem: ", x)
// //     return;
// //   }
// //   if (delta < 0){
// //     console.log("PT vo nghiem");
// //     return;
// //   }
// // }
// // console.log(PTB2(2,3,4));
// // console.log(PTB2(4,-2,-6));

// // const myFuntionA = function(number) {
// //   console.log(number);
// // }
// // const myFuntionB = function (param1, param2){
// //   console.log(param1);
// //   param2(100);
// //   console.log(param1);
// // }
// // myFuntionB("Hello", myFuntionA);

// // Bài 4: cho mảng number: const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
// // nếu phần tử trong mảng chẵn thì cho vào mảng evenNumbers = [] => kết quả evenNumber = [4,44,64,24,32,74,22]
// // và ngược lại lấy số lẻ cho vào mảng oddNumbers
// // Gợi ý: tìm hiểu thuộc tính push()

// // const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
// // const processArr = function(arr){
// //   const evenNumber = [];
// //   const oddNumbers = [];
// //   for(let i = 0; i < arr.length; i ++){
// //     if(arr[i] % 2 ==0)
// //     {
// //       evenNumber.push(arr[i]);
// //     }else{
// //       oddNumbers.push(arr[i]);
// //     }
// //   }
// //   console.log(evenNumber);
// //   console.log(oddNumbers);
// // };
// // processArr(arrNumber);

// // Hàm kiểm tra số nguyên tố
// // const isPrimeNumber = function(number)
// //   {
// //     if(number <= 1){
// //       return false;
// //     }
// //     // let kt = true;
// //     for (let i = 2; i <= number / 2; i++){
// //       if (number % i ===0)
// //       {
// //         return false;
// //       }
// //     }
// //     return true;
// //   }
// // console.log(isPrimeNumber(101));
// // Bài 1: Kiểm tra xem một số có phải là số nguyên tố lớn không. Nếu có, in ra số nguyên tố lớn nhất trong khoảng từ 1 đến số đó.
// // const findBigPrime = function(number){
// //   for (let i = number; i > 1; i --){
// //     const check = isPrimeNumber(i);
// //     if (check ){
// //       return i;
// //     }
// //   }
// // };
// // console.log(findBigPrime(20));

// // Bài 2: Tìm tất cả các cặp số (a, b) sao cho a và b là số nguyên tố và a + b = n, với n là số nguyên dương cho trước.
// // Input: 10
// // Output: (3, 7)

// // const findCouple = function(number){
// //   for (let i =2; i <= number / 2; i++)
// //   { 
// //     if (isPrimeNumber(i) && isPrimeNumber(number - i)){
// //       // console.log('(${i},${number - i})');
// //       console.log(`(${i}, ${number - i})`);
// //     }
// //   }
// // };
// // findCouple(9);

// // Bài 3: Tìm tất cả các số chia hết cho 7 nhưng không chia hết cho 5 trong khoảng từ m đến n, với m và n là số nguyên dương cho trước.
// // Input: 10, 30
// // Output: 14, 21, 28
// // const findNumber1 = function(m,n){
// //   const arr = [];
// //   for (let i = m; i < n; i++){
// //     if (i % 7 === 0 && i % 5 != 0){
// //       arr.push(i);
// //     }
// //   }
// //   console.log("So chia het cho 7 nhung khong chia het cho 5:", arr);
// // };
// // findNumber1(10,30);
// // findNumber1(50,70);

// // Bài 6: Cho 1 số nguyên dương n. Viết hàm tính n giai thừa (n!). Ví dụ: n = 5, kết quả trả về là 5! = 1 * 2 * 3 * 4 * 5 = 120.

// // const tinhGT = function(n){
// //   let kq = 1;
// //   for (let i = 1; i <= n; i++){
// //       kq *= i;
// //   }
// //   return kq;
// // };
// // const kqGiaiThua = tinhGT(5);
// // console.log(kqGiaiThua);

// // Bài 4: Tính tổng các chữ số của một số nguyên dương n và kiểm tra xem tổng đó có phải là số nguyên tố không.

// // Hàm kiểm tra xem một số có phải là số nguyên tố hay không
// // function isPrime(num) {
// //   if (num <= 1) return false;
// //   for (let i = 2; i <= Math.sqrt(num); i++) {
// //       if (num % i === 0) return false;
// //   }
// //   return true;
// // }

// // // Hàm tính tổng các chữ số của một số
// // function sumOfDigits(n) {
// //   let total = 0;
// //   while (n > 0) {
// //       total += n % 10;
// //       n = Math.floor(n / 10);
// //   }
// //   return total;
// // }

// // // Hàm kiểm tra tổng các chữ số và xem tổng đó có phải là số nguyên tố hay không
// // function checkNumber(n) {
// //   const total = sumOfDigits(n);
// //   if (isPrime(total)) {
// //       return `Tổng các chữ số: ${total}, Là số nguyên tố`;
// //   } else {
// //       return `Tổng các chữ số: ${total}, Không phải số nguyên tố`;
// //   }
// // }

// // // Ví dụ sử dụng
// // const n1 = 123;
// // const n2 = 379;

// // console.log(checkNumber(n1));  // Output: "Tổng các chữ số: 6, Không phải số nguyên tố"
// // console.log(checkNumber(n2));  // Output: "Tổng các chữ số: 19, Là số nguyên tố"

// // Bài 5: Tính trung bình điểm của học sinh theo từng môn học
// // const students = [
// //     { name: "Alice", scores: [85, 90, 80] },
// //     { name: "Bob", scores: [90, 95, 85] },
// //     { name: "Carol", scores: [75, 80, 70] },
// //     { name: "David", scores: [80, 85, 75] },
// //     { name: "Eve", scores: [95, 100, 90] }
// // ];
// // Điểm trung bình của mỗi môn học:
// // Môn 1: 85
// // Môn 2: 90
// // Môn 3: 80
// // */

// // const students = [
// //     { name: "Alice", scores: [85, 90, 80] },
// //     { name: "Bob", scores: [90, 95, 85] },
// //     { name: "Carol", scores: [75, 80, 70] },
// //     { name: "David", scores: [80, 85, 75] },
// //     { name: "Eve", scores: [95, 100, 90] }
// // ];
// // const calculatorTB = function(arr){
// //   let toan = 0;
// //   let van = 0;
// //   let anh = 0;
// //   for (const students of arr) {
// //     toan = toan + students.scores[0];
// //     van = van + students.scores[1];
// //     anh = anh + students.scores[2];
// //   }
// //   console.log("Diem mon toan: ", toan / arr.length);
// //   console.log("Diem mon van: ", van / arr.length);
// //   console.log("Diem mon anh: ", anh / arr.length);
// // }
// // calculatorTB(students);

// // Bài 8: Tính Tổng bội của số 3 và 5 dưới 1000
// // const tinhBoi = function(n){
// //   let sum = 0;
// //   for (let i = 1; i < n; i++){
// //     if (i % 3 === 0 || i % 5 === 0){
// //       sum += i;
// //     }
// //   }
// //   return sum;
// // }
// // console.log(tinhBoi(1000));
// // Bài 9: Viết một hàm nhận vào một tham số là một mảng  các phần tử là số, trả về tổng của các phần tử trong mảng
// // const tinhMang = function(arr){
// //   let sum = 0;
// //   for (let i = 0; i < arr.length; i++){
// //     sum += arr[i];
// //   }
// //   return sum;
// // };
// // const Arrtest = [1,2,3,4,5,6];
// // const Arrtest_01 = [1,2,5,6,7];
// // console.log(tinhMang(Arrtest));
// // console.log(tinhMang(Arrtest_01));

// // Bài 10: Viết một hàm nhận vào một tham số là một mảng  các phần tử là số, trả về số lớn nhất trong mảng
// // const soSanh = function(arr){
// //   let maxNumber = arr[0];
// //   for(let i =0; i < arr.length; i++){
// //     if (maxNumber < arr[i]){
// //       maxNumber = arr[i];
// //     }
// //   }
// //   return maxNumber;
// // }
// // const arrTest = [1,2,3,4,5];
// // console.log(soSanh(arrTest));

// // Bài 11: cho một object  lưu thông tin của một sản phẩm trong cửa hàng , object này lưu trữ các thông tin sau:
// // name: tên sp
// // code: mã sp, 
// // ngoài ra sẽ có các key khác để lưu lượng hàng tồn kho của sản phẩm này, ví dụ
// // red: 10   (sản phẩm này còn 10 cái màu đỏ)
// // blue: 20 ....
// // Giả sử không biết sản phẩm có những màu nào
// // Viết hàm nhận vào một object kiểu này, trả về tổng số hàng tồn kho

// // Khai báo một đối tượng chứa thông tin về sản phẩm
// // const product = {
// //   name: 'Sample Product', // Tên sản phẩm
// //   code: 'SP001',          // Mã sản phẩm
// //   red: 10,                // Số lượng sản phẩm màu đỏ
// //   blue: 20,               // Số lượng sản phẩm màu xanh dương
// //   green: 30,              // Số lượng sản phẩm màu xanh lá
// //   black: 40,              // Số lượng sản phẩm màu đen
// //   white: 50,              // Số lượng sản phẩm màu trắng
// //   pink: 60,               // Số lượng sản phẩm màu hồng
// // };

// // // Định nghĩa một hàm ẩn danh để tính tổng số hàng tồn kho
// // const findObj = function(product) {
// //   let totalInventory = 0; // Khởi tạo biến tổng số hàng tồn kho với giá trị ban đầu là 0
// //   // Sử dụng vòng lặp for...in để duyệt qua tất cả các thuộc tính của đối tượng product
// //   for (const key in product) {
// //     // Kiểm tra xem giá trị của thuộc tính hiện tại có phải là kiểu số hay không
// //     if (typeof product[key] === 'number') {
// //       // Nếu đúng, cộng giá trị của thuộc tính hiện tại vào biến tổng số hàng tồn kho
// //       totalInventory += product[key];
// //     }
// //   }
// //   // Trả về tổng số hàng tồn kho
// //   return totalInventory;
// // };

// // // Gọi hàm findObj với đối tượng product và gán kết quả trả về cho biến total
// // const total = findObj(product);

// // // In ra tổng số hàng tồn kho bằng cách sử dụng console.log và template string
// // console.log(`Tổng số hàng tồn kho là: ${total}`); // Output: Tổng số hàng tồn kho là: 210

// Bài 12: Viết một hàm nhận vào một mảng các học sinh , mỗi học sinh có 2 thông tin là name(tên) và và score (điểm) , hiển thị ra màn hình console tên của học sinh có điểm cao nhất 

const students = [
  { name: 'Nguyen Van A', score: 85 },
  { name: 'Tran Thi B', score: 92 },
  { name: 'Le Van C', score: 78 },
  { name: 'Pham Thi D', score: 95 },
];
const findTopStudent = function(arr){
  let topStudent = students[0];
  for (const student of students){
    if (student.score >topStudent.score){
      topStudent = student;
    }
  }
  console.log(`Học sinh có điểm cao nhất là: ${topStudent.name}, \nĐiểm số là: ${topStudent.score}`);
};
findTopStudent(students);