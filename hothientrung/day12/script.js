function veTamGiac(chieu) {
  console.log("Vẽ tam giác xuôi:\n");
  for (let i = 0; i <= chieu; i++) {
    let line = "";
    for (let j = 1; j < i; j++) {
      line = line + "*";
    }
    console.log(line);
  }
}
veTamGiac(6);

function vongLap(inputString) {
  let line = "";
  for (let i = 0; i < 10; i++) {
    line += inputString;
    if (i < 9) {
      line += "-";
    }
  }

  return line;
}
let inputString = "123";
let result = vongLap(inputString);
console.log(result);




function soDuong(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let giaiThua = 1;
    for (let i = 2; i <= n; i++) {
      giaiThua *= i;
    }
    return giaiThua;
  }
}
let n = 5;
console.log(soDuong(n));
