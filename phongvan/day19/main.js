const searchName = document.getElementById("valSearchName");
const idVal = document.getElementById("valId");
const valName = document.getElementById("valName");
const avatar = document.getElementById("valAvatar");
const ValDes = document.getElementById("valDes");
const valGender = document.querySelectorAll(
  "input[type='radio'][name='gender']"
);
const valMarried = document.getElementById("valMarried");
const valDuration = document.getElementById("valDuration");
const previewAvatar = document.getElementById("previewAvatar");
const tbody = document.querySelector("tbody");
const btnSubmit = document.getElementById("btnSubmit");
let users = [];
const userStore = localStorage.getItem("users");
console.log(userStore);
if (userStore) {
  users = JSON.parse(userStore);
}
const display = (arr = []) => {
  let data = "";
  arr.forEach((item) => {
    console.log(item);

    data += `
      <tr>
          <td>${item.id}</td>
          <td>${item.userName}</td>
          <td>
          ${
            item.ava && item.ava.name
              ? `<img width='30' src='${URL.createObjectURL(item.ava)}' />`
              : ""
          }
          </td>
          <td>${item.des}</td>
          <td>${item.gender}</td>
          <td>${item.isMarried ? "YES" : "No"}</td>
          <td>${item.duration} Năm</td>
          <td>
           <button class='btn btn-info' onclick='handleEdit(${item.id})' >
            Edit
          </button>
          <button class='btn btn-danger' onclick='handleDelete(${item.id})' >
            Delete
          </button>
          </td>
      </tr>
  `;
  });
  tbody.innerHTML = data;
};

display(users);

avatar.onchange = (event) => {
  const file = event.target.files[0];
  previewAvatar.src = URL.createObjectURL(file);
};

const handleSubmit = () => {
  const id = idVal.value;
  const userName = valName.value;
  const des = ValDes.value;
  const isMarried = valMarried.checked;
  const duration = valDuration.value;
  const ava = avatar.files[0];
  let gender = "";
  valGender.forEach((item) => {
    if (item.checked) {
      gender += item.value;
    }
  });
  if (id) {
    // Edit something
    users = users.map((user) => {
      if (user.id == id) {
        return {
          id: user.id,
          userName,
          des,
          isMarried,
          duration,
          gender,
          ava: ava ? ava : user.ava, // ava ?? user.ava or  ava || user.ava
        };
      }
      return user;
    });
  } else {
    // Add new
    const newUser = {
      id: Date.now(),
      userName,
      des,
      isMarried,
      duration,
      gender,
      ava,
    };
    users.push(newUser);
  }

  //JSON

  localStorage.setItem("users", JSON.stringify(users));

  display(users);
  reset();
};

const handleDelete = (id) => {
  users = users.filter((user) => user.id != id);
  localStorage.setItem("users", JSON.stringify(users));
  display(users);
};
const reset = () => {
  idVal.value = "";
  valName.value = "";
  ValDes.value = "";
  valMarried.checked = false;
  valDuration.value = "1";
  avatar.value = "";
  previewAvatar.src = "";
  valGender.forEach((item) => {
    if (item.value === "Male") {
      item.checked = true;
    }
  });
};

const handleEdit = (id) => {
  const currentUser = users.find((user) => user.id == id);
  console.log(currentUser);
  idVal.value = id;
  valName.value = currentUser.userName;
  ValDes.value = currentUser.des;
  valMarried.checked = currentUser.isMarried;
  valDuration.value = currentUser.duration;
  // avatar.value = "";
  previewAvatar.src = URL.createObjectURL(currentUser.ava);
  valGender.forEach((item) => {
    if (item.value === currentUser.gender) {
      item.checked = true;
    }
  });
};

const handleSubmitSearch = () => {
  const searchKey = searchName.value.toLowerCase();
  const filtered = users.filter((user) =>
    user.userName.toLowerCase().includes(searchKey)
  );
  display(filtered);
};
const resetSearch = () => {
  display(users);
  searchName.value = "";
};
// Phong => phong
// 'PH' => ph
//CRUD