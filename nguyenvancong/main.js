// obj

// cú pháp:

// const info = {
//   // key: value
//   name: "Cong",
//   age: 21,
//   address: "nam dinh",
//   run: function () {
//     console.log("chạy nhanh thế ");
//   },
//   status: true,
// };

// // tạo đối tượng car

// const car = {
//   year: 2013,
//   color: "black",
//   model: "camry",
// };
// // truy suất thông tin
// console.log(car.year);

// // Array => mnagr se lưu thông tin đưới dạng  ds

// // cứ pháp : []

// const numbers = [1, 2, 3, 4, 5]; // danh sách

// const listHS = [
//   {
//     id: "1",
//     name: "Cong",
//     score: 10,
//     age: 21,
//     status: true,
//     gender: "Nam",
//   },

//   {
//     id: "2",
//     name: "Ngoc",
//     score: 1,
//     age: 21,
//     status: false,
//     gender: "Nu",
//   },
// ];
// console.log("listHs", listHS);
// let a = [1, "s"];
// // for(let b = 1; b< 5; b--){
// //     console.log(b);
// // }



// if else 
let score = 5;

if (score >= 4 && score < 5.5) {
  console.log("Học lực D");
} else if (score >= 5.5 && score < 7) {
  console.log("Học lực C");
} else if (score >= 7 && score < 8.5) {
    console.log("Học lực B");
} else if (score >= 8.5 && score <= 10) {
    console.log("Học lực A");
} else {
 // Xử lý trường hợp điểm không hợp lệ
  console.log("Invalid score");
}


// toán tử 3 ngôi

let result =  (score >= 4 && score < 5.5) ?  console.log("Học lực D") :
(score >= 5.5 && score < 7) ? console.log("Học lực C") :
(score >= 7 && score < 8.5) ?console.log("Học lực B") :
(score >= 8.5 && score <= 10) ? console.log("Học lực A") :
'Invalid score';

