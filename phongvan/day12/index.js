const doST = function () {
  console.log("Start Func");
  for (let index = 0; index < 5; index++) {
    // const element = array[index];
    console.log("===============");
    console.log("1");
    console.log("2");
    // if (index === 2) {
    //   return;
    // }
    // continue;
    // break;
    // return;
    console.log("3");
    console.log("4");
    console.log("5");
  }
  console.log("End Func");
};

const Student = [
  { name: "P", age: 10 },
  { name: "N", age: 15 },
  { name: "S", age: 19 },
  { name: "D", age: 20 },
];
let sumAge = 0;

// for (let index = 0; index < Student.length; index += 1) {
//   if (Student[index].age % 2 === 0) {
//     console.log("Looping: ", Student[index].age);
//   }
//   //   sumAge += Student[index].age;
//   sumAge = sumAge + Student[index].age;
// }
// console.log(sumAge);

let index = 0;

// while (index < Student.length) {
//   console.log("Looping: ", Student[index]);
//   if (Student[index].name === "S") {
//     console.log("I found you: ", Student[index]);
//     break
//   }
//   index += 1;
// }

// do {
//   console.log("Looping: ", Student[index]);
//   index++;
// } while (index < Student.length);

const person = {
  name: "Alice",
  age: 25,
  city: "New York",
  score: 99,
  favorites: ["a", "b"],
  child: {
    name: "Some name",
  },
};

for (const key in person) {
  console.log(key);
}

// console.log(Object.keys(person));

for (const item of Student) {
  console.log(item);
}

for (const item of "Hello world") {
  console.log(item);
}

const draw1 = function (n) {
  let star = "";
  for (let index = 0; index < n; index++) {
    star += "*";
    console.log(star);
  }
};
const draw2 = function (n) {
  for (let i = 0; i < n; i++) {
    let stars = "";
    for (let j = i; j < n; j++) {
      stars += "*";
    }
    console.log(stars);
  }
};

draw2(5);

const duplicateString = function (str, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
    if (i < n - 1) {
      result += "-";
    }
  }
  return result;
};
console.log(duplicateString("123", 5)); // "123-123-123-123-123"

const giaithua = function (n) {
  let result = 1;
  // 1 2 3
  for (let i = 1; i <= n; i++) {
    console.log(`${i}_${result}`);
    result = result * i;
  }
  return result;
};
const kq = giaithua(5);

console.log(kq);
