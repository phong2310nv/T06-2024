// const students = [
//   { name: "Nghiêm 1", scores: [90, 85, 92] },
//   { name: "Nghiêm 2", scores: [75, 80, 85] },
//   { name: "Nghiêm 3", scores: [90, 95, 89] },
//   { name: "Nghiem 4", scores: [100, 100, 100] },
// ];

// // Hiển thị danh sách học sinh có điểm trung bình lớn hơn 90

// // Tạo một mảng mới với các thông tin điểm mỗi môn được lưu vào từng key

// const studentGrThan90 = students.filter((student) => {
//   const avg =
//     student.scores.reduce((acc, curr) => acc + curr, 0) / student.scores.length;
//   return avg > 90;
// });

// studentGrThan90.forEach((student) => {
//   console.log(student.name);
// });

// const detailedStudents = students.map((student) => {
//   return {
//     name: student.name,
//     subject1: student.scores[0],
//     subject2: student.scores[1],
//     subject3: student.scores[2],
//   };
// });

// console.log(detailedStudents);


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

//  products.forEach((product)=>{
//     console.log(product);
//  });

// let FilterPr = products.filter((item) =>{
//     if(item.amount < 20 && item.price >= 8000){
//     //    return item.amount && item.price
//              return item
//     }
//   })  
//           console.log(FilterPr); 

//           let somePr = products.some((item)=>{
//             if(item.origin === "Hong ha" && (item.price > 10000 || item.amount < 6)){
//                 return item;
//             }
//            });
        
//            console.log(somePr);
 

 products.map((item)=>{
    if(item.color.length > 2){
        console.log(item.code); 
    }
})



// console.log(products[0].color[1]);