const obj = {
  name: "nghiem",
  age: 10,
  favorites: ["soccer", "football"],
};
const key = "name";
console.log(obj);
console.log(obj.name);
console.log(obj["name"]);
console.log(obj[key]);
const arr = [1, 2, 3, 4, 5];

arr[2];

const address = "HN";
let is18 = true; //  false
const product = {
  color: "red",
  type: "T-shirt",
  sizes: [1, 2, 3, 4],
  count: 100,
};

const cars = [
  { plate: "BBB", type: "sedan", color: "blue" },
  { plate: "CCC", type: "truck", color: "gray" },
];
console.log(obj.name);
console.log(obj["name"]);
console.log(obj.favorites[1]);
console.log(cars[1].type);

const score = 7;
if (score >= 8.5) {
  console.log("A");
} else if (score >= 7) {
  console.log("B");
} else if (score >= 5.5) {
  console.log("C");
} else if (score >= 4) {
  console.log("D");
} else {
  console.log("E");
}

const rank =
  score >= 8.5
    ? "A"
    : score >= 7
    ? "B"
    : score >= 5.5
    ? "C"
    : score >= 4
    ? "D"
    : "E";
