// // call back

// // setTimeout(() => {
// //     console.log("A");
// // }, 1000);
// // setTimeout(() => {
// //     console.log("B");
// // }, 1000);
// // console.log('A');
// // console.log('B');
// // console.log('c');

// // setTimeout(() => {
// //     //console.log("x");

// // }, 1000);
// // setTimeout(() => {
// //     //console.log("Y");

// // }, 2000);

// // setTimeout(() => {
// //     const now = Date.now();
// //     // console.log(now);

// //     setTimeout(() => {
// //         //console.log(now * 2);

// //     }, 1000);
// // }, 1000);

// // // tran thit

// // const tranThitCB = (data, callback) => {
// //     console.log(`Nhan vao ${data}`);
// //     setTimeout(() => {
// //         console.log(`Da tran xong ${data}`);
// //         const result = `${data} da tran`;
// //         callback(result);
// //     }, 2000);
// // }
// // tranThitCB("Cuc Thit", (val1) = {
// //     //console.log(val1)
// // });

// // promise

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const ran = Math.random();
//         console.log(ran);

//         if (ran >= 0.5) {
//             resolve("success");
//         } else {
//             reject("false");
//         }
//     }, 2000);
// });

// myPromise.then((data) => {
//     console.log(data);
//     console.log("Thanh Cong");

// }).catch((error) => {
//     console.log(error);

//     console.log("That bai");

// }).finally(() => {
//     console.log("alway run");

// })
// // async await

// const cooking = async () => {
//     try {
//         const val1 = await tranThitPM("Cuc Thit");
//         console.log(val1);
//         const val2 = await uopThitPM(val1);
//         console.log(val2);
//     } catch (error) {
//         console.log("Loi: ", error);
//         return null;
//     } finally {
//         console.log("alway run");
//     }
// }
// cooking().then(data)  => {
//     console.log(data);
// };

// const doST = (data) => {
//     if (data > 0) {
//         console.log("data valid");
//     } else {
//         throw Error("data valid");
//     }
// };
// try {
//     doST(-9);
// } catch (error) {
//     console.log(error.message);
// }
// console.log("Abc");

// Featch API
























