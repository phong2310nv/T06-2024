
const getImage = document.querySelector(".show-img");
const saveBtn = document.querySelector(".save-btn");
const searchBtn = document.querySelector(".search-btn");
const resultTable = document.querySelector(".result-table tbody");
const avtInput = document.getElementById("avatar");
avtInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        getImage.src = URL.createObjectURL(file);
    } else {
        console.log("Không có file nào được chọn");
    }
});
saveBtn.addEventListener("click", () => {
    const ID = document.querySelector("#ID").value|| "undefined";
    const name = document.getElementById("name").value||"undefined";
    const email = document.getElementById("email").value||"undefined";
    const avt = document.getElementById("avatar").value||"undefined";
    const desc = document.getElementById("description").value||"undefined";
    const gender = document.querySelector('input[name="gender"]:checked')?.value||"undefined";
    const duration = document.querySelector("#duration").value||"1";
    //----------------------------------------------------------------//
    const data = {
        ID: ID,
        name: name,
        email: email,
                avt: avt,
                desc: desc,
        gender: gender,
        duration: duration,
                code: generateUniqueCode()
    }
    localStorage.setItem(ID, JSON.stringify(data));
    console.log("Data đã được lưu", data);  
});

function generateUniqueCode() {
     return 'USER_' + Math.random().toString(36).substring(2, 9).toUpperCase();
}
// hiển thị thông tin khi search


searchBtn.addEventListener("click", () => { 
    const avt = document.getElementById("avatar").value||"undefined";
    const valSearch = document.querySelector("#search-input").value;
    const data = JSON.parse(localStorage.getItem(valSearch));
    if (data) {
        resultTable.innerHTML = `
        <tr>
        <td>${data.ID !== undefined ? data.ID : ""}</td>
        <td>${data.name !== undefined ? data.name : ""}</td>
        <td>${data.email !== undefined ? data.email : ""}</td>
        <td>${data.avt ? `<img src="${data.avt}" alt="Avatar" style="width: 50px; height: 50px;">` : ""}</td>
        <td>${data.desc !== undefined ? data.desc : ""}</td>
        <td>${data.gender !== undefined ? data.gender : ""}</td>
        <td>${data.duration !== undefined ? data.duration : ""}</td>
        <td>${data.code !== undefined ? data.code : ""}</td>
            </tr>`;
    } else {
        alert(`Không tìm thấy ID ${valSearch} tương ứng `);
    }





})






