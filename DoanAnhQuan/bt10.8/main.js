const idVal = document.getElementById("valId");
const valName = document.getElementById("valName");
const avatar = document.getElementById("valAvatar");
const ValDes = document.getElementById("valDes");
const valGender = document.querySelectorAll(
    "input[type='radio'][name='gender']"
);
const valMarried = document.getElementById("valMarried");
const valDucation = document.getElementById("valDucation");
const previewAvatar = document.getElementById("previewAvatar");
const tbody = document.querySelector("tbody");
const btnSubmit = document.getElementById("btnSubmit");
const valSearch = document.getElementById("valSearchName");
let users = [];
let usersStorage = localStorage.getItem("user");
avatar.onchange = (e) => {
    const file = e.target.files[0];
    const urlAvatar = URL.createObjectURL(file);
    previewAvatar.setAttribute("src", urlAvatar);
};
const handleSubmit = () => {
    const userName = valName.value;
    const des = ValDes.value;
    const isMarried = valMarried.checked;
    const duction = valDucation.value;
    const avatar = previewAvatar.getAttribute("src");
    let gender = "";
    valGender.forEach((item) => {
        if (item.checked) {
            gender += item.value;
        }
    });
    const usesNew = {
        id: Date.now(),
        userName,
        des,
        isMarried,
        duction,
        avatar,
        gender,
    };
    if (idVal.value) {
        console.log("function Edit");
        users = users.map((item) => {
          if (item.id === +idVal.value) {
            return {
              ...usesNew,
              id: item.id,
            };
          }
          return item;
        });
        btnSubmit.innerText = "Save";
      } else {
        users = [...users, usesNew];
      }
    localStorage.setItem("user", JSON.stringify(users));
    display(users);
    reset();
};
const display = (arr = []) => {
    tbody.innerHTML = arr
        .map((item) => {
            return `
                 <tr>
                <td>${item.id}</td>
                <td>${item.userName}</td>
                <td>
                    <img src=${item.avatar} width="100px"/>
                </td>
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
display(JSON.parse(usersStorage))
const handleDelete = (id) => {
    const newUsers = users.filter((item) => item.id !== id);
    users = [...newUsers];
    localStorage.setItem("user", JSON.stringify(users));
    display(users);
};
const handleEdit = (id) => {
    const editUser = users.find(item => item.id);
    if(editUser){
        idVal.value = id;
        valName.value = editUser.userName;
        previewAvatar.setAttribute("src", editUser.avatar);
        ValDes.value = editUser.des;
        valDucation.value = editUser.duction;
        valMarried.checked = editUser.isMarried;
        valGender.forEach((item) => {
            if (item.value === editUser.gender) {
              item.checked = true;
            }
          });
    }
    btnSubmit.innerText = "FIX";
}
const reset = () => {
    idVal.value = "";
    valName.value = "";
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
  const handleSubmitSearch = () =>{
    const search = valSearch.value.toLowerCase();
    const newSearch = users.filter(user => user.userName.toLowerCase().includes(search));
    display(newSearch);
    
  }
  const resetSearch = () =>{
    display(users);
    valSearch.value = "";
  }
  