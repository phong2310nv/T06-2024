import DoSomething2WithName from "./module2";
console.log("Hello");

export const DoSomething1 = () => {
  console.log("DoSomething1");
};
// DoSomething2();
const DoSomething3 = () => {
  console.log("DoSomething3");
};
const DoSomething4 = () => {
  console.log("DoSomething5");
};
const DoSomething5 = () => {
  console.log("DoSomething5");
};

export { DoSomething3, DoSomething4 };

export default DoSomething5;
