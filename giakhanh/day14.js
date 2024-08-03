const product = [
   {
     name: "but chi",
     code: "BC01",
     price: 10000,
     color: ["red", "green", "blue"],
     origin: "Thien long",
     amount: 1,
   },
   {
     name: "but chi",
     code: "BC02",
     price: 8000,
     color: ["red", "green"],
     origin: "Hong ha",
     amount: 90,
   },
   {
     name: "but bi",
     code: "BC03",
     price: 9000,
     color: ["red", "green", "blue"],
     origin: "Thien long",
     amount: 20,
   },
   {
     name: "but bi",
     code: "BC04",
     price: 8000,
     color: ["red", "green", "blue", "yellow"],
     origin: "Thien long",
     amount: 15,
   },
   {
     name: "but xoa",
     code: "BC05",
     price: 8000,
     color: ["red", "green"],
     origin: "Hong ha",
     amount: 15,
   },
   {
     name: "but xoa",
     code: "BC06",
     price: 8000,
     color: ["red", "green", "black"],
     origin: "Thien long",
     amount: 22,
   },
 ];
// Câu 1: Sử dụng hàm forEach, hiển thị ra màn hình thông tin các sản phẩm theo cấu trúc.
// "Sản phẩm a, msp b: giá bán c vnd, có các màu x-y-z, được phân phối bởi công ty d, Hàng tồn:  e"
// Trong đó, a là tên sp, b là mã sp, c là giá bán, xyz là các màu của sản phẩm, d là nhà cung cấp, e là số lượng tồn kho.

product.forEach(function(prd){
   console.log(`San pham: ${prd.name}, Ma: ${prd.code}, Gia: ${prd.price}, Mau: ${prd.color}, Phan phoi: ${prd.origin}, Ton kho: ${prd.amount}`)
})

// Câu 2: sử dụng một hàm đã học của array để tạo ra một mảng sản phẩm mới ,
// với mức giá của sản phẩm có mã "BC05" tăng lên 2000, và sản phẩm có mã "BC04" thêm màu "purple",
// tất cả tên của sản phẩm được viết hoa.

const newProduct2 = product.map(function(prd){
   const newprd = [];
   newprd.name = prd.name;
   newprd.code = prd.code;
   newprd.price = prd.code==="BC05"?prd.price+2000:prd.price;
   newprd.color = prd.code==="BC04"?prd.color+",purple":prd.color;
   newprd.origin = prd.origin;
   newprd.amount = prd.amount;
   return newprd;
})
console.log(newProduct2);
newProduct2.forEach(function(prd){
   console.log(`San pham: ${prd.name}, Ma: ${prd.code}, Gia: ${prd.price}, Mau: ${prd.color}, Phan phoi: ${prd.origin}, Ton kho: ${prd.amount}`)
})

//  Câu 3: sử dụng hàm của array để lọc ra
// những sản phẩm có lượng hàng tồn kho nhỏ hơn 10 và có giá ít nhất 8000.

const newProduct3 = product.filter(function(prd){
   if(prd.amount <10 && prd.price >=8000){
       return true
   }
   return false;
   
})
console.log(newProduct3);
newProduct3.forEach(function(prd){
   console.log(`San pham: ${prd.name}, Ma: ${prd.code}, Gia: ${prd.price}, Mau: ${prd.color}, Phan phoi: ${prd.origin}, Ton kho: ${prd.amount}`)
})

// Câu 4: sử dụng hàm của array để tìm 1 ra sản phẩm
// của nhà cung cấp "Hong ha" và ( có giá trên 10000 hoặc có số hàng tồn <6 )

const newProduct4 = product.find(function(prd){
   if(prd.origin==="Hong ha" && (prd.price>10000 || prd.amount<6)){
       return true;
   }
   return false;
});
console.log(newProduct4);

// Câu 5: sử dụng hàm của array để kiểm tra xem, có phải có ít nhất một
//  sản phẩm  của nhà cung cấp "Thien long" có giá trên 10000 không

const newProduct5 = product.some(function(prd){
   if(prd.origin==="Thien long" && prd.price>10000){
       return true;
   }
   return false;
})
console.log(newProduct5);

// Câu 6: sử dụng hàm của array để kiểm tra xem, có phải tất cả các
//  sản phẩm đều còn hàng hay không?

const newProduct6 = product.every(function(prd){
   if(prd.amount>=1){
       return true;
   }
   return false;
})
console.log(newProduct6);

// Câu 7: sử dụng hàm của array để tạo ra một mảng sản phẩm mới,với mỗi sản phẩm
//  có thêm một thông tin là locked để lưu thông tin xem sản phẩm có đang bị cấm
// không ,  thực hiện cấm bán với những sản phẩm thuộc nhà cung cấp "Thien long"

const newProduct7 = product.map(function(prd){
   const newprd = [];
   newprd.name = prd.name;
   newprd.code = prd.code;
   newprd.price = prd.price;
   newprd.color = prd.color;
   newprd.origin = prd.origin;
   newprd.amount = prd.amount;
   newprd.isLocked = prd.origin==="Thien long"?"co":"khong";
   return newprd;
})
console.log(newProduct7);
newProduct7.forEach(function(prd){
   console.log(`San pham: ${prd.name}, Ma: ${prd.code}, Gia: ${prd.price}, Mau: ${prd.color}, Phan phoi: ${prd.origin}, Ton kho: ${prd.amount}, Locked: ${prd.isLocked}`)
})

// Câu 8: Lấy ra danh sách "code" của các product có nhiều hơn 2 màu

const newProduct8 = product.map(function(prd){
   const newprd = [];
   if(prd.color.length>2){
       newprd.code = prd.code;
   }
   return newprd;
})
console.log(newProduct8);
newProduct8.forEach(function(prd){
   console.log(`Ma: ${prd.code}`)})

// Câu 9: sử dụng hàm của array để sắp xếp các sản phẩm trên theo
// thứ tự tăng đần của giá.

const newProduct9 = product.toSorted(function(pr1, pr2){
   if(pr1.price > pr2.price){
       return 1;
   }
   if(pr1.price < pr2.price){
       return -1;
   }
   return 0;
})
console.log(newProduct9);
newProduct9.forEach(function(prd){
   console.log(`San pham: ${prd.name}, Ma: ${prd.code}, Gia: ${prd.price}, Mau: ${prd.color}, Phan phoi: ${prd.origin}, Ton kho: ${prd.amount}`)
})

// Câu 10: sử dụng hàm của array để sắp xếp các sản phẩm trên theo tên nhà cung cấp, nếu cùng nhà cung cấp
// xếp theo số lượng màu
const newProduct10 = product.toSorted(function(n1, n2){
   if(n1.origin > n2.origin){
       return 1;
   }
   if(n1.origin > n2.origin){
       return -1;
   }
   if(n1.origin===n2.origin){
       if(n1.color > n2.color){
           return 1;
       }
       if(n1.color > n2.color){
           return -1;
       }
   }
   return 0;
})
console.log(newProduct10);
newProduct10.forEach(function(prd){
   console.log(`San pham: ${prd.name}, Ma: ${prd.code}, Gia: ${prd.price}, Mau: ${prd.color}, Phan phoi: ${prd.origin}, Ton kho: ${prd.amount}`)
})

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

