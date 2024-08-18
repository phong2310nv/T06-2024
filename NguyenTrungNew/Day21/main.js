const API_URL = "https://66c06562ba6f27ca9a567e99.mockapi.io";

const loadingElement = document.getElementById("loading");
const tbodyDataUser = document.getElementById("dataUsers");
const detailUserModal = document.getElementById("detailUserModal");

const editName = document.getElementById("editInforName");
const editAddress = document.getElementById("editInforAddress");
const editDescription = document.getElementById("editInforDescription");
const editDuration = document.getElementById("editInforDuration");
const editSalary = document.getElementById("editInforSalary");
const editGender = document.getElementById("editInforGender");
const editMarried = document.getElementById("editInforMarried");
const editForm = document.getElementById("editInforForm");
const editId = document.getElementById("editInforId");

const addName = document.getElementById("addNewUserName");
const addAddress = document.getElementById("addNewUserAddress");
const addDescription = document.getElementById("addNewUserDes");
const addDuration = document.getElementById("addNewUserDur");
const addSalary = document.getElementById("addNewUserSalary");
const addGender = document.getElementById("addNewUserGender");
const addMarried = document.getElementById("addNewUserMarried");
const addForm = document.getElementById("addNewUserForm");

const fetchUserData = async () => {
  loadingElement.innerHTML = `<p> Loading... </p>`;
  try {
    const reponse = await fetch(`${API_URL}/users`);
    const userData = await reponse.json();
    renderDataTable(userData);
  } catch (error) {
    console.error(error);
  } finally {
    loadingElement.innerHTML = "";
  }
};

fetchUserData();

const createNewUser = async (payload) => {
  try {
    const reponse = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return await reponse.json();
  } catch (error) {
    console.error(error);
  }
};

const editUser = async (id, payload) => {
  try {
    const reponse = await fetch(`${API_URL}/users/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    console.log("check");

    return await reponse.json();
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (id) => {
  loadingElement.innerHTML = `<p> Loading... </p>`;
  try {
    const reponse = await fetch(`${API_URL}/users/${id}`, {
      method: "DELETE",
    });
    return await reponse.json();
  } catch (error) {
    console.error(error);
  } finally {
    loadingElement.innerHTML = "";
  }
};


const renderDataTable = (arr = []) => {
  tbodyDataUser.innerHTML = arr
    .map((user, index) => {
      return `
            <tr>
                <td>${index + 1}</td>
                <td style="cursor: pointer" data-bs-toggle="modal" data-bs-target="#userDetail" onclick = "handleDetail(${
                  user.id
                })"}>${user.name}</td>
                <td>${user.gender}</td>
                <td>${user.salary}</td>
                <td
                    <div> 
                        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#editInforUser" onclick='handleEditInforUser(${JSON.stringify(
                          user
                        )})'>Edit</button>
                        <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#successDelete" onclick="valIdDelete(${user.id})">Delete</button>
                    </div>
                </td>
            </tr>
        `;
    })
    .join("");
  //Cần chuyển đổi qua JSON.stringify để truyền vào hàm.
};

const handleDetail = async (id) => {
  try {
    const reponse = await fetch(`${API_URL}/users/${id}`);
    const userData = await reponse.json();
    renderUserDetail(userData);
  } catch (error) {
    console.log(error);
  }
};

const renderUserDetail = (user) => {
  const date = new Date(user.createdAt);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const createAt = `${day}/${month}/${year}`;
  detailUserModal.innerHTML = `<div class="card">
  <div class="card-body">
    <p>Name: <span>${user.name}</span></p>
    <p>Gender: <span>${user.gender}</span></p>
    <p>Address: <span>${user.address}</span></p>
    <p>Description: <span>${user.description}</span></p>
    <p>Duration: <span>${user.duration}</span></p>
    <p>Married: <span>${user.married}</span></p>
    <p>Favorites: <span>${user.favorites && "Null"}</span></p>
    <p>CreatedAt: <span>${createAt}</span></p>
  </div>
</div>`;
};

const handleEditInforUser = (user) => {
  editId.value = user.id;
  editName.value = user.name;
  editAddress.value = user.address;
  editDescription.value = user.description;
  editDuration.value = user.duration;
  editSalary.value = user.salary;
  editMarried.value = user.married;
  editGender.value = user.gender;
};


const handleEditSubmit = () => {
  const id = editId.value;
  const name = editName.value;
  const address = editAddress.value;
  const description = editDescription.value;
  const duration = editDuration.value;
  const salary = editSalary.value;
  const married = editMarried.value;
  const gender = editGender.value;

  const payload = {
    name,
    address,
    description,
    duration,
    salary,
    married,
    gender,
  };
  editUser(id, payload).then((response) => {
    if (response) {
      fetchUserData();
      alert("Sửa thông tin user thành công!");
    }
  });
};

const handleSubmit = () => {
  const name = addName.value;
  const address = addAddress.value;
  const description = addDescription.value;
  const duration = addDuration.value;
  const salary = addSalary.value;
  const married = addMarried.value;
  const gender = addGender.value;

  const payload = {
    name,
    address,
    description,
    duration,
    salary,
    married,
    gender,
  };
  createNewUser(payload).then((response) => {
    if (response) {
      fetchUserData();
      alert("Thêm user mới thành công!");
    }
  });
  reset();
};

const reset = () => {
  addName.value = "";
  addAddress.value = "";
  addDescription.value = "";
  addDuration.value = "";
  addSalary.value = "";
  addMarried.value = "";
  addGender.value = "";
}

let userIdRemove = 0;
const valIdDelete = (id) => {
  userIdRemove = id;
}

const removeUser = () => {
  const id = userIdRemove;
  
  deleteUser(id).then((reponse) => {
    if (reponse) {
      fetchUserData();
      alert("Xóa thành công!");
    }
  });
  
};
