const doSomething = function (param1, param2) {
  console.log(param1);
  console.log(param2);
  return param1 + param2;
};
function doSomething2(param1, param2) {
  console.log(param1);
  console.log(param2);
  return param1 + param2;
}

const doSomething3 = (param1, param2) => {
  //this
  console.log(param1);
  console.log(param2);
  return param1 + param2;
};

const doSomething4 = (param) => {
  console.log(param1);
  return param + 5;
};

const doSomething5 = (param1, param2) => param1 + param2;

const age = 18;
const data = "address";
const obj = {
  name: "Phong2",
  //   age:age,
  age,
  [data]: "Hn",
  score: 19,
  school: "Dong da",
  detailAddress: {
    line1: "Line1 XXX",
    line2: "Line2 YYY",
  },
};
console.log(obj);

const myScore = obj.score;
const mySchool = obj.school;
console.log(myScore, mySchool);

const {
  score: hisScore,
  school,
  height = 0,
  detailAddress: { line1, line2 },
  schoolDetail: { line3, line4 } = {},
} = obj;

console.log(hisScore, school, height, line1, line2);
console.log(line3, line4);

const doSomething6 = ({ name: hisName, age, ...others }) => {
  //   const name = myObj.name;
  //   const age = myObj.age;
  console.log(others);
  console.log(`This person is ${hisName} and he is ${age} years old`);
};

const mySourceObj = {
  name: "Phong3",
  age: 20,
  address: "HCM city",
  address2: "HCM city2",
};

doSomething6(mySourceObj);

const students = [
  { name: "Phong2", score: 15 },
  { name: "Phong3", score: 10 },
  { name: "Phong4", score: 19 },
  { name: "Phong5", score: 20 },
];

const firstStudent = students[0];
const secondStudent = students[1];
console.log(firstStudent);
console.log(secondStudent);

const [firstStd, secondStd] = students;

console.log(firstStd);
console.log(secondStd);

const [, , thirdStd, , fifStd = {}] = students;
console.log(thirdStd);
console.log(fifStd);

const myObj3 = {
  zipCode: "0001",
  code: "XXXYYY",
  name: "But bi",
  trigger: "NM1",
  status: "active",
};

const { zipCode, ...rest } = myObj3;
console.log(rest);

const [, , ...others] = students;
console.log(others);

const tinhTong = (...params) => {
  const sum = params.reduce((pre, next) => pre + next, 0);
  return sum;
};

// tinhTong(5); // => 5
// tinhTong(5, 10); // => 15
console.log(tinhTong(5, 10, 15)); // => 30
console.log(tinhTong(5, 10, 15, 9)); // => 39

[1, 2, 3, 4, 5]; //
// 0 1 => 1
// 1 2 => 3
// 3 3 => 6
// ....

const myObj4 = {
  zipCode: "0001",
  code: "XXXYYY",
  name: "But bi",
  trigger: "NM1",
  status: "active",
};

const myObj5 = {
  date: new Date(),
  ...myObj4,
  zipCode: "0002",
};
console.log(myObj4);
console.log(myObj5);

const newStudent = [
  { name: "phong1", score: 9 },
  ...students,
  { name: "phong6", score: 99 },
];
console.log(newStudent);

const newStudent2 = newStudent.map((std) => {
  const newStd = {
    ...std,
    isPassed: std.score > 15,
  };
  return newStd;
});
console.log(newStudent2);
