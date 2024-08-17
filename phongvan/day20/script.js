// setTimeout(() => {
//   console.log("X");
// }, 1000);

// setTimeout(() => {
//   console.log("Y");
// }, 2000);

// setTimeout(() => {
//   console.log("X");
//   setTimeout(() => {
//     console.log("Y");
//   }, 1000);
// }, 1000);

// setTimeout(() => {
//   const now = Date.now();
//   console.log(now);
//   setTimeout(() => {
//     console.log(now * 2);
//   }, 1000);
// }, 1000);
const tranThitCB = (data, callback) => {
  console.log(`Nhận vào ${data}`);
  setTimeout(() => {
    console.log(`Đã trần xong ${data}`);
    const result = `${data} đã trần`;
    callback(result);
  }, 2000);
};

const uopThitCB = (data, callback) => {
  console.log(`Nhận vào ${data}`);
  setTimeout(() => {
    console.log(`Đã ướp xong ${data}`);
    const result = `${data} đã ướp`;
    callback(result);
  }, 1000);
};

const nuongThitCB = (data, callback) => {
  console.log(`Nhận vào ${data}`);
  setTimeout(() => {
    const random = Math.random();
    if (random > 0.5) {
      // Nướng cháy
      callback(null, `${data} đã cháy`);
    } else {
      console.log(`Đã nướng xong ${data}`);
      const result = `${data} đã nướng`;
      callback(result);
    }
  }, 3000);
};

// tranThitCB("Cục thịt", (val1) => {
//   // val 1 là cục thịt đã trần
//   uopThitCB(val1, (val2) => {
//     nuongThitCB(val2, (val3, dataError) => {
//       if (val3) {
//         console.log(`Thưởng thức: ${val3}`);
//       } else {
//         console.log(`Đem đi vứt: ${dataError}`);
//       }
//     });
//   });
// });

const tranThitPM = (data) => {
  const myPromise = new Promise((resolve, reject) => {
    console.log(`Nhận vào ${data}`);
    setTimeout(() => {
      console.log(`Đã trần xong ${data}`);
      const result = `${data} đã trần`;
      resolve(result);
    }, 2000);
  });
  return myPromise;
};
const uopThitPM = (data) => {
  return new Promise((resolve, reject) => {
    console.log(`Nhận vào ${data}`);
    setTimeout(() => {
      const ran = Math.random();
      if (ran >= 0.5) {
        console.log(`Đã ướp xong ${data}`);
        const result = `${data} đã ướp`;
        resolve(result);
      } else {
        reject("Cục thịt thiu");
      }
    }, 1000);
  });
};
const nuongThitPM = (data) => {
  return new Promise((resolve, reject) => {
    console.log(`Nhận vào ${data}`);
    setTimeout(() => {
      const ran = Math.random();
      if (ran >= 0.5) {
        console.log(`Đã nướng xong ${data}`);
        const result = `${data} đã nướng`;
        resolve(result);
      } else {
        reject("Cục thịt cháy");
      }
    }, 2000);
  });
};

// tranThitPM("Cục thịt")
//   .then((val1) => {
//     return uopThitPM(val1);
//   })
//   .then((val2) => {
//     return nuongThitPM(val2);
//   })
//   .then((val3) => {
//     console.log(val3);
//     return "Done";
//   })
//   .then((val4) => {
//     console.log(val4);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Đã xong mọi việc");
//   });

const cooking = async (input) => {
  try {
    const val1 = await tranThitPM(input);
    console.log(val1);
    // if (true) {
    //   const valx = await doSomething(val1);
    // }
    const val2 = await uopThitPM(val1);
    console.log(val2);
    const val3 = await nuongThitPM(val2);
    console.log(val3);
    return val3;
  } catch (error) {
    console.log("Lỗi: ", error);
    return null;
  } finally {
    console.log("Alway run");
  }
};
cooking("Cục thịt").then((data) => {
  if (data) {
    console.log(`Thưởng thức: ${data}`);
  } else {
    console.log(`Đem vứt `);
  }
});
// const cooking2 = async function () {};
// async function cooking3() {}

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const ran = Math.random();
//     console.log(ran);
//     if (ran >= 0.5) {
//       resolve("Ok");
//     } else {
//       reject("Not Ok");
//     }
//   }, 2000);
// });

// myPromise
//   .then((data) => {
//     console.log(data);
//     console.log("Thanh cong");
//   })
//   .catch((err) => {
//     console.log(err);
//     console.log("That bai");
//   })
//   .finally(() => {
//     console.log("Alway Run");
//   });

// const arr = [1, 2, 3];
// arr.forEach();

// const CreateArray = (a, b, c) => {
//   return [a, b, c];
// };
// CreateArray(1, 2, 3).forEach();
// CreateArray(4, 5, 6).forEach();
// const someData = {
//   title: "Phong2",
// };


// const doSomething = (data) => {
//   try {
//     if (data > 0) {
//       console.log("Data valid");
//     } else {
//       // console.log("Data invalid");
//       throw Error("Data invalid 1");
//     }
//   } catch (error) {
//     console.log(error.message);
//     throw Error("Data invalid 2");
//   }
// };
// try {
//   doSomething(-9);
// } catch (error) {
//   console.log(error.message);
// }
// console.log("Abc");
