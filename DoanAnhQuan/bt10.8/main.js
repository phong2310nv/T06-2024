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
let users = [];
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
    users = [...users, usesNew];
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
const handleDelete = (id) => {
    const newUsers = users.filter((item) => item.id !== id);
    users = [...newUsers];
    display(users);
};
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