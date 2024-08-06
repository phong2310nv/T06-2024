
// Bài 1: từ mảng student
const students = [
    { name: "Nghiêm 1", scores: [90, 85, 92] },
    { name: "Nghiêm 2", scores: [75, 80, 85] },
    { name: "Nghiêm 3", scores: [90, 95, 89] },
    { name: "Nghiem 4", scores: [100, 100, 100] },
  ];
  
  // Hiển thị danh sách học sinh có điểm trung bình lớn hơn 90
  
  const listStdc1 = students.filter(function(std){
    let sum=0;
    for(let i=0;i<std.scores.length;i++){
        sum+=std.scores[i];
    }
    if(sum/std.scores.length > 90){
        return true;
    }
  });
  for(let i=0;i<listStdc1.length;i++){
    console.log(listStdc1[i].name);
  }

  // Tạo một mảng mới với các thông tin điểm mỗi môn được lưu vào từng key

  const listStdc1_2 = students.map(function(std){
    const newlist = {};
    newlist.name = std.name;
    newlist.Subject_1 = std.scores[0];
    newlist.Subject_2 = std.scores[1];
    newlist.Subject_3= std.scores[2];
    return newlist;
  });
  console.log(listStdc1_2);
  
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

  product.forEach(function(prd){
    console.log('Sản phẩm : '+prd.name);
    console.log('MSP : '+ prd.code);
    console.log('Giá bán : '+prd.price+'VND');
    let textcolor = '';
    for(let i=0;i<prd.color.length;i++){
      if(i===0){
        textcolor+=prd.color[i];
      }
      else{
        textcolor+='-'+prd.color[i];
      }
    }
    console.log('Có các màu : '+textcolor);
    console.log('Được phân phối bởi công ty : '+prd.origin);
    console.log('Hàng tồn : '+prd.amount+'\n');
  });
  
  // Câu 2: sử dụng một hàm đã học của array để tạo ra một mảng sản phẩm mới ,
  // với mức giá của sản phẩm có mã "BC05" tăng lên 2000, và sản phẩm có mã "BC04" thêm màu "purple",
  // tất cả tên của sản phẩm được viết hoa.

  const newlistprd1 = product.filter(function (prd){
    if(prd.code ==='BC05'){
      prd.price+=2000;
    }
    if(prd.code==="BC04"){
      prd.color.push("purple");
    }
    prd.name = prd.name.toUpperCase();
    return prd;
  });
  console.log(newlistprd1);
  
  //  Câu 3: sử dụng hàm của array để lọc ra
  // những sản phẩm có lượng hàng tồn kho nhỏ hơn 10 và có giá ít nhất 8000.

  const newlistprd2 = product.filter(function (prd){
    if(prd.amount<10 && prd.price>=8000)
      return prd;
  });
  console.log(newlistprd2);
  
  // Câu 4: sử dụng hàm của array để tìm 1 ra sản phẩm
  // của nhà cung cấp "Hong ha" và ( có giá trên 10000 hoặc có số hàng tồn <6 ).

  const newlistprd3 = product.filter(function (prd){
    if(prd.origin === "Hong ha"){
      if(prd.price>10000 || prd.amount<6){
        return prd;
      }
    }
  });
  console.log(newlistprd3);
  // Câu 5: sử dụng hàm của array để kiểm tra xem, có phải có ít nhất một
  //  sản phẩm  của nhà cung cấp "Thien long" có giá trên 10000 không
  
  const newlistprd4 = product.some(function (prd){
    if(prd.origin==="Thien long" && prd.price>10000){
      return true;
    }
    return false;
  });
  console.log(newlistprd4);
  
  // Câu 6: sử dụng hàm của array để kiểm tra xem, có phải tất cả các
  //  sản phẩm đều còn hàng hay không?

  const newlistprd5 = product.every(function (prd){
    if(prd.amount>0){
      return true;
    }
    return false;
  });
  console.log(newlistprd5);


  // Câu 7: sử dụng hàm của array để tạo ra một mảng sản phẩm mới,với mỗi sản phẩm
  //  có thêm một thông tin là locked để lưu thông tin xem sản phẩm có đang bị cấm
  // không ,  thực hiện cấm bán với những sản phẩm thuộc nhà cung cấp "Thien long"
  
  const newlistprd6  = product.filter(function (prd){
    prd.locked="";
    if(prd.origin==="Thien long"){
      prd.locked = "ban";
    }
    else{
      prd.locked = "not ban";
    }
    return prd;
  });
console.log(newlistprd6);

  // Câu 8: Lấy ra danh sách "code" của các product có nhiều hơn 2 màu
  
  const newlistprd7 = product.filter(function (prd){
    return prd.color.length>2;
  }).flatMap(function (prd){
    return prd.code;
  });
  console.log(newlistprd7);

  // Câu 9: sử dụng hàm của array để sắp xếp các sản phẩm trên theo
  // thứ tự tăng đần của giá.
  
  const newlistprd8 = product.toSorted((a,b) => a.price-b.price);
  console.log(newlistprd8);
  // Câu 10: sử dụng hàm của array để sắp xếp các sản phẩm trên theo tên nhà cung cấp, nếu cùng nhà cung cấp
  // xếp theo số lượng màu
  
  const newlistprd9 = product.toSorted(function (a,b) {
    if(a.origin<b.origin){
      return -1;
    }
    if(a.origin>b.origin){
      return 1;
    }
    return a.color.length-b.color.length;
  });
  console.log(newlistprd9);
  
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

  const newlistprd10 = {};
  product.forEach(prd =>{
    newlistprd10[prd.code] = {
      name:prd.name,
      price: prd.price,
      amount: prd.amount,
      color: prd.color,
      origin: prd.origin,
      code: prd.code,
    };
  });
  console.log(newlistprd10);
  
  
  