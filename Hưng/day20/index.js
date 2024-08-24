// setTimeout(() => {
//   console.log("B");
// }, 2000);

// console.log("A");

// console.log("C");

// setTimeout(() => {
//   console.log("D");
// }, 0);

// console.log("E");
// console.log("F");
// // console.log('A');
// // console.log('B');
// console.log('C');

3; //(Asynchronous)

// console.log("A");

// setTimeout(() => {
//   console.log("X");
// }, 1000);
// setTimeout(() => {
//   console.log("y");
// }, 2000);

// setTimeout(() => {
//   console.log("X");
//   setTimeout(() => {
//     console.log("Y");
//   }, 1000);
// }, 1000);

// setTimeout(( => {
//     const now  = Date.now();
//     console.log(now);
//     setTimeout(() => {

//     })
// })

// const  tranthitCB = (data, callback) => {
//     console.log(`nhận vào ${data}`);
//     setTimeout(() => {
//         console.log(`Da tran xong ${data}`);
//         const result = `${data} da tran`;
//         callback(result)
//     }, 2000);
// };
//  tranthitCB("Cuc thit", (val1) => {
//     // console.log(val1);
//     uopthitCB(val1, (val2) = {
//         console.log(val2);
//     });
//
// tranthitCB("mot mieng thit",(val1) => {
//     uopthitCB(val1, (val2) =>{
//         nuongthitCB(val2, (val3, err) = {
//         if (err) {
//             console.log(`co loi: ${err}`);
//         } else {
//             console.log(`thuong thuc : ${val3}`);
//         }
//       });
//     });
// });
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {

        const ran = Math.random();
        console.log("ran");
        if (ran >= 0.5) {
          resolve();
        } else {
          reject();
    })
  }, 2000);
});
myPromise.then(() => {
  console.log("thanh cong");
});
