//Date
const time = new Date();
console.log(time);

const time2 = new Date(2023, 9, 10);
console.log(time2);

const time3 = new Date('2023/10/2');
console.log(time3);

const time4 = Date.now();
console.log(time4);

console.log(time.getFullYear());
console.log(time.getMonth()+1);
time.setFullYear(2023);
console.log(time.getFullYear());

// Obj 
// đều trả về mảng.
const person = {
    name: "Trung",
    age: 16,
};

console.log(Object.values(person)); //Trả về value
console.log(Object.keys(person)); // trả về key
console.log(Object.entries(person)); // trả về 1 mảng cả cặp key và value.

//Arr
// Arr được chia ra làm 2 cái:
//Cơ bản: 


const students = [
    {
        name: 'John',
        score: 10,
    },
    {
        name: 'Anna',
        score: 8,
    },
    {
        name: 'Pin',
        score: 10,
    },
    {
        name: 'Ag',
        score: 9,
    },
]
console.log(students);
// students.push({
//     name: 'Thắng',
//     score: 7,
// })
// console.log(students);

const lastStudent = students.pop();
console.log(students);
console.log(lastStudent);
// Nâng cao

//

// const logST = (data, index, arr) =>{
//     console.log(data, index, arr);
// }
students.forEach((item, stt) => {
    console.log(`Sinh viên ${item.name} có điểm ${item.score} có STT là: ${stt+1}`);
});
