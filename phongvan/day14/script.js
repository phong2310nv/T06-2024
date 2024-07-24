const time = new Date();
console.log(time);
const time2 = new Date(2023, 10, 2, 2, 30, 30);
console.log(time2);
const time3 = new Date("2023/10/2");
console.log(time3);
const time4 = Date.now();
console.log(time4);

console.log(time.getFullYear());
console.log(time.getMonth());
time.setFullYear(2023);
console.log(time.getFullYear());

const person = {
  name: "Phong",
  age: 16,
  favorites: ["gaming", "swimming"],
};

const values = Object.values(person); // Array: ["Phong", 16, ["gaming", "swimming"]]
console.log(values);
const keys = Object.keys(person); // Array: ['name','age','favorites']
console.log(keys);
const pair = Object.entries(person);
// [
//   ["name", "Phong"],
//   ["age", 16],
//   ["favorites", ["gaming", "swimming"]],
// ];
console.log(pair);

//   {
//     name: "Phong",
//     score: 10,
//     passed: true
//   },
const students = [
  {
    name: "Phong",
    score: 10,
  },
  {
    name: "Son",
    score: 12,
  },
  {
    name: "Huy",
    score: 15,
  },
  {
    name: "Huy",
    score: 14,
  },
];

console.log(students);
// students.push({
//   name: "Nghiem",
//   score: 19,
// });
// console.log(students);
// const lastStudent = students.pop();
// console.log(students);
// console.log(lastStudent);

const logST = function (data, index, arr) {
  console.log(data, index, arr);
};

// logST(students[0], 0, students);
// logST(students[1], 1, students);
// logST(students[2], 2, students);

students.forEach(function (std, idx) {
  console.log(`Sinh vien ${std.name} co diem la: ${std.score}, stt la: ${idx}`);
});
const numbers = [1, 2, 3];

const newNumbers = numbers.map(function (std, idx) {
  return std * 2;
});

const newStudents = students.map(function (std) {
  const newStd = {};
  newStd.name = std.name;
  newStd.score = std.score;
  //   newStd.isPassed = std.score >= 12;
  if (std.score >= 12) {
    newStd.isPassed = "YES";
  } else {
    newStd.isPassed = "NO";
  }
  return newStd;
});
console.log(newStudents);
// [1,2,3] => [2,4,6]
const filteredStudents = students.filter(function (std) {
  //   return std.score >= 12;
  if (std.score >= 12) {
    return true;
  } else {
    return false;
  }
});

console.log(filteredStudents);

const nameISPhong = students.find(function (std) {
  if (std.name === "Huy") {
    return true;
  } else {
    return false;
  }
});
console.log(nameISPhong);

const isAllPassed = students.every(function (std) {
  if (std.score >= 12) {
    return true;
  } else {
    return false;
  }
});

console.log(isAllPassed, "isAllPassed");

const isSomePassed = students.some(function (std) {
  if (std.score >= 12) {
    return true;
  } else {
    return false;
  }
});

console.log(isSomePassed, "isSomePassed");

const sorted = students.toSorted(function (a, b) {
  if (a.score > b.score) {
    return 1;
  }
  if (a.score < b.score) {
    return -1;
  }

  return 0;
});
console.log(sorted);
console.log(students);

const myFunction = function (a, b) {
  return a + b.score;
};
const arr = [1, 2, 3, 4];

// const x = myFunction(0, {
//   name: "Phong",
//   score: 10,
// }); // 10

// const y = myFunction(x, {
//   name: "Son",
//   score: 12,
// }); // 22 
// const z = myFunction(y, 3); 3 + 3 = 6
// const d = myFunction(z, 4); 6 + 4 = 10

const result = students.reduce(myFunction, 0);
console.log(result);
