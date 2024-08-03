// Bài 1: từ mảng student
const students = [
    { name: "Nghiêm 1", scores: [90, 85, 92] },
    { name: "Nghiêm 2", scores: [75, 80, 85] },
    { name: "Nghiêm 3", scores: [90, 95, 89] },
    { name: "Nghiem 4", scores: [100, 100, 100] },
  ];
  
  // Hiển thị danh sách học sinh có điểm trung bình lớn hơn 90

  const result = students.filter(student => {
    const average = student.scores.reduce((total, score) => total + score, 0) / student.scores.length;
    return average > 90;
  });
  
  console.log("Danh sách học sinh có điểm trung bình lớn hơn 90:", result);
  
  // Tạo một mảng mới với các thông tin điểm mỗi môn được lưu vào từng key


 
  const newStudents = students.map(student =>{
    return{
        name: student.name,
        math: student.scores[0],
        science: student.scores[1],
        history: student.scores[2],
    };
});
console.log(newStudents)

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
  
  product.forEach(function(item) {
    const colors = item.color.join("-");
    console.log(`Sản phẩm ${item.name}, 
      msp ${item.code},
      giá bán ${item.price} vnd, 
      có các màu ${colors}, 
      được phân phối bởi công ty ${item.origin} , 
      Hàng tồn:  ${item.amount}`)
  });


  // Câu 2: sử dụng một hàm đã học của array để tạo ra một mảng sản phẩm mới ,
  // với mức giá của sản phẩm có mã "BC05" tăng lên 2000, và sản phẩm có mã "BC04" thêm màu "purple",
  // tất cả tên của sản phẩm được viết hoa.
  

  const a = product.map(function (item){
    if(item.code === "BC05"){
        item.price += 2000;
    }
    if(item.code === "BC04"){
        item.color = item.color.push("purple");
    }
    item.name = item.name.toUpperCase();
    return item;
    });
    console.log(a);

  //  Câu 3: sử dụng hàm của array để lọc ra
  // những sản phẩm có lượng hàng tồn kho nhỏ hơn 10 và có giá ít nhất 8000.
  

  const b = product.filter(function(item){
    return item.amount < 10 && item.price >= 8000;
  });
  console.log(b);



  // Câu 4: sử dụng hàm của array để tìm 1 ra sản phẩm
  // của nhà cung cấp "Hong ha" và ( có giá trên 10000 hoặc có số hàng tồn <6 ).

  const cau4 = product.filter(function (item) {
    return item.origin === "Hong ha" && (item.amount < 6 || item.price > 10000);
  });
  console.log(cau4);
  
  // Câu 5: sử dụng hàm của array để kiểm tra xem, có phải có ít nhất một
  //  sản phẩm  của nhà cung cấp "Thien long" có giá trên 10000 không
  

  const cau5 = product.some(function (item) {
    return item.origin === "Thien long" && item.price > 10000;
  });
  console.log(cau5, "cau5");


  // Câu 6: sử dụng hàm của array để kiểm tra xem, có phải tất cả các
  //  sản phẩm đều còn hàng hay không?

  const cau6 = product.every((item) => item.amount > 0);
  console.log(cau6, "cau6");
  
  // Câu 7: sử dụng hàm của array để tạo ra một mảng sản phẩm mới,với mỗi sản phẩm
  //  có thêm một thông tin là locked để lưu thông tin xem sản phẩm có đang bị cấm
  // không ,  thực hiện cấm bán với những sản phẩm thuộc nhà cung cấp "Thien long"
  
  // Câu 8: Lấy ra danh sách "code" của các product có nhiều hơn 2 màu

    const cau8 = product.sort(function (a, b) {
       if (a.price - b.price) {
        return -1;
       } else {
        return 1;
       }
     });
    console.log(cau8)
  
  // Câu 9: sử dụng hàm của array để sắp xếp các sản phẩm trên theo
  // thứ tự tăng đần của giá.
  
  // Câu 10: sử dụng hàm của array để sắp xếp các sản phẩm trên theo tên nhà cung cấp, nếu cùng nhà cung cấp
  // xếp theo số lượng màu
  
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
  