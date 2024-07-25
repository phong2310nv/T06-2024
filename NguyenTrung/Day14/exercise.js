//Bài 1:
const students = [
    { name: "Nghiêm 1", scores: [90, 85, 92] },
    { name: "Nghiêm 2", scores: [75, 80, 85] },
    { name: "Nghiêm 3", scores: [90, 95, 89] },
    { name: "Nghiem 4", scores: [100, 100, 100] },
  ];
const listStudent = [];
students.forEach((item) => {
  let GPA =
    item.scores.reduce((sum, item) => sum + item, 0) / item.scores.length;
  if (GPA > 90) {
    listStudent.push(item);
  }
});

// console.log( "Danh sách học sinh có GPA > 90: ",listStudent);

const newStudent = students.map((item) => {
  const subject1 = item.scores[0];
  const subject2 = item.scores[1];
  const subject3 = item.scores[2];
  return {
    name: item.name,
    subject1,
    subject2,
    subject3,
  };
});

// console.log(newStudent);

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

// Câu 2.1: 

// product.forEach(item =>{
//     console.log(`Sản phẩm ${item.name}, Mã sản phẩm: ${item.code}, Giá bán ${item.price} VNĐ,
//         có các màu như: ${item.color.map(item => item)} được phân phối bởi công ty: ${item.origin}.
//         `);
//     console.log(`Hàng tồn: ${item.amount}`);
// })

// Câu 2.2: 
const newProduct = product.map(item =>{
    if(item.code === "BC05"){
        item.price += 2000;
    }
    if(item.code ==="BC04"){
        item.color.push('purple');
    }
    return item
})

// console.log("Bài 2.2: ",newProduct);

// Câu 2.3 : Câu này do trong product đang không có amount nào dưới 10 hết nên anh chịu khó thay đổi giúp em :3
const filterProduct1 = product.filter(item => item.amount < 10 && item.price >= 8000);
// console.log(filterProduct1);

// Câu 2.4: 
const filterProduct2 = product.filter(item => item.amount < 6 && item.price > 10000 && item.origin === 'Hong ha');
// console.log(filterProduct2);

//Câu 2.5:
const isCheck = product.some(item => item.origin === 'Thien long' && item.price > 10000);
// console.log(isCheck);

//Câu 2.6: 
const isItInStock = product.every(item => item.amount > 0);
// console.log(isItInStock);

// Câu 2.7:

const newProductList = product.map(item =>{
    return {
        ...item,
        locked: item.origin === 'Thien long' ? true : false,
    }
})

// console.log(newProductList);

// Câu 2.8:
const isColors = [];
product.forEach((item) => {
  if (item.color.length > 2) {
    isColors.push(item.code);
  }
});
// console.log(isColors);

// Câu 2.9: 
const sortPriceProduct = product.toSorted((a,b) => a.price-b.price);
// console.log(sortPriceProduct);

// Câu 2.10:

const sortNameProduct = product.toSorted((a,b) => {
    if (a.origin > b.origin) {
        return 1;
      }
      if (a.origin < b.origin) {
        return -1;
      }
    
      if(a.origin === b.origin){
        return a.color.length - b.color.length;
      }
});
console.log(sortNameProduct);

// Câu 2.11: 
const changeProductList = product.map(item =>{
    return  {[item.code]: {...item}}
})

// console.log(changeProductList);
