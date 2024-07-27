// // Bài 1: từ mảng student
// const students = [
//     { name: "Nghiêm 1", scores: [90, 85, 92] },
//     { name: "Nghiêm 2", scores: [75, 80, 85] },
//     { name: "Nghiêm 3", scores: [90, 95, 89] },
//     { name: "Nghiem 4", scores: [100, 100, 100] },
// ];
// // Hiển thị danh sách học sinh có điểm trung bình lớn hơn 90
// const filteredStudents = students.filter(student => {
//   // Tính tổng điểm số của sinh viên
//     const totalScore = student.scores.reduce((a,b) => a + b, 0);

//   // Tính điểm trung bình
//   const averageScore = totalScore / student.scores.length;

//   // Gán averageScore vào đối tượng học sinh
//   student.averageScore = averageScore;
//   // Lọc sinh viên có điểm trung bình lớn hơn 90
  
//   return averageScore > 90;
// });

// // Sắp xếp danh sách học sinh theo điểm trung bình từ cao đến thấp
// filteredStudents.sort((a, b) => b.averageScore - a.averageScore);

// // Hiển thị danh sách học sinh có điểm trung bình lớn hơn 90
// console.log("Danh sách học sinh có điểm trung bình lớn hơn 90:");
// filteredStudents.forEach(student => {
//   console.log(`Tên: ${student.name}, Điểm trung bình: ${student.averageScore.toFixed(2)}`);
// });

// // Tạo một mảng mới với các thông tin điểm mỗi môn được lưu vào từng key
// const detailedStudents = filteredStudents.map(student => {
//     return {
//       name: student.name,
//       averageScore: student.averageScore,
//       score1: student.scores[0],
//       score2: student.scores[1],
//       score3: student.scores[2],
//     };
//   });
// console.log(detailedStudents);
// console.log("Danh sách học sinh có điểm trung bình lớn hơn 90 (sắp xếp từ cao đến thấp):");
// detailedStudents.forEach(student => {
//   console.log(`Tên: ${student.name}, Điểm trung bình: ${student.averageScore.toFixed(2)}, Điểm 1: ${student.score1}, Điểm 2: ${student.score2}, Điểm 3: ${student.score3}`);
// });

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
product.forEach(product => {
    const { name, price, amount, color, origin, code } = product;
    console.log(
      `Sản phẩm ${name}, msp ${code}: giá bán ${price} vnd, có các màu ${color.join("-")}, được phân phối bởi công ty ${origin}\nHàng tồn: ${amount}`
    );
  });
