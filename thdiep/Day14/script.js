// // Bài 1: từ mảng student
// const students = [
//     { name: "Nghiêm 1", scores: [90, 85, 92] },
//     { name: "Nghiêm 2", scores: [75, 80, 85] },
//     { name: "Nghiêm 3", scores: [90, 95, 89] },
//     { name: "Nghiem 4", scores: [100, 100, 100] },
// ];
// // Hiển thị danh sách học sinh có điểm trung bình lớn hơn 90
// const arr1 = students.filter(function(std) {
//   const average = (std.scores[0] + std.scores[1] + std.scores[2]) / std.scores.length;
//   console.log(average.toFixed(2));
//   return average > 90;
// });
// console.log(arr1);


// // Tạo một mảng mới với các thông tin điểm mỗi môn được lưu vào từng key
// const newStudents = students.map(function(std){
//   const newObj = {
//     name : std.name,
//     toan : std.scores[0],
//     ly : std.scores[1],
//     hoa : std.scores[2],
//   };
//   return newObj;
// });
// console.log(newStudents);

// Bài 2: Cho mảng products sau:
const product = [
    {
      name: "but chi",
      price: 10000,
      amount: 10,
      color: ["red", "green", "blue"],
      origin: "Thien long",
      code: "BC01",
    },
    {
      name: "but chi",
      price: 8000,
      amount: 90,
      color: ["red", "green"],
      origin: "Hong ha",
      code: "BC02",
    },
    {
      name: "but bi",
      price: 9000,
      amount: 20,
      color: ["red", "green", "blue"],
      origin: "Thien long",
      code: "BC03",
    },
    {
      name: "but bi",
      price: 8000,
      amount: 15,
      color: ["red", "green", "blue", "yellow"],
      origin: "Thien long",
      code: "BC04",
    },
    {
      name: "but xoa",
      price: 8000,
      amount: 15,
      color: ["red", "green"],
      origin: "Hong ha",
      code: "BC05",
    },
    {
      name: "but xoa",
      price: 8000,
      amount: 22,
      color: ["red", "green", "black"],
      origin: "Thien long",
      code: "BC06",
    },
  ];
// // Câu 1: Sử dụng hàm forEach, hiển thị ra màn hình thông tin các sản phẩm theo cấu trúc.
// // "Sản phẩm a, msp b: giá bán c vnd, có các màu x-y-z, được phân
// // phối bởi công ty d
// // Hàng tồn:  e"
// // Trong đó, a là tên sp, b là mã sp, c là giá bán, xyz là các màu
// // của sản phẩm, d là nhà cung cấp, e là số lượng tồn kho.
// product.forEach(product => {
//   const { name, price, amount, color, origin, code } = product;
//   console.log(
//     `Sản phẩm ${name}, msp ${code}: giá bán ${price} vnd, có các màu ${color.join("-")}, được phân phối bởi công ty ${origin}\nHàng tồn: ${amount}`
//   );
// });
// Câu 2: sử dụng một hàm đã học của array để tạo ra một mảng sản phẩm mới ,
// với mức giá của sản phẩm có mã "BC05" tăng lên 2000, và sản phẩm có mã "BC04" thêm màu "purple",
// tất cả tên của sản phẩm được viết hoa.
// const arr3 = product.map(function (prd) {
//   const newPrice = prd.code === "BC05" ? prd.price + 2000 : prd.price;
//   console.log(newPrice);
//   const newColors = prd.color;
//   if (prd.code === "BC04"){
//     newColors.push("purple");
//   }
//   console.log(newColors);
//   const newName = prd.name.toLowerCase();
//   const newProducts = {
//     origin: prd.origin,
//     code : prd.code,
//     name : newName,
//     price : newPrice,
//     color : newColors
//   }
//   return newProducts;
// });
// console.log(arr3);

//  Câu 3: sử dụng hàm của array để lọc ra
// những sản phẩm có lượng hàng tồn kho nhỏ hơn 10 và có giá ít nhất 8000.
// const arr4 = product.filter(function(prd){
//   const newFiltterProducts = prd.amount < 10 && prd.price >= 8000;
//     return newFiltterProducts;
// });
// console.log(arr4);
// Câu 4: sử dụng hàm của array để tìm 1 ra sản phẩm
// của nhà cung cấp "Hong ha" và ( có giá trên 10000 hoặc có số hàng tồn <6 ).
// const arr5 = product.find(function(prd){
//   const isValid = prd.origin === "Hong ha" && (prd.price > 10000 || prd.amount < 6);
//   return isValid;
// });
// console.log(arr5);

// Câu 5: sử dụng hàm của array để kiểm tra xem, có phải có ít nhất một
//  sản phẩm  của nhà cung cấp "Thien long" có giá trên 10000 không
// const arr6 = product.some(function(prd){
//   const isValid = prd.origin === "Thien long" && prd.price >10000;
//   return isValid;
// });
// console.log(arr6);

// Câu 6: sử dụng hàm của array để kiểm tra xem, có phải tất cả các
//  sản phẩm đều còn hàng hay không?
// const doubleCheck = product.every(function (prd){
//   const isValid = prd.amount > 0;
//   return isValid;
// });
// console.log(doubleCheck);

// Câu 7: sử dụng hàm của array để tạo ra một mảng sản phẩm mới,với mỗi sản phẩm
//  có thêm một thông tin là locked để lưu thông tin xem sản phẩm có đang bị cấm
// không ,  thực hiện cấm bán với những sản phẩm thuộc nhà cung cấp "Thien long"
// const isBlocked = product.map(function (prd){
//   const status = prd.origin === "Thien Long" ? "inactive" : "active";
//   const newObj = {
//     origin : prd.origin,
//     code : prd.code,
//     name : prd.name,
//     price : prd.price,
//     color : prd.color,
//     status : status,
//   };
//   return newObj;
// });
// console.log(isBlocked);

// Câu 8: Lấy ra danh sách "code" của các product có nhiều hơn 2 màu
// const findPro = product.filter(function (prd){
//   return prd.color.length >= 4;
// })
// .map(function(prd){
//   return prd.code;
// })
// .map(function(data){
//   console.log(data);
//   return data.toLowerCase();
// })

// console.log(findPro);

// Câu 9: sử dụng hàm của array để sắp xếp các sản phẩm trên theo
// thứ tự tăng đần của giá.
// const arrUpDown = product.sort(function(item1, item2){
//   if (item1.price > item2.price){
//     return 1;
//   }
//   if (item1.price < item2.price){
//     return -1;
//   }
//   return 0;
// });
// console.log(arrUpDown);

// Câu 10: sử dụng hàm của array để sắp xếp các sản phẩm trên theo tên nhà cung cấp, nếu cùng nhà cung cấp
// xếp theo số lượng màu

// const colorUpDown = product.sort(function(item1, item2){
//   if (item1.origin > item2.origin){
//     return 1;
//   }
//   if (item1.origin < item2.origin){
//     return -1;
//   }
//   if (item1.color.length > item2.color.length){
//     return 1;
//   }
//   if (item1.color.length < item2.color.length){
//     return -1;
//   }
//   return 0;
// });
// console.log(colorUpDown);

// Câu 11: từ mảng product tạo thành một object với các key là từng code của product, và data là product đó:
// Ví dụ: {}
// {
//     BC01: {
//         name: "but chi",
//         price: 10000,
//         amount: 10,
//         color: ["red", "green", "blue"],
//         origin: "Thien long",
//         code: "BC01",
//       },
//     BC02:{
//         name: "but chi",
//         price: 8000,
//         amount: 90,
//         color: ["red", "green"],
//         origin: "Hong ha",
//         code: "BC02",
//      }
// }
// pre["BC01"] = {
//   name: "but chi",
//   price: 10000,
//   amount: 10,
//   color: ["red", "green", "blue"],
//   origin: "Thien long",
//   code: "BC01",
// };
// pre["BC02"] = {
//   name: "but chi",
//   price: 8000,
//   amount: 90,
//   color: ["red", "green"],
//   origin: "Hong ha",
//   code: "BC02",
// };

// const key = "abc";
// const obj = {};
// // obj.abc = "Phong2";
// // obj["abc"] = "Phong2";
// obj[key] = "Phong2";

const result7 = product.reduce(function (pre, next) {
  pre[next.code] = next;
  return pre;
}, {});
console.log(result7);

const tempArr = [1, 2, 3, 4, 5]; // 0
// 0+1 => 1
// 1+2 => 3
// 3+3 => 6
// 6+4 => 10
// 10+5 => 15
const sum = tempArr.reduce(function (pre, next) {
  const result = pre + next;
  return result;
}, 0);
console.log(sum);