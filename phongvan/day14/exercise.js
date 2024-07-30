// Bài 1: từ mảng student
const students = [
  { name: "Nghiêm 1", scores: [90, 85, 92] }, // { name: "Nghiêm 1", toan: 90, ly: 85, hoa: 92 }
  { name: "Nghiêm 2", scores: [75, 80, 85] },
  { name: "Nghiêm 3", scores: [90, 95, 89] },
  { name: "Nghiem 4", scores: [100, 100, 100] },
];

// Hiển thị danh sách học sinh có điểm trung bình lớn hơn 90

const arr1 = students.filter(function (std) {
  const average = (std.scores[0] + std.scores[1] + std.scores[2]) / 3;
  return average > 90;
});

// console.log(arr1);

// Tạo một mảng mới với các thông tin điểm mỗi môn được lưu vào từng key

const arr2 = students.map(function (std) {
  const newObj = {
    name: std.name,
    toan: std.scores[0],
    ly: std.scores[1],
    hoa: std.scores[2],
  };
  return newObj;
});
// console.log(arr2);

// Bài 2: Cho mảng products sau:
const products = [
  {
    name: "but chi",
    price: 11000,
    amount: 1,
    color: ["red", "green", "blue"],
    origin: "Thien long",
    code: "BC01",
  },
  {
    name: "but chi",
    price: 8000,
    amount: 5,
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
    price: 7000,
    amount: 2,
    color: ["red", "green", "black"],
    origin: "Thien long",
    code: "BC06",
  },
];

// Câu 1: Sử dụng hàm forEach, hiển thị ra màn hình thông tin các sản phẩm theo cấu trúc.
// "Sản phẩm a, msp b: giá bán c vnd, có các màu x-y-z, được phân
// phối bởi công ty d
// Hàng tồn:  e"
// Trong đó, a là tên sp, b là mã sp, c là giá bán, xyz là các màu
// của sản phẩm, d là nhà cung cấp, e là số lượng tồn kho.

// products.forEach(function (prd) {
//   // let str = "Sản phẩm " + prd.name + " msp: " + prd.code;
//   let str = `
//   Sản phẩm: ${prd.name}
//   MSP: ${prd.code}
//   Giá bán: ${prd.price} VND
//   Các màu: ${prd.color.join("-")}
//   Được phân phối bởi: ${prd.origin}
//   Hàng tồn: ${prd.amount}
//   `;
//   console.log(str);
// });

// Câu 2: sử dụng một hàm đã học của array để tạo ra một mảng sản phẩm mới ,
// với mức giá của sản phẩm có mã "BC05" tăng lên 2000, và sản phẩm có mã "BC04" thêm màu "purple",
// tất cả tên của sản phẩm được viết hoa.

const arr3 = products.map(function (prd) {
  const newPrice = prd.code === "BC05" ? prd.price + 2000 : prd.price;
  const newColors = prd.color;
  if (prd.code === "BC04") {
    newColors.push("purple");
  }
  const newName = prd.name.toUpperCase();
  const newProd = {
    origin: prd.origin,
    code: prd.code,
    name: newName,
    price: newPrice,
    colors: newColors,
  };
  return newProd;
});

// console.log(arr3);

//  Câu 3: sử dụng hàm của array để lọc ra
// những sản phẩm có lượng hàng tồn kho nhỏ hơn 10 và có giá ít nhất 8000.

const arr4 = products.filter(function (prd) {
  const isValid = prd.amount < 10 && prd.price >= 8000;
  return isValid;
});

// console.log(arr4);

// Câu 4: sử dụng hàm của array để tìm 1 ra sản phẩm
// của nhà cung cấp "Hong ha" và ( có giá trên 10000 hoặc có số hàng tồn <6 ).

const result = products.find(function (prd) {
  const isValid =
    prd.origin === "Hong ha" && (prd.price > 10000 || prd.amount < 6);
  return isValid;
});
console.log(result);

// Câu 5: sử dụng hàm của array để kiểm tra xem, có phải có ít nhất một
//  sản phẩm  của nhà cung cấp "Thien long" có giá trên 10000 không
const result2 = products.some(function (prd) {
  const isValid = prd.origin === "Thien long" && prd.price > 10000;
  return isValid;
});
console.log(result2);

// Câu 6: sử dụng hàm của array để kiểm tra xem, có phải tất cả các
//  sản phẩm đều còn hàng hay không?

const result3 = products.every(function (prd) {
  const isValid = prd.amount > 0;
  return isValid;
});
console.log(result3);

// Câu 7: sử dụng hàm của array để tạo ra một mảng sản phẩm mới,với mỗi sản phẩm
//  có thêm một thông tin là locked để lưu thông tin xem sản phẩm có đang bị cấm
// không ,  thực hiện cấm bán với những sản phẩm thuộc nhà cung cấp "Thien long"
const result4 = products.map(function (prd) {
  const status = prd.origin === "Thien long" ? "inactive" : "active";
  const newProd = {
    origin: prd.origin,
    code: prd.code,
    name: prd.name,
    price: prd.price,
    color: prd.color,
    status: status,
  };
  return newProd;
});
console.log(result4);

// Câu 8: Lấy ra danh sách "code" của các product có nhiều hơn 2 màu
const result5 = products
  .filter(function (prd) {
    return prd.color.length > 2;
  })
  .map(function (prd) {
    return prd.code;
  })
  .map(function (data) {
    console.log(data);
    return data.toLowerCase();
  });
// const result6 = result5.map(function (prd) {
//   return prd.code;
// });
console.log(result5);
// console.log(result6);

// Câu 9: sử dụng hàm của array để sắp xếp các sản phẩm trên theo
// thứ tự tăng đần của giá.

const sorted1 = products.sort(function (item1, item2) {
  if (item1.price > item2.price) {
    return -1;
  }
  if (item1.price < item2.price) {
    return 1;
  }
  return 0;
});
console.log(sorted1);

// Câu 10: sử dụng hàm của array để sắp xếp các sản phẩm trên theo tên nhà cung cấp, nếu cùng nhà cung cấp
// xếp theo số lượng màu

const sorted2 = products.sort(function (item1, item2) {
  if (item1.origin > item2.origin) {
    return 1;
  }
  if (item1.origin < item2.origin) {
    return -1;
  }
  if (item1.color.length > item2.color.length) {
    return -1;
  }
  if (item1.color.length < item2.color.length) {
    return 1;
  }
  return 0;
});
console.log(sorted2);

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
const key = "abc";
const obj = {};
// obj.abc = "Phong2";
// obj["abc"] = "Phong2";
obj[key] = "Phong2";

const result7 = products.reduce(function (pre, next) {
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
