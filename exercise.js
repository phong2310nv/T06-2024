// Bài 1: từ mảng student
const students = [
  { name: "Nghiêm 1", scores: [90, 85, 92] },
  { name: "Nghiêm 2", scores: [75, 80, 85] },
  { name: "Nghiêm 3", scores: [90, 95, 89] },
  { name: "Nghiem 4", scores: [100, 100, 100] },
];
  const filteredStudents = students.filter(student => {
  const averageScore = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
    return averageScore > 90;
});

console.log(filteredStudents);

// Hiển thị danh sách học sinh có điểm trung bình lớn hơn 90

// Tạo một mảng mới với các thông tin điểm mỗi môn được lưu vào từng key

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
// Câu 1: Sử dụng hàm forEach, hiển thị ra màn hình thông tin các sản phẩm theo cấu trúc.
// "Sản phẩm a, msp b: giá bán c vnd, có các màu x-y-z, được phân
// phối bởi công ty d
// Hàng tồn:  e"
// Trong đó, a là tên sp, b là mã sp, c là giá bán, xyz là các màu
// của sản phẩm, d là nhà cung cấp, e là số lượng tồn kho.
product.forEach(item => {
  console.log(`Sản phẩm ${item.name}, msp ${item.code}: giá bán ${item.price} vnd, có các màu ${item.color.join('-')}, được phân phối bởi công ty ${item.origin}`);
  console.log(`Hàng tồn: ${item.amount}`);
  console.log(); // empty line for separation
});



// Câu 2: sử dụng một hàm đã học của array để tạo ra một mảng sản phẩm mới ,
// với mức giá của sản phẩm có mã "BC05" tăng lên 2000, và sản phẩm có mã "BC04" thêm màu "purple",
// tất cả tên của sản phẩm được viết hoa.
const updatedProducts = product.map(item => {
  let newItem = { ...item }; // Tạo một bản sao của đối tượng item

  // Tăng giá sản phẩm có mã "BC05" lên 2000
  if (newItem.code === "BC05") {
      newItem.price += 2000;
  }

  // Thêm màu "purple" cho sản phẩm có mã "BC04"
  if (newItem.code === "BC04") {
      newItem.color.push("purple");
  }

  // Viết hoa tên của tất cả sản phẩm
  newItem.name = newItem.name.toUpperCase();

  return newItem;
});

console.log(updatedProducts);


//  Câu 3: sử dụng hàm của array để lọc ra
// những sản phẩm có lượng hàng tồn kho nhỏ hơn 10 và có giá ít nhất 8000.
const filteredProducts = product.filter(item => item.amount < 10 && item.price >= 8000);

console.log(filteredProducts);

// Câu 4: sử dụng hàm của array để tìm 1 ra sản phẩm
// của nhà cung cấp "Hong ha" và ( có giá trên 10000 hoặc có số hàng tồn <6 ).
const productFound = product.find(item => item.origin === "Hong ha" && (item.price > 10000 || item.amount < 6));

console.log(productFound);


// Câu 5: sử dụng hàm của array để kiểm tra xem, có phải có ít nhất một
//  sản phẩm  của nhà cung cấp "Thien long" có giá trên 10000 không
const hasExpensiveThienLongProduct = product.some(item => item.origin === "Thien long" && item.price > 10000);

console.log(hasExpensiveThienLongProduct); // true nếu có ít nhất một sản phẩm thỏa mãn điều kiện, ngược lại false


// Câu 6: sử dụng hàm của array để kiểm tra xem, có phải tất cả các
//  sản phẩm đều còn hàng hay không?
const allProductsInStock = product.every(item => item.amount > 0);

console.log(allProductsInStock); // true nếu tất cả sản phẩm đều còn hàng, ngược lại false


// Câu 7: sử dụng hàm của array để tạo ra một mảng sản phẩm mới,với mỗi sản phẩm
//  có thêm một thông tin là locked để lưu thông tin xem sản phẩm có đang bị cấm
// không ,  thực hiện cấm bán với những sản phẩm thuộc nhà cung cấp "Thien long"
const updatedProducts = product.map(item => {
  // Tạo một bản sao của đối tượng item và thêm thuộc tính locked
  return {
      ...item,
      locked: item.origin === "Thien long" // true nếu sản phẩm thuộc nhà cung cấp "Thien long", ngược lại false
  };
});

console.log(updatedProducts);


// Câu 8: Lấy ra danh sách "code" của các product có nhiều hơn 2 màu
const codesWithMoreThanTwoColors = product
    .filter(item => item.color.length > 2) // Lọc các sản phẩm có nhiều hơn 2 màu
    .map(item => item.code); // Lấy ra danh sách "code" của các sản phẩm đã lọc

console.log(codesWithMoreThanTwoColors);


// Câu 9: sử dụng hàm của array để sắp xếp các sản phẩm trên theo
// thứ tự tăng đần của giá.
const sortedProductsByPrice = product.slice().sort((a, b) => a.price - b.price);

console.log(sortedProductsByPrice);


// Câu 10: sử dụng hàm của array để sắp xếp các sản phẩm trên theo tên nhà cung cấp, nếu cùng nhà cung cấp
// xếp theo số lượng màu
const sortedProductsBySupplierAndColorCount = product.slice().sort((a, b) => {
  if (a.origin === b.origin) {
      // Nếu cùng nhà cung cấp, so sánh theo số lượng màu
      return a.color.length - b.color.length;
  } else {
      // So sánh theo tên nhà cung cấp
      return a.origin.localeCompare(b.origin);
  }
});

console.log(sortedProductsBySupplierAndColorCount);


// Câu 11: từ mảng product tạo thành một object với các key là từng code của product, và data là product đó:
// Ví dụ:
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
const productObject = product.reduce((acc, item) => {
  acc[item.code] = item;
  return acc;
}, {});

console.log(productObject);
