console.log("A");
console.log("B");
console.log("C");

const someBtn = document.getElementById("someID");
someBtn.addEventListener("click", () => {
  console.log("Do something");
});

setTimeout(() => {
  console.log("B");
}, 1000);

const promiseTodoSomething = () => {
  return new Promise((resolve, reject) => {
    if (Date.now() % 2 === 0) {
      resolve("OK");
    } else {
      reject("Not ok");
    }
  });
};
// promiseTodoSomething will return a promise
promiseTodoSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("done");
  });

const myFunction = async () => {
  try {
    const data = await promiseTodoSomething();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("done");
  }
};

setTimeout(() => {
  console.log("X");
}, 1000);

setTimeout(() => {
  console.log("Y");
}, 2000);

setTimeout(() => {
  const now = Date.now();
  console.log(now);
  setTimeout(() => {
    console.log(now * 2);
  }, 1000);
}, 1000);

// Trần thịt
const tranThitCB = (data, callback) => {
  console.log(`Nhận vào ${data}`);
  setTimeout(() => {
    console.log(`Đã trần xong ${data}`);
    const result = `${data} đã trần`;
    callback(result);
  }, 1000);
};
// Ướp Thịt
const uopThitCB = (data, callback) => {
  console.log(`Nhận vào ${data}`);
  setTimeout(() => {
    console.log(`Đã ướp xong ${data}`);
    const result = `${data} đã tẩm ướp`;
    callback(result);
  }, 3000);
};
// Nướng thịt
const nuongThitCB = (data, callback) => {
  console.log(`Nhận vào ${data}`);
  setTimeout(() => {
    const ran = Math.random();
    if (ran >= 0.5) {
      console.log(`Đã nướng xong ${data}`);
      const result = `${data} đã được nướng`;
      Math.random();
      callback(result);
    } else {
      callback(null, `${data} đã bị nướng cháy`);
    }
  }, 3000);
};

tranThitCB("một miếng thịt", (val1) => {
  uopThitCB(val1, (val2) => {
    nuongThitCB(val2, (val3, err) => {
      if (err) {
        console.log(`Có lỗi: ${err}`);
      } else {
        console.log(`Thưởng thức :${val3}`);
      }
    });
  });
});

const myPromise = new Promise((resolve, reject) => {
  const ran = Math.random();
  if (ran >= 0.5) {
    resolve("success");
  } else {
    reject("failed");
  }
});

// Trần thịt
const tranThitPM = (data) => {
  return new Promise((resolve, reject) => {
    console.log(`Nhận vào ${data}`);
    setTimeout(() => {
      console.log(`Đã trần xong ${data}`);
      const result = `${data} đã trần`;
      resolve(result);
    }, 1000);
  });
};
// Ướp Thịt
const uopThitPM = (data) => {
  return new Promise((resolve, reject) => {
    console.log(`Nhận vào ${data}`);
    setTimeout(() => {
      console.log(`Đã ướp xong ${data}`);
      const result = `${data} đã tẩm ướp`;
      resolve(result);
    }, 3000);
  });
};
// Nướng thịt
const nuongThitPM = (data) => {
  return new Promise((resolve, reject) => {
    console.log(`Nhận vào ${data}`);
    setTimeout(() => {
      const ran = Math.random();
      if (ran >= 0.5) {
        console.log(`Đã nướng xong ${data}`);
        const result = `${data} đã được nướng`;
        Math.random();
        resolve(result);
      } else {
        reject(`${data} đã bị nướng cháy`);
      }
    }, 3000);
  });
};

tranThitPM("một miếng thịt")
  .then((val1) => {
    return uopThitPM(val1);
  })
  .then((val2) => {
    return nuongThitPM(val2);
  })
  .then((val3) => {
    console.log(`Thưởng thức :${val3}`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Alway Run");
  });

const Cooking = async (input) => {
  try {
    const val1 = await tranThitCB(input);
    const val2 = await uopThitPM(val1);
    const val3 = await nuongThitPM(val2);
    console.log(`Thưởng thức :${val3}`);
    return "Ok";
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Alway Run");
  }
};
Cooking("một miếng thịt");
