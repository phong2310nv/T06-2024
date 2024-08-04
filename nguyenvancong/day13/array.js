const students = [
    {
        name: "Cong",
        score:10
    },

    {
        name: "Huy",
        score:6
    },

    {
        name: "tung",
        score:9
    },

    {
        name: "Pong",
        score:3
    }
];
// console.log(students);
// thêm phần tử vào cuối mảng 
// students.push({
//     name: "Dao",
//     score:4
// })

// xoá phần tử cuối cùng 
// const lastst = students.pop();
// console.log(lastst);


// foreach lặp qua các phần tử của mảng và in ra từng phần tử của mảng
students.forEach((student,index) =>{
    console.log(student);
    console.log(index);
})

const upDateSt = students.map((st)=>{
    return {
        ...st,
        score:st.score + 1
    };
});
console.log(upDateSt);