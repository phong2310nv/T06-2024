// Bài 1: từ mảng student
const students = [
    { name: "Nghiêm 1", scores: [90, 85, 92] },
    { name: "Nghiêm 2", scores: [75, 80, 85] },
    { name: "Nghiêm 3", scores: [90, 95, 89] },
    { name: "Nghiem 4", scores: [100, 100, 100] },
  ];
  
  // Hiển thị danh sách học sinh có điểm trung bình lớn hơn 90
  
  // Tạo một mảng mới với các thông tin điểm mỗi môn được lưu vào từng key

  const studentGrThan90 = students.filter((student) => {
    const avg =
      student.scores.reduce((acc, curr) => acc + curr, 0) / student.scores.length;
    return avg > 90;
  });
  
  studentGrThan90.forEach((student) => {
    console.log(student.name);
  });

  const detailedStudents = students.map((student) => {
    return {
      name: student.name,
      subject1: student.scores[0],
      subject2: student.scores[1],
      subject3: student.scores[2],
    };
  });
  
  console.log(detailedStudents);
  
  
  // Bài 2: Cho mảng products sau:
  const products = [
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
  products.forEach((product)=>{
    console.log(product);
 });
  
  // Câu 2: sử dụng một hàm đã học của array để tạo ra một mảng sản phẩm mới ,
  // với mức giá của sản phẩm có mã "BC05" tăng lên 2000, và sản phẩm có mã "BC04" thêm màu "purple",
  // tất cả tên của sản phẩm được viết hoa.


  let createPrNew = products.map((item)=>{
    let newItem = { ...item, name: item.name.toUpperCase() };
    if(newItem.code === "BC05"){
        return newItem.price +=2000
    }
    if(newItem.color === "BC04"){
        newItem.color = [...newItem.color,"purple"]
    }
    return newItem;

    // c3
        //  return{
        //         amount:item.amount,
        //         code:item.code,
        //         name:item.name.toLocaleUpperCase(),
        //         color:item.color === "BC04"?item.color.concat("purple"):item.color,
        //         price:item.price === "BC04"?item.price+2000 :item.price

        //  }
  })
  console.log(createPrNew);
  
  //  Câu 3: sử dụng hàm của array để lọc ra
  // những sản phẩm có lượng hàng tồn kho nhỏ hơn 10 và có giá ít nhất 8000.
  let FilterPr = products.filter((item) =>{
    if(item.amount < 10 && item.price >= 8000){
       return item.amount && item.price
    }
  })  
          console.log(FilterPr); 
  // Câu 4: sử dụng hàm của array để tìm 1 ra sản phẩm
  // của nhà cung cấp "Hong ha" và ( có giá trên 10000 hoặc có số hàng tồn <6 ).

   let findPr = products.find((item)=>{
    if(item.origin === "Hong ha" && item.price > 10000 || item.amount < 6){
        return item;
    }
   });

   console.log(findPr);
  
  // Câu 5: sử dụng hàm của array để kiểm tra xem, có phải có ít nhất một
  //  sản phẩm  của nhà cung cấp "Thien long" có giá trên 10000 không
       let somePr = products.some((item)=>{
        if(item.origin === "Thien long" && item.price > 10000 ){
            return true;
        }
       })
       console.log(somePr);

  
  // Câu 6: sử dụng hàm của array để kiểm tra xem, có phải tất cả các
  //  sản phẩm đều còn hàng hay không?

  let everyPr = products.every((item)=>{
    if(item.amount > 0){
        return true
    }
  });
  console.log(everyPr  );
  
  // Câu 7: sử dụng hàm của array để tạo ra một mảng sản phẩm mới,với mỗi sản phẩm
  //  có thêm một thông tin là locked để lưu thông tin xem sản phẩm có đang bị cấm
  // không ,  thực hiện cấm bán với những sản phẩm thuộc nhà cung cấp "Thien long"

  let mapPro = products.map((item)=>{
    return{
        ...item,locked:item.origin === "Thien long" ? true : false
    }
  })
  console.log(mapPro);
  
  // Câu 8: Lấy ra danh sách "code" của các product có nhiều hơn 2 màu
  products.map((item)=>{
    if(item.color.length > 2){
        console.log(item.code); 
    }
})
  // Câu 9: sử dụng hàm của array để sắp xếp các sản phẩm trên theo
  // thứ tự tăng đần của giá.

  let sortPr = products.sort((item1,item2)=>{
    return item2.price - item1.price;
  })
  console.log(sortPr);
  // Câu 10: sử dụng hàm của array để sắp xếp các sản phẩm trên theo tên nhà cung cấp, nếu cùng nhà cung cấp
  // xếp theo số lượng màu
        let sortPr2 = products.sort((item1,item2)=>{
            if (item1.origin < item2.origin) return -1;
            if (item1.origin > item2.origin) return 1;
            
            // Nếu nhà cung cấp giống nhau, so sánh số lượng màu
            return item1.color.length - item2.color.length;
        })

        console.log(sortPr2);
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
  const productObject = products.reduce((acc, product) => {
    acc[product.code] = product;
    return acc;
  }, {});
  
  console.log(productObject);
  
  