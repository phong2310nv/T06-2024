const doSomething2 = function (param1, param2) {
  console.log(param1);
  console.log(param2);
  return param1 + param2;
};

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
  name: "Phong",
  //age:age,
  age,
  [data]: "Hn",
  something: "xxx",
  socre: 19,
  school: "Dong da",
  detailAddress: {
    line1: "Line1 XXX",
    line2: "Line2 YYY",
    line3: "line3 OOO",
  },
};
console.log(obj);

const myScore = obj.socre;
const mySchool = obj.school;
console.log(myScore);
console.log(mySchool);
console.log(myScore, mySchool);

const {
  socre: hisScocre,
  school,
  hisght,
  detailAddress: { line1, line2 },
  schoolDetail: { line3, line4 } = {},
} = obj;
console.log(hisScocre, school, hisght, line1, line2);
console.log(line3, line4);

const doSomething6 = ({ name: hisName, age, ...others }) => {
  // const name = myObj.name;
  // const age = myObj.age;
  console.log(others);
  console.log(`this person is ${name} and  he is ${age} years`);
};

const mySoureObj = {
  name: " Phong3",
  age: 20,
  address: "HCM city",
};
doSomething6(mySoureObj);

const students = [
  { name: "Phong2", socre: 15 },
  { name: "Phong3", socre: 20 },
  { name: "Phong4", socre: 25 },
  { name: "Phong5", socre: 30 },
];
const fristStudents = students[0];
const secondStudents = students[1];
console.log(fristStudents);
console.log(secondStudents);

const [fristStd, secondStd] = students;

console.log(fristStd);
console.log(secondStd);

const [, thirdStd, , fifStd = {}] = students;
console.log(thirdStd);
console.log(fifStd);

const myObj3 = {
  zipCode: "0001",
  code: "XXXYYY",
  name: " But bi",
  trigger: "NM!",
  status: "active",
};

const { zipCode, ...rest } = myObj3;
console.log(rest);

const [, ...others] = students;
console.log(others);

const tinhTong = (...param) => {
  const sum = param.reduce((pre, next) => (temp = pre + next), 0);
  return sum;
};
tinhTong(5); // => 5
console.log(tinhTong(5, 10)); // => 15
console.log(tinhTong(5, 10, 15)); // => 30
console.log(tinhTong(5, 10, 15, 9)); // => 39

const myObj4 = {
  zipCode: "0001",
  code: "OOOXXX",
  name: "But bi ",
  trigger: "NM2",
  status: "active",
};

const myObj5 = {
  date: new Date(),
  ...myObj4,
  zipCode: "0002",
};
console.log(myObj4);
console.log(myObj5);

const newStudent = [{ name: "Phong", score: 9 }, ...students, ...students];
console.log(newStudent);
const newStudent2 = newStudent.map((std) => {
  const newStd = {
    ...std,
    isPassed: std.score > 20,
  };
  return newStd;
});
console.log(newStudent);
