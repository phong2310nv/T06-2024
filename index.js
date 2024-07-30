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
console.log(time.getHours());
time.setFullYear(2023);
console.log(time.getFullYear());

const person = {
  name: "phong",
  age: 16,
  favorites: ["gaming", "swiming"],
};

const values = Object.values(person); // Array: ["Phong", 16, ["gaming", "swiming"]]
console.log(values);
const keys = Object.keys(person); //Array: ["name","age", "favporites"]
console.log(keys);
const pair = Object.entries(person);
console.log(pair);

const students = [
  {
    name: "Hung",
    score: 10,
  },
  {
    name: "Huy",
    score: 15,
  },
  {
    name: " son",
    score: 12,
  },
  { name: " Huy ", score: 17 },
];
console.log(students);
// students.push({
// name: "nghiem",
// score: 19,
// });

// const lastStudents = students.pop();
// console.log(students);
// console.log(lastStudents);
const logST = function (data, index) {
  console.log(data, index, arr);
};
// logST(students[0], 0, students);
// logST(students[1], 1, students);
// logST(students[2], 2, students);

students.forEach(function (std, index, score) {
  console.log(
    `sinh vien ${std.name}, co diem la: ${std.score}, stt la: ${index},`
  );
});
const numbers = [1, 2, 3];
const newnumbers = numbers.map(function (std, idx) {
  return std * 2;
});
// [1,2]  => [2,4]
console.log(newnumbers);

const newStudents = students.map(function (std) {
  const newstd = {};
  newstd.name = std.name;
  newstd.score = std.score;
  newstd.isPassed = std.score >= 12 ? true : false;
  return newstd;
});
console.log(newStudents);
//
const obj = {
  name: "kien",
  mark: 16,
};
obj.name = "phong";

const filteredStudents = students.filter(function (std) {
  if (std.score >= 12) {
    return true;
  } else {
    return false;
  }
});
console.log(filteredStudents);

const nameISPhong = students.findIndex(function (std) {
  if (std.name === " Hung") {
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
console.log(isAllPassed);
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
const ssorted = students.sort(function (a, b) {
  if (a.score > b.score) {
    return 1;
  }
  if (a.score < b.score) {
    return -1;
  }
  return 0;
});
console.log(ssorted);

const myFunction = function (a, b) {
  return a + b.score;
};
const arr = [1, 2, 3, 4];

// const x = myFunction(0, 1);
// const y = myFunction(x, 2);
// const z = myFunction(y, 3);
// const d = myFunction(z, 4);

const result = students.reduce(myFunction, 0);
console.log(result);
