const data = "Hello";
function Inform(param1, param2 = "Dong") {
  console.log("Param 1", param1);
  console.log("Param 2", param2);
  console.log(data);
}
Inform("Phong");
Inform("Phong2", "Nghiem");

function CalculateSum(a, b) {
  return a + b;
}

function CalculateCircle(r) {
  console.log(Math.PI);
  const result = r * r * Math.PI;
  return result;
}

const calculatedCircle = CalculateCircle(CalculateSum(2, 3));

console.log(calculatedCircle);

function RankStudent(score) {
  if (score >= 8.5) {
    return "A";
  }
  if (score >= 7) {
    return "B";
  }
  if (score >= 5.5) {
    return "C";
  }
  if (score >= 4) {
    return "D";
  }
  console.log("Run last");
  return "E";
}

console.log(RankStudent(7));
console.log(RankStudent(9));
console.log(RankStudent(3));

function DoST(count) {
  if (count > 5) {
    console.log("More than five");
    return;
  }
  if (count < 0) {
    console.log("Less than zero");
    return;
  }
  console.log("Between 0 and 5");
}
const resultDoST = DoST(6);
console.log(resultDoST);

function ShowNotification(data) {
  console.log("The result is:", data);
}
function ShowNotificationVNS(data) {
  console.log("Ket qua la:", data);
}

function ShowNotificationAlert(data) {
  alert(data);
}

function TinhChuVi(r, callback) {
  const result = 2 * r * Math.PI;
  callback(result);
}

TinhChuVi(70, ShowNotification);
TinhChuVi(100, ShowNotificationVNS);
// TinhChuVi(120, function (data) {
//   alert(data);
// });

const ShowData = function (data) {
  console.log(data);
};
ShowData("Hello");

const Func = () => {};
