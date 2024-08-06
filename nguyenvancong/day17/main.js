const userName = document.getElementById("userName")
const city = document.getElementById("city")
const  gender = document.querySelectorAll("input[type='radio'][name='gender']")
const renderInfo = document.getElementById("display")
const display1 = ()=>{
    console.log(userName.value);
    console.log(city.value);
    console.log(gender,"gender");

    let gioitinh = "";
    gender.forEach(item =>{
        if(item.checked){
            gioitinh = item.value
        }
    })
    renderInfo.innerHTML = `
        <p>Name:${userName.value}</p>
        <p>City:${city.value}</p>
        <p>Gender:${gioitinh}</p>
    `
    console.log(gioitinh,"Gioittinh");
}



 




