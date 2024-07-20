//Câu 7:
const tinhTich = (a = 0, b = 1, c = 1) => a * b * c;

console.log("Câu 7:", tinhTich(1, 2, 3));

//Câu 8:
const tinhTichHaiSo = (a, b) => a * b;
const tong = tinhTichHaiSo(2, 2) + tinhTichHaiSo(3, 3);

console.log("Câu 8: ", tong);

//Câu 9:
const bigger = (a, b) => (a > b ? a : b);

console.log("Câu 9:", bigger(99, 100));

//Câu 10:
const employees = {
  name: "John",
  Rank: "A",
};

const handleSalary = (employees) => {
  if (employees.Rank === "A") {
    return 100000;
  } else if (employees.Rank === "B") {
    return 50000;
  } else if (employees.Rank === "C") {
    return 10000;
  } else if (employees.Rank === "D") {
    return 5000;
  } else {
    return "Rank không hợp lệ";
  }
};

console.log(
  "Câu 10: ",
  ` Lương của ${employees.name} là:`,
  handleSalary(employees)
);

//Câu 11:
const dienTichHinhThang = (a, b, h) => ((a + b) * h) / 2;

console.log("Câu 11: ", dienTichHinhThang(4, 5, 6));

//Câu 12:
const giaiPTB2 = (a, b, c) => {
  if (a === 0) {
    if (b === 0) {
      return "PT Vô nghiệm";
    } else {
      const x = -c / b;
      return `Nghiệm duy nhất của PT là: x = ${x}`;
    }
  }

  const delta = b * b - 4 * a * c;

  if (delta < 0) {
    return "PT Vô nghiệm";
  } else if (delta === 0) {
    const x = -b / (2 * a);
    return ` PT có nghiệm kép là: x = ${x} `;
  } else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return ` PT có hai nghiệm riêng biệt: x1 = ${x1}, x2 = ${x2}`;
  }
};

console.log("Câu 12: ", giaiPTB2(4, 5, 3));

//Câu 13:

const myFunA = (a) => {
  console.log(a);
};

const myFunB = (text, callback) => {
  console.log("text", text);
  callback(100);
  console.log("Kết thúc");
};



