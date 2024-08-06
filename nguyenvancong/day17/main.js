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



 /// bai tap 2
const btn = document.querySelectorAll("button")
 console.log(btn);

 btn.forEach((button)=>{
  button.addEventListener('click', function(){
     changeColor(button.getAttribute("data-color"));
     
  })
 })
 function changeColor(color){
    const p = document.getElementById("p");
    console.log(color);
    if(color == 'red'){
        p.style.color = "red"
    }
    else if(color == 'blue'){
        p.style.color = "blue"
    }
    else if(color == 'green'){
        p.style.color = "green"
    }
    else{
        p.style.color = "gold"
    }

    p.className = "";
    p.classList.add(color)
    
} 

// biaf 3
const p_img = document.querySelectorAll("p img");
console.log(p_img);

p_img.forEach((img)=>{
    console.log(img);
    img.addEventListener('click',function(){
          changeImage(img.src)
    })
})

function changeImage(imgPath){
    document.getElementById('img-main').src = imgPath
}



//  b1: xây dựng ra UI
//  b2: + làm sao để lấy đc các giá trị ở form.
//      + hình dung data có dạng như thế nào
//      + nó sẽ là 1 cái mảng => từng đối tượng {}
//  b3: hiển thị ra bảng.

let listUsers = [];
const defaultAvatar =
  "https://inkythuatso.com/uploads/thumbnails/800/2023/03/6-anh-dai-dien-trang-inkythuatso-03-15-26-36.jpg";
const idVal = document.getElementById("valId");
const valName = document.getElementById("valName");
const avatar = document.getElementById("valAvatar");
const valDob = document.getElementById("valDob");
const valAddress = document.getElementById("valAddress");
const valSalary = document.getElementById("valSalary");
const ValDes = document.getElementById("valDes");
const valGender = document.querySelectorAll(
  "input[type='radio'][name='gender']"
);
const valMarried = document.getElementById("valMarried");
const valDucation = document.getElementById("valDucation");
const previewAvatar = document.getElementById("previewAvatar");
const tbody = document.querySelector("tbody");
const btnSubmit = document.getElementById("btnSubmit");
const noData = document.getElementById("no-data");
const valSearchName = document.getElementById("valSearchName");
const valFilterMarried = document.querySelectorAll(
  "input[type='radio'][name='searchMarried']"
);
const title = document.getElementById("title");

avatar.onchange = (e) => {
  const file = e.target.files[0];
  const urlAvatar = URL.createObjectURL(file);
  console.log(urlAvatar, "urlAvatar");
  previewAvatar.setAttribute("src", urlAvatar);
  previewAvatar.style.width = "100px";
};

const handleSubmit = () => {
  const userName = valName.value;
  const dob = valDob.value;
  const address = valAddress.value;
  const salary = valSalary.value;
  const des = ValDes.value;
  const isMarried = valMarried.checked;
  const duction = valDucation.value;
  const avatar = previewAvatar.getAttribute("src");
  let gender = "";
  valGender.forEach((item) => {
    if (item.checked) {
      gender = item.value;
    }
  });
  const formDataUser = {
    id: Date.now(),
    userName,
    dob,
    address,
    salary,
    des,
    isMarried,
    duction,
    gender,
    avatar,
  };
  if (idVal.value) {
    console.log("function Edit");
    console.log(listUsers, "listUsers", idVal.value);
    listUsers = listUsers.map((item) => {
      if (item.id === +idVal.value) {
        return {
          ...formDataUser,
          id: item.id,
        };
      }
      return item;
    });
    btnSubmit.innerText = "Save";
  } else {
    listUsers = [...listUsers, formDataUser];
  }
  display(listUsers);
  reset();
  setDataFormLocalStorage();
};

const display = (arrUsers = []) => {
  console.log(arrUsers, "arrUsers");
  if (arrUsers.length === 0) {
    noData.innerText = "No data";
  } else {
    noData.innerText = "";
  }
  tbody.innerHTML = arrUsers
    .map((item) => {
      return `
            <tr>
                <td>${item.id}</td>
                <td>${item.userName}</td>
                <td>
                    <img src=${
                      item.avatar ? item.avatar : defaultAvatar
                    } width="100px"/>
                </td>
                <td>${item.dob}</td>
                <td>${item.address}</td>
                <td>${item.salary}</td>
                <td>${item.des}</td>
                <td>${item.gender}</td>
                <td>${item.isMarried ? "Đã kết hôn" : "Độc thân"}</td>
                <td>${item.duction}</td>
                <td>
                    <button onclick="handleDelete(${item.id})">Xóa</button>
                    <button onclick="handleEdit(${item.id})">Sửa</button>
                </td>
            </tr>
        `;
    })
    .join("");
};
display();

const reset = () => {
  idVal.value = "";
  valDob.value = "";
  valName.value = "";
  valAddress.value = "";
  valSalary.value = "";
  ValDes.value = "";
  valMarried.checked = false;
  valDucation.value = "";
  previewAvatar.setAttribute("src", "");
  valGender.forEach((item) => {
    if (item.value) {
      item.checked = false;
    }
  });
};

const handleDelete = (id) => {
  const newUsers = listUsers.filter((item) => item.id !== id);
  listUsers = [...newUsers];
  display(listUsers);
};

const handleEdit = (id) => {
  console.log(id, "idid");
  const findUser = listUsers.find((item) => item.id === id);
  console.log(findUser, "findUser");
  const { dob, userName, address, salary, des, isMarried, avatar, duction } =
    findUser;
  idVal.value = id;
  valDob.value = dob;
  valName.value = userName;
  valAddress.value = address;
  valSalary.value = salary;
  ValDes.value = des;
  valMarried.checked = isMarried;
  valDucation.value = duction;
  previewAvatar.setAttribute("src", avatar);
  valGender.forEach((item) => {
    if (item.value) {
      item.checked = true;
    }
  });
  btnSubmit.innerText = "Edit";
};

//  search

const handleSubmitSearch = () => {
  const searchName = valSearchName.value;
  let filterMarried = "";
  valFilterMarried.forEach((item) => {
    if (item.checked) {
      filterMarried = item.value;
    }
  });
  const newFilterSearch = listUsers.filter(
    (item) =>
      item.userName.toUpperCase().includes(searchName.toUpperCase()) &&
      (item.isMarried + "" === filterMarried || filterMarried === "all")
  );
  display(newFilterSearch);
  console.log(searchName, filterMarried, "valFilterMarried", listUsers);
};

// local storage : nó là 1 bộ nhớ đệm của trình, sẽ đc lưu tầm 5mb

//  getItem: => lấy giá trị
//  setItem: => đưa giá trị vào
//  delete => xóa

const setDataFormLocalStorage = () => {
  const stringData = JSON.stringify(listUsers);
  console.log(stringData, "setDataFormLocalStorage");
  localStorage.setItem("listData", stringData);
};

const getDataFormLocalStorage = () => {
  const listDataUsers = localStorage.getItem("listData");
  if (listDataUsers) {
    const dataLocal = JSON.parse(listDataUsers);
    display(dataLocal);
  }
};
getDataFormLocalStorage();

const handleClearData = () => {
  localStorage.removeItem("listData");
  display([]);
};
